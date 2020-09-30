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
  Playground: StandardApi<'Playground'>;

  // Product Subscription
  'Admin::Product::SubscriptionPlan::Create': SubscriptionApi<
    'Admin::Product::SubscriptionPlan::Create'
  >;
  'Admin::Product::SubscriptionPlan::Add': SubscriptionApi<'Admin::Product::SubscriptionPlan::Add'>;
  'Admin::Product::SubscriptionPlan::Edit': SubscriptionApi<
    'Admin::Product::SubscriptionPlan::Edit'
  >;
  'Admin::Product::SubscriptionPlan::Remove': SubscriptionApi<
    'Admin::Product::SubscriptionPlan::Remove'
  >;
}

export interface ExtensionPointCallback {
  // Dev
  Playground: RenderableExtensionCallback<
    StandardApi<'Playground'>,
    RemoteRoot<ExtensionPointSchema['Playground']>
  >;

  // Product Subscription
  'Admin::Product::SubscriptionPlan::Create': RenderableExtensionCallback<
    SubscriptionApi<'Admin::Product::SubscriptionPlan::Create'>,
    RemoteRoot<ExtensionPointSchema['Admin::Product::SubscriptionPlan::Create']>
  >;
  'Admin::Product::SubscriptionPlan::Add': RenderableExtensionCallback<
    SubscriptionApi<'Admin::Product::SubscriptionPlan::Add'>,
    RemoteRoot<ExtensionPointSchema['Admin::Product::SubscriptionPlan::Add']>
  >;
  'Admin::Product::SubscriptionPlan::Edit': RenderableExtensionCallback<
    SubscriptionApi<'Admin::Product::SubscriptionPlan::Edit'>,
    RemoteRoot<ExtensionPointSchema['Admin::Product::SubscriptionPlan::Edit']>
  >;
  'Admin::Product::SubscriptionPlan::Remove': RenderableExtensionCallback<
    SubscriptionApi<'Admin::Product::SubscriptionPlan::Remove'>,
    RemoteRoot<ExtensionPointSchema['Admin::Product::SubscriptionPlan::Remove']>
  >;
}
