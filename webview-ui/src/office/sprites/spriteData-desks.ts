import type { SpriteData } from '../types.js'

const _ = '' // transparent

// ── Color aliases ────────────────────────────────────────────────
const DS = '#2A2430' // dark desk surface / dark slate
const MW = '#5C3E1E' // medium wood
const LW = '#7A5530' // light wood
const WH = '#9A7040' // wood highlight
const WE = '#3A2410' // wood edge / frame dark
const MC = '#9090A0' // metal chrome
const MD = '#5A5A6A' // metal dark
const WS = '#E8E8EC' // white surface
const OW = '#D0CEC8' // off-white
const SG = '#4488EE' // screen glow
const AB = '#2244AA' // accent blue
const PD = '#F0EEE8' // paper / document
const WB = '#6B4830' // warm medium-brown (coffee desk)
const CB = '#8A6040' // counter-brown lighter
const CL = '#B08060' // counter lightest highlight

// ── Sprites ──────────────────────────────────────────────────────

/**
 * WORK_DESK — 2×1 (32×16px)
 * Main work desk, dark wood surface with monitor indent on left.
 */
export const WORK_DESK_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top border edge — dark frame line
  rows.push([WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE])
  // Row 1: monitor indent area (cols 1-13) dark, right side surface
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 2: monitor recess deepens
  rows.push([WE, DS, AB, AB, AB, AB, AB, AB, AB, AB, AB, AB, AB, DS, WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 3: screen glow center
  rows.push([WE, DS, AB, SG, SG, SG, SG, SG, SG, SG, SG, AB, AB, DS, WE, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, WE])
  // Row 4: screen glow lower
  rows.push([WE, DS, AB, SG, SG, SG, SG, SG, SG, SG, SG, AB, AB, DS, WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 5: monitor base / keyboard area
  rows.push([WE, DS, DS, AB, AB, AB, AB, AB, AB, AB, AB, DS, DS, DS, WE, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, WE])
  // Row 6: surface divider / desk body top
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 7: desk body main surface
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 8: desk body
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 9: desk body highlight stripe
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WE])
  // Row 10: desk body
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 11: desk body
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 12: front-face lip top
  rows.push([WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE])
  // Row 13: front face
  rows.push([WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 14: front face lower
  rows.push([WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 15: bottom shadow
  rows.push([WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE])
  return rows
})()

/**
 * WORK_DESK_B — 2×1 (32×16px)
 * Work desk variant B — brighter medium wood, L-shaped corner hint on right.
 */
export const WORK_DESK_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top edge
  rows.push(new Array(32).fill(WE) as string[])
  // Row 1: light wood surface top, right corner notch
  rows.push([WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, LW, LW, WE, WE])
  // Row 2
  rows.push([WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, OW, OW, WE, WE])
  // Row 3: surface highlight stripe
  rows.push([WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, OW, OW, WE, WE])
  // Row 4
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, LW, LW, WE, WE])
  // Row 5: center divider line
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, LW, LW, WE, WE])
  // Row 6: secondary surface
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, LW, LW, WE, WE])
  // Row 7
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, LW, LW, WE, WE])
  // Row 8
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, LW, LW, WE, WE])
  // Row 9
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, LW, LW, WE, WE])
  // Row 10
  rows.push([WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE, WE])
  // Row 11: front face
  rows.push(new Array(32).fill(WE) as string[])
  // Row 12: front face
  rows.push([WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE, WE])
  // Row 13
  rows.push([WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE, WE])
  // Row 14
  rows.push([WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE, WE])
  // Row 15: bottom edge
  rows.push(new Array(32).fill(WE) as string[])
  return rows
})()

/**
 * WORK_DESK_C — 2×2 (32×32px)
 * Full corner desk — two-tone dark left / lighter right, keyboard tray notch at bottom center.
 */
