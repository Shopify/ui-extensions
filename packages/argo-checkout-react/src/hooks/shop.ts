import type {RenderExtensionPoint} from '@shopify/argo-checkout';

import {useExtensionApi} from './api';

/**
 * Returns the shop where the checkout is taking place.
 */
export function useShop<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().shop;
}
