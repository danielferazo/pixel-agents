import { TileType, TILE_SIZE, CharacterState, Direction } from '../types.js'
import type { TileType as TileTypeVal, FurnitureInstance, Character, SpriteData, Seat, FloorColor, ZoneLabel } from '../types.js'
import { getCachedSprite, getOutlineSprite } from '../sprites/spriteCache.js'
import { getCharacterSprites, BUBBLE_PERMISSION_SPRITE, BUBBLE_WAITING_SPRITE, BUBBLE_THINKING_SPRITE, BUBBLE_SUCCESS_SPRITE, BUBBLE_ERROR_SPRITE, BUBBLE_WAITING_HUMAN_SPRITE, CROWN_BADGE_SPRITE } from '../sprites/spriteData.js'
import { getCatSprite } from '../sprites/spriteData-cats.js'
import { getCharacterSprite } from './characters.js'
import { renderMatrixEffect } from './matrixEffect.js'
import { renderParticles } from './particles.js'
import { getColorizedFloorSprite, hasFloorSprites, getWallColor } from '../floorTiles.js'
import { hasWallSprites, getWallInstances, wallColorToHex } from '../wallTiles.js'
import { theme } from '../theme.js'
import { getTimeModifier, getWeatherConfig, createWeatherParticles, updateWeatherParticles, type WeatherParticle } from '../weather.js'
import {
  CHARACTER_SITTING_OFFSET_PX,
  CHARACTER_Z_SORT_OFFSET,
  OUTLINE_Z_SORT_OFFSET,
  SELECTED_OUTLINE_ALPHA,
  HOVERED_OUTLINE_ALPHA,
  GHOST_PREVIEW_SPRITE_ALPHA,
  GHOST_PREVIEW_TINT_ALPHA,
  SELECTION_DASH_PATTERN,
  BUTTON_MIN_RADIUS,
  BUTTON_RADIUS_ZOOM_FACTOR,
  BUTTON_ICON_SIZE_FACTOR,
  BUTTON_LINE_WIDTH_MIN,
  BUTTON_LINE_WIDTH_ZOOM_FACTOR,
  BUBBLE_FADE_DURATION_SEC,
  BUBBLE_SITTING_OFFSET_PX,
  BUBBLE_VERTICAL_OFFSET_PX,
  GHOST_VALID_TINT,
  GHOST_INVALID_TINT,
  VOID_TILE_DASH_PATTERN,
} from '../../constants.js'

// Weather particle state (module-level for persistence across frames)
let weatherParticles: WeatherParticle[] = []
let lastWeatherParticleUpdate = 0

// Initialize weather particles if needed
function ensureWeatherParticles(canvasWidth: number): void {
  const weatherConfig = getWeatherConfig()
  if (weatherConfig.intensity === 0) {
    weatherParticles = []
    return
  }
  if (weatherParticles.length === 0) {
    weatherParticles = createWeatherParticles(200, canvasWidth)
  }
}

// Update weather particles (call each frame)
function updateWeather(deltaTime: number, canvasWidth: number, canvasHeight: number): void {
  const weatherConfig = getWeatherConfig()
  if (weatherConfig.intensity === 0) return
  if (weatherParticles.length === 0) {
    weatherParticles = createWeatherParticles(200, canvasWidth)
  }
  updateWeatherParticles(weatherParticles, canvasWidth, canvasHeight, deltaTime)
}

// Render weather particles (rain/snow)
function renderWeatherParticles(ctx: CanvasRenderingContext2D, _canvasWidth: number, _canvasHeight: number): void {
  const weatherConfig = getWeatherConfig()
  if (weatherConfig.intensity === 0 || weatherParticles.length === 0) return

  for (const p of weatherParticles) {
    ctx.fillStyle = weatherConfig.particleColor
    ctx.globalAlpha = p.alpha
    ctx.fillRect(p.x, p.y, p.size, p.size * 3) // Elongated for rain effect
  }
  ctx.globalAlpha = 1
}

// ── Render functions ────────────────────────────────────────────

