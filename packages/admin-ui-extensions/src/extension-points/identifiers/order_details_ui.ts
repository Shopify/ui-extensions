import {RemoteRoot} from '@remote-ui/core';

import {AppOverlaySchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type OrderDetailsExtensionPoint = 'Admin::OrderDetails';

export type OrderDetailsExtensionStandardApi<
  T extends OrderDetailsExtensionPoint
> = StandardApi<T> & ToastApi;

export type OrderDetailsExtensionApiTest = OrderDetailsExtensionStandardApi<
  'Admin::OrderDetails'
> & {
  data: {
    value: string;
  };
};

export interface OrderDetailsExtensionApi {
  'Admin::OrderDetails': OrderDetailsExtensionApiTest;
}

export interface OrderDetailsExtensionPointCallback {
  'Admin::OrderDetails': RenderableExtensionCallback<
    OrderDetailsExtensionApi['Admin::OrderDetails'],
    RemoteRoot<AppOverlaySchema>
  >;
}
