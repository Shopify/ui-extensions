import type {DeliveryGroup} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the delivery group the extension is attached to. This hook can only be used by extensions in the following
 * extension targets:
 * - purchase.checkout.shipping-option-list.render-before
 * - purchase.checkout.shipping-option-list.render-after
 */
export function useDeliveryGroupTarget(): DeliveryGroup | undefined {
  const api = useApi<
    | 'purchase.checkout.shipping-option-list.render-before'
    | 'purchase.checkout.shipping-option-list.render-after'
  >();

  return useSubscription(api.target);
}
