import {Order} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the order information that's available post-checkout.
 */
export function useOrder(): Order | undefined {
  const order = useExtensionApi().order;
  return useSubscription(order);
}
