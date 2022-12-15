import type {RenderExtensionPoint} from '@shopify/ui-extensions/checkout';

import {useExtensionApi} from './api';

/**
 * Returns the `Shop` where the checkout is taking place.
 */
export function useShop<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  return useExtensionApi<ID>().shop;
}
