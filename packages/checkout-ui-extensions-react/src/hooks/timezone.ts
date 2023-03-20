import {RenderExtensionPoint, Timezone} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the time zone of the checkout, and automatically re-renders
 * your component if the time zone changes.
 */
export function useTimezone<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Timezone {
  const {localization} = useExtensionApi<ID>();

  return useSubscription(localization.timezone);
}
