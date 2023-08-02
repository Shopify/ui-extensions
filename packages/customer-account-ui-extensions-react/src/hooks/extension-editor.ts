import {RenderExtensionPoint} from '@shopify/customer-account-ui-extensions';
import type {Editor} from '@shopify/customer-account-ui-extensions';

import {useApi} from './api';

/**
 * Returns information about the editor where the extension is being rendered.
 */
export function useExtensionEditor<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Editor | undefined {
  const api = useApi<ID>();

  return api.extension.editor;
}
