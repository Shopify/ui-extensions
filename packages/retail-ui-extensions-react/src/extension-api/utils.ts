import {useContext} from 'react';
import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/retail-ui-extensions';
import {ExtensionApiContext} from '../context';

export function useExtensionApi<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): ApiForRenderExtension<ID> {
  const api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new Error(
      'You can only call this hook when running as a UI extension.',
    );
  }

  return api as ApiForRenderExtension<ID>;
}
