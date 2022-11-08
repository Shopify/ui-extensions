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
  IcbExtensionExtensionPoint,
  IcbExtensionTimelineApi,
  IcbExtensionExtensionPointCallback,
} from './identifiers/icb_extension';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  IcbExtensionExtensionPoint,
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
  | IcbExtensionExtensionPoint
  | ProductSubscriptionExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  IcbExtensionTimelineApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  IcbExtensionExtensionPointCallback;
