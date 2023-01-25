import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type BundlesExtensionPoint = 'Admin::Product::Bundles::Render';

export interface BundlesExtensionApi {
  'Admin::Product::Bundles::Render': StandardApi<BundlesExtensionPoint> &
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

export interface BundlesExtensionPointCallback {
  'Admin::Product::Bundles::Render': RenderableExtensionCallback<
    BundlesExtensionApi['Admin::Product::Bundles::Render'],
    RemoteRoot<AllComponentsSchema>
  >;
}
