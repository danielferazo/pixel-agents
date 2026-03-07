import type { SpriteData } from '../types.js'

const _ = '' // transparent

// ── Color aliases ─────────────────────────────────────────────────────────────
// Wood shelf
const W  = '#5C3E1E' // dark frame
const M  = '#7A5530' // mid wood
const L  = '#9A7040' // light shelf
const H  = '#B88050' // highlight
// Book colors
const R  = '#CC3333' // red
const B  = '#3355AA' // blue
const G  = '#336644' // green
const Y  = '#CCAA22' // yellow
const P  = '#994499' // purple
const O  = '#CC6622' // orange
// Cardboard
const CB = '#C8A060' // cardboard tan
const CD = '#9A7840' // cardboard dark
const TP = '#8BAABB' // tape
// Paper
const PA = '#F0EEE8' // paper off-white
const PS = '#D8D6D0' // paper shadow / ruled lines
const PD = '#B0AEA8' // paper dark edge

// ── BOOKSHELF_A_SPRITE (1×2 = 16×32px) ───────────────────────────────────────
// Full shelves of colorful books, two shelf sections
export const BOOKSHELF_A_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top rail
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Rows 1–6: top shelf books
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, B, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, B, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, B, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, B, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, B, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, B, W])
  // Row 7: middle shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 8–14: bottom shelf books (different arrangement)
  rows.push([W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, W])
  rows.push([W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, W])
  rows.push([W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, W])
  rows.push([W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, W])
  rows.push([W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, W])
  rows.push([W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, W])
  rows.push([W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, W])
  // Row 15: base of top tile
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Row 16: top of bottom tile (gap visual)
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Rows 17–22: third shelf books
  rows.push([W, Y, Y, R, R, B, B, G, G, O, O, P, P, Y, R, W])
  rows.push([W, Y, Y, R, R, B, B, G, G, O, O, P, P, Y, R, W])
  rows.push([W, Y, Y, R, R, B, B, G, G, O, O, P, P, Y, R, W])
  rows.push([W, Y, Y, R, R, B, B, G, G, O, O, P, P, Y, R, W])
  rows.push([W, Y, Y, R, R, B, B, G, G, O, O, P, P, Y, R, W])
  rows.push([W, Y, Y, R, R, B, B, G, G, O, O, P, P, Y, R, W])
  // Row 23: shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 24–30: fourth shelf books
  rows.push([W, G, G, P, P, R, R, Y, Y, B, B, O, O, G, P, W])
  rows.push([W, G, G, P, P, R, R, Y, Y, B, B, O, O, G, P, W])
  rows.push([W, G, G, P, P, R, R, Y, Y, B, B, O, O, G, P, W])
  rows.push([W, G, G, P, P, R, R, Y, Y, B, B, O, O, G, P, W])
  rows.push([W, G, G, P, P, R, R, Y, Y, B, B, O, O, G, P, W])
  rows.push([W, G, G, P, P, R, R, Y, Y, B, B, O, O, G, P, W])
  rows.push([W, G, G, P, P, R, R, Y, Y, B, B, O, O, G, P, W])
  // Row 31: base
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  return rows
})()

