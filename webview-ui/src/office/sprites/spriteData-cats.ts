import type { SpriteData } from '../types.js'

const _ = '' // transparent

// ── Orange Tabby palette ─────────────────────────────────────────────────────
const OA = '#0D0500'  // near-black shadow
const OB = '#6B2808'  // dark brown-orange
const OC = '#B84515'  // mid orange
const OD = '#D96520'  // base orange
const OE = '#EC8C38'  // light orange
const OF = '#F5B258'  // highlight
const OG = '#FAD090'  // cream/muzzle highlight
const OI = '#EDB090'  // inner ear pink
const ON = '#CC5050'  // nose
const OW = '#F8EED8'  // muzzle white
const OY = '#88C820'  // eye iris bright green
const OP = '#0A0808'  // pupil

// ── Black Cat palette ────────────────────────────────────────────────────────
const BA = '#050508'  // deepest black
const BB = '#0E0E18'  // dark black-blue body
const BC = '#1C1C2E'  // mid highlight
const BD = '#2A2A42'  // lighter highlight
const BE = '#3A3A5A'  // rim light blue-grey
const BN = '#CC6060'  // nose pink
const BW = '#F0EEE0'  // muzzle white
const BI = '#F0C0B0'  // inner ear
const BY = '#C8E820'  // eye iris bright yellow-green
const BP = '#060606'  // pupil
const BK = '#FFFFC0'  // eye catchlight tiny dot

// ── Tabby Cat palette ────────────────────────────────────────────────────────
const TA = '#1A0C04'  // deep shadow
const TB = '#5A320A'  // dark stripe brown
const TC = '#8A5518'  // mid tabby brown
const TD = '#B87828'  // base tabby
const TE = '#D0A040'  // light tabby
const TF = '#E8C870'  // cream highlight
const TG = '#F5E8C0'  // white belly/chest
const TI = '#EDAAA0'  // inner ear pink
const TN = '#D05858'  // nose
const TW = '#F8F0E0'  // muzzle white
const TY = '#58B820'  // eye iris green
const TP = '#0A0800'  // pupil

// ── White Cat palette ────────────────────────────────────────────────────────
const WA = '#5060A0'  // deep blue shadow
const WB = '#8090C0'  // dark blue-grey shadow
const WC = '#B0B8D8'  // mid shadow
const WD = '#D0D8EC'  // base white-blue
const WE = '#E8ECF8'  // light white
const WF = '#F5F5FF'  // bright white
const WI = '#F0B8C0'  // inner ear pink
const WN = '#D87090'  // nose pink
const WW = '#FEFEFE'  // pure white highlight
const WY = '#4878CC'  // eye iris blue
const WP = '#0A0810'  // pupil

// ─────────────────────────────────────────────────────────────────────────────
// CAT_ORANGE_SPRITE — loaf pose, facing forward, tabby markings
// ─────────────────────────────────────────────────────────────────────────────
export const CAT_ORANGE_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, OB, OA, _, _, _, OA, OB, _, _, _, _, _],
  [_, _, _, OB, OI, OC, OD, OD, OC, OI, OB, _, _, _, _, _],
  [_, _, OC, OD, OE, OD, OC, OC, OD, OE, OD, OC, _, _, _, _],
  [_, _, OD, OF, OE, OF, OD, OD, OF, OE, OF, OD, _, _, _, _],
  [_, _, OC, OB, OW, OY, OP, OP, OY, OW, OB, OC, _, _, _, _],
  [_, _, OD, OE, OW, OW, ON, ON, OW, OW, OE, OD, _, _, _, _],
  [_, _, OB, OD, OG, OW, OW, OW, OW, OG, OD, OB, _, _, _, _],
  [_, OB, OC, OD, OE, OD, OC, OC, OD, OE, OD, OC, OB, _, _, _],
  [_, OD, OE, OF, OD, OE, OD, OD, OE, OD, OF, OE, OD, _, _, _],
  [_, OC, OD, OE, OB, OD, OE, OE, OD, OB, OE, OD, OC, _, _, _],
  [_, OD, OE, OD, OE, OF, OD, OD, OF, OE, OD, OE, OD, _, _, _],
  [_, OB, OD, OC, OD, OE, OD, OD, OE, OD, OC, OD, OB, _, _, _],
  [_, _, OC, OE, OF, OG, OG, OG, OG, OF, OE, OC, _, _, _, _],
  [_, _, _, OB, OC, OD, OD, OD, OD, OC, OB, _, _, _, _, _],
  [_, _, _, _, OA, OB, OB, OB, OB, OA, _, _, _, _, _, _],
]

