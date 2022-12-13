import {RemoteRoot} from '@remote-ui/core';
import {AllComponentsSchema} from '../containers';
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
import {RenderableExtensionCallback, StandardApi} from './types';

export type {PlaygroundExtensionPoint, ProductSubscriptionExtensionPoint};

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
  | 'Admin::ProductDetails::RenderBundleCard';

export type ExtensionApi = PlaygroundExtensionApi &
  ProductSubscriptionExtensionApi & {
    'Admin::ProductDetails::RenderBundleCard': StandardApi<
      'Admin::ProductDetails::RenderBundleCard'
    >;
  };

export type ExtensionPointCallback = PlaygroundExtensionPointCallback &
  ProductSubscriptionExtensionPointCallback & {
    'Admin::ProductDetails::RenderBundleCard': RenderableExtensionCallback<
      ExtensionApi['Admin::ProductDetails::RenderBundleCard'],
      RemoteRoot<AllComponentsSchema>
    >;
  };
