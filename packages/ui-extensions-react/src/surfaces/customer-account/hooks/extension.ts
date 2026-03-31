import type {Extension} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';

/**
 * Returns the metadata of the extension.
 * @publicDocs
 */
export function useExtension(): Extension {
  return useApi().extension;
}

/**
 * Returns the metadata about the extension.
 * > Caution: This is deprecated, use `useExtension()` instead.
 * @deprecated Use `useExtension()` instead.
 * @publicDocs
 */
export function useExtensionData(): Extension {
  return useExtension();
}
