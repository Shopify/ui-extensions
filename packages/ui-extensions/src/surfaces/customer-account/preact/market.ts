import type {RenderOrderStatusExtensionTarget} from '../extension-targets';
import type {Market} from '../api';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from './errors';

/**
 * Returns the market associated with the order, carried over from the cart
 * context. In cases where multiple markets match, this returns the most
 * narrowly scoped country region market. Automatically re-renders your
 * component if it changes.
 *
 * > Caution: This hook is deprecated and will be removed in a future version of the API.
 *
 * @deprecated This hook will be removed in a future version of the API.
 */
export function useLocalizationMarket<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Market | undefined {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('market' in api.localization)) {
    throw new ExtensionHasNoFieldError('market', extensionTarget);
  }

  return useSubscription(api.localization.market);
}