// ── BOOKSHELF_B_SPRITE (1×2 = 16×32px) ───────────────────────────────────────
// Bookshelf with gaps — books clustered with empty spaces
export const BOOKSHELF_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top rail
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Rows 1–6: top shelf — left cluster, gap, right cluster
  rows.push([W, R, R, B, B, _, _, Y, Y, _, _, O, O, B, R, W])
  rows.push([W, R, R, B, B, _, _, Y, Y, _, _, O, O, B, R, W])
  rows.push([W, R, R, B, B, _, _, Y, Y, _, _, O, O, B, R, W])
  rows.push([W, R, R, B, B, _, _, Y, Y, _, _, O, O, B, R, W])
  rows.push([W, R, R, B, B, _, _, Y, Y, _, _, O, O, B, R, W])
  rows.push([W, R, R, B, B, _, _, Y, Y, _, _, O, O, B, R, W])
  // Row 7: shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 8–14: bottom of top tile — sparse books
  rows.push([W, _, _, G, G, G, _, R, R, _, P, P, P, _, _, W])
  rows.push([W, _, _, G, G, G, _, R, R, _, P, P, P, _, _, W])
  rows.push([W, _, _, G, G, G, _, R, R, _, P, P, P, _, _, W])
  rows.push([W, _, _, G, G, G, _, R, R, _, P, P, P, _, _, W])
  rows.push([W, _, _, G, G, G, _, R, R, _, P, P, P, _, _, W])
  rows.push([W, _, _, G, G, G, _, R, R, _, P, P, P, _, _, W])
  rows.push([W, _, _, G, G, G, _, R, R, _, P, P, P, _, _, W])
  // Row 15: base of top tile
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Row 16: top of bottom tile
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Rows 17–22: scattered books
  rows.push([W, Y, Y, _, _, B, B, _, _, G, G, _, _, Y, Y, W])
  rows.push([W, Y, Y, _, _, B, B, _, _, G, G, _, _, Y, Y, W])
  rows.push([W, Y, Y, _, _, B, B, _, _, G, G, _, _, Y, Y, W])
  rows.push([W, Y, Y, _, _, B, B, _, _, G, G, _, _, Y, Y, W])
  rows.push([W, Y, Y, _, _, B, B, _, _, G, G, _, _, Y, Y, W])
  rows.push([W, Y, Y, _, _, B, B, _, _, G, G, _, _, Y, Y, W])
  // Row 23: shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 24–30: mostly empty bottom shelf
  rows.push([W, _, _, _, O, O, O, _, _, _, R, R, _, _, _, W])
  rows.push([W, _, _, _, O, O, O, _, _, _, R, R, _, _, _, W])
  rows.push([W, _, _, _, O, O, O, _, _, _, R, R, _, _, _, W])
  rows.push([W, _, _, _, O, O, O, _, _, _, R, R, _, _, _, W])
  rows.push([W, _, _, _, O, O, O, _, _, _, R, R, _, _, _, W])
  rows.push([W, _, _, _, O, O, O, _, _, _, R, R, _, _, _, W])
  rows.push([W, _, _, _, O, O, O, _, _, _, R, R, _, _, _, W])
  // Row 31: base
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  return rows
})()

// ── BOOKSHELF_C_SPRITE (1×2 = 16×32px) ───────────────────────────────────────
// Bookshelf with decorative items — top: books, bottom: box + small plant
export const BOOKSHELF_C_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top rail
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Rows 1–6: top shelf books
  rows.push([W, B, B, G, G, R, R, Y, Y, P, P, B, B, G, R, W])
  rows.push([W, B, B, G, G, R, R, Y, Y, P, P, B, B, G, R, W])
  rows.push([W, B, B, G, G, R, R, Y, Y, P, P, B, B, G, R, W])
  rows.push([W, B, B, G, G, R, R, Y, Y, P, P, B, B, G, R, W])
  rows.push([W, B, B, G, G, R, R, Y, Y, P, P, B, B, G, R, W])
  rows.push([W, B, B, G, G, R, R, Y, Y, P, P, B, B, G, R, W])
  // Row 7: middle shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 8–14: second shelf — small photo frame + box decor
  // Photo frame: cols 1-4, tan box cols 5-8, plant cols 10-13
  rows.push([W, M, M, M, M, CB, CB, CB, _, '#228844', '#228844', '#228844', _, _, _, W])
  rows.push([W, M, PA, PA, M, CB, CD, CB, _, '#228844', '#1A6633', '#228844', _, _, _, W])
  rows.push([W, M, PA, PA, M, CB, CD, CB, _, '#228844', '#1A6633', '#228844', _, _, _, W])
  rows.push([W, M, PA, PA, M, CB, CD, CB, _, '#228844', '#228844', '#228844', _, _, _, W])
  rows.push([W, M, M, M, M, CB, CB, CB, _, '#339955', '#339955', '#228844', _, _, _, W])
  rows.push([W, H, H, H, H, CB, CB, CB, _, '#2A5530', '#2A5530', '#2A5530', _, _, _, W])
  rows.push([W, H, H, H, H, CD, CD, CD, _, '#2A5530', '#2A5530', '#2A5530', _, _, _, W])
  // Row 15: base of top tile
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Row 16: top of bottom tile
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Rows 17–22: third shelf — some books + trophy/award
  rows.push([W, R, R, R, _, _, Y, Y, Y, _, '#D4A020', '#D4A020', _, B, B, W])
  rows.push([W, R, R, R, _, _, Y, Y, Y, _, '#D4A020', '#D4A020', _, B, B, W])
  rows.push([W, R, R, R, _, _, Y, Y, Y, _, '#C89010', '#D4A020', _, B, B, W])
  rows.push([W, R, R, R, _, _, Y, Y, Y, _, '#C89010', '#C89010', _, B, B, W])
  rows.push([W, R, R, R, _, _, Y, Y, Y, _, '#A07010', '#A07010', _, B, B, W])
  rows.push([W, R, R, R, _, _, Y, Y, Y, _, '#A07010', '#A07010', _, B, B, W])
  // Row 23: shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 24–30: bottom shelf — cardboard box left, books right
  rows.push([W, CB, CB, CB, CB, CB, _, G, G, P, P, O, O, G, G, W])
  rows.push([W, CB, CD, TP, TP, CB, _, G, G, P, P, O, O, G, G, W])
  rows.push([W, CB, CD, TP, TP, CB, _, G, G, P, P, O, O, G, G, W])
  rows.push([W, CB, CD, CD, CD, CB, _, G, G, P, P, O, O, G, G, W])
  rows.push([W, CB, CB, CB, CB, CB, _, G, G, P, P, O, O, G, G, W])
  rows.push([W, CB, CB, CB, CB, CB, _, G, G, P, P, O, O, G, G, W])
  rows.push([W, CD, CD, CD, CD, CD, _, G, G, P, P, O, O, G, G, W])
  // Row 31: base
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  return rows
})()

