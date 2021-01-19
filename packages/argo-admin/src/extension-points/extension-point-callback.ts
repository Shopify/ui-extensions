import {RemoteRoot} from '@remote-ui/core';

import {ExtensionPointSchema} from '../components';

import {ProductSubscriptionExtensionPointCallback} from './product-subscriptions';
import {RenderableExtensionCallback} from './renderable-extension-callback';
import {StandardApi} from './standard-api';

export interface ExtensionPointCallback extends ProductSubscriptionExtensionPointCallback {
  Playground: RenderableExtensionCallback<
    StandardApi<'Playground'>,
    RemoteRoot<ExtensionPointSchema['Playground']>
  >;
}
