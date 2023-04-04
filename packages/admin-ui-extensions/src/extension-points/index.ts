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
  ProductConfigurationExtensionPoint,
  ProductConfigurationExtensionApi,
  ProductConfigurationExtensionPointCallback,
} from './identifiers/product_configuration';

import {
  OrderRoutingExtensionPoint,
  OrderRoutingExtensionPointCallback,
  OrderRoutingExtensionApi,
} from './identifiers/order_routing';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  ProductConfigurationExtensionPoint,
  OrderRoutingExtensionPoint,
};

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
  | ProductConfigurationExtensionPoint
  | OrderRoutingExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  ProductConfigurationExtensionApi &
  OrderRoutingExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  ProductConfigurationExtensionPointCallback &
  OrderRoutingExtensionPointCallback;
