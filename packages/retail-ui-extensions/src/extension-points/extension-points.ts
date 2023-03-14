import {BasicComponents, SmartGridComponents} from 'component-sets';
import {SmartGridModalApi, SmartGridTileApi} from 'extension-api/standard-api';
import {RenderExtension} from './render-extension';

export interface ExtensionPoints {
  'pos.home.tile.render': RenderExtension<
    SmartGridTileApi,
    SmartGridComponents
  >;
  'pos.home.modal.render': RenderExtension<SmartGridModalApi, BasicComponents>;
}

export type ExtensionPoint = keyof ExtensionPoints;
