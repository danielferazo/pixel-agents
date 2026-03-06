/**
 * Pixel Agents — Standalone Server (v2)
 *
 * Improvements over v1:
 *  1. Only tracks recent sessions (PIXEL_AGENTS_RECENT_DAYS, default 7)
 *  2. Readable project names decoded from Claude's path-hash format
 *  3. Full layout file watcher (cross-tab sync, own-write protection)
 *  4. Atomic clearAgentActivity() matching the extension exactly
 *  5. Sub-agent permission bubbles (subagentToolPermission messages)
 *  6. Agent seats persisted to ~/.pixel-agents/settings.json
 *  7. Layout sent before existingAgents (ordering guarantee)
 *  8. workspaceFolders sent in webviewReady response
 */

import fs from 'fs'
import path from 'path'
import os from 'os'
import http from 'http'
import { exec } from 'child_process'
import { fileURLToPath } from 'url'
import express from 'express'
import { WebSocketServer } from 'ws'
import { PNG } from 'pngjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ── Paths ─────────────────────────────────────────────────────
const PORT = Number(process.env.PORT || 7890)
const DIST_DIR = path.join(__dirname, '..', 'dist', 'webview')
const CLAUDE_DIR = path.join(os.homedir(), '.claude', 'projects')
const LAYOUT_DIR = path.join(os.homedir(), '.pixel-agents')
const LAYOUT_FILE = path.join(LAYOUT_DIR, 'layout.json')
const SETTINGS_FILE = path.join(LAYOUT_DIR, 'settings.json')

// ── Config ────────────────────────────────────────────────────
// Only track JSONL files modified within this many days (0 = all time)
const RECENT_DAYS = Number(process.env.PIXEL_AGENTS_RECENT_DAYS ?? 7)
const RECENT_MS = RECENT_DAYS > 0 ? RECENT_DAYS * 24 * 60 * 60 * 1000 : Infinity
const MIN_FILE_SIZE = 200  // bytes — skip trivially empty sessions

// ── Constants (mirrored from src/constants.ts) ────────────────
const PNG_ALPHA_THRESHOLD = 128
const WALL_PIECE_WIDTH = 16
const WALL_PIECE_HEIGHT = 32
const WALL_GRID_COLS = 4
const WALL_BITMASK_COUNT = 16
const FLOOR_PATTERN_COUNT = 7
const FLOOR_TILE_SIZE = 16
const CHARACTER_DIRECTIONS = ['down', 'up', 'right']
const CHAR_FRAME_W = 16
const CHAR_FRAME_H = 32
const CHAR_FRAMES_PER_ROW = 7
const CHAR_COUNT = 6

const FILE_WATCHER_POLL_INTERVAL_MS = 1000
const LAYOUT_FILE_POLL_INTERVAL_MS = 2000
const PROJECT_SCAN_INTERVAL_MS = 1000
const TOOL_DONE_DELAY_MS = 300
const PERMISSION_TIMER_DELAY_MS = 7000
const TEXT_IDLE_DELAY_MS = 5000
const BASH_COMMAND_DISPLAY_MAX_LENGTH = 30
const TASK_DESCRIPTION_DISPLAY_MAX_LENGTH = 40
const PERMISSION_EXEMPT_TOOLS = new Set(['Task', 'AskUserQuestion'])

// ── State ──────────────────────────────────────────────────────
const agents = new Map()
let nextAgentId = 1
const knownJsonlFiles = new Set()
const fileWatchers = new Map()
const pollingTimers = new Map()
const waitingTimers = new Map()
const permissionTimers = new Map()
const clients = new Set()

// ── Persistent settings ────────────────────────────────────────
let settings = { agentSeats: {}, soundEnabled: true }

function loadSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      settings = { ...settings, ...JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8')) }
    }
  } catch {}
}

function saveSettings() {
  try {
    fs.mkdirSync(LAYOUT_DIR, { recursive: true })
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2), 'utf-8')
  } catch (e) {
    console.error('[Settings] Write failed:', e.message)
  }
}

// ── Asset cache ────────────────────────────────────────────────
let cachedAssets = null

// ── WebSocket helpers ──────────────────────────────────────────
function broadcast(msg) {
  const data = JSON.stringify(msg)
  for (const ws of clients) {
    if (ws.readyState === 1) ws.send(data)
  }
}

function sendTo(ws, msg) {
  if (ws.readyState === 1) ws.send(JSON.stringify(msg))
}

