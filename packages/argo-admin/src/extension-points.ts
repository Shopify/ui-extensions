import {RemoteRoot} from '@remote-ui/core';
import {ExtensionPointSchema} from './component-schemas';
import {
  ContainerApi,
  ToastApi,
  LayoutApi,
  LocaleApi,
  SessionTokenApi,
  DataApi,
} from './extension-api';

type StandardApi = LayoutApi & LocaleApi & SessionTokenApi;

type SubscriptionApi<T extends ExtensionPoint> = StandardApi &
  ContainerApi<T> &
  ToastApi &
  DataApi<T>;

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
  [ExtensionPoint.SubscriptionManagementCreate]: SubscriptionApi<
    ExtensionPoint.SubscriptionManagementCreate
  >;
  [ExtensionPoint.SubscriptionManagementAdd]: SubscriptionApi<
    ExtensionPoint.SubscriptionManagementAdd
  >;
  [ExtensionPoint.SubscriptionManagementEdit]: SubscriptionApi<
    ExtensionPoint.SubscriptionManagementEdit
  >;
  [ExtensionPoint.SubscriptionManagementRemove]: SubscriptionApi<
    ExtensionPoint.SubscriptionManagementRemove
  >;
}

export interface ExtensionPointCallback {
  // Dev
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<
    StandardApi,
    RemoteRoot<ExtensionPointSchema['AppLink']>
  >;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<
    StandardApi,
    RemoteRoot<ExtensionPointSchema['Playground']>
  >;

  // Merchant Metafields
  [ExtensionPoint.MerchantMetafield]: RenderableExtensionCallback<StandardApi, RemoteRoot<any>>;

  // Subscription Management
  [ExtensionPoint.SubscriptionManagementCreate]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementCreate>,
    RemoteRoot<ExtensionPointSchema['SubscriptionManagementCreate']>
  >;
  [ExtensionPoint.SubscriptionManagementAdd]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementAdd>,
    RemoteRoot<ExtensionPointSchema['SubscriptionManagementAdd']>
  >;
  [ExtensionPoint.SubscriptionManagementEdit]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementEdit>,
    RemoteRoot<ExtensionPointSchema['SubscriptionManagementEdit']>
  >;
  [ExtensionPoint.SubscriptionManagementRemove]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementRemove>,
    RemoteRoot<ExtensionPointSchema['SubscriptionManagementRemove']>
  >;
}
