import {Market, RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the market of the checkout, and automatically re-renders
 * your component if it changes.
 */
export function useLocalizationMarket<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Market | undefined {
  const {localization} = useExtensionApi<ID>();

  return useSubscription(localization.market);
}