export function renderTileGrid(
  ctx: CanvasRenderingContext2D,
  tileMap: TileTypeVal[][],
  offsetX: number,
  offsetY: number,
  zoom: number,
  tileColors?: Array<FloorColor | null>,
  cols?: number,
  floorBrightness?: number,
): void {
  const s = TILE_SIZE * zoom
  const useSpriteFloors = hasFloorSprites()
  const tmRows = tileMap.length
  const tmCols = tmRows > 0 ? tileMap[0].length : 0
  const layoutCols = cols ?? tmCols

  // Floor tiles + wall base color
  for (let r = 0; r < tmRows; r++) {
    for (let c = 0; c < tmCols; c++) {
      const tile = tileMap[r][c]

      // Skip VOID tiles entirely (transparent)
      if (tile === TileType.VOID) continue

      if (tile === TileType.WALL || !useSpriteFloors) {
        // Wall tiles or fallback: solid color
        if (tile === TileType.WALL) {
          const colorIdx = r * layoutCols + c
          const wallColor = tileColors?.[colorIdx]
          ctx.fillStyle = wallColor ? wallColorToHex(wallColor) : getWallColor()
        } else {
          ctx.fillStyle = theme.fallbackFloorColor
        }
        ctx.fillRect(offsetX + c * s, offsetY + r * s, s, s)
        continue
      }

      // Floor tile: get colorized sprite
      const colorIdx = r * layoutCols + c
      const color = tileColors?.[colorIdx] ?? { h: 0, s: 0, b: 0, c: 0 }
      const sprite = getColorizedFloorSprite(tile, color)
      const cached = getCachedSprite(sprite, zoom)
      ctx.drawImage(cached, offsetX + c * s, offsetY + r * s)
    }
  }

  // Apply floor brightness overlay (time-of-day dimming)
  if (floorBrightness !== undefined && floorBrightness < 1) {
    const brightnessOverlay = 1 - floorBrightness
    const tileRows = tmRows
    ctx.fillStyle = `rgba(0, 0, 0, ${brightnessOverlay})`
    ctx.fillRect(offsetX, offsetY, tmCols * s, tileRows * s)
  }
}

interface ZDrawable {
  zY: number
  draw: (ctx: CanvasRenderingContext2D) => void
}

