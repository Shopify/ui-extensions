import {
  Country,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the country of the checkout, and automatically re-renders
 * your component if the country changes.
 */
export function useLocalizationCountry<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Country | undefined {
  const {localization} = useApi<Target>();

  return useSubscription(localization.country);
}
