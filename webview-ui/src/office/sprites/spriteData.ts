import type { Direction, SpriteData, FloorColor } from '../types.js'
import { Direction as Dir } from '../types.js'
import { adjustSprite } from '../colorize.js'

// ── Color Palettes ──────────────────────────────────────────────
const _ = '' // transparent

// ── Furniture Sprites ───────────────────────────────────────────

/** Square desk: 32x32 pixels (2x2 tiles) — top-down wood surface */
export const DESK_SQUARE_SPRITE: SpriteData = (() => {
  const W = '#8B6914' // wood edge
  const L = '#A07828' // lighter wood
  const S = '#B8922E' // surface
  const D = '#6B4E0A' // dark edge
  const rows: string[][] = []
  // Row 0: empty
  rows.push(new Array(32).fill(_))
  // Row 1: top edge
  rows.push([_, ...new Array(30).fill(W), _])
  // Rows 2-5: top surface
  for (let r = 0; r < 4; r++) {
    rows.push([_, W, ...new Array(28).fill(r < 1 ? L : S), W, _])
  }
  // Row 6: horizontal divider
  rows.push([_, D, ...new Array(28).fill(W), D, _])
  // Rows 7-12: middle surface area
  for (let r = 0; r < 6; r++) {
    rows.push([_, W, ...new Array(28).fill(S), W, _])
  }
  // Row 13: center line
  rows.push([_, W, ...new Array(28).fill(L), W, _])
  // Rows 14-19: lower surface
  for (let r = 0; r < 6; r++) {
    rows.push([_, W, ...new Array(28).fill(S), W, _])
  }
  // Row 20: horizontal divider
  rows.push([_, D, ...new Array(28).fill(W), D, _])
  // Rows 21-24: bottom surface
  for (let r = 0; r < 4; r++) {
    rows.push([_, W, ...new Array(28).fill(r > 2 ? L : S), W, _])
  }
  // Row 25: bottom edge
  rows.push([_, ...new Array(30).fill(W), _])
  // Rows 26-31: legs/shadow
  for (let r = 0; r < 4; r++) {
    const row = new Array(32).fill(_) as string[]
    row[1] = D; row[2] = D; row[29] = D; row[30] = D
    rows.push(row)
  }
  rows.push(new Array(32).fill(_))
  rows.push(new Array(32).fill(_))
  return rows
})()