// ─────────────────────────────────────────────────────────────────────────────
// CAT_BLACK_SPRITE — sitting upright, facing forward, vivid green-yellow eyes
// ─────────────────────────────────────────────────────────────────────────────
export const CAT_BLACK_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, BA, BB, _, _, _, BB, BA, _, _, _, _, _],
  [_, _, _, BA, BI, BC, BB, BB, BC, BI, BA, _, _, _, _, _],
  [_, _, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, _, _, _, _],
  [_, _, BB, BD, BE, BD, BC, BC, BD, BE, BD, BB, _, _, _, _],
  [_, _, BC, BA, BW, BY, BP, BP, BY, BW, BA, BC, _, _, _, _],
  [_, _, BB, BC, BW, BW, BN, BN, BW, BW, BC, BB, _, _, _, _],
  [_, _, BA, BB, BW, BK, BW, BW, BK, BW, BB, BA, _, _, _, _],
  [_, BA, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, BA, _, _, _],
  [_, BB, BC, BD, BE, BD, BC, BC, BD, BE, BD, BC, BB, _, _, _],
  [_, BB, BD, BE, BC, BD, BE, BE, BD, BC, BE, BD, BB, _, _, _],
  [_, BC, BD, BE, BD, BE, BD, BD, BE, BD, BE, BD, BC, _, _, _],
  [_, BB, BC, BD, BE, BD, BC, BC, BD, BE, BD, BC, BB, _, _, _],
  [_, _, BB, BC, BD, BE, BE, BE, BE, BD, BC, BB, _, _, _, _],
  [_, _, _, BB, BC, BB, BB, BB, BB, BC, BB, _, _, _, _, _],
  [_, _, _, _, BA, BB, BB, BB, BB, BA, _, _, _, _, _, _],
]

// ─────────────────────────────────────────────────────────────────────────────
// CAT_TABBY_SPRITE — sitting, facing forward, brown tabby stripes, green eyes
// ─────────────────────────────────────────────────────────────────────────────
export const CAT_TABBY_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, TB, TA, _, _, _, TA, TB, _, _, _, _, _],
  [_, _, _, TB, TI, TC, TD, TD, TC, TI, TB, _, _, _, _, _],
  [_, _, TC, TB, TE, TC, TB, TB, TC, TE, TB, TC, _, _, _, _],
  [_, _, TD, TF, TE, TF, TC, TC, TF, TE, TF, TD, _, _, _, _],
  [_, _, TC, TB, TW, TY, TP, TP, TY, TW, TB, TC, _, _, _, _],
  [_, _, TD, TE, TW, TW, TN, TN, TW, TW, TE, TD, _, _, _, _],
  [_, _, TB, TC, TG, TW, TW, TW, TW, TG, TC, TB, _, _, _, _],
  [_, TB, TC, TB, TE, TC, TB, TB, TC, TE, TB, TC, TB, _, _, _],
  [_, TC, TD, TE, TC, TE, TD, TD, TE, TC, TE, TD, TC, _, _, _],
  [_, TB, TC, TD, TB, TC, TE, TE, TC, TB, TD, TC, TB, _, _, _],
  [_, TC, TG, TF, TD, TF, TC, TC, TF, TD, TF, TG, TC, _, _, _],
  [_, TB, TC, TG, TF, TG, TD, TD, TG, TF, TG, TC, TB, _, _, _],
  [_, _, TC, TF, TG, TW, TW, TW, TW, TG, TF, TC, _, _, _, _],
  [_, _, _, TB, TC, TD, TD, TD, TD, TC, TB, _, _, _, _, _],
  [_, _, _, _, TA, TB, TB, TB, TB, TA, _, _, _, _, _, _],
]

