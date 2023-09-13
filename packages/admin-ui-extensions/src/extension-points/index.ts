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

import {
  StoreHoursExtensionPoint,
  StoreHoursExtensionApi,
  StoreHoursExtensionPointCallback,
} from './identifiers/store_hours';

import {
  SetupGuideExtensionPoint,
  SetupGuideExtensionApi,
  SetupGuideExtensionPointCallback,
} from './identifiers/setup_guide';

import {
  RetailStoreExtensionPoint,
  RetailStoreExtensionApi,
  RetailStoreExtensionPointCallback,
} from './identifiers/retail_store';

export type {PlaygroundExtensionPoint, ProductSubscriptionExtensionPoint};
export type {StoreHoursExtensionPoint};
export type {SetupGuideExtensionPoint};
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
  | RetailStoreExtensionPoint
  | SetupGuideExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  StoreHoursExtensionApi &
  RetailStoreExtensionApi &
  SetupGuideExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  StoreHoursExtensionPointCallback &
  RetailStoreExtensionPointCallback &
  SetupGuideExtensionPointCallback;
