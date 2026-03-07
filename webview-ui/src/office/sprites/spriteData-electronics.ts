import type { SpriteData } from '../types.js'
const _ = ''

// ── Studio Noir Color Palette ─────────────────────────────────────
// Monitor frame: #1C1A22 dark, #2A2832 slightly lighter
// Monitor screen off: #0A0A14 very dark
// Monitor screen on: #1A2A60 deep blue glow
// Screen glow bright: #4488EE, #88BBFF
// Screen content lines: #2255AA, #3366CC
// Laptop body: #2A2A3A, lid: #1E1E2E
// PC tower dark: #1E1E2A, highlight: #2A2A38
// LED green: #44DD44, blue: #4488FF, red: #DD4444

// ── LARGE_SCREEN_A_SPRITE: 32×32 (2×2 tiles) ────────────────────
// Big widescreen monitor/TV on stand — top-down perspective.
// Thin dark bezel border, large screen area with blue glow,
// stand base visible at bottom, slight 3D depth illusion.
export const LARGE_SCREEN_A_SPRITE: SpriteData = (() => {
  const F = '#1C1A22'  // outer frame / bezel
  const B = '#2A2832'  // inner bezel ring
  const S = '#0A0A14'  // screen dark
  const G = '#1A2A60'  // screen glow
  const L = '#2255AA'  // screen mid-tone
  const H = '#4488EE'  // screen highlight row
  const W = '#88BBFF'  // screen bright glint
  const T = '#16141E'  // stand pole
  const P = '#0E0C14'  // stand foot dark

  const rows: string[][] = []

  // Row 0: transparent top
  rows.push(new Array(32).fill(_))
  // Row 1: top bezel edge
  rows.push([_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _])
  // Row 2: outer bezel
  rows.push([_, F, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, F, _])
  // Row 3: screen top shadow
  rows.push([_, F, B, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, B, F, _])
  // Rows 4-6: screen upper glow
  for (let r = 0; r < 3; r++) {
    rows.push([_, F, B, S, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, S, B, F, _])
  }
  // Row 7: highlight stripe
  rows.push([_, F, B, S, G, H, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, H, G, S, B, F, _])
  // Rows 8-12: screen main glow
  for (let r = 0; r < 5; r++) {
    rows.push([_, F, B, S, G, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, G, S, B, F, _])
  }
  // Row 13: mid content line
  rows.push([_, F, B, S, G, L, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, L, S, B, F, _])
  // Rows 14-18: screen lower glow
  for (let r = 0; r < 5; r++) {
    rows.push([_, F, B, S, G, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, G, S, B, F, _])
  }
  // Row 19: screen bottom shadow
  rows.push([_, F, B, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, B, F, _])
  // Row 20: lower bezel
  rows.push([_, F, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, F, _])
  // Row 21: bottom bezel edge
  rows.push([_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _])
  // Row 22: stand neck (center pole)
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, T, T, T, T, _, _, _, _, _, _, _, _, _, _, _, _, _, _])
  // Row 23: stand neck
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, T, T, T, T, _, _, _, _, _, _, _, _, _, _, _, _, _, _])
  // Row 24: stand neck
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, T, T, T, T, _, _, _, _, _, _, _, _, _, _, _, _, _, _])
  // Row 25: stand base spreading
  rows.push([_, _, _, _, _, _, _, _, _, _, _, P, P, P, T, T, T, T, P, P, P, _, _, _, _, _, _, _, _, _, _, _])
  // Row 26: stand base wider
  rows.push([_, _, _, _, _, _, _, _, _, _, P, P, P, P, P, P, P, P, P, P, P, P, _, _, _, _, _, _, _, _, _, _])
  // Row 27: stand base full
  rows.push([_, _, _, _, _, _, _, _, _, P, P, P, P, P, P, P, P, P, P, P, P, P, P, _, _, _, _, _, _, _, _, _])
  // Row 28: stand foot bottom
  rows.push([_, _, _, _, _, _, _, _, _, P, P, P, P, P, P, P, P, P, P, P, P, P, P, _, _, _, _, _, _, _, _, _])
  // Rows 29-31: transparent
  rows.push(new Array(32).fill(_))
  rows.push(new Array(32).fill(_))
  rows.push(new Array(32).fill(_))

  return rows
})()

