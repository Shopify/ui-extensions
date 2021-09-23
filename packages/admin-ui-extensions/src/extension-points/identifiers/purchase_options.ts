import {RemoteRoot} from '@remote-ui/core';

import {ModalSchema, AppOverlaySchema} from '../../containers';
import {
  ContainerAction,
  RenderableExtensionCallback,
  StandardApi,
  ToastApi,
} from '../types';

export type PurchaseOptionsExtensionPoint =
  | 'Admin::Product::PurchaseOptions::Add'
  | 'Admin::Product::PurchaseOptions::Create'
  | 'Admin::Product::PurchaseOptions::Edit'
  | 'Admin::Product::PurchaseOptions::Remove';

export interface PurchaseOptionsExtensionContainerApi {
  close(): void;
  done(): void;
}

export interface PurchaseOptionsModalContainerApi {
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

export type PurchaseOptionsStandardApi<
  T extends PurchaseOptionsExtensionPoint
> = StandardApi<T> & ToastApi;

export type PurchaseOptionsCreateApi = PurchaseOptionsStandardApi<
  'Admin::Product::PurchaseOptions::Create'
> & {
  container: PurchaseOptionsExtensionContainerApi;
  data: {
    productId: string;
    variantId?: string;
  };
};

export type PurchaseOptionsAddApi = PurchaseOptionsStandardApi<
  'Admin::Product::PurchaseOptions::Add'
> & {
  container: PurchaseOptionsExtensionContainerApi &
    PurchaseOptionsModalContainerApi;
  data: {
    productId: string;
    variantId?: string;
  };
};

export type PurchaseOptionsEditApi = PurchaseOptionsStandardApi<
  'Admin::Product::PurchaseOptions::Edit'
> & {
  container: PurchaseOptionsExtensionContainerApi;
  data: {
    sellingPlanGroupId: string;
    productId: string;
    variantId?: string;
  };
};

export type PurchaseOptionsRemoveApi = PurchaseOptionsStandardApi<
  'Admin::Product::PurchaseOptions::Remove'
> & {
  container: PurchaseOptionsExtensionContainerApi &
    PurchaseOptionsModalContainerApi;
  data: {
    sellingPlanGroupId: string;
    productId: string;
    variantId?: string;
    variantIds: string[];
  };
};

export interface PurchaseOptionsExtensionApi {
  'Admin::Product::PurchaseOptions::Create': PurchaseOptionsCreateApi;
  'Admin::Product::PurchaseOptions::Add': PurchaseOptionsAddApi;
  'Admin::Product::PurchaseOptions::Edit': PurchaseOptionsEditApi;
  'Admin::Product::PurchaseOptions::Remove': PurchaseOptionsRemoveApi;
}

export interface PurchaseOptionsExtensionPointCallback {
  'Admin::Product::PurchaseOptions::Create': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::Product::PurchaseOptions::Create'],
    RemoteRoot<AppOverlaySchema>
  >;
  'Admin::Product::PurchaseOptions::Add': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::Product::PurchaseOptions::Add'],
    RemoteRoot<ModalSchema>
  >;
  'Admin::Product::PurchaseOptions::Edit': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::Product::PurchaseOptions::Edit'],
    RemoteRoot<AppOverlaySchema>
  >;
  'Admin::Product::PurchaseOptions::Remove': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::Product::PurchaseOptions::Remove'],
    RemoteRoot<ModalSchema>
  >;
}