// ── BOOKSHELF_D_SPRITE (1×2 = 16×32px) ───────────────────────────────────────
// Empty bookshelf — just wooden frame and shelf planks
export const BOOKSHELF_D_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: top rail
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Rows 1–6: empty top shelf (wood interior visible)
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Row 7: middle shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 8–14: empty bottom shelf of top tile
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Row 15: base of top tile
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Row 16: top of bottom tile
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Rows 17–22: empty third shelf
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Row 23: shelf plank
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 24–30: empty bottom shelf
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Row 31: base
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  return rows
})()

// ── BOOKSHELF_E_SPRITE (2×2 = 32×32px) ───────────────────────────────────────
// Wide double bookshelf — two sections with center divider post
export const BOOKSHELF_E_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // Row 0: full-width top rail
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, W, W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Rows 1–6: top shelf — left section books | divider | right section books
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, W, W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, Y, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, W, W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, Y, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, W, W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, Y, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, W, W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, Y, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, W, W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, Y, W])
  rows.push([W, R, R, B, B, G, G, Y, Y, P, P, O, O, R, W, W, B, B, G, G, Y, Y, R, R, P, P, O, O, B, G, Y, W])
  // Row 7: shelf planks (both sections)
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, W, W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 8–14: second shelf books (alternating arrangement)
  rows.push([W, G, G, Y, Y, R, R, B, B, O, O, P, P, G, W, W, Y, Y, R, R, G, G, B, B, O, O, P, P, Y, R, G, W])
  rows.push([W, G, G, Y, Y, R, R, B, B, O, O, P, P, G, W, W, Y, Y, R, R, G, G, B, B, O, O, P, P, Y, R, G, W])
  rows.push([W, G, G, Y, Y, R, R, B, B, O, O, P, P, G, W, W, Y, Y, R, R, G, G, B, B, O, O, P, P, Y, R, G, W])
  rows.push([W, G, G, Y, Y, R, R, B, B, O, O, P, P, G, W, W, Y, Y, R, R, G, G, B, B, O, O, P, P, Y, R, G, W])
  rows.push([W, G, G, Y, Y, R, R, B, B, O, O, P, P, G, W, W, Y, Y, R, R, G, G, B, B, O, O, P, P, Y, R, G, W])
  rows.push([W, G, G, Y, Y, R, R, B, B, O, O, P, P, G, W, W, Y, Y, R, R, G, G, B, B, O, O, P, P, Y, R, G, W])
  rows.push([W, G, G, Y, Y, R, R, B, B, O, O, P, P, G, W, W, Y, Y, R, R, G, G, B, B, O, O, P, P, Y, R, G, W])
  // Row 15: base of top tile
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, W, W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  // Row 16: gap row with highlights
  rows.push([W, H, _, _, _, _, _, _, _, _, _, _, _, H, W, W, H, _, _, _, _, _, _, _, _, _, _, _, _, _, H, W])
  // Rows 17–22: third shelf books
  rows.push([W, P, P, O, O, B, B, G, G, R, R, Y, Y, P, W, W, O, O, B, B, P, P, G, G, R, R, Y, Y, O, B, P, W])
  rows.push([W, P, P, O, O, B, B, G, G, R, R, Y, Y, P, W, W, O, O, B, B, P, P, G, G, R, R, Y, Y, O, B, P, W])
  rows.push([W, P, P, O, O, B, B, G, G, R, R, Y, Y, P, W, W, O, O, B, B, P, P, G, G, R, R, Y, Y, O, B, P, W])
  rows.push([W, P, P, O, O, B, B, G, G, R, R, Y, Y, P, W, W, O, O, B, B, P, P, G, G, R, R, Y, Y, O, B, P, W])
  rows.push([W, P, P, O, O, B, B, G, G, R, R, Y, Y, P, W, W, O, O, B, B, P, P, G, G, R, R, Y, Y, O, B, P, W])
  rows.push([W, P, P, O, O, B, B, G, G, R, R, Y, Y, P, W, W, O, O, B, B, P, P, G, G, R, R, Y, Y, O, B, P, W])
  // Row 23: shelf plank (both sections)
  rows.push([W, L, L, L, L, L, L, L, L, L, L, L, L, L, W, W, L, L, L, L, L, L, L, L, L, L, L, L, L, L, L, W])
  // Rows 24–30: fourth shelf books
  rows.push([W, Y, Y, B, B, P, P, R, R, G, G, O, O, Y, W, W, R, R, Y, Y, B, B, O, O, G, G, P, P, R, Y, B, W])
  rows.push([W, Y, Y, B, B, P, P, R, R, G, G, O, O, Y, W, W, R, R, Y, Y, B, B, O, O, G, G, P, P, R, Y, B, W])
  rows.push([W, Y, Y, B, B, P, P, R, R, G, G, O, O, Y, W, W, R, R, Y, Y, B, B, O, O, G, G, P, P, R, Y, B, W])
  rows.push([W, Y, Y, B, B, P, P, R, R, G, G, O, O, Y, W, W, R, R, Y, Y, B, B, O, O, G, G, P, P, R, Y, B, W])
  rows.push([W, Y, Y, B, B, P, P, R, R, G, G, O, O, Y, W, W, R, R, Y, Y, B, B, O, O, G, G, P, P, R, Y, B, W])
  rows.push([W, Y, Y, B, B, P, P, R, R, G, G, O, O, Y, W, W, R, R, Y, Y, B, B, O, O, G, G, P, P, R, Y, B, W])
  rows.push([W, Y, Y, B, B, P, P, R, R, G, G, O, O, Y, W, W, R, R, Y, Y, B, B, O, O, G, G, P, P, R, Y, B, W])
  // Row 31: base
  rows.push([W, M, M, M, M, M, M, M, M, M, M, M, M, M, W, W, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, W])
  return rows
})()

