import type { SpriteData } from '../types.js'

// Window colors
const G = '#9DCCED' // glass (sky blue)
const H = '#C8E8FF' // highlight (bright)
const T = '#7AB8D8' // tint (darker glass)
const F = '#1C1A22' // frame dark
const S = '#8A7050' // sill (warm brown)

// ── LARGE_WINDOW_A_SPRITE ────────────────────────────────────────
// 3×1 tiles = 48×16 pixels
// Three glass panes divided at cols 15|16 and 31|32
// Layout: [F][pane0 14px][F][F][pane1 14px][F][F][pane2 14px][F]
// Top 2 rows: frame, rows 2-12: glass, rows 13-14: frame, rows 15: sill
export const LARGE_WINDOW_A_SPRITE: SpriteData = (() => {
  const W = 48
  const rows: string[][] = []

  // Row 0: top frame
  rows.push(new Array(W).fill(F))

  // Row 1: top frame
  rows.push(new Array(W).fill(F))

  // Rows 2-12: glass panes (11 rows)
  for (let r = 0; r < 11; r++) {
    const row: string[] = []
    for (let c = 0; c < W; c++) {
      // Vertical dividers / outer frame cols: 0, 15, 16, 31, 32, 47
      if (c === 0 || c === 15 || c === 16 || c === 31 || c === 32 || c === 47) {
        row.push(F)
      } else if (r === 0 && (c <= 5 || (c >= 17 && c <= 22) || (c >= 33 && c <= 38))) {
        // First glass row: highlight strip near top-left of each pane
        row.push(H)
      } else if (c <= 3 || (c >= 17 && c <= 19) || (c >= 33 && c <= 35)) {
        // Slight tint on left edge of each pane for depth
        row.push(r < 3 ? T : G)
      } else {
        row.push(G)
      }
    }
    rows.push(row)
  }

  // Row 13: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 14: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 15: sill
  rows.push(new Array(W).fill(S))

  return rows
})()

// ── LARGE_WINDOW_B_SPRITE ────────────────────────────────────────
// 3×1 tiles = 48×16 pixels
// Arched-top variant: top-center pixel of each pane is lighter
export const LARGE_WINDOW_B_SPRITE: SpriteData = (() => {
  const W = 48
  const rows: string[][] = []

  // Row 0: top frame
  rows.push(new Array(W).fill(F))

  // Row 1: top frame with arch hint (center-top of each pane = highlight)
  {
    const row = new Array(W).fill(F) as string[]
    // Center of pane 0: col 8, pane 1: col 24, pane 2: col 40
    row[8] = H
    row[24] = H
    row[40] = H
    rows.push(row)
  }

  // Rows 2-12: glass panes (11 rows) with slightly different tint distribution
  for (let r = 0; r < 11; r++) {
    const row: string[] = []
    for (let c = 0; c < W; c++) {
      if (c === 0 || c === 15 || c === 16 || c === 31 || c === 32 || c === 47) {
        row.push(F)
      } else if (r === 0 && (c >= 6 && c <= 10 || (c >= 22 && c <= 26) || (c >= 38 && c <= 42))) {
        // Arch center glow
        row.push(H)
      } else if (r <= 2 && (c <= 5 || (c >= 17 && c <= 21) || (c >= 33 && c <= 37))) {
        row.push(H)
      } else if (r >= 7) {
        // Lower portion: slightly darker tint
        row.push(T)
      } else {
        row.push(G)
      }
    }
    rows.push(row)
  }

  // Row 13: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 14: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 15: sill
  rows.push(new Array(W).fill(S))

  return rows
})()

