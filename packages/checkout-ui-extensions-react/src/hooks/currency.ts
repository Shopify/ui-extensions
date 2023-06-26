import {Currency, RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the currency of the checkout, and automatically re-renders
 * your component if the currency changes.
 */
export function useCurrency<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Currency {
  const {localization} = useApi<ID>();

  return useSubscription(localization.currency);
}
