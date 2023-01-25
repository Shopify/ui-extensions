import {
  PlaygroundExtensionPoint,
  PlaygroundExtensionApi,
  PlaygroundExtensionPointCallback,
} from './identifiers/playground';

import {
  ProductSubscriptionExtensionPoint,
  ProductSubscriptionExtensionApi,
  ProductSubscriptionExtensionPointCallback,
} from './identifiers/product_subscription';

export type {PlaygroundExtensionPoint, ProductSubscriptionExtensionPoint};

import {
  StoreHoursExtensionPoint,
  StoreHoursExtensionApi,
  StoreHoursExtensionPointCallback,
} from './identifiers/store_hours';
export type {StoreHoursExtensionPoint};

import {
  RetailStoreExtensionPoint,
  RetailStoreExtensionApi,
  RetailStoreExtensionPointCallback,
} from './identifiers/retail_store';
export type {RetailStoreExtensionPoint};

/*
Placeholder for new imports
*/

export type {
  ContainerAction,
  ExtensionResult,
  RenderableExtensionCallback,
} from './types';

export type ExtensionPoint =
  | PlaygroundExtensionPoint
  | ProductSubscriptionExtensionPoint
  | StoreHoursExtensionPoint
  | RetailStoreExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  StoreHoursExtensionApi &
  RetailStoreExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  StoreHoursExtensionPointCallback &
  RetailStoreExtensionPointCallback;
