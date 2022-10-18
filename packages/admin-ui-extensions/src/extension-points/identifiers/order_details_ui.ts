import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type OrderDetailsExtensionPoint = 'Admin::OrderDetails';

export interface OrderDetailsExtensionApi {
  OrderDetails: StandardApi<OrderDetailsExtensionPoint> & ToastApi;
}

export interface OrderDetailsExtensionPointCallback {
  OrderDetails: RenderableExtensionCallback<
    OrderDetailsExtensionApi['OrderDetails'],
    RemoteRoot<AllComponentsSchema>
  >;
}