export function renderScene(
  ctx: CanvasRenderingContext2D,
  furniture: FurnitureInstance[],
  characters: Character[],
  offsetX: number,
  offsetY: number,
  zoom: number,
  selectedAgentId: number | null,
  hoveredAgentId: number | null,
): void {
  const drawables: ZDrawable[] = []

  // Furniture
  for (const f of furniture) {
    const cached = getCachedSprite(f.sprite, zoom)
    const fx = offsetX + f.x * zoom
    const fy = offsetY + f.y * zoom
    drawables.push({
      zY: f.zY,
      draw: (c) => {
        c.drawImage(cached, fx, fy)
      },
    })
  }

  // Characters
  for (const ch of characters) {
    let spriteData: SpriteData
    if (ch.isCat) {
      // Cats use their own directional sprites
      let catSprite = getCatSprite(ch)
      // Flip RIGHT sprite horizontally for LEFT direction
      if (ch.dir === Direction.LEFT) {
        catSprite = catSprite.map(row => [...row].reverse())
      }
      spriteData = catSprite
    } else {
      const sprites = getCharacterSprites(ch.palette, ch.hueShift)
      spriteData = getCharacterSprite(ch, sprites)
    }
    const cached = getCachedSprite(spriteData, zoom)
    // Sitting offset: shift character down when seated so they visually sit in the chair
    const sittingOffset = ch.state === CharacterState.TYPE ? CHARACTER_SITTING_OFFSET_PX : 0
    // Anchor at bottom-center of character — round to integer device pixels
    const drawX = Math.round(offsetX + ch.x * zoom - cached.width / 2)
    const drawY = Math.round(offsetY + (ch.y + sittingOffset) * zoom - cached.height)

    // Sort characters by bottom of their tile (not center) so they render
    // in front of same-row furniture (e.g. chairs) but behind furniture
    // at lower rows (e.g. desks, bookshelves that occlude from below).
    const charZY = ch.y + TILE_SIZE / 2 + CHARACTER_Z_SORT_OFFSET

    // Matrix spawn/despawn effect — skip outline, use per-pixel rendering
    if (ch.matrixEffect) {
      const mDrawX = drawX
      const mDrawY = drawY
      const mSpriteData = spriteData
      const mCh = ch
      drawables.push({
        zY: charZY,
        draw: (c) => {
          renderMatrixEffect(c, mCh, mSpriteData, mDrawX, mDrawY, zoom)
        },
      })
      continue
    }

    // White outline: full opacity for selected, 50% for hover (cats are not selectable)
    const isSelected = selectedAgentId !== null && ch.id === selectedAgentId && !ch.isCat
    const isHovered = hoveredAgentId !== null && ch.id === hoveredAgentId && !ch.isCat
    if (isSelected || isHovered) {
      const outlineAlpha = isSelected ? SELECTED_OUTLINE_ALPHA : HOVERED_OUTLINE_ALPHA
      const outlineData = getOutlineSprite(spriteData)
      const outlineCached = getCachedSprite(outlineData, zoom)
      const olDrawX = drawX - zoom  // 1 sprite-pixel offset, scaled
      const olDrawY = drawY - zoom  // outline follows sitting offset via drawY
      drawables.push({
        zY: charZY - OUTLINE_Z_SORT_OFFSET, // sort just before character
        draw: (c) => {
          c.save()
          c.globalAlpha = outlineAlpha
          c.drawImage(outlineCached, olDrawX, olDrawY)
          c.restore()
        },
      })
    }

    // Expanding pulse ring for TYPE-state characters — shows they're actively working
    if (ch.state === CharacterState.TYPE) {
      const ringCx = drawX + cached.width / 2
      const ringCy = drawY + cached.height - 3 * zoom  // near feet
      const ringChId = ch.id
      drawables.push({
        zY: charZY - 0.01,  // just behind character
        draw: (c) => {
          const ringPeriodMs = 2200
          const t = ((Date.now() + Math.abs(ringChId) * 373) % ringPeriodMs) / ringPeriodMs
          const ringRadius = t * 14 * zoom
          const ringAlpha = (1 - t) * 0.38
          c.save()
          c.globalAlpha = ringAlpha
          c.strokeStyle = theme.statusActive
          c.lineWidth = Math.max(1, zoom * 0.5)
          c.beginPath()
          c.arc(ringCx, ringCy, ringRadius, 0, Math.PI * 2)
          c.stroke()
          c.restore()
        },
      })
    }

    // Status glow: active agents pulse green, permission agents glow red, waiting glows amber
    // Mood adds additional tint on top of status
    const moodTint = ch.mood === 'happy' ? '#4CAF50' :
      ch.mood === 'stressed' ? '#FF5722' :
      ch.mood === 'celebrating' ? '#FFEB3B' :
      ch.mood === 'thinking' ? '#2196F3' :
      ch.mood === 'confused' ? '#9C27B0' : null

    let glowColor =
      ch.bubbleType === 'permission' ? theme.statusPermission :
      ch.bubbleType === 'waiting' || ch.bubbleType === 'waiting_on_human' ? theme.statusWaiting :
      ch.state === CharacterState.TYPE ? theme.statusActive :
      null

    // Apply mood tint if no status glow, or blend mood on top
    if (!glowColor && moodTint) {
      glowColor = moodTint
    }

    const glowBlur = 5 * zoom
    drawables.push({
      zY: charZY,
      draw: (c) => {
        if (glowColor) {
          c.save()
          c.shadowColor = glowColor
          c.shadowBlur = glowBlur
          c.drawImage(cached, drawX, drawY)
          c.restore()
        } else {
          c.drawImage(cached, drawX, drawY)
        }
      },
    })
  }

  // Sort by Y (lower = in front = drawn later)
  drawables.sort((a, b) => a.zY - b.zY)

  for (const d of drawables) {
    d.draw(ctx)
  }
}

// ── Collaboration Lines ──────────────────────────────────────────

const COLLABORATION_LINE_COLOR = 'rgba(100, 150, 255, 0.6)'
const COLLABORATION_LINE_WIDTH = 2