export const WORK_DESK_C_SPRITE: SpriteData = (() => {
  const rows: string[][] = []

  // ── Top 16 rows (tile row 0) ──────────────────────────────────
  // Row 0: top border
  rows.push(new Array(32).fill(WE) as string[])
  // Row 1: top surface edge
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 2: left=dark DS, right=lighter LW
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE])
  // Row 3: left dark surface, right has wood grain stripe
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 4
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, LW, WE])
  // Row 5: monitor glow on left (desk top area)
  rows.push([WE, DS, AB, AB, AB, AB, AB, AB, AB, AB, AB, AB, AB, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 6: screen glow
  rows.push([WE, DS, AB, SG, SG, SG, SG, SG, SG, SG, SG, AB, AB, DS, DS, DS, WE, LW, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, LW, WE])
  // Row 7
  rows.push([WE, DS, AB, SG, SG, SG, SG, SG, SG, SG, SG, AB, AB, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 8: screen bottom
  rows.push([WE, DS, DS, AB, AB, AB, AB, AB, AB, AB, DS, DS, DS, DS, DS, DS, WE, LW, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, LW, WE])
  // Row 9: center horizontal separator
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 10: papers zone
  rows.push([WE, DS, DS, PD, PD, PD, PD, PD, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 11
  rows.push([WE, DS, DS, PD, PD, PD, PD, PD, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 12
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, LW, WE])
  // Row 13
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 14: bottom of top tile
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 15: divider between tile rows
  rows.push(new Array(32).fill(WE) as string[])

  // ── Bottom 16 rows (tile row 1) ──────────────────────────────
  // Row 16: body top
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 17
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 18
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, LW, WE])
  // Row 19
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 20: keyboard tray notch begins — cut out center bottom
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 21: tray notch indented at center (cols 12-19 recessed)
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, MD, MD, MD, DS, WE, LW, MW, MD, MD, MD, MD, MD, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 22: tray recess
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, MD, MC, MD, DS, WE, LW, MW, MD, MC, MC, MD, MD, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 23: bottom of tray
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, MD, MD, MD, DS, WE, LW, MW, MD, MD, MD, MD, MD, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 24: body bottom surface
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 25
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 26: front face top
  rows.push(new Array(32).fill(WE) as string[])
  // Row 27: front face
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 28: front face
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 29: front face
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 30
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 31: bottom edge
  rows.push(new Array(32).fill(WE) as string[])

  return rows
})()

/**
 * COFFEE_DESK — 2×1 (32×16px)
 * Coffee / bar counter-style desk with curved front edge, warm medium-brown tones.
 */
export const COFFEE_DESK_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top edge
  rows.push(new Array(32).fill(WE) as string[])
  // Row 1: counter top surface
  rows.push([WE, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, WE])
  // Row 2: highlight stripe
  rows.push([WE, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, CL, WE])
  // Row 3: surface
  rows.push([WE, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, WE])
  // Row 4: surface
  rows.push([WE, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WE])
  // Row 5: surface
  rows.push([WE, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, WE])
  // Row 6: inlay stripe
  rows.push([WE, CB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, CB, WE])
  // Row 7: surface
  rows.push([WE, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WE])
  // Row 8: slight curve hint — front lip darker on edges
  rows.push([WE, WB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, WB, WE])
  // Row 9: front face
  rows.push([WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE])
  // Row 10: front face body
  rows.push([WE, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WE])
  // Row 11
  rows.push([WE, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, WE])
  // Row 12
  rows.push([WE, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WE])
  // Row 13
  rows.push([WE, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, WE])
  // Row 14
  rows.push([WE, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WB, WE])
  // Row 15: bottom edge
  rows.push(new Array(32).fill(WE) as string[])
  return rows
})()

/**
 * SMALL_DESK_A — 1×1 (16×16px)
 * Compact single-tile desk — dark border, light surface.
 */
export const SMALL_DESK_A_SPRITE: SpriteData = [
  [WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE],
  [WE, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WE],
  [WE, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, OW, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, OW, WE],
  [WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE],
  [WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE],
  [WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE],
  [WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE],
]

/**
 * SMALL_DESK_B — 1×1 (16×16px)
 * Small desk with drawer outline on bottom half.
 */
export const SMALL_DESK_B_SPRITE: SpriteData = [
  [WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE],
  [WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE],
  [WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE],
  [WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE],
  [WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE],
  [WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE],
  [WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE],
  [WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE],
  [WE, LW, MW, MW, MW, MW, MD, MD, MW, MW, MW, MW, MW, MW, LW, WE],
  [WE, LW, MW, MW, MW, MW, MC, MC, MW, MW, MW, MW, MW, MW, LW, WE],
  [WE, LW, MW, MW, MW, MW, MD, MD, MW, MW, MW, MW, MW, MW, LW, WE],
  [WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE],
  [WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE],
  [WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE],
  [WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE],
  [WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE],
]

/**
 * SMALL_DESK_C — 2×1 (32×16px)
 * Small wide desk — clean surface with subtle center divider line.
 */