// ── Project name decoding ──────────────────────────────────────
// Claude hashes workspace paths: replace(/[^a-zA-Z0-9-]/g, '-')
// e.g. "/Users/dan/Desktop/Projects/autonomo-ai" → "-Users-dan-Desktop-Projects-autonomo-ai"
// We strip the known home prefix + common intermediate path segments.
function getReadableProjectName(hashedDir) {
  const homeHash = os.homedir().replace(/[^a-zA-Z0-9-]/g, '-')
  let name = hashedDir

  // Strip home directory prefix
  if (name.startsWith(homeHash)) name = name.slice(homeHash.length)

  // Strip common intermediate path segments
  const commonPrefixes = [
    '-Desktop-Projects-', '-Documents-Projects-', '-Projects-',
    '-Desktop-', '-Documents-', '-src-',
  ]
  for (const prefix of commonPrefixes) {
    if (name.startsWith(prefix)) { name = name.slice(prefix.length); break }
  }

  // Strip leading/trailing dashes
  name = name.replace(/^-+|-+$/g, '')

  // Empty → home directory
  return name || 'home'
}

// ── Layout persistence (ported from layoutPersistence.ts) ─────
function readLayout() {
  try {
    if (fs.existsSync(LAYOUT_FILE)) {
      return JSON.parse(fs.readFileSync(LAYOUT_FILE, 'utf-8'))
    }
  } catch {}
  // Fall back to bundled default
  try {
    const defaultPath = path.join(DIST_DIR, 'assets', 'default-layout.json')
    if (fs.existsSync(defaultPath)) {
      const layout = JSON.parse(fs.readFileSync(defaultPath, 'utf-8'))
      writeLayout(layout)   // seed the file so future edits persist
      return layout
    }
  } catch {}
  return null
}

function writeLayout(layout) {
  try {
    fs.mkdirSync(LAYOUT_DIR, { recursive: true })
    const tmp = LAYOUT_FILE + '.tmp'
    fs.writeFileSync(tmp, JSON.stringify(layout), 'utf-8')
    fs.renameSync(tmp, LAYOUT_FILE)
  } catch (e) {
    console.error('[Layout] Write failed:', e.message)
  }
}

// Layout file watcher — broadcasts cross-tab changes, ignores own writes
let layoutWatcher = null

function startLayoutWatcher() {
  if (layoutWatcher) return

  let skipNextChange = false
  let lastMtime = 0
  let fsWatcher = null
  let pollTimer = null
  let disposed = false

  try {
    if (fs.existsSync(LAYOUT_FILE)) lastMtime = fs.statSync(LAYOUT_FILE).mtimeMs
  } catch {}

  function checkForChange() {
    if (disposed) return
    try {
      if (!fs.existsSync(LAYOUT_FILE)) return
      const stat = fs.statSync(LAYOUT_FILE)
      if (stat.mtimeMs <= lastMtime) return
      lastMtime = stat.mtimeMs
      if (skipNextChange) { skipNextChange = false; return }
      const layout = JSON.parse(fs.readFileSync(LAYOUT_FILE, 'utf-8'))
      console.log('[Layout] External change — syncing to all clients')
      broadcast({ type: 'layoutLoaded', layout })
    } catch {}
  }

  function startFsWatch() {
    if (disposed || fsWatcher) return
    try {
      if (!fs.existsSync(LAYOUT_FILE)) return
      fsWatcher = fs.watch(LAYOUT_FILE, checkForChange)
      fsWatcher.on('error', () => { fsWatcher?.close(); fsWatcher = null })
    } catch {}
  }

  startFsWatch()
  pollTimer = setInterval(() => {
    if (disposed) return
    if (!fsWatcher) startFsWatch()
    checkForChange()
  }, LAYOUT_FILE_POLL_INTERVAL_MS)

  layoutWatcher = {
    markOwnWrite() {
      skipNextChange = true
      try {
        if (fs.existsSync(LAYOUT_FILE)) lastMtime = fs.statSync(LAYOUT_FILE).mtimeMs
      } catch {}
    },
    dispose() {
      disposed = true
      fsWatcher?.close()
      fsWatcher = null
      if (pollTimer) { clearInterval(pollTimer); pollTimer = null }
    },
  }
}

