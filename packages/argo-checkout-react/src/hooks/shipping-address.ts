import type {RenderExtensionPoint} from '@shopify/argo-checkout';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
export function useShippingAddress<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().shippingAddress);
}