// ── LARGE_SCREEN_B_SPRITE: 32×16 (2×1 tiles) ────────────────────
// Widescreen wall-mounted monitor — very thin profile, wide screen.
export const LARGE_SCREEN_B_SPRITE: SpriteData = (() => {
  const F = '#1C1A22'  // outer frame
  const B = '#2A2832'  // inner bezel
  const S = '#0A0A14'  // screen dark
  const G = '#1A2A60'  // screen glow
  const L = '#2255AA'  // content mid
  const H = '#4488EE'  // highlight
  const W = '#88BBFF'  // bright glint
  const M = '#3366CC'  // content line

  return [
    new Array(32).fill(_),                                                                      // 0 transparent
    [_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _], // 1 top edge
    [_, F, B, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, B, F, _], // 2 screen top shadow
    [_, F, B, S, G, G, H, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, H, G, G, G, S, B, F, _], // 3 highlight stripe
    [_, F, B, S, G, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, G, S, B, F, _], // 4 content
    [_, F, B, S, G, L, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, L, G, S, B, F, _], // 5 content line
    [_, F, B, S, G, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, G, S, B, F, _], // 6 content
    [_, F, B, S, G, L, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, L, G, S, B, F, _], // 7 content line
    [_, F, B, S, G, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, G, S, B, F, _], // 8 content
    [_, F, B, S, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, G, S, B, F, _], // 9 screen bottom glow
    [_, F, B, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, S, B, F, _], // 10 screen bottom shadow
    [_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _], // 11 bottom edge
    new Array(32).fill(_),  // 12
    new Array(32).fill(_),  // 13
    new Array(32).fill(_),  // 14
    new Array(32).fill(_),  // 15
  ]
})()

// ── PC_TOWER_A_ON_SPRITE: 16×16 (1×1 tile) ──────────────────────
// PC tower ON — dark box with green LED, ventilation lines on sides.
export const PC_TOWER_A_ON_SPRITE: SpriteData = (() => {
  const D = '#1E1E2A'  // tower body dark
  const H = '#2A2A38'  // tower highlight (top panel)
  const V = '#161620'  // vent slot dark
  const E = '#14141C'  // edge shadow
  const G = '#44DD44'  // LED green ON
  const P = '#242430'  // port area dark

  return [
    [_, _, E, E, E, E, E, E, E, E, E, E, E, E, _, _],  // 0 top edge
    [_, E, H, H, H, H, H, H, H, H, H, H, H, H, E, _],  // 1 top panel highlight
    [_, E, H, H, H, H, H, H, H, H, H, H, H, H, E, _],  // 2 top panel
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 3 body
    [_, E, D, V, V, D, D, D, D, D, D, V, V, D, E, _],  // 4 vents left+right
    [_, E, D, V, V, D, D, D, D, D, D, V, V, D, E, _],  // 5 vents
    [_, E, D, V, V, D, D, D, P, P, D, V, V, D, E, _],  // 6 vents + port
    [_, E, D, V, V, D, G, D, P, P, D, V, V, D, E, _],  // 7 LED + port
    [_, E, D, V, V, D, D, D, P, P, D, V, V, D, E, _],  // 8 vents + port
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 9 body
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 10 body
    [_, E, D, V, V, V, V, D, D, V, V, V, V, D, E, _],  // 11 bottom vent row
    [_, E, D, V, V, V, V, D, D, V, V, V, V, D, E, _],  // 12 bottom vent row
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 13 body
    [_, E, E, E, E, E, E, E, E, E, E, E, E, E, E, _],  // 14 bottom edge
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],   // 15 transparent
  ]
})()

