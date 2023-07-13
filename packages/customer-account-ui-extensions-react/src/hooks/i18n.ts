import {
  RenderExtensionPoint,
  I18n,
} from '@shopify/customer-account-ui-extensions';
import {useApi} from './api';

/**
 Returns utilities for translating content and formatting values
    according to the current localization of the user.
 */
export function useI18n<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): I18n {
  return useApi<ID>().i18n;
}
