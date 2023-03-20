import type {RenderExtensionPoint, Shop} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

/**
 * Returns the `Shop` where the checkout is taking place.
 */
export function useShop<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Shop {
  return useExtensionApi<ID>().shop;
}
