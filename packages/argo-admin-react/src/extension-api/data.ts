import {isDataApi, ExtensionData, ExtensionPoint} from '@shopify/argo-admin';

import {useExtensionApi} from './utils';

export function useData<T extends ExtensionPoint>() {
  const api = useExtensionApi();
  if (!isDataApi(api)) {
    throw new Error('No data api found');
  }
  return api.data as ExtensionData<T>;
}

export {isDataApi, ExtensionData};
