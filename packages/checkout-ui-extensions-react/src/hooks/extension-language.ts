import type {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

export function useExtensionLanguage<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): ApiForRenderExtension<ID>['localization']['extensionLanguage']['current'] {
  const {localization} = useExtensionApi<ID>();

  return useSubscription(localization.extensionLanguage);
}
