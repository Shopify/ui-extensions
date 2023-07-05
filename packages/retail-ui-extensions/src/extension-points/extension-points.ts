import {BasicComponents, SmartGridComponents} from '../component-sets';
import {
  SmartGridApi,
  NavigationApi,
  StandardApi,
  ScannerApi,
  ProductSearchApi,
} from '../extension-api';
import {RenderExtension} from './render-extension';

export interface ExtensionPoints {
  'pos.home.tile.render': RenderExtension<
    StandardApi<'pos.home.tile.render'> & SmartGridApi,
    SmartGridComponents
  >;
  'pos.home.modal.render': RenderExtension<
    StandardApi<'pos.home.modal.render'> &
      NavigationApi &
      ScannerApi &
      ProductSearchApi,
    BasicComponents
  >;
  'pos.order.fulfillment-task.button.render': RenderExtension<
    StandardApi<'pos.order.fulfillment-task.button.render'>,
    BasicComponents
  >;
  'pos.order.fulfillment-task.modal.render': RenderExtension<
    StandardApi<'pos.order.fulfillment-task.modal.render'>,
    BasicComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