// ── PC_TOWER_A_OFF_SPRITE: 16×16 (1×1 tile) ─────────────────────
// PC tower OFF — same design but no LED, slightly darker.
export const PC_TOWER_A_OFF_SPRITE: SpriteData = (() => {
  const D = '#1A1A24'  // tower body (slightly darker)
  const H = '#242430'  // top panel
  const V = '#121218'  // vent slot
  const E = '#10101A'  // edge shadow
  const O = '#1A1A24'  // LED off (same as body)
  const P = '#1E1E2A'  // port area

  return [
    [_, _, E, E, E, E, E, E, E, E, E, E, E, E, _, _],  // 0 top edge
    [_, E, H, H, H, H, H, H, H, H, H, H, H, H, E, _],  // 1 top panel
    [_, E, H, H, H, H, H, H, H, H, H, H, H, H, E, _],  // 2 top panel
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 3 body
    [_, E, D, V, V, D, D, D, D, D, D, V, V, D, E, _],  // 4 vents
    [_, E, D, V, V, D, D, D, D, D, D, V, V, D, E, _],  // 5 vents
    [_, E, D, V, V, D, D, D, P, P, D, V, V, D, E, _],  // 6 vents + port
    [_, E, D, V, V, D, O, D, P, P, D, V, V, D, E, _],  // 7 LED OFF
    [_, E, D, V, V, D, D, D, P, P, D, V, V, D, E, _],  // 8 vents + port
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 9 body
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 10 body
    [_, E, D, V, V, V, V, D, D, V, V, V, V, D, E, _],  // 11 bottom vents
    [_, E, D, V, V, V, V, D, D, V, V, V, V, D, E, _],  // 12 bottom vents
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _],  // 13 body
    [_, E, E, E, E, E, E, E, E, E, E, E, E, E, E, _],  // 14 bottom edge
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],   // 15 transparent
  ]
})()

// ── PC_TOWER_B_ON_SPRITE: 16×16 (1×1 tile) ──────────────────────
// PC tower variant B ON — rounder-feel design with mesh vents, blue LED.
export const PC_TOWER_B_ON_SPRITE: SpriteData = (() => {
  const D = '#1E1E2A'  // body
  const H = '#2C2C3C'  // top highlight panel
  const M = '#181820'  // mesh vent (fine dots pattern)
  const E = '#14141E'  // edge
  const B = '#4488FF'  // LED blue ON
  const S = '#242434'  // side strip
  const P = '#1A1A28'  // port

  return [
    [_, _, E, E, E, E, E, E, E, E, E, E, E, E, _, _],  // 0 top
    [_, E, H, H, H, H, H, H, H, H, H, H, H, H, E, _],  // 1 top highlight
    [_, E, H, S, H, H, H, H, H, H, H, H, S, H, E, _],  // 2 top panel with side strips
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 3 body + strips
    [_, E, D, S, M, M, M, M, M, M, M, M, S, D, E, _],  // 4 mesh panel
    [_, E, D, S, M, D, M, D, M, D, M, D, S, D, E, _],  // 5 mesh dots
    [_, E, D, S, M, M, M, M, M, M, M, M, S, D, E, _],  // 6 mesh panel
    [_, E, D, S, D, D, B, D, D, D, D, D, S, D, E, _],  // 7 LED blue
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 8 body
    [_, E, D, S, P, P, P, P, P, P, P, P, S, D, E, _],  // 9 port strip
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 10 body
    [_, E, D, S, M, M, M, M, M, M, M, M, S, D, E, _],  // 11 mesh panel
    [_, E, D, S, M, D, M, D, M, D, M, D, S, D, E, _],  // 12 mesh dots
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 13 body
    [_, E, E, E, E, E, E, E, E, E, E, E, E, E, E, _],  // 14 bottom edge
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],   // 15 transparent
  ]
})()

// ── PC_TOWER_B_OFF_SPRITE: 16×16 (1×1 tile) ─────────────────────
// PC tower variant B OFF — same design, blue LED off.
export const PC_TOWER_B_OFF_SPRITE: SpriteData = (() => {
  const D = '#1A1A24'  // body (slightly darker)
  const H = '#28283A'  // top highlight panel
  const M = '#141418'  // mesh vent
  const E = '#10101C'  // edge
  const O = '#1A1A24'  // LED off (matches body)
  const S = '#202030'  // side strip
  const P = '#161622'  // port

  return [
    [_, _, E, E, E, E, E, E, E, E, E, E, E, E, _, _],  // 0 top
    [_, E, H, H, H, H, H, H, H, H, H, H, H, H, E, _],  // 1 top highlight
    [_, E, H, S, H, H, H, H, H, H, H, H, S, H, E, _],  // 2 top panel
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 3 body + strips
    [_, E, D, S, M, M, M, M, M, M, M, M, S, D, E, _],  // 4 mesh panel
    [_, E, D, S, M, D, M, D, M, D, M, D, S, D, E, _],  // 5 mesh dots
    [_, E, D, S, M, M, M, M, M, M, M, M, S, D, E, _],  // 6 mesh panel
    [_, E, D, S, D, D, O, D, D, D, D, D, S, D, E, _],  // 7 LED OFF
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 8 body
    [_, E, D, S, P, P, P, P, P, P, P, P, S, D, E, _],  // 9 port strip
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 10 body
    [_, E, D, S, M, M, M, M, M, M, M, M, S, D, E, _],  // 11 mesh panel
    [_, E, D, S, M, D, M, D, M, D, M, D, S, D, E, _],  // 12 mesh dots
    [_, E, D, S, D, D, D, D, D, D, D, D, S, D, E, _],  // 13 body
    [_, E, E, E, E, E, E, E, E, E, E, E, E, E, E, _],  // 14 bottom edge
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],   // 15 transparent
  ]
})()

