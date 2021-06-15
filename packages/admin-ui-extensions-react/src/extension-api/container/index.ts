import {
  isContainerApi,
  ExtensionContainer,
} from '@shopify/admin-ui-extensions/extension-api';
import {ExtensionPoint} from '@shopify/admin-ui-extensions/extension-points';

import {useExtensionApi} from '../utils';

export function useContainer<T extends ExtensionPoint>() {
  const api = useExtensionApi();
  if (!isContainerApi(api)) {
    throw new Error('No container api found');
  }
  return api.container as ExtensionContainer<T>;
}
