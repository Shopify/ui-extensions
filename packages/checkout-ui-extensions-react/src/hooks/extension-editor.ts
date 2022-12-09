import type {Editor} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

/**
 * Returns information about the editor where the extension is being rendered.
 */
export function useExtensionEditor(): Editor | undefined {
  return useExtensionApi().extension.editor;
}
