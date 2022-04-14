import {useContext} from 'react';
import {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/retail-ui-extensions';

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
    // Handle error
  }

  return api as ApiForRenderExtension<ID>;
}
