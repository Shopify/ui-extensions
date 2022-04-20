import {StandardApi} from '../extension-api';
import {RenderExtension} from './render-extension';

type Components = typeof import('../components');
type AllComponents = Components[keyof Components];

export interface ExtensionPoints {
  'Retail::SmartGrid::Tile': RenderExtension<
    StandardApi<'Retail::SmartGrid::Tile'>,
    AllComponents
  >;
  'Retail::SmartGrid::Modal': RenderExtension<
    StandardApi<'Retail::SmartGrid::Modal'>,
    AllComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