export function renderCollaborationLines(
  ctx: CanvasRenderingContext2D,
  characters: Character[],
  offsetX: number,
  offsetY: number,
  zoom: number,
): void {
  // Build a map of parent -> children
  const parentToChildren = new Map<number, number[]>()
  for (const ch of characters) {
    if (ch.isSubagent && ch.parentAgentId !== null) {
      const existing = parentToChildren.get(ch.parentAgentId) || []
      existing.push(ch.id)
      parentToChildren.set(ch.parentAgentId, existing)
    }
  }

  // Draw lines from parent to each sub-agent
  for (const ch of characters) {
    const children = parentToChildren.get(ch.id)
    if (!children || children.length === 0) continue

    // Get parent position (character anchor point)
    const parentX = offsetX + ch.x * zoom
    const parentY = offsetY + (ch.y - 28) * zoom // Above the character's head

    for (const childId of children) {
      const child = characters.find(c => c.id === childId)
      if (!child) continue

      const childX = offsetX + child.x * zoom
      const childY = offsetY + (child.y - 28) * zoom

      // Draw dotted line
      ctx.save()
      ctx.strokeStyle = COLLABORATION_LINE_COLOR
      ctx.lineWidth = COLLABORATION_LINE_WIDTH * zoom
      ctx.setLineDash([4 * zoom, 4 * zoom])
      ctx.beginPath()
      ctx.moveTo(parentX, parentY)
      ctx.lineTo(childX, childY)
      ctx.stroke()
      ctx.restore()
    }
  }

  // Draw crown badges on parent agents
  const crownCached = getCachedSprite(CROWN_BADGE_SPRITE, zoom)
  for (const ch of characters) {
    if (parentToChildren.has(ch.id)) {
      const crownX = Math.round(offsetX + ch.x * zoom - crownCached.width / 2)
      const crownY = Math.round(offsetY + (ch.y - 36) * zoom - crownCached.height)
      ctx.drawImage(crownCached, crownX, crownY)
    }
  }
}

// ── Seat indicators ─────────────────────────────────────────────

export function renderSeatIndicators(
  ctx: CanvasRenderingContext2D,
  seats: Map<string, Seat>,
  characters: Map<number, Character>,
  selectedAgentId: number | null,
  hoveredTile: { col: number; row: number } | null,
  offsetX: number,
  offsetY: number,
  zoom: number,
): void {
  if (selectedAgentId === null || !hoveredTile) return
  const selectedChar = characters.get(selectedAgentId)
  if (!selectedChar) return

  // Only show indicator for the hovered seat tile
  for (const [uid, seat] of seats) {
    if (seat.seatCol !== hoveredTile.col || seat.seatRow !== hoveredTile.row) continue

    const s = TILE_SIZE * zoom
    const x = offsetX + seat.seatCol * s
    const y = offsetY + seat.seatRow * s

    if (selectedChar.seatId === uid) {
      // Selected agent's own seat — blue
      ctx.fillStyle = theme.seatOwn
    } else if (!seat.assigned) {
      // Available seat — green
      ctx.fillStyle = theme.seatAvailable
    } else {
      // Busy (assigned to another agent) — red
      ctx.fillStyle = theme.seatBusy
    }
    ctx.fillRect(x, y, s, s)
    break
  }
}

// ── Edit mode overlays ──────────────────────────────────────────

export function renderGridOverlay(
  ctx: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  zoom: number,
  cols: number,
  rows: number,
  tileMap?: TileTypeVal[][],
): void {
  const s = TILE_SIZE * zoom
  ctx.strokeStyle = theme.gridLine
  ctx.lineWidth = 1
  ctx.beginPath()
  // Vertical lines — offset by 0.5 for crisp 1px lines
  for (let c = 0; c <= cols; c++) {
    const x = offsetX + c * s + 0.5
    ctx.moveTo(x, offsetY)
    ctx.lineTo(x, offsetY + rows * s)
  }
  // Horizontal lines
  for (let r = 0; r <= rows; r++) {
    const y = offsetY + r * s + 0.5
    ctx.moveTo(offsetX, y)
    ctx.lineTo(offsetX + cols * s, y)
  }
  ctx.stroke()

  // Draw faint dashed outlines on VOID tiles
  if (tileMap) {
    ctx.save()
    ctx.strokeStyle = theme.voidTileOutline
    ctx.lineWidth = 1
    ctx.setLineDash(VOID_TILE_DASH_PATTERN)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (tileMap[r]?.[c] === TileType.VOID) {
          ctx.strokeRect(offsetX + c * s + 0.5, offsetY + r * s + 0.5, s - 1, s - 1)
        }
      }
    }
    ctx.restore()
  }
}

