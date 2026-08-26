import type {Market} from '../api/standard/standard';
import type {RenderExtensionTarget} from '../extension-targets';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the market of the checkout, carried over from the cart context.
 * In cases where multiple markets match, this returns the most narrowly
 * scoped country region market. Automatically re-renders your component
 * if it changes.
 *
 * > Caution: This hook is deprecated and will be removed in a future version of the API.
 *
 * @deprecated This hook will be removed in a future version of the API.
 * @publicDocs
 */
export function useLocalizationMarket<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Market | undefined {
  const {localization} = useApi<Target>();

  return useSubscription(localization.market);
}
