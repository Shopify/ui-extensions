import {createContext, useContext} from 'react';
import {ExtensionInput} from '@shopify/argo';

export const ExtensionInputContext = createContext<ExtensionInput[keyof ExtensionInput] | null>(
  null,
);

export function useExtensionInput() {
  const input = useContext(ExtensionInputContext);

  if (input === null) {
    throw new Error('No extension input found');
  }

  return input;
}
