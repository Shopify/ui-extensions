import {
  Market,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the market of the checkout, and automatically re-renders
 * your component if it changes.
 */
export function useLocalizationMarket<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Market | undefined {
  const {localization} = useApi<Target>();

  return useSubscription(localization.market);
}
