import {RemoteRoot} from '@shopify/remote-ui-core';

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
