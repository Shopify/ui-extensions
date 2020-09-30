import {ExtensionPoint} from '../../extension-point';

import {ProductSubscriptionData} from './product-subscription';

export {ProductSubscriptionActions} from './product-subscription';

export type ExtensionData<T extends ExtensionPoint> = ProductSubscriptionData.DataOf<T>;

export interface DataApi<T extends ExtensionPoint> {
  data: ExtensionData<T>;
}

export function isDataApi(api: any): api is DataApi<any> {
  return 'data' in api;
}
