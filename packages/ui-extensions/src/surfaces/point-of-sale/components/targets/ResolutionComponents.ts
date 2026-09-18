import type {StandardComponents} from './StandardComponents';

/**
 * Components available on validation resolution targets. Resolution UI renders
 * inside a POS-owned flow step, so page-level, block-level, smart-grid, and
 * legacy navigation components are excluded.
 *
 * @private
 */
export type ResolutionComponents = Exclude<
  StandardComponents,
  'Page' | 'POSBlock' | 'PosBlock' | 'QrCode' | 'Route' | 'Router' | 'Tile'
>;
