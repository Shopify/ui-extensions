import {BasicComponents, SmartGridComponents} from 'component-sets';
import {SmartGridApi, NavigationApi, StandardApi} from '../extension-api';
import {RenderExtension} from './render-extension';

export interface ExtensionPoints {
  'Retail::SmartGrid::Tile': RenderExtension<
    StandardApi<'Retail::SmartGrid::Tile'> & SmartGridApi,
    SmartGridComponents
  >;
  'Retail::SmartGrid::Modal': RenderExtension<
    StandardApi<'Retail::SmartGrid::Modal'> & NavigationApi,
    BasicComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
