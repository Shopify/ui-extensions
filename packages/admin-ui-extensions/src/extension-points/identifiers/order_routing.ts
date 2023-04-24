import {RemoteRoot} from '@remote-ui/core';

import {ModalSchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi} from '../types';

export type OrderRoutingExtensionPoint = 'admin.order-routing.rule.action';

export interface OrderRoutingLocation {
  id: string;
  name: string;
}
export interface OrderRoutingExtensionApi {
  'admin.order-routing.rule.action': StandardApi<OrderRoutingExtensionPoint> & {
    data: {
      locations: OrderRoutingLocation[];
    };
  };
}

export interface OrderRoutingExtensionPointCallback {
  'admin.order-routing.rule.action': RenderableExtensionCallback<
    OrderRoutingExtensionApi['admin.order-routing.rule.action'],
    RemoteRoot<ModalSchema>
  >;
}