// ── LARGE_WINDOW_C_SPRITE ────────────────────────────────────────
// 4×1 tiles = 64×16 pixels
// Four glass panes divided at cols 15|16, 31|32, 47|48
export const LARGE_WINDOW_C_SPRITE: SpriteData = (() => {
  const W = 64
  const rows: string[][] = []

  // Divider positions (1px each): 0, 15, 16, 31, 32, 47, 48, 63
  const isDivider = (c: number) =>
    c === 0 || c === 15 || c === 16 || c === 31 || c === 32 || c === 47 || c === 48 || c === 63

  // Pane left edges (cols after left frame/divider): 1, 17, 33, 49
  const isHighlightCol = (c: number) =>
    (c >= 1 && c <= 4) ||
    (c >= 17 && c <= 20) ||
    (c >= 33 && c <= 36) ||
    (c >= 49 && c <= 52)

  // Row 0: top frame
  rows.push(new Array(W).fill(F))

  // Row 1: top frame
  rows.push(new Array(W).fill(F))

  // Rows 2-12: glass panes
  for (let r = 0; r < 11; r++) {
    const row: string[] = []
    for (let c = 0; c < W; c++) {
      if (isDivider(c)) {
        row.push(F)
      } else if (r === 0 && isHighlightCol(c)) {
        row.push(H)
      } else {
        row.push(G)
      }
    }
    rows.push(row)
  }

  // Row 13: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 14: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 15: sill
  rows.push(new Array(W).fill(S))

  return rows
})()

// ── SMALL_WINDOW_A_SPRITE ────────────────────────────────────────
// 2×1 tiles = 32×16 pixels
// Two glass panes divided at cols 15|16
export const SMALL_WINDOW_A_SPRITE: SpriteData = (() => {
  const W = 32
  const rows: string[][] = []

  // Row 0: top frame
  rows.push(new Array(W).fill(F))

  // Row 1: top frame
  rows.push(new Array(W).fill(F))

  // Rows 2-12: glass panes
  for (let r = 0; r < 11; r++) {
    const row: string[] = []
    for (let c = 0; c < W; c++) {
      if (c === 0 || c === 15 || c === 16 || c === 31) {
        row.push(F)
      } else if (r === 0 && (c <= 4 || (c >= 17 && c <= 21))) {
        row.push(H)
      } else {
        row.push(G)
      }
    }
    rows.push(row)
  }

  // Row 13: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 14: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 15: sill
  rows.push(new Array(W).fill(S))

  return rows
})()

// ── SMALL_WINDOW_B_SPRITE ────────────────────────────────────────
// 1×1 tile = 16×16 pixels
// Single-pane window with 1px frame around all edges
export const SMALL_WINDOW_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []

  // Row 0: top frame
  rows.push(new Array(16).fill(F))

  // Row 1: top frame
  rows.push(new Array(16).fill(F))

  // Rows 2-12: glass interior (frame at col 0 and 15)
  for (let r = 0; r < 11; r++) {
    const row: string[] = []
    for (let c = 0; c < 16; c++) {
      if (c === 0 || c === 15) {
        row.push(F)
      } else if (r === 0 && c <= 4) {
        row.push(H)
      } else {
        row.push(G)
      }
    }
    rows.push(row)
  }

  // Row 13: bottom frame
  rows.push(new Array(16).fill(F))

  // Row 14: bottom frame
  rows.push(new Array(16).fill(F))

  // Row 15: sill
  rows.push(new Array(16).fill(S))

  return rows
})()

// ── SMALL_WINDOW_C_SPRITE ────────────────────────────────────────
// 2×1 tiles = 32×16 pixels
// Two panes with dark shutter bars on left and right edges (2px each)
export const SMALL_WINDOW_C_SPRITE: SpriteData = (() => {
  const W = 32
  const rows: string[][] = []

  // Row 0: top frame
  rows.push(new Array(W).fill(F))

  // Row 1: top frame
  rows.push(new Array(W).fill(F))

  // Rows 2-12: glass with shutters
  for (let r = 0; r < 11; r++) {
    const row: string[] = []
    for (let c = 0; c < W; c++) {
      // Shutter strips: cols 0-1 (left shutter), cols 30-31 (right shutter)
      // Center divider: cols 15-16
      if (c <= 1 || c >= 30 || c === 15 || c === 16) {
        row.push(F)
      } else if (r === 0 && (c <= 5 || (c >= 17 && c <= 21))) {
        row.push(H)
      } else {
        row.push(G)
      }
    }
    rows.push(row)
  }

  // Row 13: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 14: bottom frame
  rows.push(new Array(W).fill(F))

  // Row 15: sill
  rows.push(new Array(W).fill(S))

  return rows
})()
