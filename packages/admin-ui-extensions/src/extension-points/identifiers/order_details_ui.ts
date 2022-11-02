import {RemoteRoot} from '@remote-ui/core';

import {AppOverlaySchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type OrderDetailsExtensionPoint ='Admin::OrderDetails::Sidebar::RenderAfterNotes'

export type OrderDetailsExtensionStandardApi<
  T extends OrderDetailsExtensionPoint
> = StandardApi<T> & ToastApi;

export interface OrderDetailsExtensionContainerApi {
  saveMetafield(): void
  done(): void
}

export type OrderDetailsExtensionApiRenderAfterNotes = OrderDetailsExtensionStandardApi<
  'Admin::OrderDetails::Sidebar::RenderAfterNotes'
> & {
  container: OrderDetailsExtensionContainerApi;
  data: {
    metafields: Array<{ [key: string]: string }>;
  };
};

export interface OrderDetailsExtensionApi {
  'Admin::OrderDetails::Sidebar::RenderAfterNotes': OrderDetailsExtensionApiRenderAfterNotes;
}

export interface OrderDetailsExtensionPointCallback {
  'Admin::OrderDetails::Sidebar::RenderAfterNotes': RenderableExtensionCallback<
    OrderDetailsExtensionApi['Admin::OrderDetails::Sidebar::RenderAfterNotes'],
    RemoteRoot<AppOverlaySchema>
  >
}
