import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the proposed `billingAddress` applied to the checkout.
 */

export function useBillingAddress() {
  return useSubscription(useExtensionApi().billingAddress);
}