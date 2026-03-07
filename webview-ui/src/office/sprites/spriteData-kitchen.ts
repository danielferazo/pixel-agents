import type { SpriteData } from '../types.js'

const _ = '' // transparent

// ── Color aliases ────────────────────────────────────────────────
// Metal / appliance
const LC = '#C8C8D0' // light chrome
const MC = '#8A8A9A' // medium chrome
const DC = '#5A5A6A' // dark chrome
// Machine body
const MB = '#2A2838' // machine body dark
const MM = '#3A3848' // machine body mid
// Coffee machine
const CMD = '#1A1218' // coffee machine dark
const CMC = '#9090A0' // coffee machine chrome
const BTN = '#CC6622' // coffee button orange
const STM = '#D0D8E8' // steam light blue-gray
// Mug
const MY = '#F0C040' // mug yellow
const MD = '#B08020' // mug dark
const CFL = '#3A1800' // coffee liquid dark brown
// Fridge
const FW = '#E8E8F0'  // fridge white
const FD = '#C0C0CC'  // fridge dark
const FH = '#8A8A9A'  // fridge handle
// Microwave
const MWL = '#D8D8E0' // microwave light
// Water cooler
const WCW = '#E8F0F8' // water cooler white
const WCT = '#B8D0E8' // water cooler tank blue
// Door
const DW = '#8B6030'  // door wood dark
const DP = '#A07040'  // door panel lighter wood
const DK = '#C8A050'  // door knob gold

// ── 1. COFFEE_MACHINE_B_SPRITE — 16×32px (1×2 tiles) ─────────────────────────
// Top half (rows 0–15): Water reservoir dome + top of machine
// Bottom half (rows 16–31): Body with steam wand on left, control panel with buttons

export const COFFEE_MACHINE_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // ── Top tile (rows 0–15): reservoir dome ──
  // Row 0: transparent
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])
  // Row 1: narrow dome top
  rows.push([_, _, _, _, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, _, _, _, _])
  // Row 2–4: dome body (chrome dome shape)
  rows.push([_, _, _, CMD, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMD, _, _, _])
  rows.push([_, _, CMD, CMC, LC,  LC,  LC,  LC,  LC,  LC,  LC,  CMC, CMD, _, _, _])
  rows.push([_, _, CMD, CMC, LC,  LC,  STM, STM, STM, LC,  LC,  CMC, CMD, _, _, _])
  // Row 5–7: dome mid-section with water visible (blue-tint)
  rows.push([_, CMD, CMC, MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  CMC, CMD, _, _])
  rows.push([_, CMD, CMC, MC,  WCT, WCT, WCT, WCT, WCT, WCT, WCT, MC,  CMC, CMD, _, _])
  rows.push([_, CMD, CMC, MC,  WCT, WCT, WCT, WCT, WCT, WCT, WCT, MC,  CMC, CMD, _, _])
  // Row 8: separator between reservoir and body
  rows.push([_, _, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, _, _, _])
  // Row 9–10: body top chrome strip
  rows.push([_, _, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, _, _, _])
  rows.push([_, _, CMC, LC,  LC,  LC,  LC,  LC,  LC,  LC,  LC,  LC,  CMC, _, _, _])
  // Row 11–12: top machine body with small LED
  rows.push([_, CMD, MM, MM, MM, MM, BTN, MM, MM, MM, MM, MM, MM, CMD, _, _])
  rows.push([_, CMD, MM, MM, MM, MM, MM, MM, MM, MM, MM, MM, MM, CMD, _, _])
  // Row 13–14: machine body transition
  rows.push([_, CMD, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, CMD, _, _])
  rows.push([_, CMD, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, CMD, _, _])
  // Row 15: separator / edge
  rows.push([_, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, _, _])

  // ── Bottom tile (rows 16–31): machine body, steam wand, controls ──
  // Row 16: top of bottom body
  rows.push([_, CMD, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, CMD, _, _])
  // Row 17: steam wand nub on left
  rows.push([CMC, MC, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, CMD, _, _])
  // Row 18: steam wand
  rows.push([LC, CMC, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, CMD, _, _])
  // Row 19: wand tip with steam
  rows.push([STM, LC, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, CMD, _, _])
  // Row 20: body
  rows.push([_, CMD, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, MB, CMD, _, _])
  // Row 21: control panel area start
  rows.push([_, CMD, MB, DC, DC, DC, DC, DC, DC, DC, DC, DC, MB, CMD, _, _])
  // Row 22: buttons row — orange + chrome buttons
  rows.push([_, CMD, MB, BTN, DC, BTN, DC, MC, DC, BTN, DC, BTN, MB, CMD, _, _])
  // Row 23: button row 2
  rows.push([_, CMD, MB, DC, DC, DC, DC, MC, DC, DC, DC, DC, MB, CMD, _, _])
  // Row 24: drip tray area
  rows.push([_, CMD, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMC, CMD, _, _])
  // Row 25: drip tray grate
  rows.push([_, CMD, DC, MC, DC, MC, DC, MC, DC, MC, DC, MC, DC, CMD, _, _])
  // Row 26: drip tray lower
  rows.push([_, CMD, DC, DC, DC, DC, DC, DC, DC, DC, DC, DC, DC, CMD, _, _])
  // Row 27: base
  rows.push([_, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, CMD, _, _])
  // Row 28–29: feet
  rows.push([_, _, DC, DC, _, _, _, _, _, _, _, _, DC, DC, _, _])
  rows.push([_, _, DC, DC, _, _, _, _, _, _, _, _, DC, DC, _, _])
  // Row 30–31: transparent
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])

  return rows
})()

