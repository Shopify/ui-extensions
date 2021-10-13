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
  InventoryForecastingExtensionPoint,
  InventoryForecastingExtensionApi,
  InventoryForecastingExtensionPointCallback,
} from './identifiers/inventory_forecasting';

export type {PlaygroundExtensionPoint, ProductSubscriptionExtensionPoint};

export {InventoryForecastingExtensionPoint};

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
  | InventoryForecastingExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  InventoryForecastingExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  InventoryForecastingExtensionPointCallback;
