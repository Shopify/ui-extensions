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

export type {
  PlaygroundExtensionPoint,
  ProductSubscriptionExtensionPoint,
  ProductConfigurationExtensionPoint,
};

import {
  CompanyLocationExtensionPoint,
  CompanyLocationExtensionApi,
  CompanyLocationExtensionPointCallback,
} from './identifiers/company_location';

export type {CompanyLocationExtensionPoint};

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
  | CompanyLocationExtensionPoint;

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi &
  ProductConfigurationExtensionApi &
  CompanyLocationExtensionApi;

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback &
  ProductConfigurationExtensionPointCallback &
  CompanyLocationExtensionPointCallback;
