import type { CatalogEntryWithCategory } from './furnitureCatalog.js'
import {
  WORK_DESK_SPRITE,
  WORK_DESK_B_SPRITE,
  WORK_DESK_C_SPRITE,
  COFFEE_DESK_SPRITE,
  SMALL_DESK_A_SPRITE,
  SMALL_DESK_B_SPRITE,
  SMALL_DESK_C_SPRITE,
  MEETING_DESK_A_SPRITE,
  MEETING_DESK_B_SPRITE,
  CS_DESK_A_SPRITE,
  CS_DESK_B_SPRITE,
  CS_DESK_C_SPRITE,
} from '../sprites/spriteData-desks.js'

export const DESK_CATALOG_ENTRIES: CatalogEntryWithCategory[] = [
  { type: 'work_desk',      label: 'Work Desk',          footprintW: 2, footprintH: 1, sprite: WORK_DESK_SPRITE,      isDesk: true, category: 'desks' },
  { type: 'work_desk_b',    label: 'Work Desk B',         footprintW: 2, footprintH: 1, sprite: WORK_DESK_B_SPRITE,    isDesk: true, category: 'desks' },
  { type: 'work_desk_c',    label: 'Corner Desk',         footprintW: 2, footprintH: 2, sprite: WORK_DESK_C_SPRITE,    isDesk: true, category: 'desks' },
  { type: 'coffee_desk',    label: 'Coffee Counter',      footprintW: 2, footprintH: 1, sprite: COFFEE_DESK_SPRITE,    isDesk: true, category: 'desks' },
  { type: 'small_desk_a',   label: 'Small Desk',          footprintW: 1, footprintH: 1, sprite: SMALL_DESK_A_SPRITE,   isDesk: true, category: 'desks' },
  { type: 'small_desk_b',   label: 'Small Desk B',        footprintW: 1, footprintH: 1, sprite: SMALL_DESK_B_SPRITE,   isDesk: true, category: 'desks' },
  { type: 'small_desk_c',   label: 'Small Desk C',        footprintW: 2, footprintH: 1, sprite: SMALL_DESK_C_SPRITE,   isDesk: true, category: 'desks' },
  { type: 'meeting_desk_a', label: 'Conference Table',    footprintW: 4, footprintH: 2, sprite: MEETING_DESK_A_SPRITE, isDesk: true, category: 'desks' },
  { type: 'meeting_desk_b', label: 'Meeting Table',       footprintW: 3, footprintH: 2, sprite: MEETING_DESK_B_SPRITE, isDesk: true, category: 'desks' },
  { type: 'cs_desk_a',      label: 'Reception Desk',      footprintW: 3, footprintH: 1, sprite: CS_DESK_A_SPRITE,      isDesk: true, category: 'desks' },
  { type: 'cs_desk_b',      label: 'Service Counter',     footprintW: 3, footprintH: 2, sprite: CS_DESK_B_SPRITE,      isDesk: true, category: 'desks' },
  { type: 'cs_desk_c',      label: 'Corner Counter',      footprintW: 2, footprintH: 2, sprite: CS_DESK_C_SPRITE,      isDesk: true, category: 'desks' },
]
