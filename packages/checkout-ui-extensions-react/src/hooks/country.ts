import {Country, RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the country of the checkout, and automatically re-renders
 * your component if the country changes.
 */
export function useLocalizationCountry<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Country | undefined {
  const {localization} = useApi<ID>();

  return useSubscription(localization.country);
}
