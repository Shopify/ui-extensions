import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `billingAddress` applied to the checkout.
 */
export function useData<
  Data extends Record<string, any> = Record<string, unknown>
>() {
  return useSubscription(useExtensionApi<RenderExtensionPoint>().data) as Data;
}
