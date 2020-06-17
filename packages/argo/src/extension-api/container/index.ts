import {
  SubscriptionManagementContainer,
  SubscriptionManangementExtension,
} from './subscription-management';
import {ExtensionPoint} from '../../extension-points';

export type ExtensionContainer<
  T extends ExtensionPoint
> = T extends SubscriptionManangementExtension ? SubscriptionManagementContainer : never;

export interface ContainerApi<T extends ExtensionPoint> {
  container: ExtensionContainer<T>;
}

export function isContainerApi(api: any): api is ContainerApi<any> {
  return 'container' in api;
}
