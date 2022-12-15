import type {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/ui-extensions/checkout';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the buyer's language, as supported by the extension.
 */
export function useExtensionLanguage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ApiForRenderExtension<ID>['localization']['extensionLanguage']['current'] {
  const {localization} = useExtensionApi<ID>();

  return useSubscription(localization.extensionLanguage);
}
