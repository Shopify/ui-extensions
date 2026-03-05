import type {Editor} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';

/**
 * Returns information about the editor where the extension is being rendered.
 *
 * @publicDocs
 */
export function useExtensionEditor(): Editor | undefined {
  return useApi().extension.editor;
}
