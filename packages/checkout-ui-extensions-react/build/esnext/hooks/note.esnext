import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the proposed `note` applied to the checkout.
 */

export function useNote() {
  return useSubscription(useExtensionApi().note);
}