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
  LocationDetailsExtensionPoint,
  LocationDetailsExtensionApi,
  LocationDetailsExtensionPointCallback,
} from './identifiers/location_details';

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  ProductConfigurationExtensionPoint,
  LocationDetailsExtensionPoint,
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
  | LocationDetailsExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  ProductConfigurationExtensionApi &
  LocationDetailsExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  ProductConfigurationExtensionPointCallback &
  LocationDetailsExtensionPointCallback;