// ─────────────────────────────────────────────────────────────────────────────
// CAT_WHITE_SPRITE — sitting upright, facing forward, blue eyes, cool shadows
// ─────────────────────────────────────────────────────────────────────────────
export const CAT_WHITE_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, WB, WA, _, _, _, WA, WB, _, _, _, _, _],
  [_, _, _, WB, WI, WC, WD, WD, WC, WI, WB, _, _, _, _, _],
  [_, _, WC, WD, WE, WD, WC, WC, WD, WE, WD, WC, _, _, _, _],
  [_, _, WD, WF, WE, WF, WD, WD, WF, WE, WF, WD, _, _, _, _],
  [_, _, WC, WA, WW, WY, WP, WP, WY, WW, WA, WC, _, _, _, _],
  [_, _, WD, WE, WW, WW, WN, WN, WW, WW, WE, WD, _, _, _, _],
  [_, _, WA, WC, WF, WW, WW, WW, WW, WF, WC, WA, _, _, _, _],
  [_, WA, WC, WD, WE, WD, WC, WC, WD, WE, WD, WC, WA, _, _, _],
  [_, WC, WD, WE, WF, WE, WD, WD, WE, WF, WE, WD, WC, _, _, _],
  [_, WB, WD, WE, WC, WD, WE, WE, WD, WC, WE, WD, WB, _, _, _],
  [_, WC, WE, WF, WE, WF, WD, WD, WF, WE, WF, WE, WC, _, _, _],
  [_, WA, WC, WE, WF, WE, WD, WD, WE, WF, WE, WC, WA, _, _, _],
  [_, _, WC, WE, WF, WW, WW, WW, WW, WF, WE, WC, _, _, _, _],
  [_, _, _, WB, WC, WD, WD, WD, WD, WC, WB, _, _, _, _, _],
  [_, _, _, _, WA, WB, WB, WB, WB, WA, _, _, _, _, _, _],
]

