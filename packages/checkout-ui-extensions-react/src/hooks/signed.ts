import type {
  StandardApi,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

export function useApplySignedChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): StandardApi<ID>['applySignedChange'] {
  return useExtensionApi<ID>().applySignedChange;
}
