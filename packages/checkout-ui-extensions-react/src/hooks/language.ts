import {Language, RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current language of the checkout, and automatically re-renders
 * your component if the language changes.
 */
export function useLanguage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Language {
  const {localization} = useApi<ID>();

  return useSubscription(localization.language);
}
