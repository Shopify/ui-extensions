import {RemoteRoot} from '@shopify/remote-ui-core';
import {
  LayoutApi,
  LocaleApi,
  ModalActionsApi,
  SessionTokenApi,
  ProductDataApi,
  ToastApi,
} from './extension-api';
import {AppLinkSchema, PlaygroundSchema, SubscriptionManagementSchema} from './component-schemas';

export enum ExtensionPoint {
  AppLink = 'AppLink',
  Playground = 'Playground',
  SubscriptionManagement = 'SubscriptionManagement',
  MerchantMetafield = 'MerchantMetafield',
}

type DataApi = {
  data?: {
    [key: string]: any;
  };
};

type StandardApi = LayoutApi & LocaleApi & SessionTokenApi & DataApi;
type SubscriptionApi = StandardApi & ModalActionsApi & ToastApi & ProductDataApi;

export interface ExtensionApi {
  [ExtensionPoint.AppLink]: StandardApi;
  [ExtensionPoint.Playground]: StandardApi;
  [ExtensionPoint.SubscriptionManagement]: SubscriptionApi;
  [ExtensionPoint.MerchantMetafield]: StandardApi;
}

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Api, Root extends RemoteRoot> = (
  root: Root,
  api: Api,
) => ExtensionResult;

export interface ExtensionPointCallback {
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<StandardApi, RemoteRoot<AppLinkSchema>>;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<
    StandardApi,
    RemoteRoot<PlaygroundSchema>
  >;
  [ExtensionPoint.SubscriptionManagement]: RenderableExtensionCallback<
    SubscriptionApi,
    RemoteRoot<SubscriptionManagementSchema>
  >;
  [ExtensionPoint.MerchantMetafield]: RenderableExtensionCallback<StandardApi, RemoteRoot<any>>;
}
