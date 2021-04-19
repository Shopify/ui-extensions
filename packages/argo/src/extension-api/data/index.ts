import {SubscriptionManagementActions, SubscriptionManagementData} from './subscription-management';
import {ExtensionPoint} from '../../extension-points';

export {SubscriptionManagementActions};

export type ExtensionData<T extends ExtensionPoint> = SubscriptionManagementData.DataOf<T>;

export interface DataApi<T extends ExtensionPoint> {
  data: ExtensionData<T>;
}

export function isDataApi(api: any): api is DataApi<any> {
  return 'data' in api;
}
