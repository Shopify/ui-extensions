import {RemoteRoot} from '@remote-ui/core';

import {ModalSchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi} from '../types';

export type OrderRoutingExtensionPoint = 'admin.order-routing.rule.action';

export interface OrderRoutingLocation {
  id: string;
  name: string;
}

export interface OrderRoutingLocationMetafield {
  id?: string | null;
  key: string;
  value?: string | null;
  namespace: string;
  type: string;
}
export interface OrderRoutingExtensionApi {
  'admin.order-routing.rule.action': StandardApi<OrderRoutingExtensionPoint> & {
    data: {
      locations: OrderRoutingLocation[];
    };
    saveLocationMetafields: (
      metafields: OrderRoutingLocationMetafield[],
    ) => Promise<void>;
  };
}

export interface OrderRoutingExtensionPointCallback {
  'admin.order-routing.rule.action': RenderableExtensionCallback<
    OrderRoutingExtensionApi['admin.order-routing.rule.action'],
    RemoteRoot<ModalSchema>
  >;
}
