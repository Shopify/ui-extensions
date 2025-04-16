import type {RenderOrderStatusExtensionTarget} from '../extension-targets';
import type {Shop} from '../api';

import {useApi} from './api';
import {ExtensionHasNoFieldError} from './errors';

/**
 * Returns the `Shop` where the checkout is taking place.
 */
export function useShop<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Shop {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('shop' in api)) {
    throw new ExtensionHasNoFieldError('shop', extensionTarget);
  }

  return api.shop;
}
