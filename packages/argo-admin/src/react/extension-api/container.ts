import {isContainerApi} from '../../extension-api';
import {useExtensionApi} from './utils';

export function useContainer() {
  const api = useExtensionApi();
  if (!isContainerApi(api)) {
    throw new Error('No container api found');
  }
  return api.container;
}
