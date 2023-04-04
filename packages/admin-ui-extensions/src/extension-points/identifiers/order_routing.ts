import {RemoteRoot} from '@remote-ui/core';

import {ModalSchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi} from '../types';
import {OrderRoutingRule} from '../../components';

export type OrderRoutingExtensionPoint =
  | 'admin.order-routing.rule.action'
  | 'admin.order-routing.rule.render';

export interface OrderRoutingExtensionApi {
  'admin.order-routing.rule.action': StandardApi<OrderRoutingExtensionPoint>;
  'admin.order-routing.rule.render': StandardApi<OrderRoutingExtensionPoint>;
}

export interface OrderRoutingExtensionPointCallback {
  'admin.order-routing.rule.action': RenderableExtensionCallback<
    OrderRoutingExtensionApi['admin.order-routing.rule.action'],
    RemoteRoot<ModalSchema>
  >;
  'admin.order-routing.rule.render': RenderableExtensionCallback<
    OrderRoutingExtensionApi['admin.order-routing.rule.render'],
    RemoteRoot<typeof OrderRoutingRule>
  >;
}
