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
  PurchaseOptionsExtensionPoint,
  PurchaseOptionsExtensionApi,
  PurchaseOptionsExtensionPointCallback,
} from './identifiers/purchase_options';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  PurchaseOptionsExtensionPoint,
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
  | PurchaseOptionsExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  PurchaseOptionsExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  PurchaseOptionsExtensionPointCallback;
