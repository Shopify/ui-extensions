import {RemoteRoot} from '@shopify/remote-ui-core';

import {Listeners} from './listeners';

export enum ExtensionPoint {
  AppLink = 'AppLink',
  ProductDetailsAfterVariants = 'ProductDetailsAfterVariants',
  ProductDetailsSideBar = 'ProductDetailsSideBar',
}

export interface ExtensionContext {}

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Data extends ExtensionContext, Root extends RemoteRoot> = (
  root: Root,
  data: Data,
  setEventListeners?: (listeners: Listeners) => void,
) => ExtensionResult;

export type DataTypeForExtensionCallback<T> = T extends RenderableExtensionCallback<infer Data, any>
  ? Data
  : never;

export type CallbackTypeForExtensionPoint<T extends ExtensionPoint> = ExtensionPoints[T];

export interface ExtensionPoints {
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<{}, RemoteRoot<any>>;
  [ExtensionPoint.ProductDetailsAfterVariants]: RenderableExtensionCallback<{}, RemoteRoot<any>>;
  [ExtensionPoint.ProductDetailsSideBar]: RenderableExtensionCallback<{}, RemoteRoot<any>>;
}
