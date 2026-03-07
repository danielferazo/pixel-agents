/**
 * Theme-specific furniture and decorations.
 * Each theme can have unique items that appear in the editor when that theme is active.
 */

import type { SpriteData } from '../types.js'

// Helper to create simple 16xN sprites
function createSprite(rows: string[][]): SpriteData {
  return rows.map(row => row.map(c => c || ''))
}

// Transparent pixel
const T = ''

// RETRO ARCADE THEME - Neon lights, 80s vibes

export const ARCADE_NEON_SIGN_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,'#ff00ff',T,'#00ffff',T,'#ff00ff','#00ffff','#ff00ff',T,'#00ffff',T,T,T,T],
  [T,T,'#ff00ff',T,T,T,T,'#00ffff',T,T,T,'#ff00ff',T,T,'#00ffff',T,T],
  [T,T,'#ff00ff',T,T,T,T,'#00ffff',T,T,T,'#ff00ff',T,T,'#00ffff',T,T],
  [T,T,'#ff00ff','#00ffff',T,T,'#00ffff',T,T,T,T,'#ff00ff',T,T,'#00ffff',T,T],
  [T,T,T,'#ff00ff',T,'#00ffff',T,'#ff00ff','#00ffff','#ff00ff',T,'#00ffff',T,T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,'#ff00ff','#00ffff','#ff00ff','#00ffff','#ff00ff','#00ffff','#ff00ff','#00ffff',T,T,T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

export const ARCADE_MACHINE_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,'#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a',T,T,T],
  [T,T,'#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#00ffff','#00ffff','#00ffff','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a',T],
  [T,T,'#2a1a4a','#2a1a4a','#2a1a4a','#ff00ff','#ff00ff','#00ffff','#00ffff','#ff00ff','#ff00ff','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a',T],
  [T,T,'#2a1a4a','#2a1a4a','#2a1a4a','#ff00ff','#ff00ff','#ff00ff','#ff00ff','#ff00ff','#ff00ff','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a',T],
  [T,T,'#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a',T],
  [T,T,'#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a',T],
  [T,T,'#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a',T],
  [T,T,'#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a','#4a2a7a',T],
  [T,T,'#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a','#2a1a4a',T],
  [T,T,'#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a',T],
  [T,T,'#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a','#1a0a2a',T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

// COZY COTTAGE THEME - Warm wood, plants, comfort

export const COTTAGE_PLANT_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,T,'#5d4037','#5d4037',T,T,'#5d4037','#5d4037',T,T,T,T,T,T,T],
  [T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T,T,T],
  [T,T,'#5d4037','#5d4037','#6dbd5a','#6dbd5a','#6dbd5a','#6dbd5a','#6dbd5a','#6dbd5a','#5d4037','#5d4037',T,T,T],
  [T,T,'#5d4037','#6dbd5a','#81c784','#81c784','#81c784','#81c784','#81c784','#81c784','#6dbd5a','#5d4037',T,T,T],
  [T,T,'#5d4037','#6dbd5a','#81c784','#a5d6a','#a5d6a','#81c784','#a5d6a','#81c784','#6dbd5a','#5d4037',T,T,T],
  [T,T,'#5d4037','#6dbd5a','#81c784','#81c784','#81c784','#81c784','#81c784','#81c784','#6dbd5a','#5d4037',T,T,T],
  [T,T,'#5d4037','#6dbd5a','#6dbd5a','#81c784','#81c784','#81c784','#6dbd5a','#6dbd5a','#6dbd5a','#5d4037',T,T,T],
  [T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T,T],
  [T,T,T,'#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723',T,T,T,T],
  [T,T,T,'#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723',T,T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

export const COTTAGE_FIREPLACE_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T,T],
  [T,T,'#5d4037','#5d4037','#ff7043','#ff5722','#ff5722','#ff7043','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T],
  [T,T,'#5d4037','#ff7043','#ff5722','#ffab91','#ffab91','#ff5722','#ff7043','#5d4037','#5d4037','#5d4037','#5d4037',T,T],
  [T,T,'#5d4037','#ff7043','#ffab91','#ffccbc','#ffab91','#ff5722','#ff7043','#5d4037','#5d4037','#5d4037','#5d4037',T,T],
  [T,T,'#5d4037','#5d4037','#ff7043','#ffab91','#ff5722','#ff5722','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T],
  [T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T],
  [T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T],
  [T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T],
  [T,T,'#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723',T,T],
  [T,T,'#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723','#3e2723',T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

export const COTTAGE_LAMP_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,T,T,T,T,T,'#ffeb3b','#ffeb3b',T,T,T,T,T,T],
  [T,T,T,T,T,T,'#ffeb3b','#ffeb3b','#ffeb3b','#ffeb3b','#ffeb3b',T,T,T,T,T],
  [T,T,T,T,T,'#ffeb3b','#fff59d','#fff59d','#fff59d','#ffeb3b','#ffeb3b',T,T,T,T],
  [T,T,T,T,'#ff9800','#ff9800','#ffb74d','#ffb74d','#ff9800','#ff9800','#ff9800',T,T,T,T],
  [T,T,T,'#ff9800','#ff9800','#e65100','#e65100','#ff9800','#ff9800','#ff9800','#ff9800',T,T,T],
  [T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T],
  [T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

// CYBERPUNK THEME - Chrome, holograms, tech

export const CYBER_HOLOGRAM_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,'#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff',T,T,T,T],
  [T,T,'#00f5ff',T,T,T,T,T,T,T,T,T,'#00f5ff',T,T,T],
  [T,T,'#00f5ff',T,'#ff00ff','#ff00ff','#ff00ff',T,T,'#ff00ff','#ff00ff','#ff00ff',T,'#00f5ff',T,T,T],
  [T,T,'#00f5ff',T,'#ff00ff',T,T,T,T,T,'#ff00ff',T,'#00f5ff',T,T,T],
  [T,T,'#00f5ff',T,'#ff00ff',T,T,T,T,T,'#ff00ff',T,'#00f5ff',T,T,T],
  [T,T,'#00f5ff',T,'#ffff00','#ffff00','#ffff00',T,T,'#ffff00','#ffff00','#ffff00',T,'#00f5ff',T,T,T],
  [T,T,'#00f5ff',T,T,T,T,T,T,T,T,T,'#00f5ff',T,T,T],
  [T,T,'#00f5ff',T,T,T,T,T,T,T,T,T,'#00f5ff',T,T,T],
  [T,T,'#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff','#00f5ff',T,T,T,T],
  [T,T,'#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e',T,T,T,T],
  [T,T,'#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e','#16213e',T,T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

export const CYBER_SERVER_SPRITE: SpriteData = createSprite([
  [T,T,T,'#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117',T,T],
  [T,T,'#0d1117','#0d1117','#00f5ff','#00f5ff','#0d1117','#0d1117','#0d1117','#0d1117','#00f5ff','#00f5ff','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#00f5ff','#00f5ff','#0d1117','#0d1117','#0d1117','#0d1117','#00f5ff','#00f5ff','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#ff00ff','#ff00ff','#0d1117','#0d1117','#0d1117','#0d1117','#ff00ff','#ff00ff','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#ff00ff','#ff00ff','#0d1117','#0d1117','#0d1117','#0d1117','#ff00ff','#ff00ff','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#00ff00','#00ff00','#0d1117','#0d1117','#0d1117','#0d1117','#00ff00','#00ff00','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#00ff00','#00ff00','#0d1117','#0d1117','#0d1117','#0d1117','#00ff00','#00ff00','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117',T],
  [T,T,'#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117','#0d1117',T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

// BEACH ISLAND THEME - Tropical, ocean, sand

export const BEACH_PALM_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,'#8d6e63','#8d6e63','#8d6e63',T,T,T,T,T,T],
  [T,T,T,T,T,T,'#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63',T,T,T,T],
  [T,T,T,T,T,'#8d6e63','#8d6e63','#a1887f','#8d6e63','#a1887f','#8d6e63','#8d6e63',T,T,T,T],
  [T,T,T,T,'#8d6e63','#8d6e63','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#8d6e63','#8d6e63',T,T,T],
  [T,T,T,'#8d6e63','#6d4c41','#4caf50','#81c784','#4caf50','#81c784','#4caf50','#4caf50','#6d4c41','#8d6e63',T,T],
  [T,T,'#8d6e63','#6d4c41','#4caf50','#66bb6a','#a5d6a','#66bb6a','#4caf50','#66bb6a','#4caf50','#4caf50','#6d4c41','#8d6e63',T],
  [T,T,'#8d6e63','#6d4c41','#4caf50','#66bb6a','#66bb6a','#4caf50','#81c784','#4caf50','#66bb6a','#4caf50','#6d4c41','#8d6e63',T],
  [T,T,'#8d6e63','#6d4c41','#4caf50','#4caf50','#81c784','#4caf50','#4caf50','#4caf50','#4caf50','#4caf50','#6d4c41','#8d6e63',T],
  [T,T,T,'#8d6e63','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#8d6e63',T,T],
  [T,T,T,'#8d6e63','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#8d6e63',T,T],
  [T,T,T,'#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63',T,T],
  [T,T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T],
  [T,T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

export const BEACH_TIKI_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
  [T,T,T,T,T,T,T,T,T,'#ff9800','#ff9800',T,T,T,T,T],
  [T,T,T,T,T,T,T,T,'#ff9800','#ffb74d','#ff9800',T,T,T,T,T],
  [T,T,T,T,T,T,T,'#ff9800','#ffb74d','#ff5722','#ff9800',T,T,T,T,T],
  [T,T,T,T,T,T,'#ff9800','#ffb74d','#ff5722','#ff9800','#ff9800',T,T,T,T,T],
  [T,T,T,T,T,'#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63',T,T,T,T,T],
  [T,T,T,T,'#8d6e63','#8d6e63','#6d4c41','#6d4c41','#8d6e63','#8d6e63','#6d4c41','#8d6e63',T,T,T,T],
  [T,T,T,'#8d6e63','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#8d6e63',T,T],
  [T,T,T,'#8d6e63','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#6d4c41','#8d6e63',T,T],
  [T,T,T,'#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63','#8d6e63',T,T],
  [T,T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T],
  [T,T,T,T,'#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037','#5d4037',T,T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

// SPACE STATION THEME - Futuristic, stars, aliens

export const SPACE_WINDOW_SPRITE: SpriteData = createSprite([
  [T,T,'#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e',T],
  [T,'#1a237e','#0d1b2a','#ffffff','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#ffffff','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#1a237e'],
  [T,'#1a237e','#0d1b2a','#ffffff','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#ffffff','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#1a237e','#1a237e'],
  [T,'#1a237e','#0d1b2a','#ffffff','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#ffffff','#0d1b2a','#0d1b2a','#ffffff','#0d1b2a','#1a237e','#1a237e','#1a237e'],
  [T,'#1a237e','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#e1bee7','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#1a237e','#1a237e','#1a237e','#1a237e'],
  [T,'#1a237e','#0d1b2a','#ffffff','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e'],
  [T,'#1a237e','#0d1b2a','#0d1b2a','#0d1b2a','#ffffff','#0d1b2a','#0d1b2a','#0d1b2a','#ffffff','#0d1b2a','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e'],
  [T,'#1a237e','#0d1b2a','#ffffff','#0d1b2a','#0d1b2a','#ffffff','#0d1b2a','#0d1b2a','#0d1b2a','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e'],
  [T,'#1a237e','#0d1b2a','#e1bee7','#0d1b2a','#ffffff','#0d1b2a','#0d1b2a','#ffffff','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e'],
  [T,'#1a237e','#1a237e','#1a237e','#0d1b2a','#0d1b2a','#0d1b2a','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e','#1a237e'],
  [T,T,'#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f',T],
  [T,T,'#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f',T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

export const SPACE_ALIEN_SPRITE: SpriteData = createSprite([
  [T,T,T,T,T,T,'#4a148c','#4a148c','#7b1fa2','#4a148c','#4a148c',T,T,T,T,T,T],
  [T,T,T,T,'#4a148c','#4a148c','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#4a148c','#4a148c',T,T,T,T],
  [T,T,'#4a148c','#4a148c','#7b1fa2','#e1bee7','#7b1fa2','#00e676','#7b1fa2','#e1bee7','#7b1fa2','#4a148c','#4a148c',T,T],
  [T,'#4a148c','#4a148c','#7b1fa2','#e1bee7','#7b1fa2','#e1bee7','#e1bee7','#e1bee7','#e1bee7','#e1bee7','#7b1fa2','#e1bee7','#7b1fa2','#4a148c','#4a148c',T],
  [T,'#4a148c','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#e1bee7','#e1bee7','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#4a148c',T],
  [T,'#4a148c','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#4a148c',T],
  [T,'#4a148c','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#4a148c',T],
  [T,'#4a148c','#7b1fa2','#7b1fa2','#7b1fa2','#7b1fa2','#4a148c','#4a148c','#7b1fa2','#7b1fa2','#4a148c','#4a148c','#7b1fa2','#7b1fa2','#4a148c',T],
  [T,T,'#4a148c','#4a148c','#4a148c','#4a148c','#4a148c','#4a148c','#4a148c','#4a148c','#4a148c','#4a148c','#4a148c','#4a148c',T,T],
  [T,T,'#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238',T,T],
  [T,T,'#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238',T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

export const SPACE_CONTROL_PANEL_SPRITE: SpriteData = createSprite([
  [T,T,T,'#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238',T,T],
  [T,T,'#263238','#00e676','#00e676','#263238','#263238','#263238','#263238','#263238','#00e676','#00e676','#263238',T,T,T],
  [T,T,'#263238','#00e676','#00e676','#263238','#263238','#263238','#263238','#263238','#00e676','#00e676','#263238',T,T,T],
  [T,T,'#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238',T,T,T],
  [T,T,'#263238','#00bcd4','#00bcd4','#263238','#263238','#263238','#263238','#263238','#00bcd4','#00bcd4','#263238',T,T,T],
  [T,T,'#263238','#00bcd4','#00bcd4','#263238','#263238','#263238','#263238','#263238','#00bcd4','#00bcd4','#263238',T,T,T],
  [T,T,'#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238',T,T,T],
  [T,T,'#263238','#ff5722','#ff5722','#263238','#263238','#263238','#263238','#263238','#ff5722','#ff5722','#263238',T,T,T],
  [T,T,'#263238','#ff5722','#ff5722','#263238','#263238','#263238','#263238','#263238','#ff5722','#ff5722','#263238',T,T,T],
  [T,T,'#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238','#263238',T,T,T],
  [T,T,'#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f',T,T],
  [T,T,'#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f','#37474f',T,T],
  [T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T],
])

// Theme furniture catalog
export interface ThemeFurnitureItem {
  id: string
  name: string
  sprite: SpriteData
  footprintW: number
  footprintH: number
  category: string
}

export const THEME_FURNITURE: Record<string, ThemeFurnitureItem[]> = {
  retro_arcade: [
    { id: 'arcade_neon_sign', name: 'Neon Sign', sprite: ARCADE_NEON_SIGN_SPRITE, footprintW: 4, footprintH: 1, category: 'decor' },
    { id: 'arcade_machine', name: 'Arcade Machine', sprite: ARCADE_MACHINE_SPRITE, footprintW: 2, footprintH: 1, category: 'electronics' },
  ],
  cozy_cottage: [
    { id: 'cottage_plant', name: 'Cozy Plant', sprite: COTTAGE_PLANT_SPRITE, footprintW: 1, footprintH: 1, category: 'decor' },
    { id: 'cottage_fireplace', name: 'Fireplace', sprite: COTTAGE_FIREPLACE_SPRITE, footprintW: 3, footprintH: 1, category: 'decor' },
    { id: 'cottage_lamp', name: 'Warm Lamp', sprite: COTTAGE_LAMP_SPRITE, footprintW: 1, footprintH: 1, category: 'electronics' },
  ],
  cyberpunk: [
    { id: 'cyber_hologram', name: 'Hologram', sprite: CYBER_HOLOGRAM_SPRITE, footprintW: 2, footprintH: 1, category: 'electronics' },
    { id: 'cyber_server', name: 'Server Rack', sprite: CYBER_SERVER_SPRITE, footprintW: 2, footprintH: 1, category: 'electronics' },
  ],
  beach_island: [
    { id: 'beach_palm', name: 'Palm Tree', sprite: BEACH_PALM_SPRITE, footprintW: 2, footprintH: 2, category: 'decor' },
    { id: 'beach_tiki', name: 'Tiki Torch', sprite: BEACH_TIKI_SPRITE, footprintW: 1, footprintH: 1, category: 'decor' },
  ],
  space_station: [
    { id: 'space_window', name: 'Space Window', sprite: SPACE_WINDOW_SPRITE, footprintW: 3, footprintH: 1, category: 'decor' },
    { id: 'space_alien', name: 'Alien Pet', sprite: SPACE_ALIEN_SPRITE, footprintW: 1, footprintH: 1, category: 'decor' },
    { id: 'space_panel', name: 'Control Panel', sprite: SPACE_CONTROL_PANEL_SPRITE, footprintW: 2, footprintH: 1, category: 'electronics' },
  ],
}

export function getThemeFurniture(themeId: string): ThemeFurnitureItem[] {
  return THEME_FURNITURE[themeId] || []
}
