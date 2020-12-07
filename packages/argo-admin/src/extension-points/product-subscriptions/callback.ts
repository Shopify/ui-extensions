import {RemoteRoot} from '@remote-ui/core';

import {ExtensionPointSchema} from '../../component-schemas';
import {RenderableExtensionCallback} from '../renderable-extension-callback';

import {SubscriptionApi} from './api';

export interface ProductSubscriptionExtensionPointCallback {
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
