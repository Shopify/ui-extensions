import type {RenderExtensionPoint, Shop} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the `Shop` where the checkout is taking place.
 */
export function useShop<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Shop {
  return useApi<ID>().shop;
}
