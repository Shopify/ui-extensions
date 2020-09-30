import {ExtensionPoint} from '../../extension-point';

import {ProductSubscriptionContainer} from './product-subscription';

export type {ContainerAction} from './container-action';
export type {ProductSubscriptionExtensionPoint} from './product-subscription/extension-point';

export type ExtensionContainer<T extends ExtensionPoint> = ProductSubscriptionContainer.ContainerOf<
  T
>;

export interface ContainerApi<T extends ExtensionPoint> {
  container: ExtensionContainer<T>;
}

export function isContainerApi(api: any): api is ContainerApi<any> {
  return 'container' in api;
}