export const SMALL_DESK_C_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top edge
  rows.push(new Array(32).fill(WE) as string[])
  // Rows 1-4: surface top
  rows.push([WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  rows.push([WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE])
  rows.push([WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE])
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  // Row 5: center divider
  rows.push([WE, LW, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, LW, WE])
  // Rows 6-9: lower surface
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  rows.push([WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE])
  rows.push([WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE])
  rows.push([WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 10: front lip
  rows.push(new Array(32).fill(WE) as string[])
  // Rows 11-14: front face
  rows.push([WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  rows.push([WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  rows.push([WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  rows.push([WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 15: bottom edge
  rows.push(new Array(32).fill(WE) as string[])
  return rows
})()

/**
 * MEETING_DESK_A — 4×2 (64×32px)
 * Large oval conference table — dark border edge, lighter surface, center shine reflection.
 */
export const MEETING_DESK_A_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const W = 64

  // Helper to build a row with oval shape
  // lpad/rpad = number of transparent pixels on each side
  const ovalRow = (lpad: number, rpad: number, edgeW: number, fill: string, edge: string): string[] => {
    const row: string[] = new Array(W).fill(_) as string[]
    const start = lpad
    const end = W - rpad - 1
    for (let i = start; i <= end; i++) {
      if (i < start + edgeW || i > end - edgeW) {
        row[i] = edge
      } else {
        row[i] = fill
      }
    }
    return row
  }

  // Surface fill variants
  const surf = LW
  const shine = WH
  const edge = WE
  const darkEdge = MW

  // ── Top 16 rows (tile row 0) ──────────────────────────────────
  // Row 0: transparent (above oval)
  rows.push(new Array(W).fill(_) as string[])
  // Row 1: oval begins — narrow top arc
  rows.push(ovalRow(8, 8, 2, darkEdge, edge))
  // Row 2: expand oval
  rows.push(ovalRow(4, 4, 2, surf, edge))
  // Row 3
  rows.push(ovalRow(2, 2, 2, surf, edge))
  // Row 4: shine stripe
  rows.push(ovalRow(2, 2, 2, shine, edge))
  // Row 5
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 6
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 7: center shine
  rows.push(ovalRow(1, 1, 2, shine, edge))
  // Row 8
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 9
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 10: center horizontal band (lighter)
  rows.push(ovalRow(1, 1, 2, shine, edge))
  // Row 11
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 12
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 13
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 14: lower surface
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 15: lower middle
  rows.push(ovalRow(1, 1, 2, surf, edge))

  // ── Bottom 16 rows (tile row 1) ──────────────────────────────
  // Row 16
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 17
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 18: lower shine
  rows.push(ovalRow(1, 1, 2, shine, edge))
  // Row 19
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 20
  rows.push(ovalRow(1, 1, 2, surf, edge))
  // Row 21
  rows.push(ovalRow(2, 2, 2, surf, edge))
  // Row 22: bottom arc starts tightening
  rows.push(ovalRow(2, 2, 2, surf, edge))
  // Row 23
  rows.push(ovalRow(3, 3, 2, surf, edge))
  // Row 24: front face top
  rows.push(ovalRow(3, 3, 2, darkEdge, edge))
  // Row 25: front face
  rows.push(ovalRow(4, 4, 2, darkEdge, edge))
  // Row 26
  rows.push(ovalRow(5, 5, 2, darkEdge, edge))
  // Row 27: front face body
  rows.push(ovalRow(6, 6, 2, darkEdge, edge))
  // Row 28
  rows.push(ovalRow(7, 7, 2, darkEdge, edge))
  // Row 29
  rows.push(ovalRow(8, 8, 2, darkEdge, edge))
  // Row 30: bottom of front face
  rows.push(ovalRow(10, 10, 2, edge, edge))
  // Row 31: transparent
  rows.push(new Array(W).fill(_) as string[])

  return rows
})()

/**
 * MEETING_DESK_B — 3×2 (48×32px)
 * Medium rectangular meeting table — wood grain center line, lighter surface.
 */
export const MEETING_DESK_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const W = 48

  // ── Top 16 rows ──────────────────────────────────────────────
  // Row 0: top border
  rows.push(new Array(W).fill(WE) as string[])
  // Row 1: surface top
  rows.push([WE, ...new Array(W - 2).fill(LW), WE])
  // Row 2: highlight
  rows.push([WE, LW, ...new Array(W - 4).fill(WH), LW, WE])
  // Row 3: surface
  rows.push([WE, LW, ...new Array(W - 4).fill(MW), LW, WE])
  // Row 4: grain stripe
  rows.push([WE, LW, WH, ...new Array(W - 6).fill(MW), WH, LW, WE])
  // Row 5: surface
  rows.push([WE, LW, ...new Array(W - 4).fill(MW), LW, WE])
  // Row 6: center grain line
  rows.push([WE, LW, ...new Array(W - 4).fill(WH), LW, WE])
  // Row 7: surface
  rows.push([WE, LW, ...new Array(W - 4).fill(MW), LW, WE])
  // Row 8: grain stripe
  rows.push([WE, LW, WH, ...new Array(W - 6).fill(MW), WH, LW, WE])
  // Row 9: surface
  rows.push([WE, LW, ...new Array(W - 4).fill(MW), LW, WE])
  // Row 10: center line divider
  rows.push([WE, LW, ...new Array(W - 4).fill(LW), LW, WE])
  // Row 11
  rows.push([WE, LW, ...new Array(W - 4).fill(MW), LW, WE])
  // Row 12
  rows.push([WE, LW, WH, ...new Array(W - 6).fill(MW), WH, LW, WE])
  // Row 13
  rows.push([WE, LW, ...new Array(W - 4).fill(MW), LW, WE])
  // Row 14: lower surface
  rows.push([WE, LW, ...new Array(W - 4).fill(WH), LW, WE])
  // Row 15: bottom surface
  rows.push([WE, ...new Array(W - 2).fill(LW), WE])

  // ── Bottom 16 rows ───────────────────────────────────────────
  // Row 16: front face top
  rows.push(new Array(W).fill(WE) as string[])
  // Row 17-20: front face body
  for (let i = 0; i < 4; i++) {
    rows.push([WE, ...new Array(W - 2).fill(MW), WE])
  }
  // Row 21-22: accent stripe
  for (let i = 0; i < 2; i++) {
    rows.push([WE, ...new Array(W - 2).fill(LW), WE])
  }
  // Row 23-26: front face lower
  for (let i = 0; i < 4; i++) {
    rows.push([WE, ...new Array(W - 2).fill(MW), WE])
  }
  // Row 27: lower stripe
  rows.push([WE, ...new Array(W - 2).fill(LW), WE])
  // Row 28-30
  for (let i = 0; i < 3; i++) {
    rows.push([WE, ...new Array(W - 2).fill(MW), WE])
  }
  // Row 31: bottom edge
  rows.push(new Array(W).fill(WE) as string[])

  return rows
})()

/**
 * CS_DESK_A — 3×1 (48×16px)
 * Customer service L-desk with raised partition on left third.
 * Partition: 6px-tall columns on left section.
 */
export const CS_DESK_A_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const W = 48

  // Row 0: top border — partition top bar on left 16px
  const r0: string[] = new Array(W).fill(WE) as string[]
  rows.push(r0)

  // Row 1: partition top — cols 0-15 raised, rest is surface
  rows.push([
    WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE,
    WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW,
    LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE,
  ])
  // Row 2: partition face
  rows.push([
    WE, DS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, DS, WE,
    WE, LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW,
    LW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE,
  ])
  // Row 3: partition face
  rows.push([
    WE, DS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, DS, WE,
    WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW,
    LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE,
  ])
  // Row 4: partition top edge — columns drawn on left third
  rows.push([
    WE, DS, DS, DS, DS, WS, DS, DS, DS, DS, WS, DS, DS, DS, DS, WE,
    WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW,
    LW, MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, LW, WE,
  ])
  // Row 5: partition lower face, cols indicate support pillars
  rows.push([
    WE, DS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, DS, WE,
    WE, LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW,
    LW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, LW, WE,
  ])
  // Row 6: partition base / desk surface
  rows.push([
    WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE,
    WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW,
    LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE,
  ])
  // Row 7: desk body
  rows.push([
    WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE,
    WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW,
    MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE,
  ])
  // Row 8: desk body
  rows.push([
    WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE,
    WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW,
    MW, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, MW, WE,
  ])
  // Row 9: desk front face separator
  rows.push(new Array(W).fill(WE) as string[])
  // Row 10: front face
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 11: front face
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 12
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 13
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WE, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, MW, WE])
  // Row 14
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WE, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, LW, WE])
  // Row 15: bottom
  rows.push(new Array(W).fill(WE) as string[])
  return rows
})()

