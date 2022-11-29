import {
  PlaygroundExtensionPoint,
  PlaygroundExtensionApi,
  PlaygroundExtensionPointCallback,
} from './identifiers/playground';

import {
  OrderDetailsExtensionPoint,
  OrderDetailsExtensionApi,
  OrderDetailsExtensionPointCallback,
} from './identifiers/order_details_ui';

import {
  DraftOrderDetailsExtensionPoint,
  DraftOrderDetailsExtensionApi,
  DraftOrderDetailsExtensionPointCallback,
} from './identifiers/draft_order_details_ui';

import {
  ProductSubscriptionExtensionPoint,
  ProductSubscriptionExtensionApi,
  ProductSubscriptionExtensionPointCallback,
} from './identifiers/product_subscription';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  OrderDetailsExtensionPoint,
  DraftOrderDetailsExtensionPoint,
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
  | OrderDetailsExtensionPoint
  | DraftOrderDetailsExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  OrderDetailsExtensionApi &
  DraftOrderDetailsExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  OrderDetailsExtensionPointCallback &
  DraftOrderDetailsExtensionPointCallback;
