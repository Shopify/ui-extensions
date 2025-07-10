import type {StandardComponents} from './StandardComponents';

export type BasicComponents = Exclude<StandardComponents, 'Tile'>;