// ── 2. MICROWAVE_A_SPRITE — 16×16px (1×1 tile) ───────────────────────────────
// Dark gray body, lighter door panel with handle, small control panel on right

export const MICROWAVE_A_SPRITE: SpriteData = (() => {
  const B = '#3A3848' // body dark
  const P = MWL       // door panel light gray
  const H = MC        // handle chrome
  const C = '#4A4858' // body mid
  const D = DC        // dark edge
  const L = LC        // light accent
  const G = '#22CC44' // green LED
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  _, _],
    [_, D,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  D,  _, _],
    [_, D,  B,  P,  P,  P,  P,  P,  P,  P,  B,  L,  B,  D,  _, _],
    [_, D,  B,  P,  P,  P,  P,  P,  P,  P,  B,  G,  B,  D,  _, _],
    [_, D,  B,  P,  H,  H,  H,  H,  H,  P,  B,  B,  B,  D,  _, _],
    [_, D,  B,  P,  P,  P,  P,  P,  P,  P,  B,  C,  B,  D,  _, _],
    [_, D,  B,  P,  P,  P,  P,  P,  P,  P,  B,  C,  B,  D,  _, _],
    [_, D,  B,  P,  P,  P,  P,  P,  P,  P,  B,  B,  B,  D,  _, _],
    [_, D,  B,  P,  P,  P,  P,  P,  P,  P,  B,  L,  B,  D,  _, _],
    [_, D,  B,  P,  P,  P,  P,  P,  P,  P,  B,  C,  B,  D,  _, _],
    [_, D,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  D,  _, _],
    [_, D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  D,  _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

// ── 3. MICROWAVE_B_SPRITE — 16×16px (1×1 tile) ───────────────────────────────
// Silver/white body, different button layout

export const MICROWAVE_B_SPRITE: SpriteData = (() => {
  const B = FD        // silver body
  const P = FW        // door panel white
  const H = MC        // handle
  const E = '#9090A0' // edge
  const K = '#C8C0B0' // warm cream accent
  const O = BTN       // orange button
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  _, _],
    [_, E,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  E,  _, _],
    [_, E,  B,  P,  P,  P,  P,  P,  P,  P,  B,  K,  B,  E,  _, _],
    [_, E,  B,  P,  P,  P,  P,  P,  P,  P,  B,  O,  B,  E,  _, _],
    [_, E,  B,  P,  H,  H,  H,  H,  H,  P,  B,  K,  B,  E,  _, _],
    [_, E,  B,  P,  P,  P,  P,  P,  P,  P,  B,  O,  B,  E,  _, _],
    [_, E,  B,  P,  P,  P,  P,  P,  P,  P,  B,  K,  B,  E,  _, _],
    [_, E,  B,  P,  P,  P,  P,  P,  P,  P,  B,  O,  B,  E,  _, _],
    [_, E,  B,  P,  P,  P,  P,  P,  P,  P,  B,  K,  B,  E,  _, _],
    [_, E,  B,  P,  P,  P,  P,  P,  P,  P,  B,  B,  B,  E,  _, _],
    [_, E,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  B,  E,  _, _],
    [_, E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ]
})()

// ── 4. FRIDGE_A_SPRITE — 16×32px (1×2 tiles) ────────────────────────────────
// Standard refrigerator top-down: top=freezer, bottom=main fridge with handle

export const FRIDGE_A_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // ── Top tile (rows 0–15): Freezer compartment ──
  rows.push([_, FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  _, _])  // 0 border
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 1
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FH,  FD,  _, _])  // 2 handle
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FH,  FD,  _, _])  // 3 handle
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 4
  rows.push([_, FD,  FW,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FW,  FD,  _, _])  // 5 shelf line
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 6
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 7
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 8
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 9
  rows.push([_, FD,  FW,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FW,  FD,  _, _])  // 10 shelf
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 11
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 12
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 13
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 14
  rows.push([_, FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  _, _])  // 15 separator

  // ── Bottom tile (rows 16–31): Main fridge compartment ──
  rows.push([_, FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  _, _])  // 16 border
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 17
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FH,  FD,  _, _])  // 18 handle
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FH,  FD,  _, _])  // 19 handle
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FH,  FD,  _, _])  // 20 handle
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 21
  rows.push([_, FD,  FW,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FW,  FD,  _, _])  // 22 shelf
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 23
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 24
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 25
  rows.push([_, FD,  FW,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FW,  FD,  _, _])  // 26 shelf
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 27
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 28
  rows.push([_, FD,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FW,  FD,  _, _])  // 29
  rows.push([_, FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  FD,  _, _])  // 30 border
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                                // 31 transparent

  return rows
})()

