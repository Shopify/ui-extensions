import {useContext} from 'react';

import {
  RenderExtensionPoints,
  InputForRenderExtension,
} from '../../extension-points';

import {ExtensionInputContext} from './context';

export function useExtensionInput<
  ID extends RenderExtensionPoints = RenderExtensionPoints
>(): InputForRenderExtension<ID> {
  const input = useContext(ExtensionInputContext);

  if (input == null) {
    throw new Error(
      'You can only call this hook when running as an Argo extension.',
    );
  }

  return input as any;
}
