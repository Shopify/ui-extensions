import {isDataApi, ExtensionData} from '../../extension-api';
import {ExtensionPoint} from '../../extension-points';
import {useExtensionApi} from './utils';

export function useData<T extends ExtensionPoint>() {
  const api = useExtensionApi();
  if (!isDataApi(api)) {
    throw new Error('No data api found');
  }
  return api.data as ExtensionData<T>;
}