/** Draw faint expansion placeholders 1 tile outside grid bounds (ghost border). */
export function renderGhostBorder(
  ctx: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  zoom: number,
  cols: number,
  rows: number,
  ghostHoverCol: number,
  ghostHoverRow: number,
): void {
  const s = TILE_SIZE * zoom
  ctx.save()

  // Collect ghost border tiles: one ring around the grid
  const ghostTiles: Array<{ c: number; r: number }> = []
  // Top and bottom rows
  for (let c = -1; c <= cols; c++) {
    ghostTiles.push({ c, r: -1 })
    ghostTiles.push({ c, r: rows })
  }
  // Left and right columns (excluding corners already added)
  for (let r = 0; r < rows; r++) {
    ghostTiles.push({ c: -1, r })
    ghostTiles.push({ c: cols, r })
  }

  for (const { c, r } of ghostTiles) {
    const x = offsetX + c * s
    const y = offsetY + r * s
    const isHovered = c === ghostHoverCol && r === ghostHoverRow
    if (isHovered) {
      ctx.fillStyle = theme.ghostBorderHoverFill
      ctx.fillRect(x, y, s, s)
    }
    ctx.strokeStyle = isHovered ? theme.ghostBorderHoverStroke : theme.ghostBorderStroke
    ctx.lineWidth = 1
    ctx.setLineDash(VOID_TILE_DASH_PATTERN)
    ctx.strokeRect(x + 0.5, y + 0.5, s - 1, s - 1)
  }

  ctx.restore()
}

export function renderGhostPreview(
  ctx: CanvasRenderingContext2D,
  sprite: SpriteData,
  col: number,
  row: number,
  valid: boolean,
  offsetX: number,
  offsetY: number,
  zoom: number,
): void {
  const cached = getCachedSprite(sprite, zoom)
  const x = offsetX + col * TILE_SIZE * zoom
  const y = offsetY + row * TILE_SIZE * zoom
  ctx.save()
  ctx.globalAlpha = GHOST_PREVIEW_SPRITE_ALPHA
  ctx.drawImage(cached, x, y)
  // Tint overlay
  ctx.globalAlpha = GHOST_PREVIEW_TINT_ALPHA
  ctx.fillStyle = valid ? GHOST_VALID_TINT : GHOST_INVALID_TINT
  ctx.fillRect(x, y, cached.width, cached.height)
  ctx.restore()
}

export function renderSelectionHighlight(
  ctx: CanvasRenderingContext2D,
  col: number,
  row: number,
  w: number,
  h: number,
  offsetX: number,
  offsetY: number,
  zoom: number,
): void {
  const s = TILE_SIZE * zoom
  const x = offsetX + col * s
  const y = offsetY + row * s
  ctx.save()
  ctx.strokeStyle = theme.selectionHighlight
  ctx.lineWidth = 2
  ctx.setLineDash(SELECTION_DASH_PATTERN)
  ctx.strokeRect(x + 1, y + 1, w * s - 2, h * s - 2)
  ctx.restore()
}

export function renderDeleteButton(
  ctx: CanvasRenderingContext2D,
  col: number,
  row: number,
  w: number,
  _h: number,
  offsetX: number,
  offsetY: number,
  zoom: number,
): DeleteButtonBounds {
  const s = TILE_SIZE * zoom
  // Position at top-right corner of selected furniture
  const cx = offsetX + (col + w) * s + 1
  const cy = offsetY + row * s - 1
  const radius = Math.max(BUTTON_MIN_RADIUS, zoom * BUTTON_RADIUS_ZOOM_FACTOR)

  // Circle background
  ctx.save()
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.fillStyle = theme.deleteButton
  ctx.fill()

  // X mark
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = Math.max(BUTTON_LINE_WIDTH_MIN, zoom * BUTTON_LINE_WIDTH_ZOOM_FACTOR)
  ctx.lineCap = 'round'
  const xSize = radius * BUTTON_ICON_SIZE_FACTOR
  ctx.beginPath()
  ctx.moveTo(cx - xSize, cy - xSize)
  ctx.lineTo(cx + xSize, cy + xSize)
  ctx.moveTo(cx + xSize, cy - xSize)
  ctx.lineTo(cx - xSize, cy + xSize)
  ctx.stroke()
  ctx.restore()

  return { cx, cy, radius }
}

