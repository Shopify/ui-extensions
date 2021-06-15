import {useContext} from 'react';
import {
  RenderExtensionPoint,
  InputForRenderExtension,
} from '@shopify/post-purchase-ui-extensions';

import {ExtensionInputContext} from '../context';

export function useExtensionInput<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(): InputForRenderExtension<ID> {
  const input = useContext(ExtensionInputContext);

  if (input == null) {
    throw new Error(
      'You can only call this hook when running as a UI extension.',
    );
  }

  return input as any;
}
