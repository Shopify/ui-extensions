import type {Extension} from '@shopify/checkout-ui-extensions';

import {useApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtension(): Extension {
  return useApi().extension as Extension;
}

/**
 * Returns the metadata about the extension.
 */
export function useExtensionData(): Extension {
  return useExtension();
}