export function renderRotateButton(
  ctx: CanvasRenderingContext2D,
  col: number,
  row: number,
  _w: number,
  _h: number,
  offsetX: number,
  offsetY: number,
  zoom: number,
): RotateButtonBounds {
  const s = TILE_SIZE * zoom
  // Position to the left of the delete button (which is at top-right corner)
  const radius = Math.max(BUTTON_MIN_RADIUS, zoom * BUTTON_RADIUS_ZOOM_FACTOR)
  const cx = offsetX + col * s - 1
  const cy = offsetY + row * s - 1

  // Circle background
  ctx.save()
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.fillStyle = theme.rotateButton
  ctx.fill()

  // Circular arrow icon
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = Math.max(BUTTON_LINE_WIDTH_MIN, zoom * BUTTON_LINE_WIDTH_ZOOM_FACTOR)
  ctx.lineCap = 'round'
  const arcR = radius * BUTTON_ICON_SIZE_FACTOR
  ctx.beginPath()
  // Draw a 270-degree arc
  ctx.arc(cx, cy, arcR, -Math.PI * 0.8, Math.PI * 0.7)
  ctx.stroke()
  // Draw arrowhead at the end of the arc
  const endAngle = Math.PI * 0.7
  const endX = cx + arcR * Math.cos(endAngle)
  const endY = cy + arcR * Math.sin(endAngle)
  const arrowSize = radius * 0.35
  ctx.beginPath()
  ctx.moveTo(endX + arrowSize * 0.6, endY - arrowSize * 0.3)
  ctx.lineTo(endX, endY)
  ctx.lineTo(endX + arrowSize * 0.7, endY + arrowSize * 0.5)
  ctx.stroke()
  ctx.restore()

  return { cx, cy, radius }
}

// ── Speech bubbles ──────────────────────────────────────────────

export function renderBubbles(
  ctx: CanvasRenderingContext2D,
  characters: Character[],
  offsetX: number,
  offsetY: number,
  zoom: number,
): void {
  for (const ch of characters) {
    if (!ch.bubbleType) continue

    let sprite: SpriteData
    switch (ch.bubbleType) {
      case 'permission':
        sprite = BUBBLE_PERMISSION_SPRITE
        break
      case 'waiting':
        sprite = BUBBLE_WAITING_SPRITE
        break
      case 'thinking':
        sprite = BUBBLE_THINKING_SPRITE
        break
      case 'success':
        sprite = BUBBLE_SUCCESS_SPRITE
        break
      case 'error':
        sprite = BUBBLE_ERROR_SPRITE
        break
      case 'waiting_on_human':
        sprite = BUBBLE_WAITING_HUMAN_SPRITE
        break
    }

    // Compute opacity: permission = full, waiting = fade in last 0.5s
    let alpha = 1.0
    if ((ch.bubbleType === 'waiting' || ch.bubbleType === 'success' || ch.bubbleType === 'error') && ch.bubbleTimer < BUBBLE_FADE_DURATION_SEC) {
      alpha = ch.bubbleTimer / BUBBLE_FADE_DURATION_SEC
    }

    const cached = getCachedSprite(sprite, zoom)
    // Position: centered above the character's head
    // Character is anchored bottom-center at (ch.x, ch.y), sprite is 16x24
    // Place bubble above head with a small gap; follow sitting offset
    const sittingOff = ch.state === CharacterState.TYPE ? BUBBLE_SITTING_OFFSET_PX : 0
    const bubbleX = Math.round(offsetX + ch.x * zoom - cached.width / 2)
    const bubbleY = Math.round(offsetY + (ch.y + sittingOff - BUBBLE_VERTICAL_OFFSET_PX) * zoom - cached.height - 1 * zoom)

    ctx.save()
    if (alpha < 1.0) ctx.globalAlpha = alpha
    ctx.drawImage(cached, bubbleX, bubbleY)
    ctx.restore()
  }
}

