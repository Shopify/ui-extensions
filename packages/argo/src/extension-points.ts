import {RemoteRoot} from '@shopify/remote-ui-core';
import {AppLinkSchema, PlaygroundSchema, SubscriptionManagementSchema} from './component-schemas';
import {
  ModalActionsApi,
  ProductDataApi,
  ToastApi,
  LayoutApi,
  LocaleApi,
  SessionTokenApi,
} from './extension-api';

type DataApi = {
  data?: {
    [key: string]: any;
  };
};

type StandardApi = LayoutApi & LocaleApi & SessionTokenApi & DataApi;
type SubscriptionApi = StandardApi & ModalActionsApi & ToastApi & ProductDataApi;

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Api, Root extends RemoteRoot> = (
  root: Root,
  api: Api,
) => ExtensionResult;

export enum ExtensionPoint {
  AppLink = 'AppLink',
  Playground = 'Playground',

  MerchantMetafield = 'MerchantMetafield',

  SubscriptionManagementCreate = 'Admin::Product::SubscriptionManagement::Create',
  SubscriptionManagementAdd = 'Admin::Product::SubscriptionManagement::Add',
  SubscriptionManagementEdit = 'Admin::Product::SubscriptionManagement::Edit',
  SubscriptionManagementRemove = 'Admin::Product::SubscriptionManagement::Remove',
}

export interface ExtensionApi {
  [ExtensionPoint.AppLink]: StandardApi;
  [ExtensionPoint.Playground]: StandardApi;

  // Merchant Metafields
  [ExtensionPoint.MerchantMetafield]: StandardApi;

  // Subscription Management
  [ExtensionPoint.SubscriptionManagementCreate]: SubscriptionApi;
  [ExtensionPoint.SubscriptionManagementAdd]: SubscriptionApi;
  [ExtensionPoint.SubscriptionManagementEdit]: SubscriptionApi;
  [ExtensionPoint.SubscriptionManagementRemove]: SubscriptionApi;
}

export interface ExtensionPointCallback {
  // Dev
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<StandardApi, RemoteRoot<AppLinkSchema>>;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<
    StandardApi,
    RemoteRoot<PlaygroundSchema>
  >;

  // Merchant Metafields
  [ExtensionPoint.MerchantMetafield]: RenderableExtensionCallback<StandardApi, RemoteRoot<any>>;

  // Subscription Management
  [ExtensionPoint.SubscriptionManagementCreate]: RenderableExtensionCallback<
    SubscriptionApi,
    RemoteRoot<SubscriptionManagementSchema>
  >;
  [ExtensionPoint.SubscriptionManagementAdd]: RenderableExtensionCallback<
    SubscriptionApi,
    RemoteRoot<SubscriptionManagementSchema>
  >;
  [ExtensionPoint.SubscriptionManagementEdit]: RenderableExtensionCallback<
    SubscriptionApi,
    RemoteRoot<SubscriptionManagementSchema>
  >;
  [ExtensionPoint.SubscriptionManagementRemove]: RenderableExtensionCallback<
    SubscriptionApi,
    RemoteRoot<SubscriptionManagementSchema>
  >;
}
