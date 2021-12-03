import { isApiTokenApi } from '@shopify/admin-ui-extensions/extension-api';
import { useExtensionApi } from '../utils';
export function useApiToken() {
  var api = useExtensionApi();

  if (!isApiTokenApi(api)) {
    throw new Error('No apiToken api found');
  }

  return api.apiToken;
}