import {createContext, useContext} from 'react';

import {InputForRenderExtension, ExtensionPoints} from '../extension-points';

export const ExtensionInputContext = createContext<InputForRenderExtension<
  keyof ExtensionPoints
> | null>(null);

export function useExtensionInput() {
  const input = useContext(ExtensionInputContext);

  if (input === null) {
    throw new Error('No extension input found');
  }

  return input;
}
