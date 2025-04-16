import type {RenderOrderStatusExtensionTarget} from '../extension-targets';
import type {Market} from '../api';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from './errors';

/**
 * Returns the market of the checkout, and automatically re-renders
 * your component if it changes.
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