// ── LAPTOP_CLOSED_SPRITE: 16×16 (1×1 tile) ──────────────────────
// Closed laptop — top-down view, dark lid with hinge line and logo dot.
export const LAPTOP_CLOSED_SPRITE: SpriteData = (() => {
  const L = '#1E1E2E'  // lid dark
  const H = '#2A2A3E'  // lid slightly lighter
  const E = '#161622'  // edge/shadow
  const G = '#383848'  // hinge line
  const C = '#3366CC'  // tiny logo circle
  const R = '#24243A'  // rubber foot
  const F = '#2C2C44'  // lid face

  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 0 transparent
    [_, _, E, E, E, E, E, E, E, E, E, E, E, _, _, _], // 1 top edge
    [_, E, L, L, L, L, L, L, L, L, L, L, L, E, _, _], // 2 lid top
    [_, E, L, F, F, F, F, F, F, F, F, F, L, E, _, _], // 3 lid face
    [_, E, L, F, F, F, F, F, F, F, F, F, L, E, _, _], // 4 lid face
    [_, E, L, F, F, F, F, C, F, F, F, F, L, E, _, _], // 5 logo center
    [_, E, L, F, F, F, F, F, F, F, F, F, L, E, _, _], // 6 lid face
    [_, E, L, F, F, F, F, F, F, F, F, F, L, E, _, _], // 7 lid face
    [_, E, L, F, F, F, F, F, F, F, F, F, L, E, _, _], // 8 lid face
    [_, E, L, L, L, L, L, L, L, L, L, L, L, E, _, _], // 9 lid bottom
    [_, _, G, G, G, G, G, G, G, G, G, G, G, _, _, _], // 10 hinge line
    [_, _, H, H, H, H, H, H, H, H, H, H, H, _, _, _], // 11 base edge (thin)
    [_, _, R, H, H, H, H, H, H, H, H, H, R, _, _, _], // 12 base bottom + rubber feet
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 13 transparent
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 14
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15
  ]
})()

// ── LAPTOP_OPEN_FRONT_SPRITE: 16×16 (1×1 tile) ──────────────────
// Open laptop facing toward viewer (screen tilted forward, top visible).
// Screen half (glowing blue) on top, keyboard base at bottom.
export const LAPTOP_OPEN_FRONT_SPRITE: SpriteData = (() => {
  const L = '#1E1E2E'  // lid/screen frame
  const S = '#1A2A60'  // screen glow
  const G = '#2255AA'  // screen mid
  const H = '#4488EE'  // screen bright
  const B = '#2A2A3A'  // base/keyboard body
  const K = '#222232'  // key grid dark
  const T = '#1A1A28'  // trackpad
  const E = '#161622'  // edge

  return [
    [_, _, _, E, E, E, E, E, E, E, E, E, E, _, _, _], // 0 screen top edge
    [_, _, E, L, L, L, L, L, L, L, L, L, L, E, _, _], // 1 screen frame top
    [_, _, E, L, S, S, S, S, S, S, S, S, L, E, _, _], // 2 screen shadow
    [_, _, E, L, G, H, H, H, H, H, H, G, L, E, _, _], // 3 screen glow
    [_, _, E, L, G, G, H, H, H, H, G, G, L, E, _, _], // 4 screen glow
    [_, _, E, L, G, G, G, G, G, G, G, G, L, E, _, _], // 5 screen
    [_, _, E, L, S, S, S, S, S, S, S, S, L, E, _, _], // 6 screen bottom shadow
    [_, _, E, L, L, L, L, L, L, L, L, L, L, E, _, _], // 7 screen frame bottom
    [_, _, _, E, E, E, E, E, E, E, E, E, E, _, _, _], // 8 hinge
    [_, _, E, B, B, B, B, B, B, B, B, B, B, E, _, _], // 9 keyboard base
    [_, _, E, B, K, K, K, K, K, K, K, K, B, E, _, _], // 10 keys area
    [_, _, E, B, K, B, K, B, K, B, K, B, B, E, _, _], // 11 key grid
    [_, _, E, B, K, K, K, K, K, K, K, K, B, E, _, _], // 12 keys area
    [_, _, E, B, B, T, T, T, T, T, B, B, B, E, _, _], // 13 trackpad
    [_, _, E, B, B, B, B, B, B, B, B, B, B, E, _, _], // 14 base bottom
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15 transparent
  ]
})()

