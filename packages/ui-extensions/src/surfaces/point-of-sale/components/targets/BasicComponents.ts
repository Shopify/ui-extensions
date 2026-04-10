import type {StandardComponents} from './StandardComponents';

/**
 * @publicDocs
 */
export type BasicComponents = Exclude<StandardComponents, 'Tile'>;
