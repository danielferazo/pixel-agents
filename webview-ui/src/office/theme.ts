/**
 * Theme provider — centralizes access to the current theme's colors.
 * Components import theme values from here instead of constants.
 */

import { THEMES, DEFAULT_THEME } from './themes.js'
import type { FloorColor } from './types.js'

// Current active theme ID
let currentThemeId: string = DEFAULT_THEME

// Get current theme
export function getCurrentTheme() {
  return THEMES[currentThemeId] ?? THEMES[DEFAULT_THEME]
}

export function getCurrentThemeId() {
  return currentThemeId
}

// Set theme (called from settings)
export function setTheme(themeId: string) {
  if (THEMES[themeId]) {
    currentThemeId = themeId
  }
}

// Export all theme values as getters for reactive updates
export const theme = {
  get backgroundColor(): string { return getCurrentTheme().backgroundColor },
  get fallbackFloorColor(): string { return getCurrentTheme().fallbackFloorColor },
  get defaultFloorColor(): FloorColor { return getCurrentTheme().defaultFloorColor },
  get wallColor(): string { return getCurrentTheme().wallColor },
  get defaultWallColor(): FloorColor { return getCurrentTheme().defaultWallColor },
  get statusActive(): string { return getCurrentTheme().statusActive },
  get statusWaiting(): string { return getCurrentTheme().statusWaiting },
  get statusPermission(): string { return getCurrentTheme().statusPermission },
  get statusIdle(): string { return getCurrentTheme().statusIdle },
  get seatOwn(): string { return getCurrentTheme().seatOwn },
  get seatAvailable(): string { return getCurrentTheme().seatAvailable },
  get seatBusy(): string { return getCurrentTheme().seatBusy },
  get gridLine(): string { return getCurrentTheme().gridLine },
  get voidTileOutline(): string { return getCurrentTheme().voidTileOutline },
  get ghostBorderHoverFill(): string { return getCurrentTheme().ghostBorderHoverFill },
  get ghostBorderHoverStroke(): string { return getCurrentTheme().ghostBorderHoverStroke },
  get ghostBorderStroke(): string { return getCurrentTheme().ghostBorderStroke },
  get selectionHighlight(): string { return getCurrentTheme().selectionHighlight },
  get deleteButton(): string { return getCurrentTheme().deleteButton },
  get rotateButton(): string { return getCurrentTheme().rotateButton },
  get vignetteBase(): number { return getCurrentTheme().vignetteBase },
  get vignettePulse(): number { return getCurrentTheme().vignettePulse },
  get particleColors(): string[] { return getCurrentTheme().particleColors },
}

// Re-export for direct access
export { THEMES, DEFAULT_THEME, THEME_LIST } from './themes.js'
export type { OfficeTheme } from './themes.js'
