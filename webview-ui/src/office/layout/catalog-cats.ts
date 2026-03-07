import type { CatalogEntryWithCategory } from './furnitureCatalog.js'
import {
  CAT_ORANGE_SPRITE,
  CAT_BLACK_SPRITE,
  CAT_TABBY_SPRITE,
  CAT_WHITE_SPRITE,
  CAT_ON_DESK_SPRITE,
} from '../sprites/spriteData-cats.js'

export const CAT_CATALOG_ENTRIES: CatalogEntryWithCategory[] = [
  { type: 'cat_orange',  label: 'Orange Cat',  footprintW: 1, footprintH: 1, sprite: CAT_ORANGE_SPRITE,  isDesk: false, category: 'decor' },
  { type: 'cat_black',   label: 'Black Cat',   footprintW: 1, footprintH: 1, sprite: CAT_BLACK_SPRITE,   isDesk: false, category: 'decor' },
  { type: 'cat_tabby',   label: 'Tabby Cat',   footprintW: 1, footprintH: 1, sprite: CAT_TABBY_SPRITE,   isDesk: false, category: 'decor' },
  { type: 'cat_white',   label: 'White Cat',   footprintW: 1, footprintH: 1, sprite: CAT_WHITE_SPRITE,   isDesk: false, category: 'decor' },
  { type: 'cat_on_desk', label: 'Cat on Desk', footprintW: 1, footprintH: 1, sprite: CAT_ON_DESK_SPRITE, isDesk: false, category: 'decor', canPlaceOnSurfaces: true },
]
