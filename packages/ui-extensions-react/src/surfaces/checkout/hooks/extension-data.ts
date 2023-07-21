import type {
  Extension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtensionData<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Extension {
  return useApi<Target>().extension;
}
