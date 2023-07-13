import {
  Capability,
  RenderExtensionPoint,
} from '@shopify/customer-account-ui-extensions';
import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns a list of an extension's granted capabilities.
 */
export function useExtensionCapabilities<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Capability[] {
  return useSubscription(useApi<ID>().extension.capabilities);
}

/**
 * Returns whether or not a given capability of an extension is granted.
 */
export function useExtensionCapability(capability: Capability): boolean {
  return useExtensionCapabilities().includes(capability);
}