// ── 5. FRIDGE_B_SPRITE — 16×32px (1×2 tiles) ────────────────────────────────
// French door fridge: vertical center seam, two handles

export const FRIDGE_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  // ── Top tile (rows 0–15): top freezer drawer ──
  rows.push([_, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, _, _])   // 0 top edge
  rows.push([_, FD, FW, FW, FW, FW, FW, FW, FW, FW, FW, FW, FW, FD, _, _])   // 1
  rows.push([_, FD, FW, FH, FW, FW, FW, FD, FW, FW, FW, FH, FW, FD, _, _])   // 2 handles
  rows.push([_, FD, FW, FH, FW, FW, FW, FD, FW, FW, FW, FH, FW, FD, _, _])   // 3 handles
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 4 center seam
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 5
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 6
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 7
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 8
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 9
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 10
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 11
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 12
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 13
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 14
  rows.push([_, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, _, _])   // 15 separator

  // ── Bottom tile (rows 16–31): French door section ──
  rows.push([_, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, _, _])   // 16 border
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 17
  rows.push([_, FD, FW, FH, FW, FW, FW, FD, FW, FW, FW, FH, FW, FD, _, _])   // 18 handles
  rows.push([_, FD, FW, FH, FW, FW, FW, FD, FW, FW, FW, FH, FW, FD, _, _])   // 19 handles
  rows.push([_, FD, FW, FH, FW, FW, FW, FD, FW, FW, FW, FH, FW, FD, _, _])   // 20 handles
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 21
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 22
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 23
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 24
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 25
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 26
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 27
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 28
  rows.push([_, FD, FW, FW, FW, FW, FW, FD, FW, FW, FW, FW, FW, FD, _, _])   // 29
  rows.push([_, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, FD, _, _])   // 30 border
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                   // 31 transparent

  return rows
})()

// ── 6. WATER_DISPENSER_L_SPRITE — 16×32px (1×2 tiles) ───────────────────────
// Water cooler on left, garbage can on right

