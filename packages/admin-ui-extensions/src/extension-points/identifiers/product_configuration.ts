import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type ProductConfigurationExtensionPoint =
  'Admin::Product::Configuration::Render';

export interface ProductConfigurationExtensionApi {
  'Admin::Product::Configuration::Render': StandardApi<ProductConfigurationExtensionPoint> &
    ToastApi & {
      data: {
        productId: string;
        variantId?: string;
        // TO-DO #1: type these
        // TO-DO #2: we don't need to pass the whole product, just the product/variant components, maybe options, variants, etc, and metafields.
        product: any;
        variant?: any;
      };
    };
}

export interface ProductConfigurationExtensionPointCallback {
  'Admin::Product::Configuration::Render': RenderableExtensionCallback<
    ProductConfigurationExtensionApi['Admin::Product::Configuration::Render'],
    RemoteRoot<AllComponentsSchema>
  >;
}
