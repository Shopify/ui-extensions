import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the customer account associated to the buyer.
 */

export function useCustomerAccount() {
  return useSubscription(useExtensionApi().customerAccount);
}