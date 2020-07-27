import {isContainerApi, ExtensionContainer} from '../../extension-api';
import {ExtensionPoint} from '../../extension-points';
import {useExtensionApi} from './utils';

export function useContainer<T extends ExtensionPoint>() {
  const api = useExtensionApi();
  if (!isContainerApi(api)) {
    throw new Error('No container api found');
  }
  return api.container as ExtensionContainer<T>;
}