// ── LAPTOP_OPEN_BACK_SPRITE: 16×16 (1×1 tile) ───────────────────
// Open laptop facing away — shows back of screen lid, thin hinge, base.
export const LAPTOP_OPEN_BACK_SPRITE: SpriteData = (() => {
  const L = '#1E1E2E'  // lid back face
  const H = '#2A2A3E'  // lid back highlight
  const E = '#161622'  // edge
  const G = '#383848'  // hinge
  const B = '#2A2A3A'  // base
  const K = '#222232'  // keyboard area
  const T = '#1A1A28'  // trackpad
  const C = '#3366CC'  // logo dot (visible on back)

  return [
    [_, _, E, B, B, B, B, B, B, B, B, B, B, E, _, _], // 0 base top edge
    [_, _, E, B, K, K, K, K, K, K, K, K, B, E, _, _], // 1 keyboard
    [_, _, E, B, K, B, K, B, K, B, K, B, B, E, _, _], // 2 key grid
    [_, _, E, B, K, K, K, K, K, K, K, K, B, E, _, _], // 3 keyboard
    [_, _, E, B, B, T, T, T, T, T, B, B, B, E, _, _], // 4 trackpad
    [_, _, E, B, B, B, B, B, B, B, B, B, B, E, _, _], // 5 base bottom
    [_, _, _, G, G, G, G, G, G, G, G, G, G, _, _, _], // 6 hinge
    [_, _, E, L, L, L, L, L, L, L, L, L, L, E, _, _], // 7 lid back bottom edge
    [_, _, E, L, H, H, H, H, H, H, H, H, L, E, _, _], // 8 lid back highlight
    [_, _, E, L, H, H, H, H, H, H, H, H, L, E, _, _], // 9 lid back
    [_, _, E, L, H, H, H, C, H, H, H, H, L, E, _, _], // 10 logo visible on back
    [_, _, E, L, H, H, H, H, H, H, H, H, L, E, _, _], // 11 lid back
    [_, _, E, L, H, H, H, H, H, H, H, H, L, E, _, _], // 12 lid back
    [_, _, E, L, L, L, L, L, L, L, L, L, L, E, _, _], // 13 lid top edge
    [_, _, _, E, E, E, E, E, E, E, E, E, E, _, _, _], // 14 top shadow
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15 transparent
  ]
})()

// ── LAPTOP_OPEN_LEFT_SPRITE: 16×16 (1×1 tile) ───────────────────
// Open laptop facing left — thin profile, screen glow visible on left.
export const LAPTOP_OPEN_LEFT_SPRITE: SpriteData = (() => {
  const L = '#1E1E2E'  // lid frame
  const S = '#1A2A60'  // screen glow
  const H = '#4488EE'  // screen bright
  const G = '#2255AA'  // screen mid
  const B = '#2A2A3A'  // base
  const K = '#222232'  // keyboard
  const E = '#161622'  // edge
  const N = '#383848'  // hinge

  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 0 transparent
    [_, E, L, L, L, L, L, L, N, B, B, B, B, B, _, _], // 1 lid top + base top
    [_, E, S, S, S, S, S, L, N, B, K, K, K, B, E, _], // 2 screen top + keyboard
    [_, E, G, G, H, G, G, L, N, B, K, B, K, B, E, _], // 3 screen glow + keys
    [_, E, G, H, H, H, G, L, N, B, K, K, K, B, E, _], // 4 screen highlight
    [_, E, G, G, H, G, G, L, N, B, K, B, K, B, E, _], // 5 screen glow + keys
    [_, E, G, G, G, G, G, L, N, B, K, K, K, B, E, _], // 6 screen mid
    [_, E, G, G, G, G, G, L, N, B, B, B, B, B, E, _], // 7 screen bottom + base
    [_, E, S, S, S, S, S, L, N, B, B, B, B, B, E, _], // 8 screen shadow + base
    [_, E, L, L, L, L, L, L, N, B, B, B, B, B, _, _], // 9 lid bottom + base bottom
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 10 transparent
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 11
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 12
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 13
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 14
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15
  ]
})()

