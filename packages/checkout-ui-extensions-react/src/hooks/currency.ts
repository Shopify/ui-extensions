import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the currency of the checkout, and automatically re-renders
 * your component if the currency changes.
 */
export function useCurrency<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ApiForRenderExtension<ID>['localization']['currency']['current'] {
  const {localization} = useExtensionApi<ID>();

  return useSubscription(localization.currency);
}
