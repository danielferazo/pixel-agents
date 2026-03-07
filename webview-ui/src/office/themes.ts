/**
 * Theme definitions for Pixel Agents office environments.
 * Each theme defines colors for background, floors, walls, status indicators, and UI.
 */

import type { FloorColor } from './types.js'

export interface OfficeTheme {
  id: string
  name: string
  description: string
  // Background (void space)
  backgroundColor: string

  // Floor tiles
  fallbackFloorColor: string
  defaultFloorColor: FloorColor

  // Wall tiles
  wallColor: string
  defaultWallColor: FloorColor

  // Status indicators (agent glow)
  statusActive: string
  statusWaiting: string
  statusPermission: string
  statusIdle: string

  // UI colors (for overlays)
  seatOwn: string
  seatAvailable: string
  seatBusy: string
  gridLine: string
  voidTileOutline: string
  ghostBorderHoverFill: string
  ghostBorderHoverStroke: string
  ghostBorderStroke: string
  selectionHighlight: string
  deleteButton: string
  rotateButton: string

  // Vignette
  vignetteBase: number      // base opacity (e.g., 0.20)
  vignettePulse: number     // pulse amount (e.g., 0.06)

  // Particles (ambient floating pixels)
  particleColors: string[]  // Array of hex colors
}

export const THEMES: Record<string, OfficeTheme> = {
  studio_noir: {
    id: 'studio_noir',
    name: 'Studio Noir',
    description: 'Dark void aesthetic with moody lighting',
    backgroundColor: '#0B0B16',
    fallbackFloorColor: '#808080',
    defaultFloorColor: { h: 35, s: 30, b: 15, c: 0 },
    wallColor: '#3A3A5C',
    defaultWallColor: { h: 240, s: 25, b: 0, c: 0 },
    statusActive: '#5ac88c',
    statusWaiting: '#cca700',
    statusPermission: '#e55555',
    statusIdle: '#6a6a8a',
    seatOwn: 'rgba(0, 127, 212, 0.35)',
    seatAvailable: 'rgba(0, 200, 80, 0.35)',
    seatBusy: 'rgba(220, 50, 50, 0.35)',
    gridLine: 'rgba(255,255,255,0.12)',
    voidTileOutline: 'rgba(255,255,255,0.08)',
    ghostBorderHoverFill: 'rgba(60, 130, 220, 0.25)',
    ghostBorderHoverStroke: 'rgba(60, 130, 220, 0.5)',
    ghostBorderStroke: 'rgba(255, 255, 255, 0.06)',
    selectionHighlight: '#007fd4',
    deleteButton: 'rgba(200, 50, 50, 0.85)',
    rotateButton: 'rgba(50, 120, 200, 0.85)',
    vignetteBase: 0.20,
    vignettePulse: 0.06,
    particleColors: ['#4a4a6a', '#3a3a5a', '#5a5a7a', '#2a2a4a'],
  },

  retro_arcade: {
    id: 'retro_arcade',
    name: 'Retro Arcade',
    description: '80s neon vibes with synthwave colors',
    backgroundColor: '#1a0a2e',
    fallbackFloorColor: '#2d1b4e',
    defaultFloorColor: { h: 280, s: 70, b: 20, c: 0 },
    wallColor: '#4a1a6b',
    defaultWallColor: { h: 290, s: 60, b: 15, c: 0 },
    statusActive: '#00ffcc',
    statusWaiting: '#ff00ff',
    statusPermission: '#ff3366',
    statusIdle: '#9966cc',
    seatOwn: 'rgba(0, 255, 204, 0.35)',
    seatAvailable: 'rgba(255, 0, 255, 0.35)',
    seatBusy: 'rgba(255, 51, 102, 0.35)',
    gridLine: 'rgba(255, 0, 255, 0.15)',
    voidTileOutline: 'rgba(255, 0, 255, 0.10)',
    ghostBorderHoverFill: 'rgba(0, 255, 255, 0.25)',
    ghostBorderHoverStroke: 'rgba(0, 255, 255, 0.5)',
    ghostBorderStroke: 'rgba(255, 0, 255, 0.08)',
    selectionHighlight: '#00ffcc',
    deleteButton: 'rgba(255, 51, 102, 0.85)',
    rotateButton: 'rgba(0, 255, 204, 0.85)',
    vignetteBase: 0.15,
    vignettePulse: 0.08,
    particleColors: ['#ff00ff', '#00ffff', '#ff6600', '#ffff00', '#ff0066'],
  },

  cozy_cottage: {
    id: 'cozy_cottage',
    name: 'Cozy Cottage',
    description: 'Warm wooden tones with plants and comfort',
    backgroundColor: '#1a1612',
    fallbackFloorColor: '#5c4033',
    defaultFloorColor: { h: 30, s: 50, b: 20, c: 0 },
    wallColor: '#8b7355',
    defaultWallColor: { h: 35, s: 40, b: 10, c: 0 },
    statusActive: '#7cb342',
    statusWaiting: '#ffa726',
    statusPermission: '#ef5350',
    statusIdle: '#8d6e63',
    seatOwn: 'rgba(124, 179, 66, 0.35)',
    seatAvailable: 'rgba(255, 167, 38, 0.35)',
    seatBusy: 'rgba(239, 83, 80, 0.35)',
    gridLine: 'rgba(255, 235, 59, 0.12)',
    voidTileOutline: 'rgba(255, 235, 59, 0.08)',
    ghostBorderHoverFill: 'rgba(139, 195, 74, 0.25)',
    ghostBorderHoverStroke: 'rgba(139, 195, 74, 0.5)',
    ghostBorderStroke: 'rgba(255, 235, 59, 0.06)',
    selectionHighlight: '#7cb342',
    deleteButton: 'rgba(239, 83, 80, 0.85)',
    rotateButton: 'rgba(255, 167, 38, 0.85)',
    vignetteBase: 0.25,
    vignettePulse: 0.03,
    particleColors: ['#8d6e63', '#a1887f', '#d7ccc8', '#bcaaa4', '#6d4c41'],
  },

  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'High-tech chrome and holographic displays',
    backgroundColor: '#000508',
    fallbackFloorColor: '#1a1a2e',
    defaultFloorColor: { h: 220, s: 80, b: 10, c: 0 },
    wallColor: '#16213e',
    defaultWallColor: { h: 215, s: 70, b: 8, c: 0 },
    statusActive: '#00f5ff',
    statusWaiting: '#ff00ff',
    statusPermission: '#ff0040',
    statusIdle: '#4a4a6a',
    seatOwn: 'rgba(0, 245, 255, 0.35)',
    seatAvailable: 'rgba(255, 0, 255, 0.35)',
    seatBusy: 'rgba(255, 0, 64, 0.35)',
    gridLine: 'rgba(0, 245, 255, 0.20)',
    voidTileOutline: 'rgba(0, 245, 255, 0.12)',
    ghostBorderHoverFill: 'rgba(255, 0, 255, 0.25)',
    ghostBorderHoverStroke: 'rgba(255, 0, 255, 0.5)',
    ghostBorderStroke: 'rgba(0, 245, 255, 0.08)',
    selectionHighlight: '#00f5ff',
    deleteButton: 'rgba(255, 0, 64, 0.85)',
    rotateButton: 'rgba(0, 245, 255, 0.85)',
    vignetteBase: 0.10,
    vignettePulse: 0.12,
    particleColors: ['#00f5ff', '#ff00ff', '#ffff00', '#ff0040', '#00ff00'],
  },

  beach_island: {
    id: 'beach_island',
    name: 'Beach Island',
    description: 'Tropical paradise with ocean vibes',
    backgroundColor: '#0d1b2a',
    fallbackFloorColor: '#c2b280',
    defaultFloorColor: { h: 45, s: 40, b: 50, c: 0 },
    wallColor: '#1b4965',
    defaultWallColor: { h: 200, s: 50, b: 25, c: 0 },
    statusActive: '#00e676',
    statusWaiting: '#ffab00',
    statusPermission: '#ff5252',
    statusIdle: '#78909c',
    seatOwn: 'rgba(0, 230, 118, 0.35)',
    seatAvailable: 'rgba(255, 171, 0, 0.35)',
    seatBusy: 'rgba(255, 82, 82, 0.35)',
    gridLine: 'rgba(255, 255, 224, 0.15)',
    voidTileOutline: 'rgba(255, 255, 224, 0.10)',
    ghostBorderHoverFill: 'rgba(0, 230, 118, 0.25)',
    ghostBorderHoverStroke: 'rgba(0, 230, 118, 0.5)',
    ghostBorderStroke: 'rgba(255, 255, 224, 0.06)',
    selectionHighlight: '#00e676',
    deleteButton: 'rgba(255, 82, 82, 0.85)',
    rotateButton: 'rgba(255, 171, 0, 0.85)',
    vignetteBase: 0.18,
    vignettePulse: 0.04,
    particleColors: ['#4fc3f7', '#81d4fa', '#fff59d', '#ffcc80', '#80cbc4'],
  },

  space_station: {
    id: 'space_station',
    name: 'Space Station',
    description: 'Futuristic orbital outpost with stars',
    backgroundColor: '#050510',
    fallbackFloorColor: '#1a1a2e',
    defaultFloorColor: { h: 230, s: 30, b: 12, c: 0 },
    wallColor: '#2d3436',
    defaultWallColor: { h: 200, s: 20, b: 8, c: 0 },
    statusActive: '#00d4ff',
    statusWaiting: '#ffd700',
    statusPermission: '#ff4757',
    statusIdle: '#636e72',
    seatOwn: 'rgba(0, 212, 255, 0.35)',
    seatAvailable: 'rgba(255, 215, 0, 0.35)',
    seatBusy: 'rgba(255, 71, 87, 0.35)',
    gridLine: 'rgba(0, 212, 255, 0.15)',
    voidTileOutline: 'rgba(0, 212, 255, 0.10)',
    ghostBorderHoverFill: 'rgba(255, 215, 0, 0.25)',
    ghostBorderHoverStroke: 'rgba(255, 215, 0, 0.5)',
    ghostBorderStroke: 'rgba(0, 212, 255, 0.06)',
    selectionHighlight: '#00d4ff',
    deleteButton: 'rgba(255, 71, 87, 0.85)',
    rotateButton: 'rgba(0, 212, 255, 0.85)',
    vignetteBase: 0.12,
    vignettePulse: 0.08,
    particleColors: ['#ffffff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc'],
  },
}

// Default theme
export const DEFAULT_THEME = 'studio_noir'

// Theme list for UI
export const THEME_LIST = Object.values(THEMES).map(t => ({
  id: t.id,
  name: t.name,
  description: t.description,
}))
