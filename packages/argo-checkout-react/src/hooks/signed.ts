import type {RenderExtensionPoint} from '@shopify/argo-checkout';

import {useExtensionApi} from './api';

export function useApplySignedChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().applySignedChange;
}
