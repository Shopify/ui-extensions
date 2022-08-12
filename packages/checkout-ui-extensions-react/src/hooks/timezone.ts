import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the timezone of the checkout, and automatically re-renders
 * your component if the timezone changes.
 */
export function useTimezone<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): ApiForRenderExtension<ID>['localization']['timezone']['current'] {
  const {localization} = useExtensionApi<ID>();

  return useSubscription(localization.timezone);
}
