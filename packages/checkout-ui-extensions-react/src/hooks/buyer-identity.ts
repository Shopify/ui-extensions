import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the account belonging to the customer.
 *
 * The value is `undefined` if the customer doesn’t have
 * an account or if they aren’t logged in.
 */
export function useCustomer<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().buyerIdentity.customer);
}
