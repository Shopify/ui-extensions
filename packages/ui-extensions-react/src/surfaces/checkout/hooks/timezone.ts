import {RenderExtensionPoint, Timezone} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the time zone of the checkout, and automatically re-renders
 * your component if the time zone changes.
 */
export function useTimezone<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Timezone {
  const {localization} = useApi<ID>();

  return useSubscription(localization.timezone);
}
