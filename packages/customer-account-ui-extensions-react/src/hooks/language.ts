import {useApi} from './api';
import {
  RenderExtensionPoint,
  Language,
} from '@shopify/customer-account-ui-extensions';
import {useSubscription} from './subscription';

/**
 * Returns the current language of the customer account hub, and automatically re-renders
 * your component if the language changes.
 */
export function useLanguage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Language {
  const {localization} = useApi<ID>();
  return useSubscription(localization.language);
}
