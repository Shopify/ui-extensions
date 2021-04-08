import {ExtensionPoint, ExtensionApi} from '../extension-points';

export type ExtensionData<T extends ExtensionPoint> = ExtensionApi[T]['data'];

export interface DataApi<T extends ExtensionPoint> {
  data: ExtensionData<T>;
}

export function isDataApi(api: any): api is DataApi<any> {
  return 'data' in api;
}
