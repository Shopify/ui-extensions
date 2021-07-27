import {ExtensionPoint, ExtensionApi} from '../../extension-points';

export type ExtensionData<T extends ExtensionPoint> = ExtensionApi[T]['data'];

/**
 * Extension points may provide relevant data to the extension. The type of data varies from extension point to extension point.
 */
export interface DataApi<T extends ExtensionPoint> {
  data: ExtensionData<T>;
}

export function isDataApi(api: any): api is DataApi<any> {
  return 'data' in api;
}