/**
 * CS_DESK_B — 3×2 (48×32px)
 * Full reception counter — counter surface on top tile, base on bottom tile.
 */
export const CS_DESK_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const W = 48

  // ── Top 16 rows: counter surface ─────────────────────────────
  rows.push(new Array(W).fill(WE) as string[])
  // Surface top
  rows.push([WE, ...new Array(W - 2).fill(WS), WE])
  rows.push([WE, WS, ...new Array(W - 4).fill(OW), WS, WE])
  rows.push([WE, WS, ...new Array(W - 4).fill(OW), WS, WE])
  rows.push([WE, WS, OW, ...new Array(W - 6).fill(WS), OW, WS, WE])
  rows.push([WE, WS, ...new Array(W - 4).fill(OW), WS, WE])
  // Partition / divider line
  rows.push([WE, WE, ...new Array(W - 4).fill(MD), WE, WE])
  rows.push([WE, DS, ...new Array(W - 4).fill(DS), DS, WE])
  rows.push([WE, DS, WS, ...new Array(W - 6).fill(OW), WS, DS, WE])
  rows.push([WE, DS, ...new Array(W - 4).fill(OW), DS, WE])
  rows.push([WE, DS, ...new Array(W - 4).fill(WS), DS, WE])
  rows.push([WE, DS, WS, ...new Array(W - 6).fill(OW), WS, DS, WE])
  rows.push([WE, DS, ...new Array(W - 4).fill(OW), DS, WE])
  rows.push([WE, DS, ...new Array(W - 4).fill(DS), DS, WE])
  rows.push([WE, ...new Array(W - 2).fill(WE), WE])
  // bottom of top section
  rows.push(new Array(W).fill(WE) as string[])

  // ── Bottom 16 rows: base / body ──────────────────────────────
  rows.push(new Array(W).fill(WE) as string[])
  // Counter base
  for (let i = 0; i < 6; i++) {
    rows.push([WE, DS, ...new Array(W - 4).fill(DS), DS, WE])
  }
  // Body middle accent
  rows.push([WE, MD, ...new Array(W - 4).fill(MC), MD, WE])
  rows.push([WE, DS, ...new Array(W - 4).fill(DS), DS, WE])
  // Body lower
  for (let i = 0; i < 3; i++) {
    rows.push([WE, DS, ...new Array(W - 4).fill(DS), DS, WE])
  }
  // Kick plate top
  rows.push([WE, WE, ...new Array(W - 4).fill(WE), WE, WE])
  // Kick plate
  rows.push([WE, MD, ...new Array(W - 4).fill(MC), MD, WE])
  rows.push([WE, MD, ...new Array(W - 4).fill(MC), MD, WE])
  // Bottom edge
  rows.push(new Array(W).fill(WE) as string[])

  return rows
})()