// ── CARDBOARD_BOX_A_SPRITE (1×1 = 16×16px) ───────────────────────────────────
// Closed box: tan body, cross-seal tape on top, tape strip visible
export const CARDBOARD_BOX_A_SPRITE: SpriteData = [
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
  [_, CB, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, CB, CB, _],
  [CB, CB, TP, CB, CB, CB, TP, CB, CB, TP, CB, CB, CB, TP, CB, CB],
  [CB, CD, CB, CB, CB, CB, TP, CB, CB, TP, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, TP, CB, CB, TP, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, TP, CB, CB, TP, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, TP, TP, TP, TP, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB],
  [CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB],
  [_, CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, _],
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
]

// ── CARDBOARD_BOX_B_SPRITE (1×1 = 16×16px) ───────────────────────────────────
// Open box: dark inside, four folded flap triangles at top
export const CARDBOARD_BOX_B_SPRITE: SpriteData = [
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
  [_, CB, CB, CD, _, _, _, _, _, _, _, _, CD, CB, CB, _],
  [CB, CB, CD, _, _, _, _, _, _, _, _, _, _, CD, CB, CB],
  [CB, CD, _, _, '#3A2810', '#3A2810', '#3A2810', '#3A2810', '#3A2810', '#3A2810', '#3A2810', '#3A2810', _, _, CD, CB],
  [CB, CB, _, '#3A2810', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#3A2810', _, CB, CB, _],
  [CB, CD, CB, CB, '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', CB, CB, CD, CB, _],
  [CB, CD, CB, CB, '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', '#2A1A08', CB, CB, CD, CB, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _],
  [CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB],
  [CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB],
  [_, CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, _],
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
]

// ── CARDBOARD_BOX_C_SPRITE (1×1 = 16×16px) ───────────────────────────────────
// Labeled box: white label rectangle on front face
export const CARDBOARD_BOX_C_SPRITE: SpriteData = [
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
  [_, CB, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, CB, CB, _],
  [CB, CB, TP, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, TP, CB, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, CD, CB],
  [CB, CD, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, CD, CB],
  [CB, CD, PA, PS, PA, PA, PA, PA, PA, PA, PA, PA, PS, PA, CD, CB],
  [CB, CD, PA, PS, PA, PA, PA, PA, PA, PA, PA, PA, PS, PA, CD, CB],
  [CB, CD, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, CD, CB],
  [CB, CD, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB],
  [CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB],
  [_, CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, _],
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
]

// ── CARDBOARD_BOX_D_SPRITE (1×1 = 16×16px) ───────────────────────────────────
// Stacked boxes: two tan rectangles offset — bottom box larger, top box offset right
export const CARDBOARD_BOX_D_SPRITE: SpriteData = [
  [_, _, _, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _, _],
  [_, _, _, CB, CB, CD, CD, CD, CD, CD, CD, CB, CB, CB, _, _],
  [_, _, _, CB, CD, CB, CB, CB, CB, CB, CB, CD, CB, CB, _, _],
  [_, _, _, CB, CD, CB, CB, CB, CB, CB, CB, CD, CB, CB, _, _],
  [_, _, _, CB, CD, CD, CD, CD, CD, CD, CD, CB, CB, CB, _, _],
  [_, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _, _, _],
  [CB, CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, CB, _, _, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _, _],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, _, _],
  [CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, _, _],
  [CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
  [_, CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, _, _],
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _, _],
]

