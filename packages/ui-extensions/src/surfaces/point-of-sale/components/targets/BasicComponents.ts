import type {StandardComponents} from './StandardComponents';

/**
 * Components available for modal extensions, providing the full set of UI components except for Tile.
 * @publicDocs
 */
export type BasicComponents = Exclude<StandardComponents, 'Tile'>;
