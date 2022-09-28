import {createContext, useContext} from 'react';
import {ExtensionApi} from '@shopify/retail-ui-extensions';

export const ExtensionApiContext = createContext<
  ExtensionApi[keyof ExtensionApi] | null
>(null);

export function useExtensionApi() {
  const api = useContext(ExtensionApiContext);

  if (api === null) {
    throw new Error('No extension api found');
  }

  return api;
}
