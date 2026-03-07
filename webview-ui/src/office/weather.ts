/**
 * Day/night cycle and weather effects for themes.
 * Adds dynamic atmosphere to the office environment.
 */

// Theme integration available if needed
// import { getCurrentTheme } from './theme.js'

// Time of day definitions
export const TimeOfDay = {
  DAWN: 'dawn',
  DAY: 'day',
  DUSK: 'dusk',
  NIGHT: 'night',
} as const
export type TimeOfDay = typeof TimeOfDay[keyof typeof TimeOfDay]

// Weather types
export const WeatherType = {
  CLEAR: 'clear',
  RAIN: 'rain',
  SNOW: 'snow',
  STORM: 'storm',
} as const
export type WeatherType = typeof WeatherType[keyof typeof WeatherType]

// Time of day color modifiers
interface TimeModifier {
  backgroundTint: string      // Overlay color on background
  floorBrightness: number     // Multiplier for floor brightness
  ambientLight: number        // 0-1 ambient light level
}

const TIME_MODIFIERS: Record<TimeOfDay, TimeModifier> = {
  [TimeOfDay.DAWN]: {
    backgroundTint: 'rgba(255, 150, 100, 0.15)',
    floorBrightness: 0.85,
    ambientLight: 0.7,
  },
  [TimeOfDay.DAY]: {
    backgroundTint: 'rgba(255, 255, 255, 0.05)',
    floorBrightness: 1.0,
    ambientLight: 1.0,
  },
  [TimeOfDay.DUSK]: {
    backgroundTint: 'rgba(100, 50, 150, 0.2)',
    floorBrightness: 0.75,
    ambientLight: 0.6,
  },
  [TimeOfDay.NIGHT]: {
    backgroundTint: 'rgba(0, 0, 50, 0.3)',
    floorBrightness: 0.5,
    ambientLight: 0.3,
  },
}

// Get current time of day based on system time
export function getCurrentTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 8) return TimeOfDay.DAWN
  if (hour >= 8 && hour < 17) return TimeOfDay.DAY
  if (hour >= 17 && hour < 20) return TimeOfDay.DUSK
  return TimeOfDay.NIGHT
}

// Get time modifier for rendering
export function getTimeModifier(): TimeModifier {
  return TIME_MODIFIERS[getCurrentTimeOfDay()]
}

// Weather particle configuration
export interface WeatherConfig {
  type: WeatherType
  intensity: number       // 0-1
  particleColor: string
  particleSpeed: number
  particleSize: number
}

const WEATHER_CONFIGS: Record<WeatherType, WeatherConfig> = {
  [WeatherType.CLEAR]: {
    type: WeatherType.CLEAR,
    intensity: 0,
    particleColor: '',
    particleSpeed: 0,
    particleSize: 0,
  },
  [WeatherType.RAIN]: {
    type: WeatherType.RAIN,
    intensity: 0.6,
    particleColor: '#4fc3f7',
    particleSpeed: 4,
    particleSize: 1,
  },
  [WeatherType.SNOW]: {
    type: WeatherType.SNOW,
    intensity: 0.4,
    particleColor: '#ffffff',
    particleSpeed: 1,
    particleSize: 2,
  },
  [WeatherType.STORM]: {
    type: WeatherType.STORM,
    intensity: 0.9,
    particleColor: '#7986cb',
    particleSpeed: 6,
    particleSize: 1,
  },
}

let currentWeather: WeatherType = WeatherType.CLEAR

export function setWeather(weather: WeatherType): void {
  currentWeather = weather
}

export function getWeather(): WeatherType {
  return currentWeather
}

export function getWeatherConfig(): WeatherConfig {
  return WEATHER_CONFIGS[currentWeather]
}

// Generate weather particles for rendering
export interface WeatherParticle {
  x: number
  y: number
  speed: number
  size: number
  alpha: number
}

export function createWeatherParticles(count: number, canvasWidth: number): WeatherParticle[] {
  const config = getWeatherConfig()
  if (config.intensity === 0) return []

  const particles: WeatherParticle[] = []
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasWidth, // Start at random Y
      speed: config.particleSpeed * (0.5 + Math.random() * 0.5),
      size: config.particleSize,
      alpha: 0.3 + Math.random() * 0.4,
    })
  }
  return particles
}

// Update weather particles (call each frame)
export function updateWeatherParticles(
  particles: WeatherParticle[],
  canvasWidth: number,
  canvasHeight: number,
  deltaTime: number,
): void {
  const config = getWeatherConfig()
  if (config.intensity === 0) return

  for (const p of particles) {
    p.y += p.speed * deltaTime * 60
    // Add some horizontal drift for rain
    if (config.type === WeatherType.RAIN || config.type === WeatherType.STORM) {
      p.x += 0.5 * deltaTime * 60
    }
    // Reset when off screen
    if (p.y > canvasHeight) {
      p.y = -10
      p.x = Math.random() * canvasWidth
    }
    if (p.x > canvasWidth) {
      p.x = 0
    }
  }
}
