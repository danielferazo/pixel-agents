#!/usr/bin/env node
/**
 * Pixel Agents — Studio Noir Office Layout Generator
 *
 * "Studio Noir" design: distinct zones, team pods, war room round tables,
 * a proper coffee lounge. Replaces the factory-farm grid with a space
 * people would actually want to work in.
 *
 * Zones (top to bottom):
 *   Entry strip    rows 1-2    warm welcome
 *   Accent stripe  row  3      gold separator
 *   Workspace      rows 4-14   engineering bay (left) + design bay (right)
 *   Corridor       rows 15-16  gold walkway
 *   War room       rows 17-26  round tables, deep purple
 *   Transition     rows 27-28  cool tone buffer
 *   Coffee lounge  rows 29-36  warm rich brown
 *
 * Writes to:
 *   1. webview-ui/public/assets/default-layout.json  (source + bundled default)
 *   2. ~/.pixel-agents/layout.json                   (live server hot-reload)
 *
 * Usage:
 *   node scripts/generate-office-layout.js
 *   npm run generate-layout
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import os from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ── Grid ───────────────────────────────────────────────────────────────────────
const COLS = 64
const ROWS = 38

// TileType values (mirror webview-ui/src/office/types.ts)
const WALL   = 0
const FLOOR2 = 2   // work zone default
const FLOOR3 = 3   // cool tone
const FLOOR4 = 4   // accent stripe
const FLOOR5 = 5   // secondary work
const FLOOR6 = 6   // lounge
const FLOOR7 = 7   // war room

// ── Floor color presets ────────────────────────────────────────────────────────
// colorize: true = Photoshop-style (grayscale → fixed HSL)
const COLOR_ENTRY    = { h: 35,  s: 20,  b:  5,  c:  8, colorize: true }  // warm cream welcome
const COLOR_ENG      = { h: 210, s: 30,  b: -20, c:  8, colorize: true }  // cool slate (engineering)
const COLOR_DESIGN   = { h: 20,  s: 25,  b: -15, c:  5, colorize: true }  // warm terracotta (design)
const COLOR_CORRIDOR = { h: 45,  s: 65,  b:  5,  c: 15, colorize: true }  // amber gold corridor
const COLOR_WAR      = { h: 265, s: 35,  b: -25, c:  5, colorize: true }  // deep purple war room
const COLOR_TRANS    = { h: 200, s: 20,  b: -20, c:  5, colorize: true }  // cool slate transition
const COLOR_LOUNGE   = { h: 22,  s: 45,  b: -18, c:  5, colorize: true }  // rich coffee lounge

// ── Tile helpers ───────────────────────────────────────────────────────────────
const tiles      = new Array(COLS * ROWS).fill(FLOOR2)
const tileColors = new Array(COLS * ROWS).fill(COLOR_ENG)

function set(col, row, tileType, color = null) {
  if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return
  const i = row * COLS + col
  tiles[i]      = tileType
  tileColors[i] = color
}

function fillRect(c0, r0, c1, r1, tileType, color = null) {
  for (let r = r0; r <= r1; r++)
    for (let c = c0; c <= c1; c++)
      set(c, r, tileType, color)
}

// ── Outer walls ────────────────────────────────────────────────────────────────
for (let c = 0; c < COLS; c++) {
  set(c, 0,        WALL, null)
  set(c, ROWS - 1, WALL, null)
}
for (let r = 0; r < ROWS; r++) {
  set(0,        r, WALL, null)
  set(COLS - 1, r, WALL, null)
}

// ── Zone floors ────────────────────────────────────────────────────────────────

// Entry strip (rows 1-2): warm welcome
fillRect(1, 1, COLS-2, 2, FLOOR2, COLOR_ENTRY)

// Accent separator stripe (row 3): amber gold
fillRect(1, 3, COLS-2, 3, FLOOR4, COLOR_CORRIDOR)

// Engineering bay (rows 4-14, cols 1-29): cool slate
fillRect(1, 4, 29, 14, FLOOR2, COLOR_ENG)

// Design bay (rows 4-14, cols 30-62): warm terracotta
fillRect(30, 4, COLS-2, 14, FLOOR5, COLOR_DESIGN)

// Visual divider hint: slightly darker column between bays
set(29, 4, FLOOR4, COLOR_CORRIDOR)
for (let r = 5; r <= 14; r++) set(29, r, FLOOR2, { ...COLOR_ENG, b: -30 })

// Main corridor (rows 15-16): amber gold walkway
fillRect(1, 15, COLS-2, 16, FLOOR4, COLOR_CORRIDOR)

// War room (rows 17-26): deep purple, the collaboration hub
fillRect(1, 17, COLS-2, 26, FLOOR7, COLOR_WAR)

// Transition strip (rows 27-28): cool buffer between war room and lounge
fillRect(1, 27, COLS-2, 28, FLOOR3, COLOR_TRANS)

// Coffee lounge (rows 29-36): rich warm brown
fillRect(1, 29, COLS-2, 36, FLOOR6, COLOR_LOUNGE)

// ── Furniture ──────────────────────────────────────────────────────────────────
const furniture = []
let uid = 1

function add(type, col, row, color = undefined) {
  const item = { uid: `${type}-${uid++}`, type, col, row }
  if (color !== undefined) item.color = color
  furniture.push(item)
}

// ── Entry strip (rows 1-2) ─────────────────────────────────────────────────────
// Corner plants: welcoming greenery
add('plant', 1,        1)
add('plant', 2,        1)
add('plant', COLS - 2, 1)
add('plant', COLS - 3, 1)

// Entry lamps flanking the entrance zone
add('lamp', 10, 1)
add('lamp', 53, 1)
add('lamp', 10, 2)
add('lamp', 53, 2)

// Whiteboards on top wall near entry (team-facing)
add('whiteboard', 22, 0)
add('whiteboard', 38, 0)

// ── Engineering bay ─────────────────────────────────────────────────────────────
// Left half: cols 1-29, rows 4-14
// Desk clusters: 7 desks per pod row at cols 3,6,9,12,15,18,22,26
// (desks are 2x2: occupy cols c,c+1 rows r,r+1; chairs at row r+1)
// Pod rows: deskRow=4,7,10,13 with chairs at deskRow+1
const ENG_DESK_COLS = [2, 5, 8, 11, 14, 18, 22, 26]
const ENG_POD_ROWS  = [4, 7, 10, 13]

for (const deskRow of ENG_POD_ROWS) {
  for (const col of ENG_DESK_COLS) {
    add('desk',  col, deskRow)
    add('chair', col, deskRow + 1)
  }
}

// Bookshelves on left wall of engineering bay (between pods)
add('bookshelf', 1, 4)
add('bookshelf', 1, 7)
add('bookshelf', 1, 10)
add('bookshelf', 1, 13)

// PC on a few desks to add visual variety (surface items if supported)
// Using just the PC type on floor tiles near desks as decoration
add('pc', 3,  4)
add('pc', 9,  7)
add('pc', 15, 10)
add('pc', 22, 13)

// Whiteboard cluster on left wall (col 0)
add('whiteboard', 0, 5)
add('whiteboard', 0, 11)

// ── Design bay ──────────────────────────────────────────────────────────────────
// Right half: cols 31-62, rows 4-14
// More open layout: 2 desk pod rows + 1 round table in center
const DSN_DESK_COLS = [31, 34, 37, 52, 56, 60]
const DSN_POD_ROWS  = [4, 13]  // only top and bottom rows, open center

for (const deskRow of DSN_POD_ROWS) {
  for (const col of DSN_DESK_COLS) {
    add('desk',  col, deskRow)
    add('chair', col, deskRow + 1)
  }
}

// Round table in center of design bay: col 44, row 8 (3x3 footprint → cols 44-46, rows 8-10)
// Auto-generates 10 seats at radius 2 from center (45, 9)
add('round_table', 44, 8)

// Plants around the design bay round table
add('plant', 42, 7)
add('plant', 47, 7)
add('plant', 42, 12)
add('plant', 47, 12)

// Whiteboard cluster in design bay
add('whiteboard', COLS-2, 5)
add('whiteboard', COLS-2, 10)

// Lamps in design bay
add('lamp', 40, 4)
add('lamp', 62, 4)
add('lamp', 40, 13)
add('lamp', 62, 13)

// Bookshelf on right wall of design bay
add('bookshelf', COLS-2, 8)

// ── Main corridor (rows 15-16) ──────────────────────────────────────────────────
// Intentionally sparse — wide walkway
// Corner plants at corridor entry/exit points
add('plant', 1,        15)
add('plant', COLS - 2, 15)
add('plant', 1,        16)
add('plant', COLS - 2, 16)

// A few lamps along the corridor for ambiance
add('lamp', 20, 15)
add('lamp', 42, 15)

// ── War room (rows 17-26) ───────────────────────────────────────────────────────
// 3 round tables arranged across the space
// Table 1: left cluster, col 8 row 18 → footprint cols 8-10, rows 18-20
//   seats at radius 2 from (9, 19): rows 17-21, cols 7-11
add('round_table', 8, 18)

// Table 2: center, col 28 row 18 → footprint cols 28-30, rows 18-20
//   seats at radius 2 from (29, 19): rows 17-21, cols 27-31
add('round_table', 28, 18)

// Table 3: right cluster, col 48 row 18 → footprint cols 48-50, rows 18-20
//   seats at radius 2 from (49, 19): rows 17-21, cols 47-51
add('round_table', 48, 18)

// Whiteboards on the war room walls (top = row 17)
add('whiteboard', 3,  17)
add('whiteboard', 17, 17)
add('whiteboard', 36, 17)
add('whiteboard', 55, 17)

// Plants flanking each round table
// Around table 1
add('plant', 6,  17)
add('plant', 12, 17)
add('plant', 6,  22)
add('plant', 12, 22)

// Around table 2
add('plant', 26, 17)
add('plant', 32, 17)
add('plant', 26, 22)
add('plant', 32, 22)

// Around table 3
add('plant', 46, 17)
add('plant', 52, 17)
add('plant', 46, 22)
add('plant', 52, 22)

// Lamps for war room atmosphere
add('lamp', 1,        18)
add('lamp', COLS - 2, 18)
add('lamp', 1,        24)
add('lamp', COLS - 2, 24)
add('lamp', 20,       24)
add('lamp', 40,       24)

// Bookshelves on war room walls
add('bookshelf', 1,        20)
add('bookshelf', COLS - 2, 20)

// Presentation TVs in war room (flanking the center table)
add('tv', 19, 17)  // 2x1, between table 1 and 2
add('tv', 40, 17)  // 2x1, between table 2 and 3

// ── Transition strip (rows 27-28) ───────────────────────────────────────────────
add('plant', 1,        27)
add('plant', COLS - 2, 27)
add('lamp', 32, 27)

// ── Coffee lounge (rows 29-36) ──────────────────────────────────────────────────
// A real lounge: sofas, coffee machines, a TV, arcade cabinet, plants, lamps

// Water coolers near entrance
add('cooler', 8,        29)
add('cooler', COLS - 8, 29)

// Coffee machines flanking the coolers — the espresso station
add('coffee_machine', 6,        29)
add('coffee_machine', COLS - 6, 29)
add('coffee_machine', 6,        30)
add('coffee_machine', COLS - 6, 30)

// Sofas creating seating clusters (2x1 each, adds 2 seats per sofa)
// Left seating cluster
add('sofa', 3,  32)
add('sofa', 3,  34)
// Right seating cluster
add('sofa', 57, 32)
add('sofa', 57, 34)
// Center lounge seating
add('sofa', 25, 33)
add('sofa', 36, 33)

// TV on the wall — big lounge screen
add('tv', 29, 29)  // 2x1, centered above lounge entrance

// Arcade cabinet in the game corner (bottom-right area)
add('arcade', COLS - 4, 31)  // 1x2

// Bookshelf walls (left and right)
add('bookshelf', 1, 29)
add('bookshelf', 1, 32)
add('bookshelf', 1, 35)
add('bookshelf', COLS - 2, 29)
add('bookshelf', COLS - 2, 32)
add('bookshelf', COLS - 2, 35)

// Lamp clusters creating warm pools of light
add('lamp', 5,        30)
add('lamp', 15,       30)
add('lamp', 25,       30)
add('lamp', 38,       30)
add('lamp', 48,       30)
add('lamp', COLS - 5, 30)

// Plants scattered organically (not in a line)
add('plant', 10, 31)
add('plant', 22, 33)
add('plant', 31, 30)
add('plant', 41, 33)
add('plant', 52, 31)

// Second row of plants deeper in lounge
add('plant', 5,        34)
add('plant', 17,       35)
add('plant', 29,       34)
add('plant', 43,       35)
add('plant', 57,       34)

// Corner plants lounge bottom
add('plant', 1,        36)
add('plant', 2,        36)
add('plant', COLS - 2, 36)
add('plant', COLS - 3, 36)

// A few more lamps deeper in the lounge
add('lamp', 12, 34)
add('lamp', 34, 34)
add('lamp', 55, 34)

// ── Windows, Printers, Vending Machines ──

// ── Windows ─────────────────────────────────────────────────────────────────
// Engineering zone top wall (row 4, cols 1-25 in steps of 4)
for (let c = 1; c <= 25; c += 4) add('window', c, 4)
// Design zone top wall (row 4, cols 30-58 in steps of 4)
for (let c = 30; c <= 58; c += 4) add('window', c, 4)
// War room top wall (row 17, cols 1-57 in steps of 4)
for (let c = 1; c <= 57; c += 4) add('window', c, 17)
// Lounge top wall (row 28, cols 1-57 in steps of 4)
for (let c = 1; c <= 57; c += 4) add('window', c, 28)

// ── File Cabinets ─────────────────────────────────────────────────────────
// Engineering zone right side (acts as wall of cabinets)
add('file_cabinet', 26, 5)
add('file_cabinet', 26, 8)
add('file_cabinet', 26, 11)
// Design zone right side
add('file_cabinet', 60, 5)
add('file_cabinet', 60, 8)
add('file_cabinet', 60, 11)

// ── Printers ──────────────────────────────────────────────────────────────
// One printer per zone (near filing cabinets)
add('printer', 27, 4)   // Engineering zone
add('printer', 61, 4)   // Design zone
add('printer', 4, 34)   // Lounge printer station

// ── Vending Machines ──────────────────────────────────────────────────────
// Coffee lounge (2 vending machines)
add('vending_machine', 50, 29)
add('vending_machine', 55, 29)

// ── Desk surface items (placed ON desks) ───────────────────────────────────────
// Engineering desks: scatter laptops, coffee cups, papers across workstations
const ENG_SURFACE_ITEMS = ['open_laptop', 'coffee_cup', 'desk_papers', 'open_laptop', 'coffee_cup', 'desk_papers', 'open_laptop', 'coffee_cup']
ENG_POD_ROWS.forEach((row, ri) => {
  ENG_DESK_COLS.forEach((col, ci) => {
    const item = ENG_SURFACE_ITEMS[(ri * ENG_DESK_COLS.length + ci) % ENG_SURFACE_ITEMS.length]
    add(item, col, row)  // places surface item at same tile as desk
  })
})

// Design desks: similar surface clutter
const DSN_SURFACE_ITEMS = ['open_laptop', 'desk_papers', 'coffee_cup', 'open_laptop']
DSN_POD_ROWS.forEach((row, ri) => {
  DSN_DESK_COLS.forEach((col, ci) => {
    const item = DSN_SURFACE_ITEMS[(ri * DSN_DESK_COLS.length + ci) % DSN_SURFACE_ITEMS.length]
    add(item, col, row)
  })
})

// ── Zone labels ─────────────────────────────────────────────────────────────────
const zones = [
  { label: 'ENGINEERING',   col: 2,  row: 5,  color: 'rgba(80, 140, 200, 0.25)' },
  { label: 'DESIGN',        col: 31, row: 5,  color: 'rgba(200, 120, 70, 0.25)' },
  { label: 'WAR ROOM',      col: 2,  row: 18, color: 'rgba(150, 80, 220, 0.25)' },
  { label: 'LOUNGE',        col: 2,  row: 30, color: 'rgba(180, 100, 40, 0.25)' },
]

// ── Assemble layout ────────────────────────────────────────────────────────────
const layout = {
  version:    1,
  cols:       COLS,
  rows:       ROWS,
  tiles,
  tileColors,
  furniture,
  zones,
}

// ── Write ───────────────────────────────────────────────────────────────────────
const targets = [
  join(ROOT, 'webview-ui', 'public', 'assets', 'default-layout.json'),
]

// Also hot-reload the live server if it exists
const liveDir  = join(os.homedir(), '.pixel-agents')
const livePath = join(liveDir, 'layout.json')
if (existsSync(liveDir)) targets.push(livePath)

const json = JSON.stringify(layout, null, 2)
for (const p of targets) {
  writeFileSync(p, json)
  console.log(`  ✓  ${p}`)
}

// Stats
const engSeats = ENG_DESK_COLS.length * ENG_POD_ROWS.length
const dsnSeats = DSN_DESK_COLS.length * DSN_POD_ROWS.length
const tableSeats = 3 * 10  // 3 round tables × 10 seats each
const designTableSeats = 10 // 1 round table in design bay

console.log(`\n  Grid:      ${COLS} × ${ROWS}`)
console.log(`  Workspace: ${engSeats} engineering + ${dsnSeats} design desk stations`)
console.log(`  Round tables: 3 war room + 1 design bay = ${tableSeats + designTableSeats} collaborative seats`)
console.log(`  Total seating: ~${engSeats + dsnSeats + tableSeats + designTableSeats} positions`)
console.log(`\n  Zones:`)
console.log(`    Entry strip    rows 1-2   (warm cream welcome)`)
console.log(`    Engineering    rows 4-14  cols 1-29  (cool slate, ${engSeats} desks)`)
console.log(`    Design bay     rows 4-14  cols 30-62 (warm terracotta, ${dsnSeats} desks + round table)`)
console.log(`    War room       rows 17-26 (deep purple, 3 round tables)`)
console.log(`    Coffee lounge  rows 29-36 (rich brown, plants + lamps)`)
console.log(`\n  Reload localhost:7890 to see Studio Noir.\n`)