// ── LAPTOP_OPEN_RIGHT_SPRITE: 16×16 (1×1 tile) ──────────────────
// Open laptop facing right — mirrored version of left.
export const LAPTOP_OPEN_RIGHT_SPRITE: SpriteData = (() => {
  const L = '#1E1E2E'  // lid frame
  const S = '#1A2A60'  // screen glow
  const H = '#4488EE'  // screen bright
  const G = '#2255AA'  // screen mid
  const B = '#2A2A3A'  // base
  const K = '#222232'  // keyboard
  const E = '#161622'  // edge
  const N = '#383848'  // hinge

  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 0 transparent
    [_, _, B, B, B, B, B, N, L, L, L, L, L, L, E, _], // 1 base top + lid top
    [_, E, B, K, K, K, B, N, L, S, S, S, S, S, E, _], // 2 keyboard + screen top
    [_, E, B, K, B, K, B, N, L, G, G, H, G, G, E, _], // 3 keys + screen glow
    [_, E, B, K, K, K, B, N, L, G, H, H, H, G, E, _], // 4 base + screen highlight
    [_, E, B, K, B, K, B, N, L, G, G, H, G, G, E, _], // 5 keys + screen glow
    [_, E, B, K, K, K, B, N, L, G, G, G, G, G, E, _], // 6 keyboard + screen mid
    [_, E, B, B, B, B, B, N, L, G, G, G, G, G, E, _], // 7 base + screen bottom
    [_, E, B, B, B, B, B, N, L, S, S, S, S, S, E, _], // 8 base + screen shadow
    [_, _, B, B, B, B, B, N, L, L, L, L, L, L, E, _], // 9 base bottom + lid bottom
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 10 transparent
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 11
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 12
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 13
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 14
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15
  ]
})()

// ── LAPTOP_OPEN_TOP_SPRITE: 16×16 (1×1 tile) ────────────────────
// Open laptop from directly above — front half is keyboard, back half is screen.
export const LAPTOP_OPEN_TOP_SPRITE: SpriteData = (() => {
  const L = '#1E1E2E'  // screen frame
  const S = '#1A2A60'  // screen glow dark
  const G = '#2255AA'  // screen mid
  const H = '#4488EE'  // screen bright
  const W = '#88BBFF'  // screen highlight
  const B = '#2A2A3A'  // keyboard base
  const K = '#222232'  // key dark
  const J = '#282840'  // key lighter
  const T = '#1A1A28'  // trackpad
  const N = '#383848'  // hinge

  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 0 transparent
    [_, _, L, L, L, L, L, L, L, L, L, L, L, L, _, _], // 1 screen top edge
    [_, _, L, S, S, S, S, S, S, S, S, S, S, L, _, _], // 2 screen shadow
    [_, _, L, S, G, G, G, G, G, G, G, G, S, L, _, _], // 3 screen content
    [_, _, L, S, G, H, W, W, W, W, H, G, S, L, _, _], // 4 screen highlight
    [_, _, L, S, G, G, G, G, G, G, G, G, S, L, _, _], // 5 screen content
    [_, _, L, S, S, S, S, S, S, S, S, S, S, L, _, _], // 6 screen shadow
    [_, _, L, L, L, L, L, L, L, L, L, L, L, L, _, _], // 7 hinge (lid edge)
    [_, _, _, N, N, N, N, N, N, N, N, N, N, _, _, _], // 8 hinge gap
    [_, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _], // 9 keyboard top edge
    [_, _, B, K, J, K, J, K, J, K, J, K, J, B, _, _], // 10 key row
    [_, _, B, J, K, J, K, J, K, J, K, J, K, B, _, _], // 11 key row alternating
    [_, _, B, K, J, K, J, K, J, K, J, K, J, B, _, _], // 12 key row
    [_, _, B, B, T, T, T, T, T, T, T, T, B, B, _, _], // 13 trackpad
    [_, _, B, B, B, B, B, B, B, B, B, B, B, B, _, _], // 14 base bottom edge
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15 transparent
  ]
})()

