import type {
  MetafieldChange,
  MetafieldChangeResult,
} from '../api/checkout/checkout';
import type {RenderExtensionTarget} from '../extension-targets';

import {ExtensionHasNoMethodError} from './errors';
import {useApi} from './api';

/**
 * Returns a function to mutate the `metafields` property of the checkout.
 */
export function useApplyMetafieldsChange<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): (change: MetafieldChange) => Promise<MetafieldChangeResult> {
  const api = useApi<Target>();

  if ('applyMetafieldChange' in api) {
    return api.applyMetafieldChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyMetafieldChange',
    api.extension.target,
  );
}
