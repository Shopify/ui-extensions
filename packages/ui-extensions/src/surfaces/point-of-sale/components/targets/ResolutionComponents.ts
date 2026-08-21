import type {StandardComponents} from './StandardComponents';

/**
 * Components available on validation resolution targets. Resolution UI renders
 * inside a POS-owned flow step, so page-level and block-level containers are
 * excluded, along with the smart-grid-only `Tile`.
 *
 * @private
 */
export type ResolutionComponents = Exclude<
  StandardComponents,
  'Page' | 'POSBlock' | 'PosBlock' | 'Tile'
>;
