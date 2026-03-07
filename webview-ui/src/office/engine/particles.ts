// Ambient particles drift upward in the void outside the office map,
// creating a living digital atmosphere.

import { theme } from '../theme.js'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  size: number
  color: string
}

const MAX_PARTICLES = 80
const particles: Particle[] = []

function spawnParticle(
  canvasW: number,
  canvasH: number,
  offX: number,
  offY: number,
  mapW: number,
  mapH: number,
): Particle {
  // Void regions: left, right, top, bottom bands around the office
  const vLeft  = Math.max(offX, 2)
  const vRight = Math.max(canvasW - offX - mapW, 2)
  const vTop   = Math.max(offY, 2)
  const vBot   = Math.max(canvasH - offY - mapH, 2)
  const total  = vLeft + vRight + vTop + vBot

  let x: number, y: number
  const r = Math.random() * total

  if (r < vLeft) {
    x = Math.random() * vLeft
    y = Math.random() * canvasH
  } else if (r < vLeft + vRight) {
    x = offX + mapW + Math.random() * vRight
    y = Math.random() * canvasH
  } else if (r < vLeft + vRight + vTop) {
    x = Math.random() * canvasW
    y = Math.random() * vTop
  } else {
    x = Math.random() * canvasW
    y = offY + mapH + Math.random() * vBot
  }

  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 0.22,
    vy: -0.18 - Math.random() * 0.45,   // float upward
    alpha: 0.07 + Math.random() * 0.30,
    size: Math.random() < 0.72 ? 1 : 2,
    color: theme.particleColors[Math.floor(Math.random() * theme.particleColors.length)],
  }
}

/** Render ambient particles floating in the void around the office.
 *  Call after the background fill, before the tile grid. */
export function renderParticles(
  ctx: CanvasRenderingContext2D,
  canvasW: number,
  canvasH: number,
  offsetX: number,
  offsetY: number,
  mapW: number,
  mapH: number,
): void {
  // Skip if the map fills the entire canvas (no void visible)
  if (mapW >= canvasW && mapH >= canvasH) return

  // Top up the pool
  while (particles.length < MAX_PARTICLES) {
    particles.push(spawnParticle(canvasW, canvasH, offsetX, offsetY, mapW, mapH))
  }

  ctx.save()
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]
    p.x += p.vx
    p.y += p.vy

    // Recycle when it escapes the canvas
    if (p.y < -4 || p.x < -4 || p.x > canvasW + 4 || p.y > canvasH + 4) {
      particles.splice(i, 1)
      continue
    }

    ctx.globalAlpha = p.alpha
    ctx.fillStyle = p.color
    ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size)
  }
  ctx.restore()
}