export const WATER_DISPENSER_L_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const GC = '#2A2A2A' // garbage can dark
  const GR = '#3A3A3A' // garbage can rim
  const GB = '#1A1A1A' // garbage bag dark
  const TL = '#4488CC' // tap button left (cold)
  const TR = '#CC4422' // tap button right (hot)

  // ── Top tile (rows 0–15): dispenser + tank ──
  rows.push([_, _, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, _, _, _, _, _, _])  // 0 tank top
  rows.push([_, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, _, _, _, _, _])  // 1 tank
  rows.push([_, WCT, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCT, _, _, _, _, _])  // 2 tank
  rows.push([_, WCT, WCW, WCW, STM, WCW, WCW, WCW, WCW, WCW, WCT, _, _, _, _, _])  // 3 tank highlight
  rows.push([_, WCT, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCT, _, _, _, _, _])  // 4 tank
  rows.push([_, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, _, _, _, _, _])  // 5 tank bottom
  rows.push([_, _, MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  _, _, _, _, _, _])        // 6 neck
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _, _, _, _, _])   // 7 body top
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _, _, _, _, _])   // 8 body
  rows.push([_, MC,  WCW, TL,  WCW, WCW, WCW, TR,  WCW, WCW, MC, _, _, _, _, _])   // 9 taps
  rows.push([_, MC,  WCW, TL,  WCW, WCW, WCW, TR,  WCW, WCW, MC, _, _, _, _, _])   // 10 taps
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _, _, _, _, _])   // 11 body
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _, _, _, _, _])   // 12 body
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _, _, _, _, _])   // 13 body
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _, _, _, _, _])   // 14 body
  rows.push([_, MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC, _, _, _, _, _])    // 15 base top

  // ── Bottom tile (rows 16–31): base + garbage can on right ──
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, GR,  GR,  GR,  _, _])  // 16
  rows.push([_, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, GR,  GB,  GR,  _, _])  // 17 can top
  rows.push([_, DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC, GC,  GB,  GC,  _, _])   // 18 base
  rows.push([_, DC,  LC,  LC,  LC,  LC,  LC,  LC,  LC,  LC,  DC, GC,  GB,  GC,  _, _])   // 19 base highlight
  rows.push([_, DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC, GC,  GB,  GC,  _, _])   // 20 base
  rows.push([_, _, MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  _, GC,  GB,  GC,  _, _])      // 21 legs
  rows.push([_, _, MC,  _, _, _, _, _, _, MC,  _, GC,  GB,  GC,  _, _])                   // 22 legs spread
  rows.push([_, _, MC,  _, _, _, _, _, _, MC,  _, GC,  GB,  GC,  _, _])                   // 23
  rows.push([_, _, MC,  _, _, _, _, _, _, MC,  _, GC,  GB,  GC,  _, _])                   // 24
  rows.push([_, _, _, _, _, _, _, _, _, _, _, GC,  GB,  GC,  _, _])                       // 25 can body
  rows.push([_, _, _, _, _, _, _, _, _, _, _, GC,  GB,  GC,  _, _])                       // 26
  rows.push([_, _, _, _, _, _, _, _, _, _, _, GC,  GB,  GC,  _, _])                       // 27
  rows.push([_, _, _, _, _, _, _, _, _, _, _, GC,  GB,  GC,  _, _])                       // 28
  rows.push([_, _, _, _, _, _, _, _, _, _, _, GC,  GC,  GC,  _, _])                       // 29 can base
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                              // 30
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                              // 31

  return rows
})()

// ── 7. WATER_DISPENSER_R_SPRITE — 16×32px (1×2 tiles) ───────────────────────
// Water cooler on right, garbage can on left (mirror of L)

