import { isDataApi } from '@shopify/admin-ui-extensions/extension-api';
import { useExtensionApi } from '../utils';
export function useData() {
  var api = useExtensionApi();

  if (!isDataApi(api)) {
    throw new Error('No data api found');
  }

  return api.data;
}