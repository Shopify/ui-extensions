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
  FulfillmentCardTimelineExtensionPoint,
  FulfillmentCardTimelineApi,
  FulfillmentCardTimelineExtensionPointCallback,
} from './identifiers/fulfillmentcard_timeline';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  FulfillmentCardTimelineExtensionPoint,
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
  | FulfillmentCardTimelineExtensionPoint
  | ProductSubscriptionExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  FulfillmentCardTimelineApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  FulfillmentCardTimelineExtensionPointCallback;
