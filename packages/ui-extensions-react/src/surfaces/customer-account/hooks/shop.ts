import type {
  RenderExtensionTarget,
  Shop,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';

/**
 * Returns the `Shop` where the checkout is taking place.
 */
export function useShop<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Shop {
  return useApi<Target>().shop;
}