export interface ButtonBounds {
  /** Center X in device pixels */
  cx: number
  /** Center Y in device pixels */
  cy: number
  /** Radius in device pixels */
  radius: number
}

export type DeleteButtonBounds = ButtonBounds
export type RotateButtonBounds = ButtonBounds

export interface EditorRenderState {
  showGrid: boolean
  ghostSprite: SpriteData | null
  ghostCol: number
  ghostRow: number
  ghostValid: boolean
  selectedCol: number
  selectedRow: number
  selectedW: number
  selectedH: number
  hasSelection: boolean
  isRotatable: boolean
  /** Updated each frame by renderDeleteButton */
  deleteButtonBounds: DeleteButtonBounds | null
  /** Updated each frame by renderRotateButton */
  rotateButtonBounds: RotateButtonBounds | null
  /** Whether to show ghost border (expansion tiles outside grid) */
  showGhostBorder: boolean
  /** Hovered ghost border tile col (-1 to cols) */
  ghostBorderHoverCol: number
  /** Hovered ghost border tile row (-1 to rows) */
  ghostBorderHoverRow: number
}

export interface SelectionRenderState {
  selectedAgentId: number | null
  hoveredAgentId: number | null
  hoveredTile: { col: number; row: number } | null
  seats: Map<string, Seat>
  characters: Map<number, Character>
}

/** Render faint zone name labels on the floor — orientation markers for the office. */
function renderZoneLabels(
  ctx: CanvasRenderingContext2D,
  zones: ZoneLabel[],
  offsetX: number,
  offsetY: number,
  zoom: number,
): void {
  if (zones.length === 0) return
  ctx.save()
  // Pixel art aesthetic: small monospace caps, very faint
  const fontSize = Math.max(6, Math.round(zoom * 5))
  ctx.font = `bold ${fontSize}px monospace`
  ctx.textBaseline = 'top'
  ctx.letterSpacing = `${Math.max(1, zoom)}px`
  for (const zone of zones) {
    const x = offsetX + zone.col * TILE_SIZE * zoom + 3
    const y = offsetY + zone.row * TILE_SIZE * zoom + 3
    ctx.fillStyle = zone.color ?? 'rgba(255,255,255,0.12)'
    ctx.fillText(zone.label, x, y)
  }
  ctx.restore()
}

