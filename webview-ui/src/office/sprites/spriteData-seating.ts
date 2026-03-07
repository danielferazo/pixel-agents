import type { SpriteData } from '../types.js'

const _ = '' // transparent

// ── Studio Noir Seating Color Palette ────────────────────────────
// Chair fabric:  #1E2240 (dark)  #2A3055 (mid)  #3A4070 (light)
// Chair chrome:  #9090A0 (silver)  #5A5A6A (dark chrome)
// Chair base:    #2A2A36 (base/wheel)
// Sofa dark:     #2A1E30  #3A2E40  #4A3E50  #6A5E70
// Leather:       #1A1218  #2E2030
// Armrest:       #3A2A40

// ── OFFICE_CHAIR_A_SPRITE ────────────────────────────────────────
/** Standard rolling office chair: 16×16px (1×1 tile) — top-down view.
 *  Oval seat pad, thin backrest bar at top, 5-spoke star base, wheel dots. */
export const OFFICE_CHAIR_A_SPRITE: SpriteData = (() => {
  const SD = '#1E2240' // seat dark (outer cushion)
  const SM = '#2A3055' // seat mid
  const SL = '#3A4070' // seat highlight
  const BR = '#1A1C38' // backrest bar
  const CH = '#9090A0' // chrome spoke arm
  const DC = '#5A5A6A' // dark chrome
  const WH = '#2A2A36' // wheel dot
  const P  = '#6A6A7A' // center post

  return [
    // row 0 — backrest bar across top of seat
    [_, _, _, BR, BR, BR, BR, BR, BR, BR, BR, BR, _, _, _, _],
    // row 1 — backrest bar + seat rim beginning
    [_, _, BR, BR, SD, SD, SD, SD, SD, SD, SD, BR, BR, _, _, _],
    // row 2 — seat oval top edge
    [_, _, _, SD, SM, SM, SM, SM, SM, SM, SM, SD, _, _, _, _],
    // row 3 — seat with highlight
    [_, _, SD, SM, SM, SL, SL, SL, SL, SM, SM, SD, _, _, _, _],
    // row 4 — seat center
    [_, _, SD, SM, SL, SL, SL, SL, SL, SL, SM, SD, _, _, _, _],
    // row 5 — center post pixel
    [_, _, SD, SM, SL, SL, P,  SL, SL, SL, SM, SD, _, _, _, _],
    // row 6 — seat center lower
    [_, _, SD, SM, SL, SL, SL, SL, SL, SL, SM, SD, _, _, _, _],
    // row 7 — seat lower
    [_, _, SD, SM, SM, SM, SM, SM, SM, SM, SM, SD, _, _, _, _],
    // row 8 — seat bottom edge
    [_, _, _, SD, SD, SD, SD, SD, SD, SD, SD, _, _, _, _, _],
    // row 9 — gap between seat and base
    [_, _, _, _, _, _, CH, CH, _, _, _, _, _, _, _, _],
    // row 10 — star base center column
    [_, _, DC, _, _, _, CH, CH, _, _, _, DC, _, _, _, _],
    // row 11 — spoke diagonals
    [_, DC, _, _, _, _, CH, CH, _, _, _, _, DC, _, _, _],
    // row 12 — spoke diagonals + side spokes
    [_, DC, _, _, DC, _, _, _, _, _, DC, _, _, DC, _, _],
    // row 13 — side spokes extending
    [DC, _, _, DC, _, _, _, _, _, _, _, DC, _, _, DC, _],
    // row 14 — wheel dots at spoke ends
    [WH, _, WH, _, _, _, _, _, _, _, _, _, WH, _, WH, _],
    // row 15 — empty
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

// ── OFFICE_CHAIR_B_SPRITE ────────────────────────────────────────
/** Executive leather chair: 16×16px (1×1 tile) — top-down view.
 *  Wider padded seat, thick armrests on sides, X-shaped base, dark leather. */
export const OFFICE_CHAIR_B_SPRITE: SpriteData = (() => {
  const LD = '#1A1218' // leather dark
  const LM = '#2E2030' // leather mid
  const AR = '#3A2A40' // armrest
  const CH = '#9090A0' // chrome
  const DC = '#5A5A6A' // dark chrome
  const WH = '#2A2A36' // wheel

  return [
    // row 0 — backrest top edge
    [_, _, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, _, _, _],
    // row 1 — backrest body
    [_, LD, LM, LM, LM, LM, LM, LM, LM, LM, LM, LM, LM, LD, _, _],
    // row 2 — backrest lower + armrest start
    [_, LD, LM, LM, LM, LM, LM, LM, LM, LM, LM, LM, LM, LD, _, _],
    // row 3 — wide seat rim, armrests on sides
    [AR, AR, LD, LM, LM, LM, LM, LM, LM, LM, LM, LM, LD, AR, AR, _],
    // row 4 — seat mid with armrests
    [AR, AR, LD, LM, LM, LM, LM, LM, LM, LM, LM, LM, LD, AR, AR, _],
    // row 5 — seat center row 1
    [AR, AR, LD, LM, LM, LD, LD, LM, LD, LD, LM, LM, LD, AR, AR, _],
    // row 6 — seat center row 2
    [AR, AR, LD, LM, LM, LD, LM, LM, LM, LD, LM, LM, LD, AR, AR, _],
    // row 7 — seat center row 3
    [AR, AR, LD, LM, LM, LM, LM, LM, LM, LM, LM, LM, LD, AR, AR, _],
    // row 8 — seat lower rim
    [_, _, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, _, _, _],
    // row 9 — post
    [_, _, _, _, _, _, CH, CH, _, _, _, _, _, _, _, _],
    // row 10 — X-base top cross
    [_, DC, _, _, _, DC, CH, CH, DC, _, _, _, DC, _, _, _],
    // row 11 — X-base spread
    [_, _, DC, _, _, _, CH, CH, _, _, _, DC, _, _, _, _],
    // row 12 — X-base spread 2
    [_, _, _, DC, _, _, CH, CH, _, _, DC, _, _, _, _, _],
    // row 13 — spoke ends
    [_, DC, _, _, DC, _, _, _, _, _, DC, _, _, DC, _, _],
    // row 14 — wheels
    [WH, _, WH, _, _, _, _, _, _, _, _, _, WH, _, WH, _],
    // row 15
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

// ── OFFICE_CHAIR_C_SPRITE ────────────────────────────────────────
/** Simple stool: 16×16px (1×1 tile) — top-down view.
 *  Round seat pad, no armrests, 4-leg cross below. */
export const OFFICE_CHAIR_C_SPRITE: SpriteData = (() => {
  const SD = '#2A3055' // seat mid
  const SL = '#3A4070' // seat lighter
  const SE = '#1E2240' // seat edge
  const LG = '#5A5A6A' // leg dark chrome
  const WH = '#2A2A36' // foot

  return [
    // row 0
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    // row 1 — top of circular seat
    [_, _, _, _, _, SE, SE, SE, SE, SE, _, _, _, _, _, _],
    // row 2
    [_, _, _, _, SE, SD, SD, SD, SD, SD, SE, _, _, _, _, _],
    // row 3
    [_, _, _, SE, SD, SL, SL, SL, SL, SL, SD, SE, _, _, _, _],
    // row 4
    [_, _, _, SE, SD, SL, SL, SL, SL, SL, SD, SE, _, _, _, _],
    // row 5
    [_, _, _, SE, SD, SL, SL, SL, SL, SL, SD, SE, _, _, _, _],
    // row 6
    [_, _, _, SE, SD, SL, SL, SL, SL, SL, SD, SE, _, _, _, _],
    // row 7
    [_, _, _, SE, SD, SL, SL, SL, SL, SL, SD, SE, _, _, _, _],
    // row 8
    [_, _, _, _, SE, SD, SD, SD, SD, SD, SE, _, _, _, _, _],
    // row 9 — bottom of seat
    [_, _, _, _, _, SE, SE, SE, SE, SE, _, _, _, _, _, _],
    // row 10 — 4-leg cross center
    [_, _, _, _, _, _, LG, LG, _, _, _, _, _, _, _, _],
    // row 11 — left and right legs
    [_, LG, LG, LG, _, _, LG, LG, _, _, _, LG, LG, LG, _, _],
    // row 12 — left/right legs + vertical legs
    [_, _, _, _, _, _, LG, LG, _, _, _, _, _, _, _, _],
    // row 13
    [_, LG, _, _, _, _, LG, LG, _, _, _, _, _, LG, _, _],
    // row 14 — feet
    [WH, WH, _, _, _, _, _, _, _, _, _, _, _, WH, WH, _],
    // row 15
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

// ── LONG_CHAIR_H1_SPRITE ─────────────────────────────────────────
/** Two-seat sofa, horizontal: 32×16px (2×1 tiles) — top-down view.
 *  Dark purple-gray body, cushion divider in center, armrests on each end. */
export const LONG_CHAIR_H1_SPRITE: SpriteData = (() => {
  const SD = '#2A1E30' // sofa dark (frame)
  const SM = '#3A2E40' // sofa mid (cushion body)
  const SL = '#4A3E50' // sofa light (cushion highlight)
  const SH = '#6A5E70' // sofa highlight (top edge)
  const DV = '#1A1218' // cushion divider line
  const AR = '#3A2A40' // armrest end

  // W = 32 = 2 tiles × 16
  // Each row must have exactly 32 elements

  const rows: string[][] = []

  // row 0 — top frame edge
  rows.push(new Array(32).fill(SD))
  // row 1 — backrest highlight strip
  rows.push([SD, SD, ...new Array(28).fill(SH), SD, SD])
  // row 2 — backrest cushions, armrests on ends, divider in center
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  // row 3 — backrest body
  rows.push([AR, AR, ...new Array(13).fill(SL), DV, DV, ...new Array(13).fill(SL), AR, AR])
  // row 4 — backrest body lower
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  // row 5 — seat-back divider
  rows.push(new Array(32).fill(DV))
  // row 6 — seat top (highlight)
  rows.push([AR, AR, ...new Array(13).fill(SL), DV, DV, ...new Array(13).fill(SL), AR, AR])
  // row 7 — seat body
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  // row 8 — seat body
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  // row 9 — seat body lower
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  // row 10 — seat body lower
  rows.push([AR, AR, ...new Array(13).fill(SD), DV, DV, ...new Array(13).fill(SD), AR, AR])
  // row 11 — front divider
  rows.push(new Array(32).fill(DV))
  // row 12 — front edge highlight
  rows.push([SD, SD, ...new Array(28).fill(SL), SD, SD])
  // row 13 — bottom highlight
  rows.push([SD, SD, ...new Array(28).fill(SM), SD, SD])
  // row 14 — bottom frame
  rows.push(new Array(32).fill(SD))
  // row 15 — transparent
  rows.push(new Array(32).fill(_))

  return rows
})()

// ── LONG_CHAIR_H2_SPRITE ─────────────────────────────────────────
/** Two-seat sofa variant B, horizontal: 32×16px (2×1 tiles) — teal-tinted fabric. */
export const LONG_CHAIR_H2_SPRITE: SpriteData = (() => {
  const SD = '#1A2A2A' // dark teal-gray frame
  const SM = '#2A3E3A' // mid teal cushion
  const SL = '#3A5450' // lighter teal
  const SH = '#5A7A76' // highlight
  const DV = '#0E1A18' // divider
  const AR = '#223030' // armrest end

  const rows: string[][] = []

  rows.push(new Array(32).fill(SD))
  rows.push([SD, SD, ...new Array(28).fill(SH), SD, SD])
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(13).fill(SL), DV, DV, ...new Array(13).fill(SL), AR, AR])
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  rows.push(new Array(32).fill(DV))
  rows.push([AR, AR, ...new Array(13).fill(SL), DV, DV, ...new Array(13).fill(SL), AR, AR])
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(13).fill(SM), DV, DV, ...new Array(13).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(13).fill(SD), DV, DV, ...new Array(13).fill(SD), AR, AR])
  rows.push(new Array(32).fill(DV))
  rows.push([SD, SD, ...new Array(28).fill(SL), SD, SD])
  rows.push([SD, SD, ...new Array(28).fill(SM), SD, SD])
  rows.push(new Array(32).fill(SD))
  rows.push(new Array(32).fill(_))

  return rows
})()

// ── LONG_CHAIR_H3_SPRITE ─────────────────────────────────────────
/** Three-seat sofa, horizontal: 48×16px (3×1 tiles) — top-down view.
 *  Two cushion divider lines creating three seats. */
export const LONG_CHAIR_H3_SPRITE: SpriteData = (() => {
  const SD = '#2A1E30'
  const SM = '#3A2E40'
  const SL = '#4A3E50'
  const SH = '#6A5E70'
  const DV = '#1A1218'
  const AR = '#3A2A40'

  // W = 48 = 3 tiles × 16
  // Layout: AR, AR, [14 seat], DV, DV, [12 seat], DV, DV, [14 seat], AR, AR = 2+14+2+12+2+14+2 = 48 ✓

  const rows: string[][] = []

  rows.push(new Array(48).fill(SD))
  rows.push([SD, SD, ...new Array(44).fill(SH), SD, SD])
  rows.push([AR, AR, ...new Array(14).fill(SM), DV, DV, ...new Array(12).fill(SM), DV, DV, ...new Array(14).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(14).fill(SL), DV, DV, ...new Array(12).fill(SL), DV, DV, ...new Array(14).fill(SL), AR, AR])
  rows.push([AR, AR, ...new Array(14).fill(SM), DV, DV, ...new Array(12).fill(SM), DV, DV, ...new Array(14).fill(SM), AR, AR])
  rows.push(new Array(48).fill(DV))
  rows.push([AR, AR, ...new Array(14).fill(SL), DV, DV, ...new Array(12).fill(SL), DV, DV, ...new Array(14).fill(SL), AR, AR])
  rows.push([AR, AR, ...new Array(14).fill(SM), DV, DV, ...new Array(12).fill(SM), DV, DV, ...new Array(14).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(14).fill(SM), DV, DV, ...new Array(12).fill(SM), DV, DV, ...new Array(14).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(14).fill(SM), DV, DV, ...new Array(12).fill(SM), DV, DV, ...new Array(14).fill(SM), AR, AR])
  rows.push([AR, AR, ...new Array(14).fill(SD), DV, DV, ...new Array(12).fill(SD), DV, DV, ...new Array(14).fill(SD), AR, AR])
  rows.push(new Array(48).fill(DV))
  rows.push([SD, SD, ...new Array(44).fill(SL), SD, SD])
  rows.push([SD, SD, ...new Array(44).fill(SM), SD, SD])
  rows.push(new Array(48).fill(SD))
  rows.push(new Array(48).fill(_))

  return rows
})()

// ── LONG_CHAIR_V1_SPRITE ─────────────────────────────────────────
/** Two-seat sofa, vertical: 16×32px (1×2 tiles) — H1 rotated 90°.
 *  Sofa runs top-to-bottom, armrests top and bottom, divider in center row. */
export const LONG_CHAIR_V1_SPRITE: SpriteData = (() => {
  const SD = '#2A1E30'
  const SM = '#3A2E40'
  const SL = '#4A3E50'
  const SH = '#6A5E70'
  const DV = '#1A1218'
  const AR = '#3A2A40'

  // H = 32, W = 16
  // Rotated: what was left/right frame → becomes top/bottom rows
  //          what was top/bottom rows  → becomes left/right columns
  //          cushion divider (was center 2 cols) → becomes center 2 rows (rows 15-16)

  const rows: string[][] = []

  // rows 0-1 — left frame (was top frame rotated)
  rows.push(new Array(16).fill(SD))
  rows.push(new Array(16).fill(SD))
  // rows 2-3 — armrest end (top)
  rows.push(new Array(16).fill(AR))
  rows.push(new Array(16).fill(AR))
  // rows 4-6 — backrest cushion (seat 1)
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 7 — seat-back divider col
  rows.push(new Array(16).fill(DV))
  // rows 8-11 — seat 1 body
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 12 — front divider
  rows.push(new Array(16).fill(DV))
  // rows 13 — seat front edge (highlight strip between the two seats)
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  // rows 14-15 — cushion center divider (horizontal, 2 rows)
  rows.push(new Array(16).fill(DV))
  rows.push(new Array(16).fill(DV))
  // row 16 — seat 2 front edge
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  // row 17 — seat 2 front divider
  rows.push(new Array(16).fill(DV))
  // rows 18-21 — seat 2 body
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 22 — seat-back divider
  rows.push(new Array(16).fill(DV))
  // rows 23-25 — backrest cushion (seat 2)
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // rows 26-27 — armrest end (bottom)
  rows.push(new Array(16).fill(AR))
  rows.push(new Array(16).fill(AR))
  // rows 28-29 — right frame (was bottom frame)
  rows.push(new Array(16).fill(SD))
  rows.push(new Array(16).fill(SD))
  // rows 30-31 — transparent
  rows.push(new Array(16).fill(_))
  rows.push(new Array(16).fill(_))

  return rows
})()

// ── LONG_CHAIR_V2_SPRITE ─────────────────────────────────────────
/** Two-seat sofa variant B, vertical: 16×32px (1×2 tiles) — H2 rotated 90°. */
export const LONG_CHAIR_V2_SPRITE: SpriteData = (() => {
  const SD = '#1A2A2A'
  const SM = '#2A3E3A'
  const SL = '#3A5450'
  const SH = '#5A7A76'
  const DV = '#0E1A18'
  const AR = '#223030'

  const rows: string[][] = []

  rows.push(new Array(16).fill(SD))
  rows.push(new Array(16).fill(SD))
  rows.push(new Array(16).fill(AR))
  rows.push(new Array(16).fill(AR))
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push(new Array(16).fill(DV))
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push(new Array(16).fill(DV))
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push(new Array(16).fill(DV))
  rows.push(new Array(16).fill(DV))
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push(new Array(16).fill(DV))
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push(new Array(16).fill(DV))
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push(new Array(16).fill(AR))
  rows.push(new Array(16).fill(AR))
  rows.push(new Array(16).fill(SD))
  rows.push(new Array(16).fill(SD))
  rows.push(new Array(16).fill(_))
  rows.push(new Array(16).fill(_))

  return rows
})()

// ── LONG_CHAIR_V3_SPRITE ─────────────────────────────────────────
/** Three-seat sofa, vertical: 16×48px (1×3 tiles) — H3 rotated 90°.
 *  Three seats stacked vertically, two horizontal dividers. */
export const LONG_CHAIR_V3_SPRITE: SpriteData = (() => {
  const SD = '#2A1E30'
  const SM = '#3A2E40'
  const SL = '#4A3E50'
  const SH = '#6A5E70'
  const DV = '#1A1218'
  const AR = '#3A2A40'

  // H = 48 = 3 tiles × 16, W = 16
  // Structure (rows): frame(2) + armrest(2) + seat1_back(3) + divider(1) + seat1_body(4) + front_div(1) +
  //                   highlight(1) + center_div(2) + highlight(1) + front_div(1) + seat2_body(4) +
  //                   divider(1) + seat2_back(3) + [repeat for seat 3] + armrest(2) + frame(2) + trans(2)
  // Simplified: 2+2 + [seat×3 = 3+1+4+1] + div(2) + [seat×3] + div(2) + [seat×3] + 2+2+2 = too complex
  // Cleaner: each of 3 seats takes (16-2-2)/3 ≈ ~14 rows. Let's do: 2 frame + 2 arm + 12seat + 2div + 12seat + 2div + 12seat + 2arm + 2frame + 2trans = 2+2+12+2+12+2+12+2+2+2 = 52 — too many
  // Actual: 48 rows total. Let's use: 1 frame + 1 arm + 13seat + 1div + 1div + 13seat + 1div + 1div + 13seat + 1arm + 1frame + 1trans = 48 ✓

  const rows: string[][] = []

  // row 0 — top frame
  rows.push(new Array(16).fill(SD))
  // row 1 — top armrest
  rows.push(new Array(16).fill(AR))
  // rows 2-4 — seat 1 backrest
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 5 — seat-back divider
  rows.push(new Array(16).fill(DV))
  // rows 6-9 — seat 1 body
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 10 — front divider seat 1
  rows.push(new Array(16).fill(DV))
  // row 11 — front edge highlight
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  // rows 12-13 — cushion center divider between seat 1 and seat 2
  rows.push(new Array(16).fill(DV))
  rows.push(new Array(16).fill(DV))
  // row 14 — front edge highlight seat 2
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  // row 15 — front divider seat 2
  rows.push(new Array(16).fill(DV))
  // rows 16-19 — seat 2 body
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 20 — seat-back divider seat 2
  rows.push(new Array(16).fill(DV))
  // rows 21-23 — seat 2 backrest
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // rows 24-25 — cushion center divider between seat 2 and seat 3
  rows.push(new Array(16).fill(DV))
  rows.push(new Array(16).fill(DV))
  // rows 26-28 — seat 3 backrest
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 29 — seat-back divider seat 3
  rows.push(new Array(16).fill(DV))
  // rows 30-33 — seat 3 body
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 34 — front divider seat 3
  rows.push(new Array(16).fill(DV))
  // row 35 — front edge highlight
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  // rows 36-37: backrest highlight + top (was bottom frame on H3)
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push(new Array(16).fill(DV))
  // rows 38-39 — seat bottom / front edge pair needed to reach row 40
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SH, SD, _])
  // rows 40-41 — repeat seat 3 front-facing body
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  rows.push([SD, SH, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SM, SH, SD, _])
  // row 42 — front base stripe
  rows.push(new Array(16).fill(SD))
  // row 43 — front frame
  rows.push([SD, SD, ...new Array(12).fill(SL), SD, SD])
  // row 44 — front frame lower
  rows.push(new Array(16).fill(SD))
  // row 45 — bottom armrest
  rows.push(new Array(16).fill(AR))
  // row 46 — bottom frame
  rows.push(new Array(16).fill(SD))
  // row 47 — transparent
  rows.push(new Array(16).fill(_))

  return rows
})()
