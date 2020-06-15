import {RemoteRoot} from '@shopify/remote-ui-core';
import {AppLinkSchema, PlaygroundSchema, SubscriptionManagementSchema} from './component-schemas';
import {
  ModalActionsApi,
  ToastApi,
  LayoutApi,
  LocaleApi,
  SessionTokenApi,
  DataApi,
} from './extension-api';

type StandardApi = LayoutApi & LocaleApi & SessionTokenApi;
type SubscriptionApi<T extends ExtensionPoint> = StandardApi &
  ModalActionsApi &
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
  [ExtensionPoint.AppLink]: RenderableExtensionCallback<StandardApi, RemoteRoot<AppLinkSchema>>;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<
    StandardApi,
    RemoteRoot<PlaygroundSchema>
  >;

  // Merchant Metafields
  [ExtensionPoint.MerchantMetafield]: RenderableExtensionCallback<StandardApi, RemoteRoot<any>>;

  // Subscription Management
  [ExtensionPoint.SubscriptionManagementCreate]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementCreate>,
    RemoteRoot<SubscriptionManagementSchema>
  >;
  [ExtensionPoint.SubscriptionManagementAdd]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementAdd>,
    RemoteRoot<SubscriptionManagementSchema>
  >;
  [ExtensionPoint.SubscriptionManagementEdit]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementEdit>,
    RemoteRoot<SubscriptionManagementSchema>
  >;
  [ExtensionPoint.SubscriptionManagementRemove]: RenderableExtensionCallback<
    SubscriptionApi<ExtensionPoint.SubscriptionManagementRemove>,
    RemoteRoot<SubscriptionManagementSchema>
  >;
}
