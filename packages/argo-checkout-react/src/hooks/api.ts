import {useContext} from 'react';
import {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/argo-checkout';

import {ExtensionApiContext} from '../context';

/**
 * Gives you access to the full API object that was passed in to your
 * extension when it was created.
 */
export function useExtensionApi<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): ApiForRenderExtension<ID> {
  const api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new Error(
      'You can only call this hook when running as an Argo extension.',
    );
  }

  return api as ApiForRenderExtension<ID>;
}