/** Plant in pot: 16x24 */
export const PLANT_SPRITE: SpriteData = (() => {
  const G = '#3D8B37'
  const D = '#2D6B27'
  const T = '#6B4E0A'
  const P = '#B85C3A'
  const R = '#8B4422'
  return [
    [_, _, _, _, _, _, G, G, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, G, G, G, G, _, _, _, _, _, _, _],
    [_, _, _, _, G, G, D, G, G, G, _, _, _, _, _, _],
    [_, _, _, G, G, D, G, G, D, G, G, _, _, _, _, _],
    [_, _, G, G, G, G, G, G, G, G, G, G, _, _, _, _],
    [_, G, G, D, G, G, G, G, G, G, D, G, G, _, _, _],
    [_, G, G, G, G, D, G, G, D, G, G, G, G, _, _, _],
    [_, _, G, G, G, G, G, G, G, G, G, G, _, _, _, _],
    [_, _, _, G, G, G, D, G, G, G, G, _, _, _, _, _],
    [_, _, _, _, G, G, G, G, G, G, _, _, _, _, _, _],
    [_, _, _, _, _, G, G, G, G, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, T, T, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, T, T, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, T, T, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, R, R, R, R, R, _, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, _, R, P, P, P, R, _, _, _, _, _, _],
    [_, _, _, _, _, _, R, R, R, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Bookshelf: 16x32 (1 tile wide, 2 tiles tall) */
export const BOOKSHELF_SPRITE: SpriteData = (() => {
  const W = '#8B6914'
  const D = '#6B4E0A'
  const R = '#CC4444'
  const B = '#4477AA'
  const G = '#44AA66'
  const Y = '#CCAA33'
  const P = '#9955AA'
  return [
    [_, W, W, W, W, W, W, W, W, W, W, W, W, W, W, _],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [_, W, W, W, W, W, W, W, W, W, W, W, W, W, W, _],
  ]
})()

/** Water cooler: 16x24 */
export const COOLER_SPRITE: SpriteData = (() => {
  const W = '#CCDDEE'
  const L = '#88BBDD'
  const D = '#999999'
  const B = '#666666'
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, D, D, W, W, W, W, D, D, _, _, _, _],
    [_, _, _, _, D, W, W, W, W, W, W, D, _, _, _, _],
    [_, _, _, _, D, W, W, W, W, W, W, D, _, _, _, _],
    [_, _, _, _, D, D, D, D, D, D, D, D, _, _, _, _],
    [_, _, _, _, _, D, B, B, B, B, D, _, _, _, _, _],
    [_, _, _, _, _, D, B, B, B, B, D, _, _, _, _, _],
    [_, _, _, _, _, D, B, B, B, B, D, _, _, _, _, _],
    [_, _, _, _, D, D, B, B, B, B, D, D, _, _, _, _],
    [_, _, _, _, D, B, B, B, B, B, B, D, _, _, _, _],
    [_, _, _, _, D, D, D, D, D, D, D, D, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Whiteboard: 32x16 (2 tiles wide, 1 tile tall) — hangs on wall */
export const WHITEBOARD_SPRITE: SpriteData = (() => {
  const F = '#AAAAAA'
  const W = '#EEEEFF'
  const M = '#CC4444'
  const B = '#4477AA'
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, M, M, M, W, W, W, W, W, B, B, B, B, W, W, W, W, W, W, W, M, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, B, B, W, W, M, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, M, M, M, M, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, B, B, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, B, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, M, M, M, W, W, W, W, W, W, W, F, _],
    [_, F, W, M, M, W, W, W, W, W, W, W, W, W, W, W, B, B, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, B, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, M, M, M, M, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Chair: 16x16 — top-down rolling office chair with star base */
export const CHAIR_SPRITE: SpriteData = (() => {
  const S = '#1E1E2E'  // seat cushion (dark navy)
  const H = '#2A2A42'  // seat highlight
  const R = '#3C3C54'  // seat rim
  const A = '#4A4A66'  // armrest
  const P = '#B0B0C0'  // center post (silver)
  const M = '#909098'  // base arm (silver-grey)
  const W = '#2A2A36'  // wheel (dark)
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, R, R, R, R, R, R, _, _, _, _, _],
    [_, _, _, _, R, S, S, S, S, S, S, R, _, _, _, _],
    [_, _, A, _, R, S, H, H, S, S, S, R, _, A, _, _],
    [_, _, A, _, R, S, H, S, S, S, S, R, _, A, _, _],
    [_, _, A, _, R, S, S, S, P, S, S, R, _, A, _, _],
    [_, _, A, _, R, S, S, S, P, S, S, R, _, A, _, _],
    [_, _, A, _, R, S, S, S, S, S, S, R, _, A, _, _],
    [_, _, _, _, R, S, S, S, S, S, S, R, _, _, _, _],
    [_, _, _, _, _, R, R, R, R, R, R, _, _, _, _, _],
    [_, _, _, _, _, _, M, M, M, _, _, _, _, _, _, _],
    [_, _, M, _, _, _, M, M, M, _, _, _, M, _, _, _],
    [_, M, _, _, _, _, M, M, M, _, _, _, _, M, _, _],
    [_, M, _, _, M, _, _, _, _, _, M, _, _, M, _, _],
    [_, W, _, _, W, _, _, _, _, _, W, _, _, W, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** PC monitor: 16x16 — top-down monitor on stand */
export const PC_SPRITE: SpriteData = (() => {
  const F = '#555555'
  const S = '#3A3A5C'
  const B = '#6688CC'
  const D = '#444444'
  return [
    [_, _, _, F, F, F, F, F, F, F, F, F, F, _, _, _],
    [_, _, _, F, S, S, S, S, S, S, S, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, S, S, S, S, S, S, S, F, _, _, _],
    [_, _, _, F, F, F, F, F, F, F, F, F, F, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, D, D, D, D, _, _, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Desk lamp: 16x16 — top-down lamp with light cone */
export const LAMP_SPRITE: SpriteData = (() => {
  const Y = '#FFDD55'
  const L = '#FFEE88'
  const D = '#888888'
  const B = '#555555'
  const G = '#FFFFCC'
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, G, G, G, G, _, _, _, _, _, _],
    [_, _, _, _, _, G, Y, Y, Y, Y, G, _, _, _, _, _],
    [_, _, _, _, G, Y, Y, L, L, Y, Y, G, _, _, _, _],
    [_, _, _, _, Y, Y, L, L, L, L, Y, Y, _, _, _, _],
    [_, _, _, _, Y, Y, L, L, L, L, Y, Y, _, _, _, _],
    [_, _, _, _, _, Y, Y, Y, Y, Y, Y, _, _, _, _, _],
    [_, _, _, _, _, _, D, D, D, D, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, D, D, D, D, _, _, _, _, _, _],
    [_, _, _, _, _, B, B, B, B, B, B, _, _, _, _, _],
    [_, _, _, _, _, B, B, B, B, B, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Round table - 3x3 footprint, seats 10 people in a circle */
export const ROUND_TABLE_SPRITE: SpriteData = (() => {
  const W = '#DDDDDD' // white table top
  const L = '#BBBBBB' // lighter edge
  const D = '#999999' // darker edge
  const C = '#664422' // brown center
  const P = '#448844' // green plant in center
  return [
    [_, _, D, D, D, D, D, D, D, D, D, D, _, _],
    [D, W, W, W, W, W, W, W, W, W, W, W, W, D],
    [D, W, L, L, L, L, L, L, L, L, L, L, W, D],
    [D, W, L, C, C, C, C, C, C, C, C, C, W, D],
    [D, W, L, C, P, P, P, P, P, P, P, C, W, D],
    [D, W, L, C, P, P, P, P, P, P, P, C, W, D],
    [D, W, L, C, P, P, P, P, P, P, P, C, W, D],
    [D, W, L, C, P, P, P, P, P, P, P, C, W, D],
    [D, W, L, C, C, C, C, C, C, C, C, C, W, D],
    [D, W, L, L, L, L, L, L, L, L, L, L, W, D],
    [D, W, W, W, W, W, W, W, W, W, W, W, W, D],
    [_, D, D, D, D, D, D, D, D, D, D, D, D, _],
    [_, _, D, D, D, D, D, D, D, D, D, D, _, _],
    [_, _, D, D, D, D, D, D, D, D, D, D, _, _],
  ]
})()

// ── New Furniture Sprites ────────────────────────────────────────

/** Sofa: 32x16 pixels (2x1 tiles) — top-down cushioned couch, creates 2 seats */
export const SOFA_SPRITE: SpriteData = (() => {
  const F = '#3D1C09'  // dark walnut frame
  const C = '#8B4020'  // cushion main
  const H = '#B8613A'  // cushion highlight
  const D = '#22100A'  // shadow / divider
  const A = '#5C2A12'  // arm rest

  // Each row: [F, A, 13 left cushion, D, D, 13 right cushion, A, F] = 32 ✓
  const row = (c1: string, c2: string): string[] =>
    [F, A, ...new Array(13).fill(c1), D, D, ...new Array(13).fill(c2), A, F]

  return [
    new Array(32).fill(F),                            // 0: top frame
    [F, F, ...new Array(28).fill(H), F, F],           // 1: top highlight
    row(H, H),                                         // 2: back cushion top
    row(C, C),                                         // 3: back cushion
    row(C, C),                                         // 4: back cushion
    new Array(32).fill(D),                            // 5: seat-back divider
    row(H, H),                                         // 6: seat top
    row(C, C),                                         // 7: seat
    row(C, C),                                         // 8: seat
    row(C, C),                                         // 9: seat
    row(C, C),                                         // 10: seat
    new Array(32).fill(D),                            // 11: front divider
    row(H, H),                                         // 12: front edge
    [F, F, ...new Array(28).fill(H), F, F],           // 13: bottom highlight
    new Array(32).fill(F),                            // 14: bottom frame
    new Array(32).fill(_),                            // 15: transparent
  ]
})()

/** Coffee Machine: 16x16 pixels (1x1 tile) — espresso machine with glowing screen */
export const COFFEE_MACHINE_SPRITE: SpriteData = [
  new Array(16).fill(_),                                                   // 0
  [_, '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', _, _],  // 1 top
  [_, '#1E1E1E', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#1E1E1E', _, _],  // 2 silver
  [_, '#1E1E1E', '#CCCCCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#CCCCCC', '#1E1E1E', _, _],  // 3 screen
  [_, '#1E1E1E', '#CCCCCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#CCCCCC', '#1E1E1E', _, _],  // 4 screen
  [_, '#1E1E1E', '#CCCCCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#1A5FCC', '#CCCCCC', '#1E1E1E', _, _],  // 5 screen
  [_, '#1E1E1E', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#1E1E1E', _, _],  // 6 below screen
  [_, '#1E1E1E', '#888888', '#CC1A1A', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#888888', '#888888', '#1E1E1E', '#1E1E1E', _, _],  // 7 buttons+LED
  [_, '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', _, _],  // 8 body
  [_, '#1E1E1E', '#888888', '#888888', '#1E1E1E', '#888888', '#888888', '#888888', '#888888', '#888888', '#1E1E1E', '#888888', '#888888', '#1E1E1E', _, _],  // 9 tray
  [_, '#1E1E1E', '#888888', '#888888', '#1E1E1E', '#888888', '#888888', '#888888', '#888888', '#888888', '#1E1E1E', '#888888', '#888888', '#1E1E1E', _, _],  // 10 tray
  [_, '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', _, _],  // 11 base
  [_, _, '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', _, _, _, _],  // 12 feet
  new Array(16).fill(_),                                                   // 13
  new Array(16).fill(_),                                                   // 14
  new Array(16).fill(_),                                                   // 15
]

/** TV / Big Screen: 32x16 pixels (2x1 tiles) — flat screen with glowing display */
export const TV_SPRITE: SpriteData = (() => {
  const B = '#0A0A14'  // dark bezel
  const S = '#1A2A60'  // screen shadow
  const G = '#2244BB'  // screen blue
  const L = '#4488EE'  // screen highlight
  const W = '#88CCFF'  // bright glint
  const E = '#404060'  // stand edge
  return [
    new Array(32).fill(_),                                                      // 0
    [_, _, ...new Array(28).fill(B), _, _],                                     // 1 bezel top
    new Array(32).fill(B),                                                      // 2 bezel
    [B, E, ...new Array(28).fill(S), E, B],                                     // 3 screen top
    [B, E, ...new Array(28).fill(G), E, B],                                     // 4 screen
    [B, E, L, W, ...new Array(24).fill(G), W, L, E, B],                        // 5 highlight row
    [B, E, ...new Array(28).fill(G), E, B],                                     // 6 screen
    [B, E, ...new Array(28).fill(G), E, B],                                     // 7 screen
    [B, E, ...new Array(28).fill(G), E, B],                                     // 8 screen
    [B, E, ...new Array(28).fill(S), E, B],                                     // 9 screen bottom
    new Array(32).fill(B),                                                      // 10 bezel bottom
    [...new Array(13).fill(_), E, E, E, E, E, E, ...new Array(13).fill(_)],    // 11 stand base
    [...new Array(14).fill(_), E, E, E, E, ...new Array(14).fill(_)],          // 12 stand pole
    new Array(32).fill(_),                                                      // 13
    new Array(32).fill(_),                                                      // 14
    new Array(32).fill(_),                                                      // 15
  ]
})()

/** Arcade Cabinet: 16x32 pixels (1x2 tiles) — retro arcade machine with screen and controls */
export const ARCADE_SPRITE: SpriteData = (() => {
  const C = '#1A1A2E'  // cabinet body
  const D = '#2D2D4A'  // cabinet lighter panels
  const M = '#CC2200'  // marquee accent red
  const S = '#1030AA'  // screen shadow
  const L = '#4488EE'  // screen glow
  const J = '#888888'  // joystick
  const R = '#DD2222'  // button red
  const Y = '#DDAA22'  // button yellow
  const G = '#22AA22'  // button green
  const rows: string[][] = [
    new Array(16).fill(_),                                                  // 0
    [_, C, C, C, C, C, C, C, C, C, C, C, C, C, _, _],                     // 1 top
    [_, C, M, M, M, M, M, M, M, M, M, M, M, C, _, _],                     // 2 marquee
    [_, C, M, M, M, M, M, M, M, M, M, M, M, C, _, _],                     // 3 marquee
    [_, C, C, C, C, C, C, C, C, C, C, C, C, C, _, _],                     // 4 frame
    [_, C, S, S, S, S, S, S, S, S, S, S, S, C, _, _],                     // 5 screen top
    [_, C, S, L, L, L, L, L, L, L, L, L, S, C, _, _],                     // 6 screen glow
    [_, C, S, L, L, L, L, L, L, L, L, L, S, C, _, _],                     // 7 screen glow
    [_, C, S, L, L, L, L, L, L, L, L, L, S, C, _, _],                     // 8 screen glow
    [_, C, S, S, S, S, S, S, S, S, S, S, S, C, _, _],                     // 9 screen bottom
    [_, C, C, C, C, C, C, C, C, C, C, C, C, C, _, _],                     // 10 frame
    [_, C, J, C, C, C, R, C, Y, C, C, G, C, C, _, _],                     // 11 controls
    [_, C, J, C, C, C, R, C, Y, C, C, G, C, C, _, _],                     // 12 controls
    [_, C, C, C, C, C, C, C, C, C, C, C, C, C, _, _],                     // 13 lower frame
  ]
  // Lower cabinet body (rows 14-25)
  for (let r = 0; r < 12; r++) {
    rows.push([_, D, D, D, D, D, D, D, D, D, D, D, D, D, _, _])
  }
  // Base trim (rows 26-29)
  for (let r = 0; r < 4; r++) {
    rows.push([_, C, C, C, C, C, C, C, C, C, C, C, C, C, _, _])
  }
  // Bottom transparent (rows 30-31)
  rows.push(new Array(16).fill(_))
  rows.push(new Array(16).fill(_))
  return rows
})()

/** Window: 64x16 pixels (4x1 tiles) — multi-pane window, top-down view */
export const WINDOW_SPRITE: SpriteData = (() => {
  const F = '#1C1A22'  // outer frame (very dark)
  const G = '#9DCCED'  // glass (light blue)
  const H = '#C8E8FF'  // glass highlight (reflection, top-left of each pane)
  const D = '#D8D8E8'  // pane divider (white-silver)
  const S = '#8A7050'  // window sill (warm wood)

  const inDivider = (c: number) => (c >= 21 && c <= 22) || (c >= 41 && c <= 42)
  const inHighlight = (c: number) =>
    (c >= 2 && c <= 5) || (c >= 23 && c <= 26) || (c >= 43 && c <= 46)

  const rows: string[][] = []
  for (let r = 0; r < 16; r++) {
    const row: string[] = []
    for (let c = 0; c < 64; c++) {
      if (r <= 1)                       { row.push(F); continue }  // top frame
      if (r >= 14)                      { row.push(S); continue }  // sill
      if (c <= 1 || c >= 62)            { row.push(D); continue }  // side frame
      if (inDivider(c))                 { row.push(D); continue }  // pane dividers
      if (r <= 4 && inHighlight(c))     { row.push(H); continue }  // glass highlight
      row.push(G)
    }
    rows.push(row)
  }
  return rows
})()

/** File cabinet: 16x32 pixels (1x2 tiles) — top-down metal cabinet with rainbow folders */
export const FILE_CABINET_SPRITE: SpriteData = (() => {
  const M = '#8A8A9A'   // metal frame
  const D = '#5A5A6A'   // drawer shadow
  const G = '#2A2A3A'   // interior dark
  const HL = '#ABABBB'  // highlight
  const R = '#CC4444'; const O = '#CC7722'; const Y = '#BBAA22'
  const GC = '#44AA44'; const B = '#4477CC'; const Pu = '#9944AA'; const T = '#22AAAA'
  const f1 = [R, R, O, O, Y, Y, GC, GC, B, B, Pu, Pu, T, T]
  const f2 = [O, O, Y, Y, GC, GC, B, B, Pu, Pu, T, T, R, R]
  const f3 = [Y, Y, GC, GC, B, B, Pu, Pu, T, T, R, R, O, O]
  const fr = (f: string[]) => [M, ...f, M]  // 1+14+1 = 16
  return [
    new Array(16).fill(M),                                               // 0: top
    [M, HL, HL, HL, HL, HL, HL, HL, HL, HL, HL, HL, HL, HL, HL, M],   // 1: highlight
    [M, G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G, M],   // 2: drawer top shadow
    fr(f1), fr(f1),                                                      // 3-4
    fr(f2), fr(f2),                                                      // 5-6
    fr(f3), fr(f3),                                                      // 7-8
    [M, D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D, M],   // 9: handle bar
    [M, M,  M,  M,  D,  D,  D,  D,  D,  D,  D,  D,  M,  M,  M, M],   // 10: handle detail
    [M, D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D, M],   // 11: drawer bottom
    new Array(16).fill(M),                                               // 12: divider
    new Array(16).fill(M),                                               // 13: divider
    [M, G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G,  G, M],   // 14: drawer 2 top
    fr(f3), fr(f3),                                                      // 15-16
    fr(f1), fr(f1),                                                      // 17-18
    fr(f2), fr(f2),                                                      // 19-20
    [M, D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D, M],   // 21: handle bar
    [M, M,  M,  M,  D,  D,  D,  D,  D,  D,  D,  D,  M,  M,  M, M],   // 22: handle detail
    [M, D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D, M],   // 23: drawer bottom
    new Array(16).fill(M),                                               // 24
    new Array(16).fill(M),                                               // 25
    new Array(16).fill(M),                                               // 26
    new Array(16).fill(M),                                               // 27
    [_, _, M, M, _, _, _, _, _, _, _, _, M, M, _, _],                   // 28: legs
    [_, _, M, M, _, _, _, _, _, _, _, _, M, M, _, _],                   // 29: legs
    new Array(16).fill(_),                                               // 30
    new Array(16).fill(_),                                               // 31
  ]
})()

/** Printer: 16x16 (1x1 tile) — top-down office laser printer */
export const PRINTER_SPRITE: SpriteData = (() => {
  const W = '#E8E8EC'  // white body
  const G = '#B8B8C0'  // grey accent panel
  const D = '#888890'  // dark shadow/edge
  const B = '#1A1A2A'  // button area
  const T = '#3388FF'  // blue LED indicator
  const P = '#F4F4F0'  // paper (very light)
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, D, D, D, D, D, D, D, D, D, D, D, D, _, _],
    [_, D, W, W, W, W, W, W, W, W, W, W, W, W, D, _],
    [_, D, W, W, W, W, W, W, W, W, W, W, W, W, D, _],
    [_, D, W, W, G, G, G, G, G, G, G, G, W, W, D, _],
    [_, D, W, W, G, B, B, B, T, B, B, B, G, W, D, _],
    [_, D, W, W, G, G, G, G, G, G, G, G, W, W, D, _],
    [_, D, W, W, W, W, W, W, W, W, W, W, W, W, D, _],
    [_, D, P, P, P, P, P, P, P, P, P, P, P, P, D, _],
    [_, D, P, P, P, P, P, P, P, P, P, P, P, P, D, _],
    [_, D, W, W, W, W, W, W, W, W, W, W, W, W, D, _],
    [_, D, W, W, W, W, W, W, W, W, W, W, W, W, D, _],
    [_, D, W, W, W, W, W, W, W, W, W, W, W, W, D, _],
    [_, _, D, D, D, D, D, D, D, D, D, D, D, D, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Vending machine: 16x32 (1x2 tiles) — colorful drinks/snacks, front-facing view */
export const VENDING_MACHINE_SPRITE: SpriteData = (() => {
  const M = '#2A2A3A'   // machine body
  const S = '#3A3A4A'   // side panel
  const G = '#88AACC'   // glass display
  const L = '#AACCEE'   // glass highlight
  const R = '#CC3333'; const O = '#CC8833'; const Y = '#CCBB22'
  const BL = '#3366CC'; const GR = '#33AA55'; const Pu = '#AA44AA'
  const W = '#EEEEEE'   // white coin area
  const Dk = '#1A1A2A'  // dispense slot dark
  return [
    [_, _, M, M, M, M, M, M, M, M, M, M, M, M, _, _],
    [_, M, M, M, M, M, M, M, M, M, M, M, M, M, M, _],
    [_, M, S, G, G, G, G, G, G, G, G, G, G, S, M, _],
    [_, M, S, L, L, L, G, G, G, G, G, G, G, S, M, _],
    [_, M, S, R, R, O, O, Y, Y, BL, BL, GR, GR, S, M, _],
    [_, M, S, R, R, O, O, Y, Y, BL, BL, GR, GR, S, M, _],
    [_, M, S, G, G, G, G, G, G, G, G, G, G, S, M, _],
    [_, M, S, Pu, Pu, R, R, O, O, Y, Y, BL, BL, S, M, _],
    [_, M, S, Pu, Pu, R, R, O, O, Y, Y, BL, BL, S, M, _],
    [_, M, S, G, G, G, G, G, G, G, G, G, G, S, M, _],
    [_, M, S, GR, GR, Pu, Pu, R, R, O, O, Y, Y, S, M, _],
    [_, M, S, GR, GR, Pu, Pu, R, R, O, O, Y, Y, S, M, _],
    [_, M, S, G, G, G, G, G, G, G, G, G, G, S, M, _],
    [_, M, S, W, W, W, W, W, W, W, W, W, W, S, M, _],
    [_, M, S, Dk, Dk, Dk, Dk, Dk, Dk, Dk, Dk, Dk, Dk, S, M, _],
    [_, M, M, M, M, M, M, M, M, M, M, M, M, M, M, _],
    [_, _, M, M, M, M, M, M, M, M, M, M, M, M, _, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, S, S, S, S, S, S, S, S, S, S, S, S, M, _],
    [_, M, M, M, M, M, M, M, M, M, M, M, M, M, M, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

// ── Surface-Placeable Desk Items ────────────────────────────────

/** Coffee cup: 16x16 (1x1 tile, surface-placeable) — top-down mug with coffee */
export const COFFEE_CUP_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, '#C8B090', '#C8B090', '#C8B090', '#C8B090', '#C8B090', '#C8B090', _, _, _, _, _, _],
  [_, _, _, _, '#C8B090', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#C8B090', '#D0C0A8', _, _, _, _],
  [_, _, _, _, '#C8B090', '#3A1800', '#5A2800', '#5A2800', '#3A1800', '#3A1800', '#C8B090', '#D0C0A8', _, _, _, _],
  [_, _, _, _, '#C8B090', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#C8B090', '#D0C0A8', _, _, _, _],
  [_, _, _, _, '#C8B090', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#C8B090', '#D0C0A8', _, _, _, _],
  [_, _, _, _, '#C8B090', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#3A1800', '#C8B090', _, _, _, _, _],
  [_, _, _, _, _, '#C8B090', '#C8B090', '#C8B090', '#C8B090', '#C8B090', '#C8B090', _, _, _, _, _],
  [_, _, _, _, _, '#A89070', '#A89070', '#A89070', '#A89070', '#A89070', '#A89070', _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

/** Open laptop: 16x16 (1x1 tile, surface-placeable) — open laptop with glowing screen */
export const OPEN_LAPTOP_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', _, _, _, _],
  [_, _, _, _, '#1A1A28', '#2244AA', '#2244AA', '#3366CC', '#3366CC', '#2244AA', '#2244AA', '#1A1A28', _, _, _, _],
  [_, _, _, _, '#1A1A28', '#2244AA', '#4488EE', '#4488EE', '#4488EE', '#4488EE', '#2244AA', '#1A1A28', _, _, _, _],
  [_, _, _, _, '#1A1A28', '#2244AA', '#2244AA', '#3366CC', '#3366CC', '#2244AA', '#2244AA', '#1A1A28', _, _, _, _],
  [_, _, _, _, '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', '#1A1A28', _, _, _, _],
  [_, _, _, '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', _, _, _],
  [_, _, _, '#2A2A3A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#2A2A3A', _, _, _],
  [_, _, _, '#2A2A3A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#2A2A3A', _, _, _],
  [_, _, _, '#2A2A3A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#3A3A4A', '#2A2A3A', _, _, _],
  [_, _, _, _, '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

/** Desk papers: 16x16 (1x1 tile, surface-placeable) — scattered documents on desk */
export const DESK_PAPERS_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', _, _, _, _],
  [_, _, '#F0EEE8', '#9090A0', '#9090A0', '#9090A0', '#F0EEE8', '#F0EEE8', '#9090A0', '#F0EEE8', '#F0EEE8', '#F0EEE8', _, _, _, _],
  [_, _, '#F0EEE8', '#9090A0', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#9090A0', '#F0EEE8', '#F0EEE8', '#F0EEE8', _, _, _, _],
  [_, _, '#F0EEE8', '#9090A0', '#9090A0', '#9090A0', '#F0EEE8', '#F0EEE8', '#9090A0', '#9090A0', '#9090A0', '#F0EEE8', _, _, _, _],
  [_, _, '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#E8E0D8', '#E8E0D8', _, _],
  [_, _, '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#F0EEE8', '#E8E0D8', '#E8E0D8', _, _],
  [_, _, '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E8E0D8', '#E8E0D8', _, _],
  [_, _, '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E8E0D8', '#E8E0D8', _, _],
  [_, _, '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', _, _, _, _],
  [_, _, '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', '#E0DEDC', _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Speech Bubble Sprites ───────────────────────────────────────

/** Permission bubble: white square with "..." in amber, and a tail pointer (11x13) */
export const BUBBLE_PERMISSION_SPRITE: SpriteData = (() => {
  const B = '#555566' // border
  const F = '#EEEEFF' // fill
  const A = '#CCA700' // amber dots
  return [
    [B, B, B, B, B, B, B, B, B, B, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, A, F, A, F, A, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, B, B, B, B, B, B, B, B, B, B],
    [_, _, _, _, B, B, B, _, _, _, _],
    [_, _, _, _, _, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Waiting bubble: white square with green checkmark, and a tail pointer (11x13) */
export const BUBBLE_WAITING_SPRITE: SpriteData = (() => {
  const B = '#555566' // border
  const F = '#EEEEFF' // fill
  const G = '#44BB66' // green check
  return [
    [_, B, B, B, B, B, B, B, B, B, _],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, G, F, B],
    [B, F, F, F, F, F, F, G, F, F, B],
    [B, F, F, G, F, F, G, F, F, F, B],
    [B, F, F, F, G, G, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [_, B, B, B, B, B, B, B, B, B, _],
    [_, _, _, _, B, B, B, _, _, _, _],
    [_, _, _, _, _, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Thinking bubble: light blue cloud with "..." in darker blue (11x13) */
export const BUBBLE_THINKING_SPRITE: SpriteData = (() => {
  const B = '#555566' // border
  const F = '#E8F4FF' // fill - light blue
  const D = '#4488CC' // dots - darker blue
  return [
    [_, _, B, B, B, B, B, B, B, _, _],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, D, F, F, F, D, F, F, B],
    [B, F, F, F, F, D, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [_, B, B, F, F, F, F, F, B, B, _],
    [_, _, _, B, B, B, B, B, _, _, _],
    [_, _, _, _, B, B, B, _, _, _, _],
    [_, _, _, _, _, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Success bubble: white square with gold star (11x13) */
export const BUBBLE_SUCCESS_SPRITE: SpriteData = (() => {
  const B = '#555566' // border
  const F = '#EEEEFF' // fill
  const G = '#FFD700' // gold star
  return [
    [_, _, _, B, B, B, B, B, _, _, _],
    [_, B, B, F, F, F, F, F, B, B, _],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, G, G, F, F, F, B],
    [B, F, F, F, G, G, G, G, F, F, B],
    [B, F, F, G, G, G, G, G, G, F, B],
    [B, F, F, F, G, G, G, G, F, F, B],
    [B, F, F, F, F, G, G, F, F, F, B],
    [_, B, B, F, F, F, F, F, B, B, _],
    [_, _, _, B, B, B, B, B, _, _, _],
    [_, _, _, _, B, B, B, _, _, _, _],
    [_, _, _, _, _, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Error bubble: white square with red exclamation (11x13) */
export const BUBBLE_ERROR_SPRITE: SpriteData = (() => {
  const B = '#555566' // border
  const F = '#EEEEFF' // fill
  const R = '#DD4444' // red exclamation
  return [
    [_, _, B, B, B, B, B, B, B, _, _],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, R, R, R, F, F, F, B],
    [B, F, F, F, R, R, R, F, F, F, B],
    [B, F, F, F, R, R, R, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [_, B, B, B, B, B, B, B, B, B, _],
    [_, _, _, _, B, B, B, _, _, _, _],
    [_, _, _, _, B, B, B, _, _, _, _],
    [_, _, _, _, _, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Waiting on human bubble: white square with purple hourglass (11x13) */
export const BUBBLE_WAITING_HUMAN_SPRITE: SpriteData = (() => {
  const B = '#555566' // border
  const F = '#EEEEFF' // fill
  const P = '#9966CC' // purple hourglass
  return [
    [_, _, B, B, B, B, B, B, B, _, _],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, F, F, F, F, F, F, F, B],
    [B, F, F, P, P, P, P, P, F, F, B],
    [B, F, F, P, P, P, P, P, F, F, B],
    [B, F, F, F, P, P, P, F, F, F, B],
    [B, F, F, F, P, P, P, F, F, F, B],
    [B, F, F, P, P, P, P, P, F, F, B],
    [_, B, B, F, F, F, F, F, B, B, _],
    [_, _, _, B, B, B, B, B, _, _, _],
    [_, _, _, _, B, B, B, _, _, _, _],
    [_, _, _, _, _, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _],
  ]
})()

/** Crown badge: small golden crown for parent agents (9x7) */
export const CROWN_BADGE_SPRITE: SpriteData = (() => {
  const G = '#FFD700' // gold
  const O = '#FFA500' // orange outline
  return [
    [_, _, _, O, O, O, O, O, _],
    [_, O, G, G, G, G, G, O, _],
    [O, G, G, G, G, G, G, G, O],
    [O, G, G, G, G, G, G, G, O],
    [O, G, G, G, G, G, G, G, O],
    [_, O, G, G, O, O, G, O, _],
    [_, _, O, O, _, _, O, O, _],
  ]
})()

// ── Character Sprites ───────────────────────────────────────────
// 16x24 characters with palette substitution

/** Palette colors for 6 distinct agent characters */
export const CHARACTER_PALETTES = [
  { skin: '#FFCC99', shirt: '#4488CC', pants: '#334466', hair: '#553322', shoes: '#222222' },
  { skin: '#FFCC99', shirt: '#CC4444', pants: '#333333', hair: '#FFD700', shoes: '#222222' },
  { skin: '#DEB887', shirt: '#44AA66', pants: '#334444', hair: '#222222', shoes: '#333333' },
  { skin: '#FFCC99', shirt: '#AA55CC', pants: '#443355', hair: '#AA4422', shoes: '#222222' },
  { skin: '#DEB887', shirt: '#CCAA33', pants: '#444433', hair: '#553322', shoes: '#333333' },
  { skin: '#FFCC99', shirt: '#FF8844', pants: '#443322', hair: '#111111', shoes: '#222222' },
] as const

interface CharPalette {
  skin: string
  shirt: string
  pants: string
  hair: string
  shoes: string
}

// Template keys for character pixel data
const H = 'hair'
const K = 'skin'
const S = 'shirt'
const P = 'pants'
const O = 'shoes'
const E = '#FFFFFF' // eyes

type TemplateCell = typeof H | typeof K | typeof S | typeof P | typeof O | typeof E | typeof _

/** Resolve a template to SpriteData using a palette */
function resolveTemplate(template: TemplateCell[][], palette: CharPalette): SpriteData {
  return template.map((row) =>
    row.map((cell) => {
      if (cell === _) return ''
      if (cell === E) return E
      if (cell === H) return palette.hair
      if (cell === K) return palette.skin
      if (cell === S) return palette.shirt
      if (cell === P) return palette.pants
      if (cell === O) return palette.shoes
      return cell
    }),
  )
}

/** Flip a template horizontally (for generating left sprites from right) */
function flipHorizontal(template: TemplateCell[][]): TemplateCell[][] {
  return template.map((row) => [...row].reverse())
}

// ════════════════════════════════════════════════════════════════
// DOWN-FACING SPRITES
// ════════════════════════════════════════════════════════════════

// Walk down: 4 frames (1, 2=standing, 3=mirror legs, 2 again)
const CHAR_WALK_DOWN_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, E, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, P, P, _, _, _, _, P, P, _, _, _, _],
  [_, _, _, _, P, P, _, _, _, _, P, P, _, _, _, _],
  [_, _, _, _, O, O, _, _, _, _, _, O, O, _, _, _],
  [_, _, _, _, O, O, _, _, _, _, _, O, O, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_WALK_DOWN_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, E, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_WALK_DOWN_3: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, E, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, O, O, _, _, _, _, _, _, P, P, _, _, _],
  [_, _, _, O, O, _, _, _, _, _, _, P, P, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, O, O, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, O, O, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// Down typing: front-facing sitting, arms on keyboard
const CHAR_DOWN_TYPE_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, E, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, K, K, S, S, S, S, S, S, K, K, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_DOWN_TYPE_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, E, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, K, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, _, K, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// Down reading: front-facing sitting, arms at sides, looking at screen
const CHAR_DOWN_READ_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, E, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_DOWN_READ_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, E, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ════════════════════════════════════════════════════════════════
// UP-FACING SPRITES (back of head, no face)
// ════════════════════════════════════════════════════════════════

// Walk up: back view, legs alternate
const CHAR_WALK_UP_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, P, P, _, _, _, _, P, P, _, _, _, _],
  [_, _, _, _, P, P, _, _, _, _, P, P, _, _, _, _],
  [_, _, _, O, O, _, _, _, _, _, _, O, O, _, _, _],
  [_, _, _, O, O, _, _, _, _, _, _, O, O, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_WALK_UP_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_WALK_UP_3: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, O, O, _, _, _, _, _, _, P, P, _, _, _],
  [_, _, _, O, O, _, _, _, _, _, _, P, P, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, O, O, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, O, O, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// Up typing: back view, arms out to keyboard
const CHAR_UP_TYPE_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, K, K, S, S, S, S, S, S, K, K, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_UP_TYPE_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, K, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, _, K, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// Up reading: back view, arms at sides
const CHAR_UP_READ_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_UP_READ_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, _, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, H, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, K, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
  [_, _, _, _, K, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, P, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ════════════════════════════════════════════════════════════════
// RIGHT-FACING SPRITES (side profile, one eye visible)
// Left sprites are generated by flipHorizontal()
// ════════════════════════════════════════════════════════════════

// Right walk: side view, legs step
const CHAR_WALK_RIGHT_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, K, S, S, S, S, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, _, P, P, _, _, _, _],
  [_, _, _, _, _, P, P, _, _, _, P, P, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, _, _, O, O, _, _, _],
  [_, _, _, _, _, O, O, _, _, _, _, O, O, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_WALK_RIGHT_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, K, S, S, S, S, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, O, O, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, O, O, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_WALK_RIGHT_3: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, K, S, S, S, S, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, P, P, P, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, O, O, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// Right typing: side profile sitting, one arm on keyboard
const CHAR_RIGHT_TYPE_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, K, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, O, O, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_RIGHT_TYPE_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, K, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, _, _, K, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, O, O, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// Right reading: side sitting, arms at side
const CHAR_RIGHT_READ_1: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, K, S, S, S, S, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, O, O, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

const CHAR_RIGHT_READ_2: TemplateCell[][] = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, H, H, H, H, H, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, E, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, K, _, _, _, _, _],
  [_, _, _, _, _, _, K, K, K, K, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, S, S, S, S, S, S, _, _, _, _, _],
  [_, _, _, _, _, K, S, S, S, S, K, _, _, _, _, _],
  [_, _, _, _, _, _, S, S, S, S, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, P, P, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, P, P, _, _, _, _, _, _],
  [_, _, _, _, _, _, P, P, _, P, P, _, _, _, _, _],
  [_, _, _, _, _, _, O, O, _, O, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ════════════════════════════════════════════════════════════════
// Template export (for export-characters script)
// ════════════════════════════════════════════════════════════════

/** All character templates grouped by direction, for use by the export script.
 *  Frame order per direction: walk1, walk2, walk3, type1, type2, read1, read2 */
export const CHARACTER_TEMPLATES = {
  down: [
    CHAR_WALK_DOWN_1, CHAR_WALK_DOWN_2, CHAR_WALK_DOWN_3,
    CHAR_DOWN_TYPE_1, CHAR_DOWN_TYPE_2,
    CHAR_DOWN_READ_1, CHAR_DOWN_READ_2,
  ],
  up: [
    CHAR_WALK_UP_1, CHAR_WALK_UP_2, CHAR_WALK_UP_3,
    CHAR_UP_TYPE_1, CHAR_UP_TYPE_2,
    CHAR_UP_READ_1, CHAR_UP_READ_2,
  ],
  right: [
    CHAR_WALK_RIGHT_1, CHAR_WALK_RIGHT_2, CHAR_WALK_RIGHT_3,
    CHAR_RIGHT_TYPE_1, CHAR_RIGHT_TYPE_2,
    CHAR_RIGHT_READ_1, CHAR_RIGHT_READ_2,
  ],
} as const

// ════════════════════════════════════════════════════════════════
// Loaded character sprites (from PNG assets)
// ════════════════════════════════════════════════════════════════

interface LoadedCharacterData {
  down: SpriteData[]
  up: SpriteData[]
  right: SpriteData[]
}

let loadedCharacters: LoadedCharacterData[] | null = null

/** Set pre-colored character sprites loaded from PNG assets. Call this when characterSpritesLoaded message arrives. */
export function setCharacterTemplates(data: LoadedCharacterData[]): void {
  loadedCharacters = data
  // Clear cache so sprites are rebuilt from loaded data
  spriteCache.clear()
}

/** Flip a SpriteData horizontally (for generating left sprites from right) */
function flipSpriteHorizontal(sprite: SpriteData): SpriteData {
  return sprite.map((row) => [...row].reverse())
}

// ════════════════════════════════════════════════════════════════
// Sprite resolution + caching
// ════════════════════════════════════════════════════════════════

export interface CharacterSprites {
  walk: Record<Direction, [SpriteData, SpriteData, SpriteData, SpriteData]>
  typing: Record<Direction, [SpriteData, SpriteData]>
  reading: Record<Direction, [SpriteData, SpriteData]>
}

const spriteCache = new Map<string, CharacterSprites>()

/** Apply hue shift to every sprite in a CharacterSprites set */
function hueShiftSprites(sprites: CharacterSprites, hueShift: number): CharacterSprites {
  const color: FloorColor = { h: hueShift, s: 0, b: 0, c: 0 }
  const shift = (s: SpriteData) => adjustSprite(s, color)
  const shiftWalk = (arr: [SpriteData, SpriteData, SpriteData, SpriteData]): [SpriteData, SpriteData, SpriteData, SpriteData] =>
    [shift(arr[0]), shift(arr[1]), shift(arr[2]), shift(arr[3])]
  const shiftPair = (arr: [SpriteData, SpriteData]): [SpriteData, SpriteData] =>
    [shift(arr[0]), shift(arr[1])]
  return {
    walk: {
      [Dir.DOWN]: shiftWalk(sprites.walk[Dir.DOWN]),
      [Dir.UP]: shiftWalk(sprites.walk[Dir.UP]),
      [Dir.RIGHT]: shiftWalk(sprites.walk[Dir.RIGHT]),
      [Dir.LEFT]: shiftWalk(sprites.walk[Dir.LEFT]),
    } as Record<Direction, [SpriteData, SpriteData, SpriteData, SpriteData]>,
    typing: {
      [Dir.DOWN]: shiftPair(sprites.typing[Dir.DOWN]),
      [Dir.UP]: shiftPair(sprites.typing[Dir.UP]),
      [Dir.RIGHT]: shiftPair(sprites.typing[Dir.RIGHT]),
      [Dir.LEFT]: shiftPair(sprites.typing[Dir.LEFT]),
    } as Record<Direction, [SpriteData, SpriteData]>,
    reading: {
      [Dir.DOWN]: shiftPair(sprites.reading[Dir.DOWN]),
      [Dir.UP]: shiftPair(sprites.reading[Dir.UP]),
      [Dir.RIGHT]: shiftPair(sprites.reading[Dir.RIGHT]),
      [Dir.LEFT]: shiftPair(sprites.reading[Dir.LEFT]),
    } as Record<Direction, [SpriteData, SpriteData]>,
  }
}

export function getCharacterSprites(paletteIndex: number, hueShift = 0): CharacterSprites {
  const cacheKey = `${paletteIndex}:${hueShift}`
  const cached = spriteCache.get(cacheKey)
  if (cached) return cached

  let sprites: CharacterSprites

  if (loadedCharacters) {
    // Use pre-colored character sprites directly (no palette swapping)
    const char = loadedCharacters[paletteIndex % loadedCharacters.length]
    const d = char.down
    const u = char.up
    const rt = char.right
    const flip = flipSpriteHorizontal

    sprites = {
      walk: {
        [Dir.DOWN]: [d[0], d[1], d[2], d[1]],
        [Dir.UP]: [u[0], u[1], u[2], u[1]],
        [Dir.RIGHT]: [rt[0], rt[1], rt[2], rt[1]],
        [Dir.LEFT]: [flip(rt[0]), flip(rt[1]), flip(rt[2]), flip(rt[1])],
      },
      typing: {
        [Dir.DOWN]: [d[3], d[4]],
        [Dir.UP]: [u[3], u[4]],
        [Dir.RIGHT]: [rt[3], rt[4]],
        [Dir.LEFT]: [flip(rt[3]), flip(rt[4])],
      },
      reading: {
        [Dir.DOWN]: [d[5], d[6]],
        [Dir.UP]: [u[5], u[6]],
        [Dir.RIGHT]: [rt[5], rt[6]],
        [Dir.LEFT]: [flip(rt[5]), flip(rt[6])],
      },
    }
  } else {
    // Fallback: use hardcoded templates with palette swapping
    const pal = CHARACTER_PALETTES[paletteIndex % CHARACTER_PALETTES.length]
    const r = (t: TemplateCell[][]) => resolveTemplate(t, pal)
    const rf = (t: TemplateCell[][]) => resolveTemplate(flipHorizontal(t), pal)

    sprites = {
      walk: {
        [Dir.DOWN]: [r(CHAR_WALK_DOWN_1), r(CHAR_WALK_DOWN_2), r(CHAR_WALK_DOWN_3), r(CHAR_WALK_DOWN_2)],
        [Dir.UP]: [r(CHAR_WALK_UP_1), r(CHAR_WALK_UP_2), r(CHAR_WALK_UP_3), r(CHAR_WALK_UP_2)],
        [Dir.RIGHT]: [r(CHAR_WALK_RIGHT_1), r(CHAR_WALK_RIGHT_2), r(CHAR_WALK_RIGHT_3), r(CHAR_WALK_RIGHT_2)],
        [Dir.LEFT]: [rf(CHAR_WALK_RIGHT_1), rf(CHAR_WALK_RIGHT_2), rf(CHAR_WALK_RIGHT_3), rf(CHAR_WALK_RIGHT_2)],
      },
      typing: {
        [Dir.DOWN]: [r(CHAR_DOWN_TYPE_1), r(CHAR_DOWN_TYPE_2)],
        [Dir.UP]: [r(CHAR_UP_TYPE_1), r(CHAR_UP_TYPE_2)],
        [Dir.RIGHT]: [r(CHAR_RIGHT_TYPE_1), r(CHAR_RIGHT_TYPE_2)],
        [Dir.LEFT]: [rf(CHAR_RIGHT_TYPE_1), rf(CHAR_RIGHT_TYPE_2)],
      },
      reading: {
        [Dir.DOWN]: [r(CHAR_DOWN_READ_1), r(CHAR_DOWN_READ_2)],
        [Dir.UP]: [r(CHAR_UP_READ_1), r(CHAR_UP_READ_2)],
        [Dir.RIGHT]: [r(CHAR_RIGHT_READ_1), r(CHAR_RIGHT_READ_2)],
        [Dir.LEFT]: [rf(CHAR_RIGHT_READ_1), rf(CHAR_RIGHT_READ_2)],
      },
    }
  }

  // Apply hue shift if non-zero
  if (hueShift !== 0) {
    sprites = hueShiftSprites(sprites, hueShift)
  }

  spriteCache.set(cacheKey, sprites)
  return sprites
}
