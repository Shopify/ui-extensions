import {ExtensionPoint} from '../../extension-point';

import {SubscriptionManagementContainer} from './subscription-management';

export type {ContainerAction} from './container-action';
export type {SubscriptionManagementExtensionPoint} from './subscription-management/extension-point';

export type ExtensionContainer<
  T extends ExtensionPoint
> = SubscriptionManagementContainer.ContainerOf<T>;

export interface ContainerApi<T extends ExtensionPoint> {
  container: ExtensionContainer<T>;
}

export function isContainerApi(api: any): api is ContainerApi<any> {
  return 'container' in api;
}
