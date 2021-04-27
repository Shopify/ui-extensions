import {
  isContainerApi,
  ExtensionContainer,
  ExtensionPoint,
} from '@shopify/argo-admin';

import {useExtensionApi} from './utils';

export function useContainer<T extends ExtensionPoint>() {
  const api = useExtensionApi();
  if (!isContainerApi(api)) {
    throw new Error('No container api found');
  }
  return api.container as ExtensionContainer<T>;
}

export {isContainerApi, ExtensionContainer};
