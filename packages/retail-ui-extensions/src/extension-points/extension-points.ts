import type {BasicComponents, SmartGridComponents} from 'component-sets';
import type {SmartGridApi, StandardApi} from '../extension-api';
import type {RenderExtension} from './render-extension';

export interface ExtensionPoints {
  'Retail::SmartGrid::Tile': RenderExtension<
    StandardApi<'Retail::SmartGrid::Tile'> & SmartGridApi,
    SmartGridComponents
  >;
  'Retail::SmartGrid::Modal': RenderExtension<
    StandardApi<'Retail::SmartGrid::Modal'>,
    BasicComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
