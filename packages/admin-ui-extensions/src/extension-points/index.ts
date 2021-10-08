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
// export {OrderTaskExtensionPoint};

import {
  OrderTaskExpandedExtensionPoint,
  OrderTaskExpandedExtensionApi,
  OrderTaskExpandedExtensionPointCallback,
} from './identifiers/order_task_expanded';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  OrderTaskExtensionPoint,
  OrderTaskExpandedExtensionPoint,
};
// export {OrderTaskExpandedExtensionPoint};

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
  | OrderTaskExtensionPoint
  | OrderTaskExpandedExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  OrderTaskExtensionApi &
  OrderTaskExpandedExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  OrderTaskExtensionPointCallback &
  OrderTaskExpandedExtensionPointCallback;