// ─────────────────────────────────────────────────────────────────────────────
// CAT_ON_DESK_SPRITE — compact loaf pose orange tabby for desk placement
// ─────────────────────────────────────────────────────────────────────────────
export const CAT_ON_DESK_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, OB, OA, OA, OB, _, _, _, _, _, _, _],
  [_, _, _, _, OB, OI, OC, OC, OI, OB, _, _, _, _, _, _],
  [_, _, _, OB, OD, OE, OD, OD, OE, OD, OB, _, _, _, _, _],
  [_, _, _, OC, OB, OW, OY, OY, OW, OB, OC, _, _, _, _, _],
  [_, _, OB, OD, OE, OW, ON, ON, OW, OE, OD, OB, _, _, _, _],
  [_, _, OC, OE, OG, OW, OW, OW, OW, OG, OE, OC, _, _, _, _],
  [_, _, OD, OF, OE, OD, OC, OC, OD, OE, OF, OD, _, _, _, _],
  [_, OB, OC, OE, OD, OE, OD, OD, OE, OD, OE, OC, OB, _, _, _],
  [_, OD, OE, OF, OE, OF, OE, OE, OF, OE, OF, OE, OD, _, _, _],
  [_, OC, OD, OE, OD, OE, OD, OD, OE, OD, OE, OD, OC, _, _, _],
  [_, OD, OE, OD, OC, OG, OG, OG, OG, OC, OD, OE, OD, _, _, _],
  [_, OB, OC, OD, OG, OG, OG, OG, OG, OG, OD, OC, OB, _, _, _],
  [_, _, OB, OG, OG, OG, OG, OG, OG, OG, OG, OB, _, _, _, _],
  [_, _, _, OA, OB, OB, OB, OB, OB, OB, OA, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ─────────────────────────────────────────────────────────────────────────────
// Directional walk sprites for wandering cats
// DOWN = facing viewer, UP = walking away, RIGHT = side profile
// LEFT direction is handled at runtime by horizontally flipping RIGHT sprite
// ─────────────────────────────────────────────────────────────────────────────

// ── ORANGE cat directional sprites ───────────────────────────────────────────

export const CAT_ORANGE_DOWN_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, OB, OA, _, _, _, _, OA, OB, _, _, _, _, _],
  [_, _, OB, OI, OC, OB, _, _, OB, OC, OI, OB, _, _, _, _],
  [_, _, OC, OD, OE, OD, OC, OC, OD, OE, OD, OC, _, _, _, _],
  [_, OB, OD, OE, OF, OE, OD, OD, OE, OF, OE, OD, OB, _, _, _],
  [_, OC, OE, OB, OW, OY, OP, OP, OY, OW, OB, OE, OC, _, _, _],
  [_, OD, OE, OD, OW, OW, ON, ON, OW, OW, OD, OE, OD, _, _, _],
  [_, _, OC, OE, OG, OW, OW, OW, OW, OG, OE, OC, _, _, _, _],
  [_, OB, OD, OE, OD, OC, OB, OB, OC, OD, OE, OD, OB, _, _, _],
  [_, OD, OE, OF, OE, OD, OE, OE, OD, OE, OF, OE, OD, _, _, _],
  [_, OC, OD, OE, OD, OE, OD, OD, OE, OD, OE, OD, OC, _, _, _],
  [_, _, OC, OE, OD, OE, OC, OC, OE, OD, OE, OC, _, _, _, _],
  [_, _, OB, OD, OE, OG, OG, OG, OG, OE, OD, OB, _, _, _, _],
  [_, _, OC, OG, OG, _, _, _, _, OG, OG, OC, _, _, _, _],
  [_, _, OD, OC, _, _, _, _, _, _, OC, OD, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_ORANGE_UP_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, OB, OA, _, _, _, _, OA, OB, _, _, _, _, _],
  [_, _, OB, OC, OD, OB, _, _, OB, OD, OC, OB, _, _, _, _],
  [_, _, OC, OD, OE, OD, OC, OC, OD, OE, OD, OC, _, _, _, _],
  [_, OB, OD, OE, OF, OE, OD, OD, OE, OF, OE, OD, OB, _, _, _],
  [_, OC, OE, OD, OB, OD, OE, OE, OD, OB, OD, OE, OC, _, _, _],
  [_, OD, OF, OE, OD, OC, OB, OB, OC, OD, OE, OF, OD, _, _, _],
  [_, _, OC, OE, OD, OE, OD, OD, OE, OD, OE, OC, _, _, _, _],
  [_, OB, OD, OE, OD, OC, OB, OB, OC, OD, OE, OD, OB, _, _, _],
  [_, OD, OE, OF, OE, OD, OE, OE, OD, OE, OF, OE, OD, _, _, _],
  [_, OC, OD, OE, OD, OE, OD, OD, OE, OD, OE, OD, OC, _, _, _],
  [_, _, OC, OE, OD, OE, OC, OC, OE, OD, OE, OC, _, _, _, _],
  [_, _, OB, OD, OE, OG, OG, OG, OG, OE, OD, OB, _, _, _, _],
  [_, _, OC, OG, OG, _, _, _, _, OG, OG, OC, _, _, _, _],
  [_, _, OD, OC, _, _, _, _, _, _, OC, OD, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_ORANGE_RIGHT_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, OA, OB, OA, _, _, _, _, _, _, _, _, _],
  [_, _, _, OA, OI, OC, OD, OB, _, _, _, _, _, _, _, _],
  [_, _, OB, OC, OD, OE, OD, OC, OB, _, _, _, _, _, _, _],
  [_, _, OC, OD, OE, OF, OE, OY, OW, OB, _, _, _, _, _, _],
  [_, OA, OD, OE, OF, OE, OD, ON, OW, OG, OA, _, _, _, _, _],
  [_, OB, OC, OE, OD, OE, OD, OC, OG, OW, OC, OB, _, _, _, _],
  [_, OC, OD, OE, OC, OD, OE, OD, OC, OE, OD, OC, _, _, _, _],
  [_, OD, OE, OF, OE, OD, OE, OD, OE, OD, OE, OD, _, _, _, _],
  [_, OC, OD, OE, OD, OE, OD, OE, OD, OE, OD, OC, _, _, _, _],
  [_, OB, OC, OD, OE, OD, OE, OD, OC, OD, OB, _, _, _, _, _],
  [_, _, OB, OC, OD, OE, OD, OC, OB, _, _, _, _, _, _, _],
  [_, _, _, OB, OG, OG, OG, OB, _, _, _, _, _, _, _, _],
  [_, _, OB, OG, OG, _, OA, OG, OB, _, _, _, _, _, _, _],
  [_, _, OD, OC, _, _, _, OC, OD, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── BLACK cat directional sprites ────────────────────────────────────────────

export const CAT_BLACK_DOWN_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, BA, BB, _, _, _, _, BB, BA, _, _, _, _, _],
  [_, _, BA, BI, BC, BA, _, _, BA, BC, BI, BA, _, _, _, _],
  [_, _, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, _, _, _, _],
  [_, BA, BC, BD, BE, BD, BC, BC, BD, BE, BD, BC, BA, _, _, _],
  [_, BB, BD, BA, BW, BY, BP, BP, BY, BW, BA, BD, BB, _, _, _],
  [_, BC, BD, BC, BW, BW, BN, BN, BW, BW, BC, BD, BC, _, _, _],
  [_, _, BB, BC, BW, BK, BW, BW, BK, BW, BC, BB, _, _, _, _],
  [_, BA, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, BA, _, _, _],
  [_, BB, BC, BD, BE, BD, BC, BC, BD, BE, BD, BC, BB, _, _, _],
  [_, BA, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, BA, _, _, _],
  [_, _, BB, BC, BD, BE, BD, BD, BE, BD, BC, BB, _, _, _, _],
  [_, _, BA, BB, BC, BD, BC, BC, BD, BC, BB, BA, _, _, _, _],
  [_, _, BB, BC, BB, _, _, _, _, BB, BC, BB, _, _, _, _],
  [_, _, BA, BB, _, _, _, _, _, _, BB, BA, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_BLACK_UP_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, BA, BB, _, _, _, _, BB, BA, _, _, _, _, _],
  [_, _, BA, BB, BC, BA, _, _, BA, BC, BB, BA, _, _, _, _],
  [_, _, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, _, _, _, _],
  [_, BA, BC, BD, BE, BD, BC, BC, BD, BE, BD, BC, BA, _, _, _],
  [_, BB, BD, BC, BB, BC, BD, BD, BC, BB, BC, BD, BB, _, _, _],
  [_, BC, BE, BD, BC, BB, BC, BC, BB, BC, BD, BE, BC, _, _, _],
  [_, _, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, _, _, _, _],
  [_, BA, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, BA, _, _, _],
  [_, BB, BC, BD, BE, BD, BC, BC, BD, BE, BD, BC, BB, _, _, _],
  [_, BA, BB, BC, BD, BC, BB, BB, BC, BD, BC, BB, BA, _, _, _],
  [_, _, BB, BC, BD, BE, BD, BD, BE, BD, BC, BB, _, _, _, _],
  [_, _, BA, BB, BC, BD, BC, BC, BD, BC, BB, BA, _, _, _, _],
  [_, _, BB, BC, BB, _, _, _, _, BB, BC, BB, _, _, _, _],
  [_, _, BA, BB, _, _, _, _, _, _, BB, BA, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_BLACK_RIGHT_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, BA, BB, BA, _, _, _, _, _, _, _, _, _],
  [_, _, _, BA, BI, BC, BD, BB, _, _, _, _, _, _, _, _],
  [_, _, BA, BB, BC, BD, BC, BB, BA, _, _, _, _, _, _, _],
  [_, _, BB, BC, BD, BE, BD, BY, BW, BA, _, _, _, _, _, _],
  [_, BA, BC, BD, BE, BD, BC, BN, BW, BK, BA, _, _, _, _, _],
  [_, BB, BC, BD, BC, BD, BC, BB, BW, BW, BB, BA, _, _, _, _],
  [_, BC, BD, BE, BD, BC, BD, BC, BB, BC, BD, BC, _, _, _, _],
  [_, BD, BE, BD, BE, BD, BE, BD, BC, BD, BE, BD, _, _, _, _],
  [_, BC, BD, BE, BD, BE, BD, BE, BD, BC, BD, BC, _, _, _, _],
  [_, BB, BC, BD, BE, BD, BC, BD, BC, BB, BC, _, _, _, _, _],
  [_, _, BB, BC, BD, BC, BB, BC, BB, _, _, _, _, _, _, _],
  [_, _, _, BB, BW, BW, BW, BB, _, _, _, _, _, _, _, _],
  [_, _, BA, BW, BW, _, BA, BW, BA, _, _, _, _, _, _, _],
  [_, _, BB, BA, _, _, _, BA, BB, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── TABBY cat directional sprites ────────────────────────────────────────────

export const CAT_TABBY_DOWN_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, TB, TA, _, _, _, _, TA, TB, _, _, _, _, _],
  [_, _, TB, TI, TC, TB, _, _, TB, TC, TI, TB, _, _, _, _],
  [_, _, TC, TD, TE, TD, TC, TC, TD, TE, TD, TC, _, _, _, _],
  [_, TB, TD, TE, TF, TE, TD, TD, TE, TF, TE, TD, TB, _, _, _],
  [_, TC, TE, TB, TW, TY, TP, TP, TY, TW, TB, TE, TC, _, _, _],
  [_, TD, TE, TD, TW, TW, TN, TN, TW, TW, TD, TE, TD, _, _, _],
  [_, _, TC, TE, TG, TW, TW, TW, TW, TG, TE, TC, _, _, _, _],
  [_, TB, TC, TD, TE, TC, TB, TB, TC, TE, TD, TC, TB, _, _, _],
  [_, TC, TD, TE, TF, TE, TD, TD, TE, TF, TE, TD, TC, _, _, _],
  [_, TB, TC, TD, TC, TE, TG, TG, TE, TC, TD, TC, TB, _, _, _],
  [_, _, TC, TE, TD, TF, TC, TC, TF, TD, TE, TC, _, _, _, _],
  [_, _, TB, TC, TE, TG, TG, TG, TG, TE, TC, TB, _, _, _, _],
  [_, _, TC, TG, TG, _, _, _, _, TG, TG, TC, _, _, _, _],
  [_, _, TD, TC, _, _, _, _, _, _, TC, TD, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_TABBY_UP_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, TB, TA, _, _, _, _, TA, TB, _, _, _, _, _],
  [_, _, TB, TC, TD, TB, _, _, TB, TD, TC, TB, _, _, _, _],
  [_, _, TC, TD, TE, TD, TC, TC, TD, TE, TD, TC, _, _, _, _],
  [_, TB, TD, TE, TF, TE, TD, TD, TE, TF, TE, TD, TB, _, _, _],
  [_, TC, TE, TD, TB, TD, TE, TE, TD, TB, TD, TE, TC, _, _, _],
  [_, TD, TF, TE, TD, TC, TB, TB, TC, TD, TE, TF, TD, _, _, _],
  [_, _, TC, TE, TD, TE, TD, TD, TE, TD, TE, TC, _, _, _, _],
  [_, TB, TC, TD, TE, TC, TB, TB, TC, TE, TD, TC, TB, _, _, _],
  [_, TC, TD, TE, TF, TE, TD, TD, TE, TF, TE, TD, TC, _, _, _],
  [_, TB, TC, TD, TC, TE, TG, TG, TE, TC, TD, TC, TB, _, _, _],
  [_, _, TC, TE, TD, TF, TC, TC, TF, TD, TE, TC, _, _, _, _],
  [_, _, TB, TC, TE, TG, TG, TG, TG, TE, TC, TB, _, _, _, _],
  [_, _, TC, TG, TG, _, _, _, _, TG, TG, TC, _, _, _, _],
  [_, _, TD, TC, _, _, _, _, _, _, TC, TD, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_TABBY_RIGHT_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, TA, TB, TA, _, _, _, _, _, _, _, _, _],
  [_, _, _, TA, TI, TC, TD, TB, _, _, _, _, _, _, _, _],
  [_, _, TA, TB, TC, TD, TC, TB, TA, _, _, _, _, _, _, _],
  [_, _, TB, TC, TD, TE, TD, TY, TW, TA, _, _, _, _, _, _],
  [_, TA, TC, TD, TE, TF, TE, TN, TW, TG, TA, _, _, _, _, _],
  [_, TB, TC, TE, TD, TE, TD, TC, TG, TW, TC, TB, _, _, _, _],
  [_, TC, TD, TE, TC, TD, TE, TD, TC, TE, TD, TC, _, _, _, _],
  [_, TD, TE, TF, TE, TD, TE, TD, TE, TD, TE, TD, _, _, _, _],
  [_, TC, TD, TE, TD, TE, TD, TE, TD, TE, TD, TC, _, _, _, _],
  [_, TB, TC, TD, TE, TD, TE, TD, TC, TD, TB, _, _, _, _, _],
  [_, _, TB, TC, TD, TE, TD, TC, TB, _, _, _, _, _, _, _],
  [_, _, _, TB, TG, TG, TG, TB, _, _, _, _, _, _, _, _],
  [_, _, TB, TG, TG, _, TA, TG, TB, _, _, _, _, _, _, _],
  [_, _, TC, TB, _, _, _, TB, TC, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ── WHITE cat directional sprites ────────────────────────────────────────────

export const CAT_WHITE_DOWN_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, WB, WA, _, _, _, _, WA, WB, _, _, _, _, _],
  [_, _, WB, WI, WC, WB, _, _, WB, WC, WI, WB, _, _, _, _],
  [_, _, WC, WD, WE, WD, WC, WC, WD, WE, WD, WC, _, _, _, _],
  [_, WB, WD, WE, WF, WE, WD, WD, WE, WF, WE, WD, WB, _, _, _],
  [_, WC, WE, WA, WW, WY, WP, WP, WY, WW, WA, WE, WC, _, _, _],
  [_, WD, WE, WD, WW, WW, WN, WN, WW, WW, WD, WE, WD, _, _, _],
  [_, _, WC, WE, WF, WW, WW, WW, WW, WF, WE, WC, _, _, _, _],
  [_, WB, WC, WD, WE, WD, WC, WC, WD, WE, WD, WC, WB, _, _, _],
  [_, WC, WD, WE, WF, WE, WD, WD, WE, WF, WE, WD, WC, _, _, _],
  [_, WB, WC, WD, WC, WE, WF, WF, WE, WC, WD, WC, WB, _, _, _],
  [_, _, WC, WE, WD, WF, WC, WC, WF, WD, WE, WC, _, _, _, _],
  [_, _, WB, WC, WE, WF, WF, WF, WF, WE, WC, WB, _, _, _, _],
  [_, _, WC, WF, WF, _, _, _, _, WF, WF, WC, _, _, _, _],
  [_, _, WD, WC, _, _, _, _, _, _, WC, WD, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_WHITE_UP_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, WB, WA, _, _, _, _, WA, WB, _, _, _, _, _],
  [_, _, WB, WC, WD, WB, _, _, WB, WD, WC, WB, _, _, _, _],
  [_, _, WC, WD, WE, WD, WC, WC, WD, WE, WD, WC, _, _, _, _],
  [_, WB, WD, WE, WF, WE, WD, WD, WE, WF, WE, WD, WB, _, _, _],
  [_, WC, WE, WD, WA, WD, WE, WE, WD, WA, WD, WE, WC, _, _, _],
  [_, WD, WF, WE, WD, WC, WA, WA, WC, WD, WE, WF, WD, _, _, _],
  [_, _, WC, WE, WD, WE, WD, WD, WE, WD, WE, WC, _, _, _, _],
  [_, WB, WC, WD, WE, WD, WC, WC, WD, WE, WD, WC, WB, _, _, _],
  [_, WC, WD, WE, WF, WE, WD, WD, WE, WF, WE, WD, WC, _, _, _],
  [_, WB, WC, WD, WC, WE, WF, WF, WE, WC, WD, WC, WB, _, _, _],
  [_, _, WC, WE, WD, WF, WC, WC, WF, WD, WE, WC, _, _, _, _],
  [_, _, WB, WC, WE, WF, WF, WF, WF, WE, WC, WB, _, _, _, _],
  [_, _, WC, WF, WF, _, _, _, _, WF, WF, WC, _, _, _, _],
  [_, _, WD, WC, _, _, _, _, _, _, WC, WD, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

export const CAT_WHITE_RIGHT_SPRITE: SpriteData = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, WA, WB, WA, _, _, _, _, _, _, _, _, _],
  [_, _, _, WA, WI, WC, WD, WB, _, _, _, _, _, _, _, _],
  [_, _, WA, WB, WC, WD, WC, WB, WA, _, _, _, _, _, _, _],
  [_, _, WB, WC, WD, WE, WD, WY, WW, WA, _, _, _, _, _, _],
  [_, WA, WC, WD, WE, WF, WE, WN, WW, WW, WA, _, _, _, _, _],
  [_, WB, WC, WE, WD, WE, WD, WC, WW, WW, WB, WA, _, _, _, _],
  [_, WC, WD, WE, WC, WD, WE, WD, WC, WE, WD, WC, _, _, _, _],
  [_, WD, WE, WF, WE, WD, WE, WD, WE, WD, WE, WD, _, _, _, _],
  [_, WC, WD, WE, WD, WE, WD, WE, WD, WE, WD, WC, _, _, _, _],
  [_, WB, WC, WD, WE, WD, WE, WD, WC, WD, WB, _, _, _, _, _],
  [_, _, WB, WC, WD, WE, WD, WC, WB, _, _, _, _, _, _, _],
  [_, _, _, WB, WF, WF, WF, WB, _, _, _, _, _, _, _, _],
  [_, _, WA, WF, WF, _, WA, WF, WA, _, _, _, _, _, _, _],
  [_, _, WC, WA, _, _, _, WA, WC, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
]

