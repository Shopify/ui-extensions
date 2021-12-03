import { isContainerApi } from '@shopify/admin-ui-extensions/extension-api';
import { useExtensionApi } from '../utils';
export function useContainer() {
  var api = useExtensionApi();

  if (!isContainerApi(api)) {
    throw new Error('No container api found');
  }

  return api.container;
}