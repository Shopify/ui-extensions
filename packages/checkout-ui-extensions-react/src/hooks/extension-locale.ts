import type {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

export function useExtensionLocale<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ApiForRenderExtension<ID>['i18n']['extensionLocale']['current'] {
  const {i18n} = useExtensionApi<ID>();

  return useSubscription(i18n.extensionLocale);
}
