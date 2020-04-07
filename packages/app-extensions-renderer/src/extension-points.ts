import {RemoteRoot} from '@shopify/remote-ui-core';

import {LayoutInput} from './input';

export enum ExtensionPoint {
  AppLink = 'AppLink',
  ProductDetailsAfterVariants = 'ProductDetailsAfterVariants',
  ProductDetailsSideBar = 'ProductDetailsSideBar',
}

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Input, Root extends RemoteRoot> = (
  root: Root,
  input: Input,
) => ExtensionResult;

export type ExtractedInputFromRenderExtension<T> = T extends RenderableExtensionCallback<
  infer Input,
  any
>
  ? Input
  : never;

export type CallbackTypeForExtensionPoint<T extends ExtensionPoint> = ExtensionPoints[T];

export type InputForRenderExtension<
  Extension extends keyof ExtensionPoints
> = ExtractedInputFromRenderExtension<ExtensionPoints[Extension]>;

export type ExtensionStandardApi = LayoutInput;

export interface ExtensionPoints {
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<ExtensionStandardApi, RemoteRoot<any>>;
  [ExtensionPoint.ProductDetailsAfterVariants]: RenderableExtensionCallback<
    ExtensionStandardApi,
    RemoteRoot<any>
  >;
  [ExtensionPoint.ProductDetailsSideBar]: RenderableExtensionCallback<
    ExtensionStandardApi,
    RemoteRoot<any>
  >;
}