export const WATER_DISPENSER_R_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const GC = '#2A2A2A'
  const GR = '#3A3A3A'
  const GB = '#1A1A1A'
  const TL = '#4488CC'
  const TR = '#CC4422'

  // ── Top tile (rows 0–15) ──
  rows.push([_, _, _, _, _, _, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, _, _])
  rows.push([_, _, _, _, _, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, _])
  rows.push([_, _, _, _, _, WCT, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCT, _])
  rows.push([_, _, _, _, _, WCT, WCW, WCW, WCW, WCW, WCW, STM, WCW, WCW, WCT, _])
  rows.push([_, _, _, _, _, WCT, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCT, _])
  rows.push([_, _, _, _, _, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, WCT, _])
  rows.push([_, _, _, _, _, _, MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  _, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, TL,  WCW, WCW, WCW, TR,  WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, TL,  WCW, WCW, WCW, TR,  WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, _, _, _, MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC, _])

  // ── Bottom tile (rows 16–31): base + garbage can on LEFT ──
  rows.push([_, _, GR,  GR,  GR,  MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, GR,  GB,  GR,  MC,  WCW, WCW, WCW, WCW, WCW, WCW, WCW, WCW, MC, _])
  rows.push([_, _, GC,  GB,  GC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC, _])
  rows.push([_, _, GC,  GB,  GC,  DC,  LC,  LC,  LC,  LC,  LC,  LC,  LC,  LC,  DC, _])
  rows.push([_, _, GC,  GB,  GC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC,  DC, _])
  rows.push([_, _, GC,  GB,  GC,  _, MC,  MC,  MC,  MC,  MC,  MC,  MC,  MC,  _, _])
  rows.push([_, _, GC,  GB,  GC,  _, MC,  _, _, _, _, _, _, MC,  _, _])
  rows.push([_, _, GC,  GB,  GC,  _, MC,  _, _, _, _, _, _, MC,  _, _])
  rows.push([_, _, GC,  GB,  GC,  _, MC,  _, _, _, _, _, _, MC,  _, _])
  rows.push([_, _, GC,  GB,  GC,  _, _, _, _, _, _, _, _, _, _, _])
  rows.push([_, _, GC,  GB,  GC,  _, _, _, _, _, _, _, _, _, _, _])
  rows.push([_, _, GC,  GB,  GC,  _, _, _, _, _, _, _, _, _, _, _])
  rows.push([_, _, GC,  GB,  GC,  _, _, _, _, _, _, _, _, _, _, _])
  rows.push([_, _, GC,  GC,  GC,  _, _, _, _, _, _, _, _, _, _, _])
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])

  return rows
})()

// ── 8. MUG_FRONT_SPRITE — 16×16px (1×1 tile) ────────────────────────────────
// Top-down mug: oval rim, yellow interior, dark coffee, handle on right

