import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the proposed `custom attributes` applied to the checkout.
 */

export function useCustomAttributes() {
  return useSubscription(useExtensionApi().customAttributes);
}