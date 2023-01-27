import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type ProductConfigurationExtensionPoint =
  | 'Admin::Product::Configuration::Render'
  | 'Admin::Variant::Configuration::Render';

export interface ProductConfigurationExtensionApi {
  'Admin::Product::Configuration::Render': StandardApi<ProductConfigurationExtensionPoint> &
    ToastApi & {
      data: {
        // TO-DO (future): full typing for Product
        product: any;
      };
    };
  'Admin::Variant::Configuration::Render': StandardApi<ProductConfigurationExtensionPoint> &
    ToastApi & {
      data: {
        // TO-DO (future): full typing for Variant
        variant: any;
      };
    };
}

export interface ProductConfigurationExtensionPointCallback {
  'Admin::Product::Configuration::Render': RenderableExtensionCallback<
    ProductConfigurationExtensionApi['Admin::Product::Configuration::Render'],
    RemoteRoot<AllComponentsSchema>
  >;
  'Admin::Variant::Configuration::Render': RenderableExtensionCallback<
    ProductConfigurationExtensionApi['Admin::Variant::Configuration::Render'],
    RemoteRoot<AllComponentsSchema>
  >;
}
