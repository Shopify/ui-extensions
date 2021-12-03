import { useExtensionApi } from './api';
import { useSubscription } from './subscription';
/**
 * Returns the current array of `privateMetafields` applied to the checkout.
 */

export function usePrivateMetafields() {
  return useSubscription(useExtensionApi().privateMetafields);
}
/**
 * Returns a function to mutate the `privateMetafields` property of the checkout.
 */

export function useApplyPrivateMetafieldsChange() {
  return useExtensionApi().applyPrivateMetafieldChange;
}