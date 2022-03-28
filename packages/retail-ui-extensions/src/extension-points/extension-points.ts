import {StandardApi} from '../extension-api';
import {RenderExtension} from './render-extension';

type Components = typeof import('../components');
type AllComponents = Components[keyof Components];

type Tile = typeof import('../components/Tile');
type TileComponent = Tile[keyof Tile];

export interface ExtensionPoints {
  'Retail::Pos::SmartGrid::Tile': RenderExtension<
    StandardApi<'Retail::Pos::SmartGrid::Tile'>,
    TileComponent
  >;
  'Retail::Pos::SmartGrid::Modal': RenderExtension<
    StandardApi<'Retail::Pos::SmartGrid::Modal'>,
    AllComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
