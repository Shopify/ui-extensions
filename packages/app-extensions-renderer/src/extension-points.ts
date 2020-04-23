import {RemoteRoot} from '@shopify/remote-ui-core';

import {LayoutInput, SessionTokenInput, ModalActionsInput} from './input';

export enum ExtensionPoint {
  AppLink = 'AppLink',
  Playground = 'Playground',
  SubscriptionsManagement = 'SubscriptionsManagement',
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

export type ExtensionStandardApi = LayoutInput & SessionTokenInput;
export type SubscriptionsApi = ExtensionStandardApi & ModalActionsInput;

export interface ExtensionPoints {
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<ExtensionStandardApi, RemoteRoot<any>>;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<ExtensionStandardApi, RemoteRoot<any>>;
  [ExtensionPoint.SubscriptionsManagement]: RenderableExtensionCallback<
    SubscriptionsApi,
    RemoteRoot<any>
  >;
}
