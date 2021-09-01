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
  OrderTaskExtensionPoint,
  OrderTaskExtensionApi,
  OrderTaskExtensionPointCallback,
} from './identifiers/order_task';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  OrderTaskExtensionPoint,
};
// export {OrderTaskExtensionPoint};

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
  | OrderTaskExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  OrderTaskExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  OrderTaskExtensionPointCallback;
