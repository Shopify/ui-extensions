import type {
  SubscriptionManagementContainer,
  SubscriptionManangementExtensionPoint,
} from './subscription-management';
import {ExtensionPoint} from '../../extension-points';

export type ExtensionContainer<
  T extends ExtensionPoint
> = T extends SubscriptionManangementExtensionPoint ? SubscriptionManagementContainer : never;

export interface ContainerApi<T extends ExtensionPoint> {
  container: ExtensionContainer<T>;
}

export function isContainerApi(api: any): api is ContainerApi<any> {
  return 'container' in api;
}

export type {SubscriptionManangementExtensionPoint};
