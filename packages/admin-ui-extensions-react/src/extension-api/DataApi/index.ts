import {
  isDataApi,
  ExtensionData,
} from '@shopify/admin-ui-extensions/extension-api';
import {ExtensionPoint} from '@shopify/admin-ui-extensions/extension-points';

import {useExtensionApi} from '../utils';

export function useData<T extends ExtensionPoint>() {
  const api = useExtensionApi();
  if (!isDataApi(api)) {
    throw new Error('No data api found');
  }
  return api.data as ExtensionData<T>;
}
