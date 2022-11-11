import {RemoteRoot} from '@remote-ui/core';

import {AppOverlaySchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type OrderDetailsExtensionPoint ='Admin::OrderDetails::Sidebar::RenderAfterCustomerInformation'

export type OrderDetailsExtensionStandardApi<
  T extends OrderDetailsExtensionPoint
> = StandardApi<T> & ToastApi;

export interface OrderDetailsExtensionContainerApi {
  saveMetafield(): void
  done(): void
}

export type OrderDetailsExtensionApiRenderAfterCustomerInformation = OrderDetailsExtensionStandardApi<
  'Admin::OrderDetails::Sidebar::RenderAfterCustomerInformation'
> & {
  container: OrderDetailsExtensionContainerApi;
  data: {
    metafields: Array<{ [key: string]: string }>;
    orderId: String
  };
};

export interface OrderDetailsExtensionApi {
  'Admin::OrderDetails::Sidebar::RenderAfterCustomerInformation': OrderDetailsExtensionApiRenderAfterCustomerInformation;
}

export interface OrderDetailsExtensionPointCallback {
  'Admin::OrderDetails::Sidebar::RenderAfterCustomerInformation': RenderableExtensionCallback<
    OrderDetailsExtensionApi['Admin::OrderDetails::Sidebar::RenderAfterCustomerInformation'],
    RemoteRoot<AppOverlaySchema>
  >
}