// ── PNG → SpriteData ───────────────────────────────────────────
function pngToSpriteData(pngBuffer, width, height) {
  const png = PNG.sync.read(pngBuffer)
  const sprite = []
  for (let y = 0; y < height; y++) {
    const row = []
    for (let x = 0; x < width; x++) {
      const i = (y * png.width + x) * 4
      const r = png.data[i], g = png.data[i + 1], b = png.data[i + 2], a = png.data[i + 3]
      row.push(a < PNG_ALPHA_THRESHOLD
        ? ''
        : `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase()
      )
    }
    sprite.push(row)
  }
  return sprite
}

// ── Asset loading ──────────────────────────────────────────────
async function loadAssets() {
  console.log('[Assets] Loading from', DIST_DIR)
  const assetsDir = path.join(DIST_DIR, 'assets')

  if (!fs.existsSync(assetsDir)) {
    console.log('[Assets] ⚠️  dist/webview/assets/ not found — rebuild first')
    return null
  }

  const result = {}

  // Default layout
  try {
    const p = path.join(assetsDir, 'default-layout.json')
    if (fs.existsSync(p)) {
      result.defaultLayout = JSON.parse(fs.readFileSync(p, 'utf-8'))
      console.log('[Assets] ✅ Default layout')
    }
  } catch (e) { console.warn('[Assets] Default layout:', e.message) }

  // Character sprites
  try {
    const characters = []
    for (let ci = 0; ci < CHAR_COUNT; ci++) {
      const filePath = path.join(assetsDir, 'characters', `char_${ci}.png`)
      if (!fs.existsSync(filePath)) { console.log(`[Assets] Missing char_${ci}.png`); break }
      const png = PNG.sync.read(fs.readFileSync(filePath))
      const charData = { down: [], up: [], right: [] }
      CHARACTER_DIRECTIONS.forEach((dir, dirIdx) => {
        const rowOffsetY = dirIdx * CHAR_FRAME_H
        const frames = []
        for (let f = 0; f < CHAR_FRAMES_PER_ROW; f++) {
          const sprite = []
          const frameOffsetX = f * CHAR_FRAME_W
          for (let y = 0; y < CHAR_FRAME_H; y++) {
            const row = []
            for (let x = 0; x < CHAR_FRAME_W; x++) {
              const i = ((rowOffsetY + y) * png.width + (frameOffsetX + x)) * 4
              const r = png.data[i], g = png.data[i + 1], b = png.data[i + 2], a = png.data[i + 3]
              row.push(a < PNG_ALPHA_THRESHOLD
                ? ''
                : `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase()
              )
            }
            sprite.push(row)
          }
          frames.push(sprite)
        }
        charData[dir] = frames
      })
      characters.push(charData)
    }
    if (characters.length === CHAR_COUNT) {
      result.characterSprites = characters
      console.log(`[Assets] ✅ ${characters.length} character sprites`)
    }
  } catch (e) { console.warn('[Assets] Characters:', e.message) }

  // Wall tiles
  try {
    const wallPath = path.join(assetsDir, 'walls.png')
    if (fs.existsSync(wallPath)) {
      const png = PNG.sync.read(fs.readFileSync(wallPath))
      const sprites = []
      for (let mask = 0; mask < WALL_BITMASK_COUNT; mask++) {
        const ox = (mask % WALL_GRID_COLS) * WALL_PIECE_WIDTH
        const oy = Math.floor(mask / WALL_GRID_COLS) * WALL_PIECE_HEIGHT
        const sprite = []
        for (let r = 0; r < WALL_PIECE_HEIGHT; r++) {
          const row = []
          for (let c = 0; c < WALL_PIECE_WIDTH; c++) {
            const i = ((oy + r) * png.width + (ox + c)) * 4
            const rv = png.data[i], gv = png.data[i + 1], bv = png.data[i + 2], av = png.data[i + 3]
            row.push(av < PNG_ALPHA_THRESHOLD
              ? ''
              : `#${rv.toString(16).padStart(2, '0')}${gv.toString(16).padStart(2, '0')}${bv.toString(16).padStart(2, '0')}`.toUpperCase()
            )
          }
          sprite.push(row)
        }
        sprites.push(sprite)
      }
      result.wallTiles = sprites
      console.log(`[Assets] ✅ ${sprites.length} wall tile pieces`)
    }
  } catch (e) { console.warn('[Assets] Walls:', e.message) }

  // Floor tiles (optional — not in public repo assets)
  try {
    const floorPath = path.join(assetsDir, 'floors.png')
    if (fs.existsSync(floorPath)) {
      const png = PNG.sync.read(fs.readFileSync(floorPath))
      const sprites = []
      for (let t = 0; t < FLOOR_PATTERN_COUNT; t++) {
        const sprite = []
        for (let y = 0; y < FLOOR_TILE_SIZE; y++) {
          const row = []
          for (let x = 0; x < FLOOR_TILE_SIZE; x++) {
            const px = t * FLOOR_TILE_SIZE + x
            const i = (y * png.width + px) * 4
            const r = png.data[i], g = png.data[i + 1], b = png.data[i + 2], a = png.data[i + 3]
            row.push(a < PNG_ALPHA_THRESHOLD
              ? ''
              : `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase()
            )
          }
          sprite.push(row)
        }
        sprites.push(sprite)
      }
      result.floorTiles = sprites
      console.log(`[Assets] ✅ ${sprites.length} floor tile patterns`)
    }
  } catch (e) { console.warn('[Assets] Floors:', e.message) }

  // Furniture catalog (optional — not in public repo assets)
  try {
    const catalogPath = path.join(assetsDir, 'furniture', 'furniture-catalog.json')
    if (fs.existsSync(catalogPath)) {
      const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'))
      const catalog = catalogData.assets || []
      const sprites = {}
      for (const asset of catalog) {
        let filePath = asset.file
        if (!filePath.startsWith('assets/')) filePath = `assets/${filePath}`
        const assetPath = path.join(DIST_DIR, filePath)
        if (!fs.existsSync(assetPath)) continue
        try {
          sprites[asset.id] = pngToSpriteData(fs.readFileSync(assetPath), asset.width, asset.height)
        } catch {}
      }
      result.furnitureAssets = { catalog, sprites }
      console.log(`[Assets] ✅ ${catalog.length} furniture assets`)
    }
  } catch (e) { console.warn('[Assets] Furniture:', e.message) }

  return result
}

function sendAssetsToClient(ws) {
  if (!cachedAssets) return
  const { characterSprites, floorTiles, wallTiles, furnitureAssets } = cachedAssets
  if (characterSprites) sendTo(ws, { type: 'characterSpritesLoaded', characters: characterSprites })
  if (floorTiles)       sendTo(ws, { type: 'floorTilesLoaded', sprites: floorTiles })
  if (wallTiles)        sendTo(ws, { type: 'wallTilesLoaded', sprites: wallTiles })
  if (furnitureAssets)  sendTo(ws, { type: 'furnitureAssetsLoaded', catalog: furnitureAssets.catalog, sprites: furnitureAssets.sprites })
}

// ── Tool status formatting ─────────────────────────────────────
function formatToolStatus(toolName, input) {
  const base = (p) => (typeof p === 'string' ? path.basename(p) : '')
  switch (toolName) {
    case 'Read':    return `Reading ${base(input.file_path)}`
    case 'Edit':    return `Editing ${base(input.file_path)}`
    case 'Write':   return `Writing ${base(input.file_path)}`
    case 'Bash': {
      const cmd = input.command || ''
      return `Running: ${cmd.length > BASH_COMMAND_DISPLAY_MAX_LENGTH ? cmd.slice(0, BASH_COMMAND_DISPLAY_MAX_LENGTH) + '…' : cmd}`
    }
    case 'Glob':          return 'Searching files'
    case 'Grep':          return 'Searching code'
    case 'WebFetch':      return 'Fetching web content'
    case 'WebSearch':     return 'Searching the web'
    case 'Task': {
      const desc = typeof input.description === 'string' ? input.description : ''
      return desc
        ? `Subtask: ${desc.length > TASK_DESCRIPTION_DISPLAY_MAX_LENGTH ? desc.slice(0, TASK_DESCRIPTION_DISPLAY_MAX_LENGTH) + '…' : desc}`
        : 'Running subtask'
    }
    case 'AskUserQuestion': return 'Waiting for your answer'
    case 'EnterPlanMode':   return 'Planning'
    case 'NotebookEdit':    return 'Editing notebook'
    default: return `Using ${toolName}`
  }
}

// ── Timer helpers (matching timerManager.ts exactly) ──────────
function cancelWaitingTimer(agentId) {
  const t = waitingTimers.get(agentId)
  if (t) { clearTimeout(t); waitingTimers.delete(agentId) }
}

function cancelPermissionTimer(agentId) {
  const t = permissionTimers.get(agentId)
  if (t) { clearTimeout(t); permissionTimers.delete(agentId) }
}

// Atomic clear — mirrors clearAgentActivity() in timerManager.ts exactly
function clearAgentActivity(agentId) {
  const agent = agents.get(agentId)
  if (!agent) return
  agent.activeToolIds.clear()
  agent.activeToolStatuses.clear()
  agent.activeToolNames.clear()
  agent.activeSubagentToolIds.clear()
  agent.activeSubagentToolNames.clear()
  agent.isWaiting = false
  agent.permissionSent = false
  cancelPermissionTimer(agentId)
  broadcast({ type: 'agentToolsClear', id: agentId })
  broadcast({ type: 'agentStatus', id: agentId, status: 'active' })
}

function startWaitingTimer(agentId) {
  cancelWaitingTimer(agentId)
  const t = setTimeout(() => {
    waitingTimers.delete(agentId)
    const agent = agents.get(agentId)
    if (agent) agent.isWaiting = true
    broadcast({ type: 'agentStatus', id: agentId, status: 'waiting' })
  }, TEXT_IDLE_DELAY_MS)
  waitingTimers.set(agentId, t)
}

// Full permission timer — checks parent + sub-agent tools, sends subagentToolPermission
function startPermissionTimer(agentId) {
  cancelPermissionTimer(agentId)
  const t = setTimeout(() => {
    permissionTimers.delete(agentId)
    const agent = agents.get(agentId)
    if (!agent) return

    // Check parent tools
    let hasNonExempt = false
    for (const toolId of agent.activeToolIds) {
      if (!PERMISSION_EXEMPT_TOOLS.has(agent.activeToolNames.get(toolId) || '')) {
        hasNonExempt = true; break
      }
    }

    // Check sub-agent tools, collect stuck parent tool IDs
    const stuckParentToolIds = []
    for (const [parentToolId, subToolNames] of agent.activeSubagentToolNames) {
      for (const [, toolName] of subToolNames) {
        if (!PERMISSION_EXEMPT_TOOLS.has(toolName)) {
          stuckParentToolIds.push(parentToolId)
          hasNonExempt = true
          break
        }
      }
    }

    if (hasNonExempt) {
      agent.permissionSent = true
      broadcast({ type: 'agentToolPermission', id: agentId })
      // Notify individual stuck sub-agents
      for (const parentToolId of stuckParentToolIds) {
        broadcast({ type: 'subagentToolPermission', id: agentId, parentToolId })
      }
    }
  }, PERMISSION_TIMER_DELAY_MS)
  permissionTimers.set(agentId, t)
}

// ── Transcript parsing ─────────────────────────────────────────
function processProgressRecord(agentId, record) {
  const agent = agents.get(agentId)
  if (!agent) return
  const parentToolId = record.parentToolUseID
  if (!parentToolId) return
  const data = record.data
  if (!data) return

  const dataType = data.type
  if (dataType === 'bash_progress' || dataType === 'mcp_progress') {
    if (agent.activeToolIds.has(parentToolId)) startPermissionTimer(agentId)
    return
  }

  if (agent.activeToolNames.get(parentToolId) !== 'Task') return
  const msg = data.message
  if (!msg) return
  const msgType = msg.type
  const content = msg.message?.content
  if (!Array.isArray(content)) return

  if (msgType === 'assistant') {
    let hasNonExemptSubTool = false
    for (const block of content) {
      if (block.type === 'tool_use' && block.id) {
        const toolName = block.name || ''
        const status = formatToolStatus(toolName, block.input || {})
        let subTools = agent.activeSubagentToolIds.get(parentToolId)
        if (!subTools) { subTools = new Set(); agent.activeSubagentToolIds.set(parentToolId, subTools) }
        subTools.add(block.id)
        let subNames = agent.activeSubagentToolNames.get(parentToolId)
        if (!subNames) { subNames = new Map(); agent.activeSubagentToolNames.set(parentToolId, subNames) }
        subNames.set(block.id, toolName)
        if (!PERMISSION_EXEMPT_TOOLS.has(toolName)) hasNonExemptSubTool = true
        broadcast({ type: 'subagentToolStart', id: agentId, parentToolId, toolId: block.id, status })
      }
    }
    if (hasNonExemptSubTool) startPermissionTimer(agentId)
  } else if (msgType === 'user') {
    for (const block of content) {
      if (block.type === 'tool_result' && block.tool_use_id) {
        const subTools = agent.activeSubagentToolIds.get(parentToolId)
        if (subTools) subTools.delete(block.tool_use_id)
        const subNames = agent.activeSubagentToolNames.get(parentToolId)
        if (subNames) subNames.delete(block.tool_use_id)
        const toolId = block.tool_use_id
        setTimeout(() => broadcast({ type: 'subagentToolDone', id: agentId, parentToolId, toolId }), 300)
      }
    }
  }
}

function processTranscriptLine(agentId, line) {
  const agent = agents.get(agentId)
  if (!agent) return
  let record
  try { record = JSON.parse(line) } catch { return }

  if (record.type === 'assistant' && Array.isArray(record.message?.content)) {
    const blocks = record.message.content
    const hasToolUse = blocks.some(b => b.type === 'tool_use')

    if (hasToolUse) {
      cancelWaitingTimer(agentId)
      agent.isWaiting = false
      agent.hadToolsInTurn = true
      broadcast({ type: 'agentStatus', id: agentId, status: 'active' })
      let hasNonExemptTool = false
      for (const block of blocks) {
        if (block.type === 'tool_use' && block.id) {
          const toolName = block.name || ''
          const status = formatToolStatus(toolName, block.input || {})
          agent.activeToolIds.add(block.id)
          agent.activeToolStatuses.set(block.id, status)
          agent.activeToolNames.set(block.id, toolName)
          if (!PERMISSION_EXEMPT_TOOLS.has(toolName)) hasNonExemptTool = true
          broadcast({ type: 'agentToolStart', id: agentId, toolId: block.id, status })
        }
      }
      if (hasNonExemptTool) startPermissionTimer(agentId)
    } else if (blocks.some(b => b.type === 'text') && !agent.hadToolsInTurn) {
      startWaitingTimer(agentId)
    }
  } else if (record.type === 'progress') {
    processProgressRecord(agentId, record)
  } else if (record.type === 'user') {
    const content = record.message?.content
    if (Array.isArray(content)) {
      const hasToolResult = content.some(b => b.type === 'tool_result')
      if (hasToolResult) {
        for (const block of content) {
          if (block.type === 'tool_result' && block.tool_use_id) {
            const completedToolId = block.tool_use_id
            if (agent.activeToolNames.get(completedToolId) === 'Task') {
              agent.activeSubagentToolIds.delete(completedToolId)
              agent.activeSubagentToolNames.delete(completedToolId)
              broadcast({ type: 'subagentClear', id: agentId, parentToolId: completedToolId })
            }
            agent.activeToolIds.delete(completedToolId)
            agent.activeToolStatuses.delete(completedToolId)
            agent.activeToolNames.delete(completedToolId)
            const toolId = completedToolId
            setTimeout(() => broadcast({ type: 'agentToolDone', id: agentId, toolId }), TOOL_DONE_DELAY_MS)
          }
        }
        if (agent.activeToolIds.size === 0) agent.hadToolsInTurn = false
      } else {
        cancelWaitingTimer(agentId)
        clearAgentActivity(agentId)
        agent.hadToolsInTurn = false
      }
    } else if (typeof content === 'string' && content.trim()) {
      cancelWaitingTimer(agentId)
      clearAgentActivity(agentId)
      agent.hadToolsInTurn = false
    }
  } else if (record.type === 'system' && record.subtype === 'turn_duration') {
    cancelWaitingTimer(agentId)
    cancelPermissionTimer(agentId)
    if (agent.activeToolIds.size > 0) {
      agent.activeToolIds.clear()
      agent.activeToolStatuses.clear()
      agent.activeToolNames.clear()
      agent.activeSubagentToolIds.clear()
      agent.activeSubagentToolNames.clear()
      broadcast({ type: 'agentToolsClear', id: agentId })
    }
    agent.isWaiting = true
    agent.permissionSent = false
    agent.hadToolsInTurn = false
    broadcast({ type: 'agentStatus', id: agentId, status: 'waiting' })
  }
}

// ── File watching ──────────────────────────────────────────────
function readNewLines(agentId) {
  const agent = agents.get(agentId)
  if (!agent) return
  try {
    const stat = fs.statSync(agent.jsonlFile)
    if (stat.size <= agent.fileOffset) return
    const buf = Buffer.alloc(stat.size - agent.fileOffset)
    const fd = fs.openSync(agent.jsonlFile, 'r')
    fs.readSync(fd, buf, 0, buf.length, agent.fileOffset)
    fs.closeSync(fd)
    agent.fileOffset = stat.size
    const text = agent.lineBuffer + buf.toString('utf-8')
    const lines = text.split('\n')
    agent.lineBuffer = lines.pop() || ''
    const hasLines = lines.some(l => l.trim())
    if (hasLines) {
      cancelWaitingTimer(agentId)
      cancelPermissionTimer(agentId)
      if (agent.permissionSent) {
        agent.permissionSent = false
        broadcast({ type: 'agentToolPermissionClear', id: agentId })
      }
    }
    for (const line of lines) {
      if (!line.trim()) continue
      processTranscriptLine(agentId, line)
    }
  } catch {}
}

function startFileWatching(agentId, filePath) {
  try {
    const watcher = fs.watch(filePath, () => readNewLines(agentId))
    fileWatchers.set(agentId, watcher)
  } catch {}
  try {
    fs.watchFile(filePath, { interval: FILE_WATCHER_POLL_INTERVAL_MS }, () => readNewLines(agentId))
  } catch {}
  const interval = setInterval(() => {
    if (!agents.has(agentId)) {
      clearInterval(interval)
      try { fs.unwatchFile(filePath) } catch {}
      return
    }
    readNewLines(agentId)
  }, FILE_WATCHER_POLL_INTERVAL_MS)
  pollingTimers.set(agentId, interval)
}

function createAgent(jsonlFile, folderName) {
  const id = nextAgentId++
  const readableName = getReadableProjectName(folderName)
  const agent = {
    id, jsonlFile, folderName,
    fileOffset: 0, lineBuffer: '',
    activeToolIds: new Set(), activeToolStatuses: new Map(), activeToolNames: new Map(),
    activeSubagentToolIds: new Map(), activeSubagentToolNames: new Map(),
    isWaiting: false, permissionSent: false, hadToolsInTurn: false,
  }
  agents.set(id, agent)
  console.log(`[Agent ${id}] ${readableName} — ${path.basename(jsonlFile)}`)
  broadcast({ type: 'agentCreated', id, folderName: readableName })
  startFileWatching(id, jsonlFile)
  readNewLines(id)
  return id
}

function removeAgent(agentId) {
  const agent = agents.get(agentId)
  if (!agent) return
  const pt = pollingTimers.get(agentId)
  if (pt) clearInterval(pt)
  pollingTimers.delete(agentId)
  fileWatchers.get(agentId)?.close()
  fileWatchers.delete(agentId)
  try { fs.unwatchFile(agent.jsonlFile) } catch {}
  cancelWaitingTimer(agentId)
  cancelPermissionTimer(agentId)
  agents.delete(agentId)
  broadcast({ type: 'agentClosed', id: agentId })
}

// ── Project scan (recent sessions only) ───────────────────────
function isRecentFile(fullPath) {
  try {
    const stat = fs.statSync(fullPath)
    if (stat.size < MIN_FILE_SIZE) return false
    if (RECENT_MS === Infinity) return true
    return (Date.now() - stat.mtimeMs) < RECENT_MS
  } catch { return false }
}

function scanAllProjects() {
  try {
    if (!fs.existsSync(CLAUDE_DIR)) return
    for (const dir of fs.readdirSync(CLAUDE_DIR)) {
      const projectPath = path.join(CLAUDE_DIR, dir)
      try {
        if (!fs.statSync(projectPath).isDirectory()) continue
        for (const file of fs.readdirSync(projectPath)) {
          if (!file.endsWith('.jsonl')) continue
          const fullPath = path.join(projectPath, file)
          if (!knownJsonlFiles.has(fullPath) && isRecentFile(fullPath)) {
            knownJsonlFiles.add(fullPath)
            createAgent(fullPath, dir)
          }
        }
      } catch {}
    }
  } catch {}
}

// Build a list of unique projects we're tracking (for workspaceFolders message)
function getWorkspaceFolders() {
  const seen = new Set()
  const folders = []
  for (const agent of agents.values()) {
    const projectDir = path.dirname(agent.jsonlFile)
    if (!seen.has(projectDir)) {
      seen.add(projectDir)
      folders.push({
        name: getReadableProjectName(path.basename(projectDir)),
        path: projectDir,
      })
    }
  }
  return folders
}

// ── WebSocket message handler ──────────────────────────────────
function handleWebviewMessage(ws, msg) {
  switch (msg.type) {
    case 'webviewReady': {
      sendTo(ws, { type: 'settingsLoaded', soundEnabled: settings.soundEnabled })
      sendAssetsToClient(ws)

      // Send workspace folders (multi-project support in + Agent picker)
      const folders = getWorkspaceFolders()
      if (folders.length > 1) {
        sendTo(ws, { type: 'workspaceFolders', folders })
      }

      // Layout BEFORE existingAgents (buffering guarantee)
      const layout = readLayout()
      sendTo(ws, { type: 'layoutLoaded', layout })

      // Then existing agents + their current state
      const agentIds = [...agents.keys()].sort((a, b) => a - b)
      const folderNames = {}
      for (const [id, ag] of agents) {
        folderNames[id] = getReadableProjectName(ag.folderName)
      }
      sendTo(ws, {
        type: 'existingAgents',
        agents: agentIds,
        agentMeta: settings.agentSeats,
        folderNames,
      })

      // Re-send live tool statuses + waiting states
      for (const [agentId, agent] of agents) {
        for (const [toolId, status] of agent.activeToolStatuses) {
          sendTo(ws, { type: 'agentToolStart', id: agentId, toolId, status })
        }
        if (agent.isWaiting) {
          sendTo(ws, { type: 'agentStatus', id: agentId, status: 'waiting' })
        }
      }
      break
    }

    case 'saveLayout':
      layoutWatcher?.markOwnWrite()
      writeLayout(msg.layout)
      break

    case 'saveAgentSeats':
      settings.agentSeats = { ...settings.agentSeats, ...msg.seats }
      saveSettings()
      break

    case 'setSoundEnabled':
      settings.soundEnabled = msg.enabled
      saveSettings()
      break

    case 'openClaude': {
      const cwd = msg.folderPath || os.homedir()
      // AppleScript: open Terminal and run `claude` in the specified directory
      exec(
        `osascript -e 'tell application "Terminal" to do script "cd \\"${cwd.replace(/"/g, '\\"')}\\" && claude"'`,
        (err) => {
          if (err) exec("osascript -e 'tell application \"Terminal\" to activate'")
        }
      )
      break
    }

    case 'closeAgent':
      removeAgent(msg.id)
      break

    case 'focusAgent':
      // Can't bring a terminal to front from browser — no-op
      break

    case 'exportLayout': {
      const layout = readLayout()
      if (layout) sendTo(ws, { type: 'layoutExportData', json: JSON.stringify(layout, null, 2) })
      break
    }

    case 'importLayout':
      if (msg.layout?.version === 1 && Array.isArray(msg.layout.tiles)) {
        layoutWatcher?.markOwnWrite()
        writeLayout(msg.layout)
        broadcast({ type: 'layoutLoaded', layout: msg.layout })
      }
      break
  }
}

// ── Express + WebSocket server ─────────────────────────────────
const app = express()
const server = http.createServer(app)

app.use(express.static(DIST_DIR))
app.get('*', (_req, res) => res.sendFile(path.join(DIST_DIR, 'index.html')))

const wss = new WebSocketServer({ server })
wss.on('connection', (ws) => {
  console.log('[WS] Client connected')
  clients.add(ws)
  ws.on('message', (data) => {
    try { handleWebviewMessage(ws, JSON.parse(data.toString())) } catch {}
  })
  ws.on('close', () => { console.log('[WS] Client disconnected'); clients.delete(ws) })
})

// ── Startup ────────────────────────────────────────────────────
;(async () => {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`\n❌ Build not found at ${DIST_DIR}`)
    console.error('   Run: npm run build:standalone\n')
    process.exit(1)
  }

  loadSettings()

  console.log('🎮 Pixel Agents Standalone\n')
  if (RECENT_DAYS > 0) {
    console.log(`📅 Tracking sessions from the last ${RECENT_DAYS} days`)
    console.log(`   (set PIXEL_AGENTS_RECENT_DAYS=0 to show all time)\n`)
  }

  cachedAssets = await loadAssets()
  console.log()

  // Seed the layout file before starting the watcher so the watcher's
  // initial mtime is correct and doesn't fire a false-positive on first write.
  readLayout()

  scanAllProjects()
  setInterval(scanAllProjects, PROJECT_SCAN_INTERVAL_MS)

  startLayoutWatcher()

  const sessionCount = agents.size
  console.log(`\n✅ Tracking ${sessionCount} session${sessionCount !== 1 ? 's' : ''}`)

  server.listen(PORT, () => {
    console.log(`🌐 http://localhost:${PORT}\n`)
    exec(`open http://localhost:${PORT}`)
  })
})()
