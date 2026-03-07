import type { CatalogEntryWithCategory } from './furnitureCatalog.js'
import {
  OFFICE_CHAIR_A_SPRITE,
  OFFICE_CHAIR_B_SPRITE,
  OFFICE_CHAIR_C_SPRITE,
  LONG_CHAIR_H1_SPRITE,
  LONG_CHAIR_H2_SPRITE,
  LONG_CHAIR_H3_SPRITE,
  LONG_CHAIR_V1_SPRITE,
  LONG_CHAIR_V2_SPRITE,
  LONG_CHAIR_V3_SPRITE,
} from '../sprites/spriteData-seating.js'

export const SEATING_CATALOG_ENTRIES: CatalogEntryWithCategory[] = [
  { type: 'office_chair_a', label: 'Office Chair',  footprintW: 1, footprintH: 1, sprite: OFFICE_CHAIR_A_SPRITE, isDesk: false, category: 'chairs' },
  { type: 'office_chair_b', label: 'Exec Chair',    footprintW: 1, footprintH: 1, sprite: OFFICE_CHAIR_B_SPRITE, isDesk: false, category: 'chairs' },
  { type: 'office_chair_c', label: 'Stool',         footprintW: 1, footprintH: 1, sprite: OFFICE_CHAIR_C_SPRITE, isDesk: false, category: 'chairs' },
  { type: 'long_chair_h1',  label: 'Sofa 2-seat',   footprintW: 2, footprintH: 1, sprite: LONG_CHAIR_H1_SPRITE,  isDesk: false, category: 'chairs' },
  { type: 'long_chair_h2',  label: 'Sofa 2-seat B', footprintW: 2, footprintH: 1, sprite: LONG_CHAIR_H2_SPRITE,  isDesk: false, category: 'chairs' },
  { type: 'long_chair_h3',  label: 'Sofa 3-seat',   footprintW: 3, footprintH: 1, sprite: LONG_CHAIR_H3_SPRITE,  isDesk: false, category: 'chairs' },
  { type: 'long_chair_v1',  label: 'Sofa Vert',     footprintW: 1, footprintH: 2, sprite: LONG_CHAIR_V1_SPRITE,  isDesk: false, category: 'chairs' },
  { type: 'long_chair_v2',  label: 'Sofa Vert B',   footprintW: 1, footprintH: 2, sprite: LONG_CHAIR_V2_SPRITE,  isDesk: false, category: 'chairs' },
  { type: 'long_chair_v3',  label: 'Sofa 3 Vert',   footprintW: 1, footprintH: 3, sprite: LONG_CHAIR_V3_SPRITE,  isDesk: false, category: 'chairs' },
]
