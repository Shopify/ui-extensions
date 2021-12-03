import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the running total calculated at the current step.
 */

export function useRunningTotal() {
  return useSubscription(useExtensionApi().runningTotal);
}