// ── PHONE_SPRITE: 16×16 (1×1 tile) ──────────────────────────────
// Desk telephone — classic office phone, top-down view.
// Dark body, curved handset receiver, numpad grid, indicator light.
export const PHONE_SPRITE: SpriteData = (() => {
  const D = '#1A1A24'  // phone body dark
  const H = '#161620'  // handset dark
  const R = '#202028'  // receiver cradle
  const N = '#1E1E2A'  // numpad key
  const G = '#44DD44'  // green indicator LED
  const C = '#303040'  // cord attachment
  const E = '#121218'  // edge

  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 0 transparent
    [_, _, E, E, E, E, E, E, E, E, E, E, E, E, _, _], // 1 top edge
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _], // 2 body top
    [_, E, D, H, H, H, H, D, D, D, D, D, D, D, E, _], // 3 handset left side
    [_, E, D, H, H, H, H, D, N, N, N, N, D, G, E, _], // 4 handset + numpad + LED
    [_, E, D, H, H, H, H, D, N, D, N, D, N, D, E, _], // 5 handset + numpad row
    [_, E, D, D, D, D, D, D, N, N, N, N, D, D, E, _], // 6 numpad row
    [_, E, D, R, R, R, R, D, N, D, N, D, N, D, E, _], // 7 cradle + numpad row
    [_, E, D, R, R, R, R, D, N, N, N, N, D, D, E, _], // 8 cradle + numpad
    [_, E, D, D, D, D, D, D, N, D, N, D, N, D, E, _], // 9 numpad row
    [_, E, D, H, H, H, H, D, N, N, N, N, D, D, E, _], // 10 handset + numpad
    [_, E, D, H, H, H, H, D, D, D, D, D, D, D, E, _], // 11 handset bottom
    [_, E, D, D, D, D, D, D, D, D, D, D, D, D, E, _], // 12 body bottom
    [_, _, E, E, E, C, E, E, E, E, E, E, E, E, _, _], // 13 bottom edge + cord
    [_, _, _, _, _, C, _, _, _, _, _, _, _, _, _, _],  // 14 cord tail
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15 transparent
  ]
})()

// ── PRINTER_B_SPRITE: 16×16 (1×1 tile) ──────────────────────────
// Inkjet printer variant — wider body, different paper tray orientation,
// colored ink indicator dots (cyan/magenta/yellow).
export const PRINTER_B_SPRITE: SpriteData = (() => {
  const W = '#E8E8EC'  // white body
  const G = '#C0C0C8'  // grey panel
  const D = '#888890'  // dark shadow/edge
  const B = '#1A1A2A'  // button/dark area
  const P = '#F4F4F0'  // paper tray light
  const CY = '#22CCCC' // cyan ink dot
  const MG = '#CC2288' // magenta ink dot
  const YL = '#CCBB00' // yellow ink dot
  const T = '#3388FF'  // power LED blue
  const E = '#666670'  // outer border

  return [
    [_, E, E, E, E, E, E, E, E, E, E, E, E, E, _, _], // 0 top border
    [E, W, W, W, W, W, W, W, W, W, W, W, W, W, E, _], // 1 body top
    [E, W, G, G, G, G, G, G, G, G, G, G, G, W, E, _], // 2 control panel
    [E, W, G, B, T, B, CY, B, MG, B, YL, B, G, W, E, _], // 3 buttons + ink dots
    [E, W, G, G, G, G, G, G, G, G, G, G, G, W, E, _], // 4 control panel bottom
    [E, W, W, W, W, W, W, W, W, W, W, W, W, W, E, _], // 5 body
    [E, W, W, W, W, W, W, W, W, W, W, W, W, W, E, _], // 6 body
    [E, P, P, P, P, P, P, P, P, P, P, P, P, P, E, _], // 7 paper tray top
    [E, P, P, P, P, P, P, P, P, P, P, P, P, P, E, _], // 8 paper slot
    [E, W, W, W, W, W, W, W, W, W, W, W, W, W, E, _], // 9 body below tray
    [E, W, W, W, W, W, W, W, W, W, W, W, W, W, E, _], // 10 body
    [E, W, W, D, D, D, D, D, D, D, D, D, W, W, E, _], // 11 output tray slot
    [E, W, W, P, P, P, P, P, P, P, P, P, W, W, E, _], // 12 output tray
    [E, W, W, W, W, W, W, W, W, W, W, W, W, W, E, _], // 13 body bottom
    [_, E, E, E, E, E, E, E, E, E, E, E, E, E, _, _], // 14 bottom border
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],  // 15 transparent
  ]
})()
