import {ExtensionPoint} from '../../extension-point';

import {SubscriptionManagementData} from './subscription-management';

export {SubscriptionManagementActions} from './subscription-management';

export type ExtensionData<T extends ExtensionPoint> = SubscriptionManagementData.DataOf<T>;

export interface DataApi<T extends ExtensionPoint> {
  data: ExtensionData<T>;
}

export function isDataApi(api: any): api is DataApi<any> {
  return 'data' in api;
}