/**
 * CS_DESK_C — 2×2 (32×32px)
 * Corner customer service desk.
 */
export const CS_DESK_C_SPRITE: SpriteData = (() => {
  const rows: string[][] = []

  // ── Top 16 rows ──────────────────────────────────────────────
  // Row 0: top border
  rows.push(new Array(32).fill(WE) as string[])
  // Row 1: surface top — left half dark (inside corner), right half white surface
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WE])
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  // Row 4: screen recess on left
  rows.push([WE, DS, AB, AB, AB, AB, AB, AB, AB, AB, AB, AB, AB, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  rows.push([WE, DS, AB, SG, SG, SG, SG, SG, SG, SG, AB, AB, AB, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  rows.push([WE, DS, AB, SG, SG, SG, SG, SG, SG, SG, AB, AB, AB, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  rows.push([WE, DS, DS, AB, AB, AB, AB, AB, AB, DS, DS, DS, DS, DS, DS, DS, WE, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WE])
  // Row 8: inner surface
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  // Row 10: horizontal divider
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE, WE])
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WE])
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, OW, WS, WE])
  rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WE])
  rows.push(new Array(32).fill(WE) as string[])

  // ── Bottom 16 rows ───────────────────────────────────────────
  // Row 16: body top
  rows.push(new Array(32).fill(WE) as string[])
  // Row 17-20: body
  for (let i = 0; i < 4; i++) {
    rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WE])
  }
  // Row 21: accent
  rows.push([WE, MD, MD, MD, MD, MD, MD, MD, MD, MD, MD, MD, MD, MD, MD, MD, WE, MC, MC, MC, MC, MC, MC, MC, MC, MC, MC, MC, MC, MC, MC, WE])
  // Row 22-25: body lower
  for (let i = 0; i < 4; i++) {
    rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WE])
  }
  // Row 26: divider
  rows.push(new Array(32).fill(WE) as string[])
  // Row 27-30: front face
  for (let i = 0; i < 4; i++) {
    rows.push([WE, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, DS, WE, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WS, WE])
  }
  // Row 31: bottom edge
  rows.push(new Array(32).fill(WE) as string[])

  return rows
})()
