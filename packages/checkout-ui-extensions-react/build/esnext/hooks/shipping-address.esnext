import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */

export function useShippingAddress() {
  return useSubscription(useExtensionApi().shippingAddress);
}