import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the account belonging to to the customer.
 *
 * The value is undefined if the customer doesn't have
 * an account or if they aren't logged in.
 */
export function useCustomerAccount<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useSubscription(useExtensionApi<ID>().customerAccount);
}
