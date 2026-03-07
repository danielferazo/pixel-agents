import type { SpriteData } from '../types.js'

const _ = '' // transparent

// ── Wall Clock (1×1 = 16×16px) ───────────────────────────────────
// Round clock face: white circle, metal frame, hands at ~10:10
export const CLOCK_SPRITE: SpriteData = [
  [_, _, _, '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', _, _, _],
  [_, _, '#3A2410', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#3A2410', _, _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#1A1A2A', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#1A1A2A', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#E8E8EC', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#1A1A2A', '#F0F0F0', '#3A2410', _],
  [_, '#3A2410', '#F0F0F0', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#E8E8EC', '#F0F0F0', '#3A2410', _],
  [_, _, '#3A2410', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#3A2410', _, _],
  [_, _, _, '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Large Painting A (2×2 = 32×32px) ────────────────────────────
// Art deco: gold frame, abstract deep blue / ochre / cream blocks
export const PAINTING_LARGE_A_SPRITE: SpriteData = (() => {
  const GF = '#C8960A' // gold frame
  const GB = '#A07808' // gold frame shadow
  const BL = '#1E3A6A' // deep blue
  const OC = '#C48C28' // ochre
  const CR = '#EEE8D8' // cream
  const MB = '#2A5090' // mid blue
  const rows: string[][] = []
  // Row 0: top frame
  rows.push(new Array(32).fill(GF))
  // Row 1: top frame inner
  rows.push([GF, GF, ...new Array(28).fill(GB), GF, GF])
  // Rows 2-29: canvas interior with art
  for (let r = 0; r < 28; r++) {
    const row: string[] = [GF, GB]
    for (let c = 0; c < 28; c++) {
      if (r < 8) {
        // Top section: deep blue with ochre accent stripe
        row.push(c < 14 ? BL : (c < 16 ? OC : MB))
      } else if (r < 10) {
        // Divider stripe: ochre
        row.push(OC)
      } else if (r < 20) {
        // Middle: cream with blue patches
        row.push((c > 8 && c < 18) ? CR : (c < 5 ? BL : OC))
      } else if (r < 22) {
        // Divider: gold-ish
        row.push(GB)
      } else {
        // Bottom: blue / ochre
        row.push(c < 18 ? MB : OC)
      }
    }
    row.push(GB, GF)
    rows.push(row)
  }
  // Row 30: bottom frame inner
  rows.push([GF, GF, ...new Array(28).fill(GB), GF, GF])
  // Row 31: bottom frame
  rows.push(new Array(32).fill(GF))
  return rows
})()

// ── Large Painting B (2×2 = 32×32px) ────────────────────────────
// Landscape style: dark frame, teal sky, dark silhouettes
export const PAINTING_LARGE_B_SPRITE: SpriteData = (() => {
  const FR = '#2A1A0A' // dark wood frame
  const FB = '#1A0E04' // frame shadow
  const SK = '#2A8080' // teal sky
  const SK2 = '#1E6060' // darker teal
  const SL = '#1A1A28' // silhouette dark
  const SL2 = '#0E0E18' // deeper silhouette
  const HZ = '#3A9090' // horizon glow
  const rows: string[][] = []
  rows.push(new Array(32).fill(FR))
  rows.push([FR, FR, ...new Array(28).fill(FB), FR, FR])
  for (let r = 0; r < 28; r++) {
    const row: string[] = [FR, FB]
    for (let c = 0; c < 28; c++) {
      if (r < 6) {
        // Sky top
        row.push(SK)
      } else if (r < 8) {
        // Horizon glow
        row.push(c > 6 && c < 22 ? HZ : SK2)
      } else if (r < 12) {
        // Upper silhouette layer
        const hillL = c < 10 && r > 9 - Math.floor(c / 2)
        const hillR = c > 18 && r > 9 - Math.floor((27 - c) / 2)
        row.push(hillL || hillR ? SL : SK2)
      } else {
        // Dense silhouette floor
        row.push(c % 4 === 0 && r < 20 ? SL : SL2)
      }
    }
    row.push(FB, FR)
    rows.push(row)
  }
  rows.push([FR, FR, ...new Array(28).fill(FB), FR, FR])
  rows.push(new Array(32).fill(FR))
  return rows
})()

// ── Small Painting A (1×1 = 16×16px) ────────────────────────────
// Warm orange/yellow abstract, thin gold frame
export const PAINTING_SMALL_A_SPRITE: SpriteData = [
  ['#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A'],
  ['#C8960A', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#E06010', '#E06010', '#F08020', '#F08020', '#F08020', '#E8A030', '#E8A030', '#E8A030', '#F08020', '#E06010', '#E06010', '#E06010', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#E06010', '#F08020', '#F08020', '#E8A030', '#E8C040', '#E8C040', '#E8C040', '#E8A030', '#F08020', '#F08020', '#E06010', '#C84010', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#F08020', '#F08020', '#E8A030', '#E8C040', '#F0D050', '#F0D050', '#E8C040', '#E8A030', '#E8A030', '#F08020', '#E06010', '#C84010', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#F08020', '#E8A030', '#E8C040', '#F0D050', '#F0D050', '#E8C040', '#E8A030', '#F08020', '#F08020', '#E06010', '#C84010', '#C84010', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#E8A030', '#E8C040', '#F0D050', '#E8C040', '#E8A030', '#F08020', '#E06010', '#E06010', '#C84010', '#C84010', '#A04010', '#A04010', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#E8A030', '#E8C040', '#E8C040', '#E8A030', '#F08020', '#E06010', '#C84010', '#C84010', '#A04010', '#A04010', '#A04010', '#803020', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#E8A030', '#E8A030', '#E8A030', '#F08020', '#E06010', '#C84010', '#C84010', '#A04010', '#803020', '#803020', '#803020', '#803020', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#F08020', '#F08020', '#E06010', '#E06010', '#C84010', '#A04010', '#803020', '#803020', '#803020', '#602018', '#602018', '#602018', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#E06010', '#E06010', '#C84010', '#C84010', '#A04010', '#803020', '#602018', '#602018', '#602018', '#602018', '#E06010', '#F08020', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#C84010', '#C84010', '#A04010', '#803020', '#602018', '#602018', '#602018', '#E06010', '#E8A030', '#F08020', '#F08020', '#E8A030', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#A04010', '#803020', '#602018', '#602018', '#E06010', '#F08020', '#E8A030', '#E8C040', '#E8A030', '#F08020', '#F08020', '#E06010', '#A07808', '#C8960A'],
  ['#C8960A', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#A07808', '#C8960A'],
  ['#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A'],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Small Painting B (1×1 = 16×16px) ────────────────────────────
// Cool blue tones, dark frame
export const PAINTING_SMALL_B_SPRITE: SpriteData = [
  ['#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#2050A0', '#2050A0', '#3060B0', '#4878C8', '#4878C8', '#3060B0', '#3060B0', '#4878C8', '#5888D0', '#4878C8', '#3060B0', '#2050A0', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#2050A0', '#3060B0', '#5888D0', '#6898E0', '#78A8F0', '#6898E0', '#5888D0', '#4878C8', '#3060B0', '#2050A0', '#3060B0', '#4878C8', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#3060B0', '#5888D0', '#78A8F0', '#90C0FF', '#A8D0FF', '#90C0FF', '#78A8F0', '#5888D0', '#3060B0', '#2050A0', '#3060B0', '#2050A0', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#4878C8', '#6898E0', '#90C0FF', '#A8D0FF', '#C0E0FF', '#A8D0FF', '#90C0FF', '#6898E0', '#4878C8', '#3060B0', '#2050A0', '#1A1A2A', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#4878C8', '#78A8F0', '#A8D0FF', '#C0E0FF', '#D8F0FF', '#C0E0FF', '#90C0FF', '#6898E0', '#4878C8', '#2050A0', '#1A3080', '#1A1A2A', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#3060B0', '#6898E0', '#90C0FF', '#C0E0FF', '#D8F0FF', '#C0E0FF', '#90C0FF', '#5888D0', '#3060B0', '#1A3080', '#1A1A2A', '#0E0E1A', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#2050A0', '#5888D0', '#78A8F0', '#A8D0FF', '#C0E0FF', '#A8D0FF', '#78A8F0', '#4878C8', '#2050A0', '#1A1A2A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#1A3080', '#3060B0', '#5888D0', '#78A8F0', '#90C0FF', '#78A8F0', '#5888D0', '#3060B0', '#1A3080', '#1A1A2A', '#1A3080', '#2050A0', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#1A1A2A', '#2050A0', '#3060B0', '#4878C8', '#6898E0', '#4878C8', '#3060B0', '#2050A0', '#1A3080', '#2050A0', '#3060B0', '#3060B0', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#1A1A2A', '#1A3080', '#2050A0', '#3060B0', '#3060B0', '#2050A0', '#2050A0', '#3060B0', '#4878C8', '#3060B0', '#2050A0', '#2050A0', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#1A1A2A', '#1A1A2A', '#1A3080', '#2050A0', '#2050A0', '#1A3080', '#2050A0', '#3060B0', '#3060B0', '#2050A0', '#1A3080', '#1A3080', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#0E0E1A', '#1A1A2A'],
  ['#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A'],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Small Painting C (1×1 = 16×16px) ────────────────────────────
// Warm earth tones with landscape hint, thin dark frame
export const PAINTING_SMALL_C_SPRITE: SpriteData = [
  ['#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410'],
  ['#3A2410', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#7080A0', '#8090B0', '#90A0C0', '#A0B0C8', '#B0C0D0', '#B0C0D0', '#A0B0C8', '#90A0C0', '#8090B0', '#7080A0', '#6070908', '#607090', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#8090B0', '#90A0C0', '#A0B0C8', '#B8C8D8', '#C0D0E0', '#C0D0E0', '#B8C8D8', '#A0B0C8', '#90A0C0', '#8090B0', '#6070908', '#507080', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#A0B0C8', '#B0C0D0', '#C0D0E0', '#D0E0F0', '#D0E0F0', '#C8D8E8', '#B8C8D8', '#A0B0C8', '#8090B0', '#6070908', '#507080', '#405060', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#7A6040', '#8A7050', '#A08860', '#B09870', '#C0A878', '#B09060', '#A07850', '#906040', '#704828', '#603820', '#503018', '#403010', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#6A5030', '#7A6040', '#6A5030', '#7A6040', '#8A7050', '#A08860', '#906040', '#7A5030', '#6A4020', '#5A3018', '#4A2810', '#3A2008', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#5A4020', '#3A9040', '#4AA050', '#5AB060', '#3A9040', '#507020', '#6A5030', '#5A4020', '#4A3018', '#3A2008', '#2A1808', '#2A1808', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#3A8030', '#4AA040', '#5AB850', '#4AA040', '#3A8830', '#2A7020', '#4A9040', '#5A4020', '#4A3018', '#3A2008', '#2A1808', '#2A1808', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#3A7030', '#4A8040', '#5A9050', '#4A8040', '#3A7030', '#2A6020', '#3A7030', '#4A8040', '#3A6028', '#2A4018', '#2A1808', '#2A1808', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#4A6030', '#5A7040', '#6A8050', '#5A7040', '#4A6030', '#3A5020', '#4A6030', '#5A7040', '#4A6030', '#3A5020', '#2A3818', '#2A1808', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#5A7038', '#6A8048', '#7A9058', '#8AA068', '#7A9058', '#6A8048', '#5A7038', '#6A8048', '#5A7038', '#4A6028', '#3A5018', '#2A3808', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#3A5020', '#4A6030', '#5A7040', '#6A8050', '#7A9060', '#6A8050', '#5A7040', '#4A6030', '#3A5020', '#2A4010', '#2A2808', '#2A1808', '#2A1808', '#3A2410'],
  ['#3A2410', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#2A1808', '#3A2410'],
  ['#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410', '#3A2410'],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Small Motivational Sign / Text Plaque (1×1 = 16×16px) ───────
// Dark background, lighter horizontal lines representing text
export const PAINTING_SMALL_TEXT_SPRITE: SpriteData = [
  ['#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#E0E0F0', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#B8B8D0', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#909090', '#909090', '#909090', '#909090', '#909090', '#909090', '#909090', '#909090', '#909090', '#909090', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#C8960A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#2A2A3A', '#1A1A2A'],
  ['#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A', '#1A1A2A'],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Chalkboard (2×2 = 32×32px) ───────────────────────────────────
// Dark green board, thin brown frame, faint chalk marks
export const CHALKBOARD_SPRITE: SpriteData = (() => {
  const FR = '#5C3E1E' // brown frame
  const FB = '#3A2410' // frame shadow
  const BD = '#2A4028' // chalkboard dark green
  const BM = '#304830' // chalkboard mid
  const CK = '#D8E8D0' // chalk marks
  const rows: string[][] = []
  // Row 0: top frame
  rows.push(new Array(32).fill(FR))
  // Row 1: top frame inner
  rows.push([FR, FR, ...new Array(28).fill(FB), FR, FR])
  // Rows 2-29: board interior with chalk marks
  for (let r = 0; r < 28; r++) {
    const row: string[] = [FR, FB]
    for (let c = 0; c < 28; c++) {
      // Chalk scribbles pattern: horizontal lines, dots
      const isChalkLine =
        (r === 4 && c > 2 && c < 20) ||
        (r === 5 && c > 3 && c < 18) ||
        (r === 8 && c > 6 && c < 25) ||
        (r === 9 && c > 5 && c < 22) ||
        (r === 13 && c > 2 && c < 14) ||
        (r === 14 && c > 2 && c < 12) ||
        (r === 17 && c > 8 && c < 26) ||
        (r === 18 && c > 9 && c < 24) ||
        (r === 22 && c > 4 && c < 18) ||
        (r === 23 && c > 3 && c < 16) ||
        // Dots
        (r === 6 && (c === 22 || c === 23)) ||
        (r === 11 && (c === 4 || c === 5)) ||
        (r === 20 && (c === 20 || c === 21))
      row.push(isChalkLine ? CK : (c % 7 === 0 && r % 5 === 0 ? BM : BD))
    }
    row.push(FB, FR)
    rows.push(row)
  }
  // Row 30: bottom frame inner
  rows.push([FR, FR, ...new Array(28).fill(FB), FR, FR])
  // Row 31: bottom frame
  rows.push(new Array(32).fill(FR))
  return rows
})()

// ── Whiteboard B — Wide & Short (2×1 = 32×16px) ──────────────────
// White surface, thin dark frame, colored marker marks
export const WHITEBOARD_B_SPRITE: SpriteData = (() => {
  const FR = '#3A2410' // dark frame
  const FB = '#2A1808' // frame shadow
  const WH = '#F4F4F8' // white board
  const WM = '#F0F0F4' // white mid
  const RD = '#E04040' // red marker
  const BL = '#4060E0' // blue marker
  const GR = '#30A030' // green marker
  const rows: string[][] = []
  // Row 0: top frame
  rows.push(new Array(32).fill(FR))
  // Row 1: top frame inner
  rows.push([FR, FB, ...new Array(28).fill(FB), FB, FR])
  // Rows 2-13: board surface
  for (let r = 0; r < 12; r++) {
    const row: string[] = [FR, FB]
    for (let c = 0; c < 28; c++) {
      // Colored marker marks
      const isRed = (r === 3 && c >= 3 && c <= 12) || (r === 4 && c >= 4 && c <= 10)
      const isBlue = (r === 6 && c >= 8 && c <= 20) || (r === 7 && c >= 9 && c <= 19)
      const isGreen = (r === 9 && c >= 15 && c <= 24) || (r === 10 && c >= 16 && c <= 23)
      // Dot accent
      const isDot = (r === 3 && c === 16) || (r === 7 && c === 4) || (r === 10 && c === 7)
      if (isRed) row.push(RD)
      else if (isBlue) row.push(BL)
      else if (isGreen) row.push(GR)
      else if (isDot) row.push(RD)
      else row.push(r % 2 === 0 ? WH : WM)
    }
    row.push(FB, FR)
    rows.push(row)
  }
  // Row 14: bottom frame inner
  rows.push([FR, FB, ...new Array(28).fill(FB), FB, FR])
  // Row 15: bottom frame
  rows.push(new Array(32).fill(FR))
  return rows
})()

// ── Helper: flip a sprite horizontally ───────────────────────────
function flipH(sprite: SpriteData): SpriteData {
  return sprite.map((row) => [...row].reverse())
}

// ── Plant A — Terra Cotta Pot (1×2 = 16×32px) ────────────────────
// Top half (rows 0-15): leafy green crown. Bottom half (rows 16-31): terra cotta pot.
export const PLANT_A_SPRITE: SpriteData = [
  // Top half — leaves
  [_, _, _, _, _, _, '#3D8B37', '#3D8B37', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, '#2D6B27', '#3D8B37', '#5AB04A', '#3D8B37', _, _, _, _, _, _, _],
  [_, _, _, _, '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', _, _, _, _, _, _],
  [_, _, _, '#2D6B27', '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _],
  [_, _, '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', _, _, _, _],
  [_, '#2D6B27', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#2D6B27', _, _, _],
  [_, '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', _, _, _],
  [_, '#2D6B27', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _],
  [_, _, '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', _, _, _, _],
  [_, _, _, '#2D6B27', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#2D6B27', _, _, _, _, _],
  [_, _, _, _, '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', _, _, _, _, _, _],
  [_, _, _, _, _, '#2D6B27', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#3D8B37', '#3D8B37', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#2D6B27', '#2D6B27', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#2D6B27', '#2D6B27', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#2D6B27', '#2D6B27', _, _, _, _, _, _, _, _],
  // Bottom half — terra cotta pot
  [_, _, _, _, _, '#B85C3A', '#B85C3A', '#B85C3A', '#B85C3A', '#B85C3A', _, _, _, _, _, _],
  [_, _, _, _, '#8A4228', '#D06040', '#D87050', '#D06040', '#D87050', '#D06040', '#8A4228', _, _, _, _, _],
  [_, _, _, _, '#8A4228', '#D06040', '#D87050', '#D87050', '#D06040', '#D06040', '#8A4228', _, _, _, _, _],
  [_, _, _, _, '#8A4228', '#D06040', '#D87050', '#D87050', '#D06040', '#D06040', '#8A4228', _, _, _, _, _],
  [_, _, _, _, '#8A4228', '#D06040', '#D87050', '#D87050', '#D06040', '#D06040', '#8A4228', _, _, _, _, _],
  [_, _, _, _, '#8A4228', '#C05030', '#C85840', '#C85840', '#C05030', '#C05030', '#8A4228', _, _, _, _, _],
  [_, _, _, _, '#8A4228', '#B04828', '#B85030', '#B85030', '#B04828', '#B04828', '#8A4228', _, _, _, _, _],
  [_, _, _, _, '#8A4228', '#A04020', '#A84828', '#A84828', '#A04020', '#A04020', '#8A4228', _, _, _, _, _],
  [_, _, _, _, _, '#8A4228', '#9A3A18', '#9A3A18', '#9A3A18', '#8A4228', _, _, _, _, _, _],
  [_, _, _, '#6A3010', '#7A3818', '#8A4228', '#A04020', '#A04020', '#8A4228', '#7A3818', '#6A3010', _, _, _, _, _],
  [_, _, _, '#7A3818', '#9A4A28', '#B05030', '#C05838', '#C05838', '#B05030', '#9A4A28', '#7A3818', _, _, _, _, _],
  [_, _, _, '#6A3010', '#8A4020', '#9A4828', '#A85030', '#A85030', '#9A4828', '#8A4020', '#6A3010', _, _, _, _, _],
  [_, _, _, _, '#6A3010', '#7A3818', '#8A4020', '#8A4020', '#7A3818', '#6A3010', _, _, _, _, _, _],
  [_, _, _, _, _, '#6A3010', '#7A3818', '#7A3818', '#6A3010', _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#6A3010', '#6A3010', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Plant B — Blue-Gray Pot (1×2 = 16×32px) ──────────────────────
// Different leaf shape (narrower, more upright), blue-gray pot.
export const PLANT_B_SPRITE: SpriteData = [
  // Top half — narrower leaf shape
  [_, _, _, _, _, _, '#3D8B37', '#5AB04A', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, '#2D6B27', '#5AB04A', '#3D8B37', '#5AB04A', _, _, _, _, _, _, _],
  [_, _, _, _, '#2D6B27', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _, _],
  [_, _, _, '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#5AB04A', '#3D8B37', _, _, _, _, _],
  [_, _, '#2D6B27', '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#5AB04A', '#3D8B37', '#2D6B27', '#2D6B27', _, _, _, _],
  [_, '#2D6B27', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _],
  [_, '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', _, _, _],
  [_, '#2D6B27', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _],
  [_, _, '#2D6B27', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#2D6B27', '#2D6B27', _, _, _, _],
  [_, _, _, '#2D6B27', '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#2D6B27', '#2D6B27', _, _, _, _, _],
  [_, _, _, _, '#2D6B27', '#3D8B37', '#3D8B37', '#3D8B37', '#2D6B27', '#2D6B27', _, _, _, _, _, _],
  [_, _, _, _, _, '#2D6B27', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#3D8B37', '#3D8B37', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#2D6B27', '#2D6B27', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#2D6B27', '#2D6B27', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#2D6B27', '#2D6B27', _, _, _, _, _, _, _, _],
  // Bottom half — blue-gray pot
  [_, _, _, _, _, '#4A6090', '#4A6090', '#4A6090', '#4A6090', '#4A6090', _, _, _, _, _, _],
  [_, _, _, _, '#3A5080', '#5870A0', '#6880B0', '#5870A0', '#6880B0', '#5870A0', '#3A5080', _, _, _, _, _],
  [_, _, _, _, '#3A5080', '#5870A0', '#6880B0', '#6880B0', '#5870A0', '#5870A0', '#3A5080', _, _, _, _, _],
  [_, _, _, _, '#3A5080', '#5870A0', '#6880B0', '#6880B0', '#5870A0', '#5870A0', '#3A5080', _, _, _, _, _],
  [_, _, _, _, '#3A5080', '#5870A0', '#6880B0', '#6880B0', '#5870A0', '#5870A0', '#3A5080', _, _, _, _, _],
  [_, _, _, _, '#3A5080', '#486090', '#5870A0', '#5870A0', '#486090', '#486090', '#3A5080', _, _, _, _, _],
  [_, _, _, _, '#3A5080', '#405880', '#4A6890', '#4A6890', '#405880', '#405880', '#3A5080', _, _, _, _, _],
  [_, _, _, _, '#3A5080', '#384878', '#425868', '#425868', '#384878', '#384878', '#3A5080', _, _, _, _, _],
  [_, _, _, _, _, '#3A5080', '#384870', '#384870', '#384870', '#3A5080', _, _, _, _, _, _],
  [_, _, _, '#2A3868', '#3A4878', '#3A5080', '#405878', '#405878', '#3A5080', '#3A4878', '#2A3868', _, _, _, _, _],
  [_, _, _, '#3A4878', '#4A5888', '#587098', '#6070A0', '#6070A0', '#587098', '#4A5888', '#3A4878', _, _, _, _, _],
  [_, _, _, '#2A3868', '#3A4878', '#4A5888', '#506080', '#506080', '#4A5888', '#3A4878', '#2A3868', _, _, _, _, _],
  [_, _, _, _, '#2A3868', '#3A4878', '#3A5070', '#3A5070', '#3A4878', '#2A3868', _, _, _, _, _, _],
  [_, _, _, _, _, '#2A3868', '#3A4878', '#3A4878', '#2A3868', _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#2A3868', '#2A3868', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── Plant A Flip (1×2 = 16×32px) — horizontally mirrored ─────────
export const PLANT_A_FLIP_SPRITE: SpriteData = flipH(PLANT_A_SPRITE)

// ── Plant B Flip (1×2 = 16×32px) — horizontally mirrored ─────────
export const PLANT_B_FLIP_SPRITE: SpriteData = flipH(PLANT_B_SPRITE)

// ── Small Desk Plant (1×1 = 16×16px) — cactus / succulent ────────
// Top: green spiky cactus. Bottom: small round pot.
export const PLANT_SMALL_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, '#3D8B37', '#3D8B37', _, _, _, _, _, _, _, _],
  [_, _, _, _, _, '#5AB04A', '#3D8B37', '#5AB04A', '#3D8B37', _, _, _, _, _, _, _],
  [_, _, _, _, '#2D6B27', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _, _],
  [_, _, _, '#3D8B37', '#5AB04A', '#3D8B37', '#2D6B27', '#3D8B37', '#5AB04A', '#3D8B37', _, _, _, _, _, _],
  [_, _, '#2D6B27', '#3D8B37', '#3D8B37', '#5AB04A', '#3D8B37', '#5AB04A', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _],
  [_, _, _, _, '#3D8B37', '#3D8B37', '#5AB04A', '#5AB04A', '#3D8B37', '#3D8B37', _, _, _, _, _, _],
  [_, _, _, _, '#2D6B27', '#3D8B37', '#3D8B37', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _, _],
  [_, _, _, _, _, '#2D6B27', '#3D8B37', '#3D8B37', '#2D6B27', _, _, _, _, _, _, _],
  [_, _, _, _, _, '#2D6B27', '#2D6B27', '#2D6B27', '#2D6B27', _, _, _, _, _, _, _],
  [_, _, _, _, '#8A7050', '#8A7050', '#8A7050', '#8A7050', '#8A7050', '#8A7050', _, _, _, _, _, _],
  [_, _, _, '#7A6040', '#A08860', '#B09870', '#C0A878', '#B09870', '#A08860', '#7A6040', _, _, _, _, _, _],
  [_, _, _, '#7A6040', '#A08860', '#B09870', '#C0A878', '#B09870', '#A08860', '#7A6040', _, _, _, _, _, _],
  [_, _, _, '#7A6040', '#906850', '#A07860', '#B08868', '#A07860', '#906850', '#7A6040', _, _, _, _, _, _],
  [_, _, _, _, '#7A6040', '#8A5A38', '#9A6848', '#9A6848', '#8A5A38', '#7A6040', _, _, _, _, _, _],
  [_, _, _, _, _, '#7A6040', '#8A5A38', '#8A5A38', '#7A6040', _, _, _, _, _, _, _],
]

// ── Doormat (2×1 = 32×16px) — classic brown ──────────────────────
export const DOORMAT_SPRITE: SpriteData = (() => {
  const BG = '#4A3020' // main brown
  const BR = '#3A2010' // darker brown
  const LT = '#6A5040' // lighter stripe
  const BD = '#2A1808' // border dark
  const rows: string[][] = []
  // Row 0: top border
  rows.push(new Array(32).fill(BD))
  // Row 1: lighter border stripe
  rows.push([BD, ...new Array(30).fill(LT), BD])
  // Rows 2-5: mat texture with stripes
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) {
      row.push(c % 4 < 2 ? BG : LT)
    }
    row.push(BD)
    rows.push(row)
  }
  // Row 6-7: center band
  for (let r = 0; r < 2; r++) {
    rows.push([BD, LT, ...new Array(28).fill(r === 0 ? LT : BG), LT, BD])
  }
  // Rows 8-11: mat texture
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) {
      row.push(c % 4 < 2 ? BG : LT)
    }
    row.push(BD)
    rows.push(row)
  }
  // Row 12: lighter border stripe
  rows.push([BD, ...new Array(30).fill(LT), BD])
  // Row 13: subtle shadow row
  rows.push([BD, ...new Array(30).fill(BR), BD])
  // Row 14: mat edge / shadow
  rows.push(new Array(32).fill(BD))
  // Row 15: bottom shadow
  rows.push(new Array(32).fill(BR))
  return rows
})()

// ── Doormat B — Red (2×1 = 32×16px) ─────────────────────────────
export const DOORMAT_B_SPRITE: SpriteData = (() => {
  const BG = '#802020' // red
  const BR = '#601010' // dark red
  const LT = '#A03030' // lighter red
  const BD = '#3A0A0A' // border dark
  const rows: string[][] = []
  rows.push(new Array(32).fill(BD))
  rows.push([BD, ...new Array(30).fill(LT), BD])
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  for (let r = 0; r < 2; r++) {
    rows.push([BD, LT, ...new Array(28).fill(r === 0 ? LT : BG), LT, BD])
  }
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  rows.push([BD, ...new Array(30).fill(LT), BD])
  rows.push([BD, ...new Array(30).fill(BR), BD])
  rows.push(new Array(32).fill(BD))
  rows.push(new Array(32).fill(BR))
  return rows
})()

// ── Doormat C — Blue (2×1 = 32×16px) ────────────────────────────
export const DOORMAT_C_SPRITE: SpriteData = (() => {
  const BG = '#204080' // blue
  const BR = '#102060' // dark blue
  const LT = '#3060A0' // lighter blue
  const BD = '#0A1A3A' // border dark
  const rows: string[][] = []
  rows.push(new Array(32).fill(BD))
  rows.push([BD, ...new Array(30).fill(LT), BD])
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  for (let r = 0; r < 2; r++) {
    rows.push([BD, LT, ...new Array(28).fill(r === 0 ? LT : BG), LT, BD])
  }
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  rows.push([BD, ...new Array(30).fill(LT), BD])
  rows.push([BD, ...new Array(30).fill(BR), BD])
  rows.push(new Array(32).fill(BD))
  rows.push(new Array(32).fill(BR))
  return rows
})()

// ── Doormat D — Green (2×1 = 32×16px) ───────────────────────────
export const DOORMAT_D_SPRITE: SpriteData = (() => {
  const BG = '#204820' // green
  const BR = '#102810' // dark green
  const LT = '#306830' // lighter green
  const BD = '#0A1A0A' // border dark
  const rows: string[][] = []
  rows.push(new Array(32).fill(BD))
  rows.push([BD, ...new Array(30).fill(LT), BD])
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  for (let r = 0; r < 2; r++) {
    rows.push([BD, LT, ...new Array(28).fill(r === 0 ? LT : BG), LT, BD])
  }
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  rows.push([BD, ...new Array(30).fill(LT), BD])
  rows.push([BD, ...new Array(30).fill(BR), BD])
  rows.push(new Array(32).fill(BD))
  rows.push(new Array(32).fill(BR))
  return rows
})()

// ── Doormat E — Gray (2×1 = 32×16px) ────────────────────────────
export const DOORMAT_E_SPRITE: SpriteData = (() => {
  const BG = '#5A5A6A' // gray
  const BR = '#3A3A4A' // dark gray
  const LT = '#7A7A8A' // lighter gray
  const BD = '#1A1A2A' // border dark
  const rows: string[][] = []
  rows.push(new Array(32).fill(BD))
  rows.push([BD, ...new Array(30).fill(LT), BD])
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  for (let r = 0; r < 2; r++) {
    rows.push([BD, LT, ...new Array(28).fill(r === 0 ? LT : BG), LT, BD])
  }
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  rows.push([BD, ...new Array(30).fill(LT), BD])
  rows.push([BD, ...new Array(30).fill(BR), BD])
  rows.push(new Array(32).fill(BD))
  rows.push(new Array(32).fill(BR))
  return rows
})()

// ── Doormat F — Dark Navy (2×1 = 32×16px) ───────────────────────
export const DOORMAT_F_SPRITE: SpriteData = (() => {
  const BG = '#10203A' // dark navy
  const BR = '#081018' // deepest navy
  const LT = '#203050' // lighter navy
  const BD = '#040810' // border dark
  const rows: string[][] = []
  rows.push(new Array(32).fill(BD))
  rows.push([BD, ...new Array(30).fill(LT), BD])
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  for (let r = 0; r < 2; r++) {
    rows.push([BD, LT, ...new Array(28).fill(r === 0 ? LT : BG), LT, BD])
  }
  for (let r = 0; r < 4; r++) {
    const row: string[] = [BD]
    for (let c = 1; c < 31; c++) { row.push(c % 4 < 2 ? BG : LT) }
    row.push(BD)
    rows.push(row)
  }
  rows.push([BD, ...new Array(30).fill(LT), BD])
  rows.push([BD, ...new Array(30).fill(BR), BD])
  rows.push(new Array(32).fill(BD))
  rows.push(new Array(32).fill(BR))
  return rows
})()