export const MUG_FRONT_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  MD,  _, _, _, _, _],
  [_, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MY,  MD, _, _, _, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY,  MY, MD, MY, MD, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY,  MY, _, MY, MD, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY,  MY, _, _, MD, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY,  MY, _, MY, MD, _],
  [_, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MY,  MD, _, MY, MD, _],
  [_, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  MD,  _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── 9. MUG_RIGHT_SPRITE — 16×16px (1×1 tile) ────────────────────────────────
// Mug with handle clearly visible on right side

export const MUG_RIGHT_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  _, _, _, _, _, _],
  [_, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MD, _, _, _, _, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MD, MY, MD, _, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, _, _, MD, _, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, _, _, MD, _, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MD, MY, MD, _, _],
  [_, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MD, _, _, _, _, _],
  [_, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── 10. MUG_LEFT_SPRITE — 16×16px (1×1 tile) ────────────────────────────────
// Mug with handle on left side

export const MUG_LEFT_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  MD, _, _, _, _],
  [_, _, _, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MD, _, _, _],
  [_, MD, MY, MD, _, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MD, _, _],
  [_, _, MD, _, _, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MD, _, _],
  [_, _, MD, _, _, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MD, _, _],
  [_, MD, MY, MD, _, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MD, _, _],
  [_, _, _, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MD, _, _, _],
  [_, _, _, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── 11. MUG_TILTED_A_SPRITE — 16×16px (1×1 tile) ────────────────────────────
// Tipped mug with coffee spillage dots around it

export const MUG_TILTED_A_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, CFL, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, MD, MD, MD, MD, MD, _, _, _, CFL, _, _, _],
  [_, _, _, MD, MY, MY, MY, MY, MY, MD, _, _, _, _, _, _],
  [_, CFL, MD, MY, CFL, CFL, CFL, MY, MY, MY, MD, _, _, _, _, _],
  [_, _, _, MD, MY, MY, MY, MY, MY, MD, _, _, _, _, _, _],
  [_, _, _, _, MD, MD, MD, MD, MD, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, CFL, _, _, _, _, _],
  [_, CFL, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, CFL, _, _, _, _, _, _, CFL, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── 12. MUG_STEAM_SPRITE — 16×16px (1×1 tile) ────────────────────────────────
// Mug with steam wisps rising above

export const MUG_STEAM_SPRITE: SpriteData = [
  [_, _, _, _, _, _, STM, _, _, STM, _, _, _, _, _, _],
  [_, _, _, _, _, STM, _, _, STM, _, STM, _, _, _, _, _],
  [_, _, _, _, _, _, STM, _, _, STM, _, _, _, _, _, _],
  [_, _, _, _, MD, MD,  MD,  MD,  MD,  MD,  MD, _, _, _, _, _],
  [_, _, _, MD, MY, MY,  MY,  MY,  MY,  MY,  MY, MD, _, _, _, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MY, MD, MY, MD, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MY, _, MY, MD, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MY, _, _, MD, _],
  [_, _, MD, MY, CFL, CFL, CFL, CFL, CFL, CFL, MY, MY, _, MY, MD, _],
  [_, _, _, MD, MY, MY,  MY,  MY,  MY,  MY,  MY, MD, _, MY, MD, _],
  [_, _, _, _, MD, MD,  MD,  MD,  MD,  MD,  MD, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── 13. MUG_EMPTY_SPRITE — 16×16px (1×1 tile) ────────────────────────────────
// Empty mug, no coffee inside

export const MUG_EMPTY_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  MD, _, _, _, _, _],
  [_, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MY, MD, _, _, _, _],
  [_, _, MD, MY, MY,  MY,  MY,  MY,  MY,  MY,  MY, MY, MD, MY, MD, _],
  [_, _, MD, MY, MY,  MY,  MY,  MY,  MY,  MY,  MY, MY, _, MY, MD, _],
  [_, _, MD, MY, MY,  MY,  MY,  MY,  MY,  MY,  MY, MY, _, _, MD, _],
  [_, _, MD, MY, MY,  MY,  MY,  MY,  MY,  MY,  MY, MY, _, MY, MD, _],
  [_, _, _, MD, MY,  MY,  MY,  MY,  MY,  MY,  MY, MD, _, MY, MD, _],
  [_, _, _, _, MD,  MD,  MD,  MD,  MD,  MD,  MD, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── 14. DOOR_A_SPRITE — 16×32px (1×2 tiles) ─────────────────────────────────
// Standard door: wood texture, door knob gold circle on right side center, shadow on left

export const DOOR_A_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const SH = '#5A3A18' // shadow edge left
  const HL = '#B88040' // highlight edge top

  // ── Top tile (rows 0–15) ──
  rows.push([_, SH, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, HL, _, _])  // 0
  rows.push([_, SH, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, HL, _, _])  // 1
  rows.push([_, SH, DP, DW, DW, DW, DW, DW, DW, DW, DW, DW, DP, HL, _, _])  // 2 panel border
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 3 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 4 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 5 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 6 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 7 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 8 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 9 panel
  rows.push([_, SH, DP, DW, DW, DW, DW, DW, DW, DW, DW, DW, DP, HL, _, _])  // 10 panel border
  rows.push([_, SH, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, HL, _, _])  // 11
  rows.push([_, SH, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, HL, _, _])  // 12
  rows.push([_, SH, DP, DW, DW, DW, DW, DW, DW, DW, DW, DW, DP, HL, _, _])  // 13 panel border
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 14 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 15 panel

  // ── Bottom tile (rows 16–31) ──
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 16 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 17 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 18 panel
  rows.push([_, SH, DP, DW, DP, DP, DK,  DP, DP, DP, DP, DW, DP, HL, _, _])  // 19 knob
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 20 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 21 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 22 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 23 panel
  rows.push([_, SH, DP, DW, DP, DP, DP, DP, DP, DP, DP, DW, DP, HL, _, _])  // 24 panel
  rows.push([_, SH, DP, DW, DW, DW, DW, DW, DW, DW, DW, DW, DP, HL, _, _])  // 25 panel border
  rows.push([_, SH, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, DP, HL, _, _])  // 26
  rows.push([_, SH, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, HL, _, _])  // 27
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 28 transparent
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 29
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 30
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 31

  return rows
})()

// ── 15. DOOR_B_SPRITE — 16×32px (1×2 tiles) ─────────────────────────────────
// Glass door: metal frame, blue-tinted glass panel, metal handle

export const DOOR_B_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const FR = MC       // metal frame
  const GL = '#B8D4E8' // glass blue-tint
  const GH = '#D0E8F8' // glass highlight
  const HN = LC       // handle chrome
  const SH = DC       // shadow

  // ── Top tile (rows 0–15) ──
  rows.push([_, SH, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, _, _])  // 0 top frame
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 1
  rows.push([_, SH, FR, GH, GH, GH, GH, GH, GH, GH, GH, GH, GL, FR, _, _])  // 2 highlight
  rows.push([_, SH, FR, GH, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 3
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 4
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 5
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 6
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 7
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 8
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 9
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 10
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 11
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 12
  rows.push([_, SH, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, _, _])  // 13 mid divider
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 14
  rows.push([_, SH, FR, GH, GH, GH, GH, GH, GH, GH, GH, GH, GL, FR, _, _])  // 15 highlight

  // ── Bottom tile (rows 16–31) ──
  rows.push([_, SH, FR, GH, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 16
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 17
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 18
  rows.push([_, SH, FR, GL, GL, HN,  HN,  GL, GL, GL, GL, GL, GL, FR, _, _])  // 19 handle
  rows.push([_, SH, FR, GL, GL, HN,  GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 20
  rows.push([_, SH, FR, GL, GL, HN,  HN,  GL, GL, GL, GL, GL, GL, FR, _, _])  // 21 handle
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 22
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 23
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 24
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 25
  rows.push([_, SH, FR, GL, GL, GL, GL, GL, GL, GL, GL, GL, GL, FR, _, _])  // 26
  rows.push([_, SH, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, _, _])  // 27 bottom frame
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 28
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 29
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 30
  rows.push([_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _])                  // 31

  return rows
})()

// ── 16. DOOR_VERTICAL_SPRITE — 32×16px (2×1 tiles) ──────────────────────────
// Horizontal sliding door: door frame + sliding panel + center handle

export const DOOR_VERTICAL_SPRITE: SpriteData = (() => {
  const rows: string[][] = []
  const FR = DW       // frame wood
  const SL = DP       // sliding panel
  const HN = DK       // handle gold
  const TK = MC       // track rail chrome
  const SH = '#5A3A18' // shadow

  // 32 columns wide, 16 rows tall
  // Row 0: frame top
  rows.push([SH, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, SH])
  // Row 1: track rail
  rows.push([SH, FR, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, FR, SH])
  // Row 2: door panel top
  rows.push([SH, FR, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, FR, SH])
  // Row 3: panel
  rows.push([SH, FR, SL, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, SL, FR, SH])
  // Row 4: panel inset
  rows.push([SH, FR, SL, DW, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, DW, SL, FR, SH])
  // Row 5: panel inset
  rows.push([SH, FR, SL, DW, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, DW, SL, FR, SH])
  // Row 6: handle row
  rows.push([SH, FR, SL, DW, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, HN, HN, HN, HN, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, DW, SL, FR, SH])
  // Row 7: handle row
  rows.push([SH, FR, SL, DW, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, HN, SL, SL, HN, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, DW, SL, FR, SH])
  // Row 8: handle row
  rows.push([SH, FR, SL, DW, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, HN, HN, HN, HN, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, DW, SL, FR, SH])
  // Row 9: panel inset
  rows.push([SH, FR, SL, DW, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, DW, SL, FR, SH])
  // Row 10: panel inset
  rows.push([SH, FR, SL, DW, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, DW, SL, FR, SH])
  // Row 11: panel border bottom
  rows.push([SH, FR, SL, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, DW, SL, FR, SH])
  // Row 12: panel bottom
  rows.push([SH, FR, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, SL, FR, SH])
  // Row 13: track rail bottom
  rows.push([SH, FR, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, TK, FR, SH])
  // Row 14: frame bottom
  rows.push([SH, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, FR, SH])
  // Row 15: transparent
  rows.push(new Array(32).fill(_))

  return rows
})()
