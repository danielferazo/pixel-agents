#!/usr/bin/env node
/**
 * Pixel Agents — Office Layout Generator
 *
 * Generates a large open-plan office with 100+ workstations for teams
 * running many concurrent agents. Writes to:
 *   1. webview-ui/public/assets/default-layout.json  (source)
 *   2. ~/.pixel-agents/layout.json                   (live server — hot-reloads)
 *
 * Usage:
 *   node scripts/generate-office-layout.js
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import os from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ── Grid ──────────────────────────────────────────────────────────────────────
const COLS = 64
const ROWS = 34

// TileType values (mirror src/office/types.ts)
const WALL   = 0
const FLOOR1 = 1   // default office floor
const FLOOR2 = 2   // warm office floor (work zones)
const FLOOR3 = 3   // cool floor (break/lounge area)
const FLOOR4 = 4   // accent (corridor stripe)

// ── Floor color presets ───────────────────────────────────────────────────────
// All use colorize: true (Photoshop-style: grayscale → fixed HSL)
const COLOR_WORK       = { h: 28,  s: 35, b: 8,   c: 5,  colorize: true }  // warm tan
const COLOR_CORRIDOR   = { h: 220, s: 20, b: -5,  c: 0,  colorize: true }  // cool grey
const COLOR_LOUNGE     = { h: 190, s: 30, b: -8,  c: 0,  colorize: true }  // slate blue
const COLOR_ACCENT     = { h: 45,  s: 50, b: 15,  c: 5,  colorize: true }  // golden stripe

// ── Tile helpers ──────────────────────────────────────────────────────────────
const tiles      = new Array(COLS * ROWS).fill(FLOOR2)
const tileColors = new Array(COLS * ROWS).fill(COLOR_WORK)

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

// ── Outer walls ───────────────────────────────────────────────────────────────
for (let c = 0; c < COLS; c++) {
  set(c, 0,        WALL, null)
  set(c, ROWS - 1, WALL, null)
}
for (let r = 0; r < ROWS; r++) {
  set(0,        r, WALL, null)
  set(COLS - 1, r, WALL, null)
}

// ── Work zone floor (rows 1-19) ───────────────────────────────────────────────
fillRect(1, 1, COLS-2, 19, FLOOR2, COLOR_WORK)

// ── Wide central corridor (rows 17-19) ───────────────────────────────────────
fillRect(1, 17, COLS-2, 19, FLOOR4, COLOR_ACCENT)

// ── Lounge / break area (rows 20-32) ─────────────────────────────────────────
fillRect(1, 20, COLS-2, ROWS-2, FLOOR3, COLOR_LOUNGE)

// ── Furniture ─────────────────────────────────────────────────────────────────
const furniture = []
let uid = 1

function add(type, col, row) {
  furniture.push({ uid: `${type}-${uid++}`, type, col, row })
}

// ── Workstation pods ──────────────────────────────────────────────────────────
// Desks at every 3 cols: 1, 4, 7, ..., 61  →  21 desks per pod row
// 5 pod rows (deskRow, chairRow)  →  105 total seats
const DESK_COLS = []
for (let c = 1; c < COLS - 1; c += 3) DESK_COLS.push(c)  // 21 cols

const POD_ROWS = [
  [2,  3 ],   // Pod row 1
  [5,  6 ],   // Pod row 2
  [8,  9 ],   // Pod row 3
  [11, 12],   // Pod row 4
  [14, 15],   // Pod row 5
]

for (const [deskRow, chairRow] of POD_ROWS) {
  for (const col of DESK_COLS) {
    add('desk',  col, deskRow)
    add('chair', col, chairRow)
  }
}

// ── Whiteboards on top wall (row 0) ──────────────────────────────────────────
for (const wbCol of [8, 20, 32, 44, 56]) {
  add('whiteboard', wbCol, 0)
}

// ── Corner plants (work zone) ─────────────────────────────────────────────────
add('plant', 1,        1)
add('plant', COLS - 2, 1)
add('plant', 1,        16)
add('plant', COLS - 2, 16)

// ── Bookshelves along left wall (work zone) ───────────────────────────────────
for (let r = 2; r <= 14; r += 6) {
  add('bookshelf', 1, r)
}

// ── Break / lounge area (rows 20-32) ─────────────────────────────────────────
// Water coolers
add('cooler', 10, 23)
add('cooler', 53, 23)

// Plants scattered in lounge
for (const col of [5, 16, 26, 32, 38, 48, 58]) {
  add('plant', col, 27)
}

// Bookshelves on left wall of lounge
add('bookshelf', 1, 22)
add('bookshelf', 1, 28)

// Bookshelves on right wall of lounge
add('bookshelf', COLS - 2, 22)
add('bookshelf', COLS - 2, 28)

// Lamps in lounge
for (const col of [5, 20, 31, 43, 58]) {
  add('lamp', col, 21)
}

// Corner plants in lounge
add('plant', 1,        ROWS - 2)
add('plant', COLS - 2, ROWS - 2)

// ── Assemble layout ───────────────────────────────────────────────────────────
const layout = {
  version:    1,
  cols:       COLS,
  rows:       ROWS,
  tiles,
  tileColors,
  furniture,
}

// ── Write ──────────────────────────────────────────────────────────────────────
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

const seats = DESK_COLS.length * POD_ROWS.length
console.log(`\n  Grid:  ${COLS} × ${ROWS}`)
console.log(`  Seats: ${seats} workstations (${DESK_COLS.length} per row × ${POD_ROWS.length} rows)`)
console.log(`  Break: rows 20–32 (lounge + bookshelves + plants)`)
console.log(`\n  Reload localhost:7890 to see the new office.\n`)