// ── CARDBOARD_BOX_E_SPRITE (1×1 = 16×16px) ───────────────────────────────────
// Flat/crushed box: low flat shape
export const CARDBOARD_BOX_E_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
  [_, CB, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, CB, _],
  [CB, CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB],
  [CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB],
  [_, CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── CARDBOARD_BOX_F_SPRITE (1×1 = 16×16px) ───────────────────────────────────
// Fragile box: up-arrow + exclamation on front
export const CARDBOARD_BOX_F_SPRITE: SpriteData = [
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
  [_, CB, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, CB, CB, _],
  [CB, CB, TP, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, TP, CB, CB],
  [CB, CD, CB, CB, CB, '#CC3333', CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, '#CC3333', '#CC3333', '#CC3333', CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, '#CC3333', CB, '#CC3333', CB, '#CC3333', CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, '#CC3333', CB, CB, CB, '#CC3333', CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, '#CC3333', CB, CB, CB, '#CC3333', CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, '#CC3333', CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, '#CC3333', CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CD, CB],
  [CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB],
  [CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB],
  [_, CB, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CD, CB, _],
  [_, _, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, CB, _, _],
]

// ── CARDBOARD_BOX_F_FLIP_SPRITE — horizontally flipped version of F
export const CARDBOARD_BOX_F_FLIP_SPRITE: SpriteData =
  CARDBOARD_BOX_F_SPRITE.map(row => [...row].reverse())

// ── PAPER_V_SPRITE (1×1 = 16×16px) ───────────────────────────────────────────
// Vertical paper: off-white 10×14 rectangle, grey ruled lines, drop shadow
export const PAPER_V_SPRITE: SpriteData = [
  [_, _, _, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, _, _, _],
  [_, _, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _, _],
  [_, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _],
  [_, PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, PS, _],
  [_, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _],
  [_, PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, PS, _],
  [_, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _],
  [_, PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, PS, _],
  [_, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _],
  [_, PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, PS, _],
  [_, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _],
  [_, PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, PS, _],
  [_, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _],
  [_, _, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, PS, _, _],
  [_, _, _, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, _, _, _],
  [_, _, _, _, PD, PD, PD, PD, PD, PD, PD, PD, _, _, _, _],
]

// ── PAPER_H_A_SPRITE (1×1 = 16×16px) ─────────────────────────────────────────
// Horizontal paper: wider landscape orientation, ruled lines
export const PAPER_H_A_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, _, _],
  [PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, _],
  [PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, _],
  [PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, _],
  [PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, _],
  [PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, _],
  [PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, _],
  [PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, _],
  [PS, PA, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PA, PS, _],
  [PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, _],
  [PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, _],
  [_, PS, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PA, PS, _, _],
  [_, _, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, PS, _, _, _],
  [_, _, _, PD, PD, PD, PD, PD, PD, PD, PD, PD, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── PAPER_H_B_SPRITE — horizontally flipped version of H_A
export const PAPER_H_B_SPRITE: SpriteData =
  PAPER_H_A_SPRITE.map(row => [...row].reverse())

// ── BOOK_RED_SPRITE (1×1 = 16×16px) ──────────────────────────────────────────
// Top-view open book: red left cover, white pages right, spine center line
export const BOOK_RED_SPRITE: SpriteData = [
  [_, _, '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', PA, PA, PA, PA, _],
  [_, '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PA, PS, PA, PA, _],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PA, PA, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PS, PS, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PA, PA, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PS, PS, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PA, PA, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PS, PS, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PA, PA, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PS, PS, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PA, PA, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PS, PS, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', '#991A1A', PS, PA, PA, PA, PA, PA],
  ['#CC3333', '#CC3333', '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', PS, PS, PS, PS, PS, PA],
  [_, '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#CC3333', '#991A1A', PA, PA, PA, PA, _],
  [_, _, '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', '#991A1A', _, PS, PS, PS, PS, _],
]

// ── BOOK_BLUE_SPRITE (1×1 = 16×16px) ─────────────────────────────────────────
export const BOOK_BLUE_SPRITE: SpriteData = [
  [_, _, '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', PA, PA, PA, PA, _],
  [_, '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PA, PS, PA, PA, _],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PA, PA, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PS, PS, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PA, PA, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PS, PS, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PA, PA, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PS, PS, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PA, PA, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PS, PS, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PA, PA, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PS, PS, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', '#22388A', PS, PA, PA, PA, PA, PA],
  ['#3355AA', '#3355AA', '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', PS, PS, PS, PS, PS, PA],
  [_, '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#3355AA', '#22388A', PA, PA, PA, PA, _],
  [_, _, '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', '#22388A', _, PS, PS, PS, PS, _],
]

// ── BOOK_GREEN_SPRITE (1×1 = 16×16px) ────────────────────────────────────────
export const BOOK_GREEN_SPRITE: SpriteData = [
  [_, _, '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', PA, PA, PA, PA, _],
  [_, '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PA, PS, PA, PA, _],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PA, PA, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PS, PS, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PA, PA, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PS, PS, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PA, PA, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PS, PS, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PA, PA, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PS, PS, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PA, PA, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PS, PS, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', '#1F3D28', PS, PA, PA, PA, PA, PA],
  ['#336644', '#336644', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', PS, PS, PS, PS, PS, PA],
  [_, '#336644', '#336644', '#336644', '#336644', '#336644', '#336644', '#336644', '#336644', '#336644', '#1F3D28', PA, PA, PA, PA, _],
  [_, _, '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', '#1F3D28', _, PS, PS, PS, PS, _],
]

// ── BOOK_YELLOW_SPRITE (1×1 = 16×16px) ───────────────────────────────────────
export const BOOK_YELLOW_SPRITE: SpriteData = [
  [_, _, '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', PA, PA, PA, PA, _],
  [_, '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PA, PS, PA, PA, _],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PA, PA, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PS, PS, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PA, PA, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PS, PS, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PA, PA, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PS, PS, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PA, PA, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PS, PS, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PA, PA, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PS, PS, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', '#998814', PS, PA, PA, PA, PA, PA],
  ['#CCAA22', '#CCAA22', '#998814', '#998814', '#998814', '#998814', '#998814', '#998814', '#998814', '#998814', PS, PS, PS, PS, PS, PA],
  [_, '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#CCAA22', '#998814', PA, PA, PA, PA, _],
  [_, _, '#998814', '#998814', '#998814', '#998814', '#998814', '#998814', '#998814', '#998814', _, PS, PS, PS, PS, _],
]

// ── Book flip variants (rows reversed = 180° flip / mirrored top-to-bottom) ──
export const BOOK_RED_FLIP_SPRITE: SpriteData    = [...BOOK_RED_SPRITE].reverse()
export const BOOK_BLUE_FLIP_SPRITE: SpriteData   = [...BOOK_BLUE_SPRITE].reverse()
export const BOOK_GREEN_FLIP_SPRITE: SpriteData  = [...BOOK_GREEN_SPRITE].reverse()
export const BOOK_YELLOW_FLIP_SPRITE: SpriteData = [...BOOK_YELLOW_SPRITE].reverse()
