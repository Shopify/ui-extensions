import {RemoteRoot} from '@shopify/remote-ui-core';

import {
  LayoutInput,
  LocaleInput,
  ModalActionsInput,
  SessionTokenInput,
  ProductDataInput,
  ToastInput,
} from './extension-input';

export enum ExtensionPoint {
  AppLink = 'AppLink',
  Playground = 'Playground',
  SubscriptionManagement = 'SubscriptionManagement',
  MerchantMetafield = 'MerchantMetafield',
}

type DataInput = {
  data?: {
    [key: string]: any;
  };
};

type StandardInput = LayoutInput & LocaleInput & SessionTokenInput & DataInput;
type SubscriptionInput = StandardInput & ModalActionsInput & ToastInput & ProductDataInput;

export interface ExtensionInput {
  [ExtensionPoint.AppLink]: StandardInput;
  [ExtensionPoint.Playground]: StandardInput;
  [ExtensionPoint.SubscriptionManagement]: SubscriptionInput;
  [ExtensionPoint.MerchantMetafield]: StandardInput;
}

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Input, Root extends RemoteRoot> = (
  root: Root,
  input: Input,
) => ExtensionResult;

export interface ExtensionPointCallback {
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<StandardInput, RemoteRoot<any>>;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<StandardInput, RemoteRoot<any>>;
  [ExtensionPoint.SubscriptionManagement]: RenderableExtensionCallback<
    SubscriptionInput,
    RemoteRoot<any>
  >;
  [ExtensionPoint.MerchantMetafield]: RenderableExtensionCallback<StandardInput, RemoteRoot<any>>;
}