// ─────────────────────────────────────────────────────────────────────────────
// getCatSprite — pick the right directional sprite for the cat's current state
// ─────────────────────────────────────────────────────────────────────────────
import { Direction, CharacterState } from '../types.js'
import type { Character } from '../types.js'

/** Get the appropriate cat sprite for current state/direction/frame */
export function getCatSprite(ch: Character): SpriteData {
  const skin = ch.catSkin ?? 'orange'
  const dir = ch.dir

  // For idle state, use the original static sprite (curled/sitting pose)
  if (ch.state === CharacterState.IDLE || ch.state === CharacterState.TYPE) {
    switch (skin) {
      case 'black': return CAT_BLACK_SPRITE
      case 'tabby': return CAT_TABBY_SPRITE
      case 'white': return CAT_WHITE_SPRITE
      default:      return CAT_ORANGE_SPRITE
    }
  }

  // For walk state, use directional sprites
  switch (skin) {
    case 'black':
      if (dir === Direction.UP)    return CAT_BLACK_UP_SPRITE
      if (dir === Direction.DOWN)  return CAT_BLACK_DOWN_SPRITE
      return CAT_BLACK_RIGHT_SPRITE // RIGHT and LEFT (renderer flips LEFT)
    case 'tabby':
      if (dir === Direction.UP)    return CAT_TABBY_UP_SPRITE
      if (dir === Direction.DOWN)  return CAT_TABBY_DOWN_SPRITE
      return CAT_TABBY_RIGHT_SPRITE
    case 'white':
      if (dir === Direction.UP)    return CAT_WHITE_UP_SPRITE
      if (dir === Direction.DOWN)  return CAT_WHITE_DOWN_SPRITE
      return CAT_WHITE_RIGHT_SPRITE
    default: // orange
      if (dir === Direction.UP)    return CAT_ORANGE_UP_SPRITE
      if (dir === Direction.DOWN)  return CAT_ORANGE_DOWN_SPRITE
      return CAT_ORANGE_RIGHT_SPRITE
  }
}
