import {Language, RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current language of the checkout, and automatically re-renders
 * your component if the language changes.
 */
export function useLanguage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Language {
  const {localization} = useExtensionApi<ID>();

  return useSubscription(localization.language);
}