export function renderFrame(
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  tileMap: TileTypeVal[][],
  furniture: FurnitureInstance[],
  characters: Character[],
  zoom: number,
  panX: number,
  panY: number,
  selection?: SelectionRenderState,
  editor?: EditorRenderState,
  tileColors?: Array<FloorColor | null>,
  layoutCols?: number,
  layoutRows?: number,
  zones?: ZoneLabel[],
): { offsetX: number; offsetY: number } {
  // Dark void background — office floats in space
  ctx.fillStyle = theme.backgroundColor
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)

  // Time-of-day ambient tint (dawn/dusk/night color overlay)
  const timeModifier = getTimeModifier()
  if (timeModifier.backgroundTint !== 'rgba(255, 255, 255, 0.05)') {
    ctx.fillStyle = timeModifier.backgroundTint
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
  }

  // Initialize weather particles if needed
  ensureWeatherParticles(canvasWidth)

  // Use layout dimensions (fallback to tileMap size)
  const cols = layoutCols ?? (tileMap.length > 0 ? tileMap[0].length : 0)
  const rows = layoutRows ?? tileMap.length

  // Center map in viewport + pan offset (integer device pixels)
  const mapW = cols * TILE_SIZE * zoom
  const mapH = rows * TILE_SIZE * zoom
  const offsetX = Math.floor((canvasWidth - mapW) / 2) + Math.round(panX)
  const offsetY = Math.floor((canvasHeight - mapH) / 2) + Math.round(panY)

  // Ambient particles floating in the void around the office
  renderParticles(ctx, canvasWidth, canvasHeight, offsetX, offsetY, mapW, mapH)

  // Draw tiles (floor + wall base color)
  // Draw tiles (floor + wall base color) with time-of-day brightness
  renderTileGrid(ctx, tileMap, offsetX, offsetY, zoom, tileColors, layoutCols, timeModifier.floorBrightness)

  // Zone labels — faint orientation markers on the floor
  if (zones && zones.length > 0) {
    renderZoneLabels(ctx, zones, offsetX, offsetY, zoom)
  }

  // Seat indicators (below furniture/characters, on top of floor)
  if (selection) {
    renderSeatIndicators(ctx, selection.seats, selection.characters, selection.selectedAgentId, selection.hoveredTile, offsetX, offsetY, zoom)
  }

  // Build wall instances for z-sorting with furniture and characters
  const wallInstances = hasWallSprites()
    ? getWallInstances(tileMap, tileColors, layoutCols)
    : []
  const allFurniture = wallInstances.length > 0
    ? [...wallInstances, ...furniture]
    : furniture

  // Draw walls + furniture + characters (z-sorted)
  const selectedId = selection?.selectedAgentId ?? null
  const hoveredId = selection?.hoveredAgentId ?? null
  renderScene(ctx, allFurniture, characters, offsetX, offsetY, zoom, selectedId, hoveredId)

  // Collaboration lines between parent and sub-agents (on top of characters, below bubbles)
  renderCollaborationLines(ctx, characters, offsetX, offsetY, zoom)

  // Speech bubbles (always on top of characters)
  renderBubbles(ctx, characters, offsetX, offsetY, zoom)

  // Editor overlays
  if (editor) {
    if (editor.showGrid) {
      renderGridOverlay(ctx, offsetX, offsetY, zoom, cols, rows, tileMap)
    }
    if (editor.showGhostBorder) {
      renderGhostBorder(ctx, offsetX, offsetY, zoom, cols, rows, editor.ghostBorderHoverCol, editor.ghostBorderHoverRow)
    }
    if (editor.ghostSprite && editor.ghostCol >= 0) {
      renderGhostPreview(ctx, editor.ghostSprite, editor.ghostCol, editor.ghostRow, editor.ghostValid, offsetX, offsetY, zoom)
    }
    if (editor.hasSelection) {
      renderSelectionHighlight(ctx, editor.selectedCol, editor.selectedRow, editor.selectedW, editor.selectedH, offsetX, offsetY, zoom)
      editor.deleteButtonBounds = renderDeleteButton(ctx, editor.selectedCol, editor.selectedRow, editor.selectedW, editor.selectedH, offsetX, offsetY, zoom)
      if (editor.isRotatable) {
        editor.rotateButtonBounds = renderRotateButton(ctx, editor.selectedCol, editor.selectedRow, editor.selectedW, editor.selectedH, offsetX, offsetY, zoom)
      } else {
        editor.rotateButtonBounds = null
      }
    } else {
      editor.deleteButtonBounds = null
      editor.rotateButtonBounds = null
    }
  }

  // Ambient vignette — subtly darkens corners, pulses gently to feel alive
  const vignetteInner = Math.min(canvasWidth, canvasHeight) * 0.28
  const vignetteOuter = Math.max(canvasWidth, canvasHeight) * 0.88
  const vignette = ctx.createRadialGradient(
    canvasWidth / 2, canvasHeight / 2, vignetteInner,
    canvasWidth / 2, canvasHeight / 2, vignetteOuter,
  )
  const pulse = theme.vignetteBase + theme.vignettePulse * Math.sin(Date.now() / 1800)
  vignette.addColorStop(0, 'rgba(0,0,0,0)')
  vignette.addColorStop(1, `rgba(0,0,0,${pulse.toFixed(3)})`)
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)

  // Update and render weather particles (rain/snow/storm)
  const now = Date.now()
  if (now - lastWeatherParticleUpdate > 16) { // ~60fps cap
    const dt = Math.min((now - lastWeatherParticleUpdate) / 1000, 0.1)
    updateWeather(dt, canvasWidth, canvasHeight)
    lastWeatherParticleUpdate = now
  }
  renderWeatherParticles(ctx, canvasWidth, canvasHeight)

  return { offsetX, offsetY }
}
