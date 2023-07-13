import {RenderExtensionPoint} from '@shopify/customer-account-ui-extensions';
import {useApi} from './api';

/**
 * Returns a list of feature names for features enabled on a shop
 */
export function useFeatures<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): string[] {
  return useApi<ID>().features;
}

/**
 * Returns whether or not a given feature is enabled on the store.
 */
export function useFeatureEnabled(feature: string): boolean {
  return useFeatures().includes(feature);
}
