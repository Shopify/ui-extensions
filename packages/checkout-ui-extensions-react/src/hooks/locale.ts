import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current locale of the checkout, and automatically re-renders
 * your component if the locale changes.
 */
export function useLocale<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ApiForRenderExtension<ID>['i18n']['locale']['current'] {
  const {i18n} = useExtensionApi<ID>();

  return useSubscription(i18n.locale);
}
