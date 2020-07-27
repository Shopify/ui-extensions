import type {
  SubscriptionManagementContainer,
  SubscriptionManagementExtensionPoint,
} from './subscription-management';
import {ExtensionPoint} from '../../extension-points';

export type {ContainerAction} from './container-action';

export type ExtensionContainer<
T extends ExtensionPoint
> = SubscriptionManagementContainer.ContainerOf<T>;

export interface ContainerApi<T extends ExtensionPoint> {
  container: ExtensionContainer<T>;
}

export function isContainerApi(api: any): api is ContainerApi<any> {
  return 'container' in api;
}

export type {SubscriptionManagementExtensionPoint};
