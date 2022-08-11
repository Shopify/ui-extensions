import type {Capability} from '@shopify/checkout-ui-extensions';

import {useSubscription} from './subscription';
import {useExtensionApi} from './api';

/**
 * Returns a list of an extension's granted capabilities.
 */
export function useExtensionCapabilities() {
  return useSubscription(useExtensionApi().extension.capabilities);
}

/**
 * Returns whether or not a given capability of an extension is granted.
 */
export function useExtensionCapability(capability: Capability) {
  return useExtensionCapabilities().includes(capability);
}
