import {RemoteRoot} from '@remote-ui/core';

import {AppOverlaySchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

export type DraftOrderDetailsExtensionPoint ='Admin::DraftOrderDetails::Sidebar::RenderAfterCustomerInformation'

export type DraftOrderDetailsExtensionStandardApi<
  T extends DraftOrderDetailsExtensionPoint
> = StandardApi<T> & ToastApi;

export interface DraftOrderDetailsExtensionContainerApi {
  saveMetafield(): void
  done(): void
}

export type DraftOrderDetailsExtensionApiRenderAfterCustomerInformation = DraftOrderDetailsExtensionStandardApi<
  'Admin::DraftOrderDetails::Sidebar::RenderAfterCustomerInformation'
> & {
  container: DraftOrderDetailsExtensionContainerApi;
  data: {
    metafields: Array<{ [key: string]: string }>;
    DraftOrderId: String
  };
};

export interface DraftOrderDetailsExtensionApi {
  'Admin::DraftOrderDetails::Sidebar::RenderAfterCustomerInformation': DraftOrderDetailsExtensionApiRenderAfterCustomerInformation;
}

export interface DraftOrderDetailsExtensionPointCallback {
  'Admin::DraftOrderDetails::Sidebar::RenderAfterCustomerInformation': RenderableExtensionCallback<
    DraftOrderDetailsExtensionApi['Admin::DraftOrderDetails::Sidebar::RenderAfterCustomerInformation'],
    RemoteRoot<AppOverlaySchema>
  >
}
