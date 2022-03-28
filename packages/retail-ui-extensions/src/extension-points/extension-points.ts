import {StandardApi} from '../extension-api';
import {RenderExtension} from './render-extension';

type Components = typeof import('../components');
type AllComponents = Components[keyof Components];

type Tile = typeof import('../components/Tile');
type TileComponent = Tile[keyof Tile];

export interface ExtensionPoints {
  'Retail::SmartGrid::Tile': RenderExtension<
    StandardApi<'Retail::SmartGrid::Tile'>,
    TileComponent
  >;
  'Retail::SmartGrid::Modal': RenderExtension<
    StandardApi<'Retail::SmartGrid::Modal'>,
    AllComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
