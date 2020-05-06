import {RemoteRoot} from '@shopify/remote-ui-core';

import {LayoutInput, LocaleInput, ModalActionsInput, SessionTokenInput} from './extension-input';

export enum ExtensionPoint {
  AppLink = 'AppLink',
  Playground = 'Playground',
  SubscriptionsManagement = 'SubscriptionsManagement',
}

type DataInput = {
  data?: {
    [key: string]: any;
  };
};

type StandardInput = LayoutInput & LocaleInput & SessionTokenInput & DataInput;
type SubscriptionsInput = StandardInput & ModalActionsInput;

export interface ExtensionInput {
  [ExtensionPoint.AppLink]: StandardInput;
  [ExtensionPoint.Playground]: StandardInput;
  [ExtensionPoint.SubscriptionsManagement]: SubscriptionsInput;
}

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Input, Root extends RemoteRoot> = (
  root: Root,
  input: Input,
) => ExtensionResult;

export interface ExtensionPointCallback {
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<StandardInput, RemoteRoot<any>>;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<StandardInput, RemoteRoot<any>>;
  [ExtensionPoint.SubscriptionsManagement]: RenderableExtensionCallback<
    SubscriptionsInput,
    RemoteRoot<any>
  >;
}
