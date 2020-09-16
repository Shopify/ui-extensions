import {RemoteRoot} from '@remote-ui/core';

import {ExtensionPoint} from './extension-point';
import {ExtensionPointSchema} from './component-schemas';
import {
  ContainerApi,
  ToastApi,
  LayoutApi,
  LocaleApi,
  SessionTokenApi,
  DataApi,
} from './extension-api';

export {ExtensionPoint};

type StandardApi<T extends ExtensionPoint> = {extensionPoint: T} & LayoutApi &
  LocaleApi &
  SessionTokenApi;

type SubscriptionApi<T extends ExtensionPoint> = StandardApi<T> &
  ContainerApi<T> &
  ToastApi &
  DataApi<T>;

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Api, Root extends RemoteRoot> = (
  root: Root,
  api: Api,
) => ExtensionResult;

export interface ExtensionApi {
  [ExtensionPoint.AppLink]: StandardApi<ExtensionPoint.AppLink>;
  [ExtensionPoint.Playground]: StandardApi<ExtensionPoint.Playground>;

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
    StandardApi<ExtensionPoint.AppLink>,
    RemoteRoot<ExtensionPointSchema['AppLink']>
  >;
  [ExtensionPoint.Playground]: RenderableExtensionCallback<
    StandardApi<ExtensionPoint.Playground>,
    RemoteRoot<ExtensionPointSchema['Playground']>
  >;

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
