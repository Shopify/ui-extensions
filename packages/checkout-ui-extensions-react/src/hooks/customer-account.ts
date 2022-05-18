import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the customer account associated to the buyer.
 */
export function useCustomerAccount<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  return useSubscription(useExtensionApi<ID>().customerAccount);
}
