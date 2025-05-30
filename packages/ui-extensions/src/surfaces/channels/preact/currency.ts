import type {Currency} from '../api/standard/standard';
import type {RenderExtensionTarget} from '../extension-targets';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the currency of the checkout, and automatically re-renders
 * your component if the currency changes.
 */
export function useCurrency<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Currency {
  const {localization} = useApi<Target>();

  return useSubscription(localization.currency);
}
