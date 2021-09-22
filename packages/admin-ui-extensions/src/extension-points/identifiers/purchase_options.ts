import {RemoteRoot} from '@remote-ui/core';

import {ModalSchema, AppOverlaySchema} from '../../containers';
import {
  ContainerAction,
  RenderableExtensionCallback,
  StandardApi,
  ToastApi,
} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type PurchaseOptionsExtensionPoint =
  | 'Admin::ProductDetails::PurchaseOptions::Add'
  | 'Admin::ProductDetails::PurchaseOptions::Create'
  | 'Admin::ProductDetails::PurchaseOptions::Edit'
  | 'Admin::ProductDetails::PurchaseOptions::Remove';

// Declare the Container API if needed
export interface PurchaseOptionsExtensionContainerApi {
  container: unknown;
  close(): void;
  done(): void;
}

export interface PurchaseOptionsModalContainerApi {
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export type PurchaseOptionsStandardApi<
  T extends PurchaseOptionsExtensionPoint
> = StandardApi<T> & ToastApi;

export type PurchaseOptionsCreateApi = PurchaseOptionsStandardApi<
  'Admin::ProductDetails::PurchaseOptions::Create'
> & {
  container: PurchaseOptionsExtensionContainerApi;
  data: {
    productId: string;
    variantId?: string;
  };
};

export type PurchaseOptionsAddApi = PurchaseOptionsStandardApi<
  'Admin::ProductDetails::PurchaseOptions::Add'
> & {
  container: PurchaseOptionsExtensionContainerApi &
    PurchaseOptionsModalContainerApi;
  data: {
    productId: string;
    variantId?: string;
  };
};

export type PurchaseOptionsEditApi = PurchaseOptionsStandardApi<
  'Admin::ProductDetails::PurchaseOptions::Edit'
> & {
  container: PurchaseOptionsExtensionContainerApi;
  data: {
    sellingPlanGroupId: string;
    productId: string;
    variantId?: string;
  };
};

export type PurchaseOptionsRemoveApi = PurchaseOptionsStandardApi<
  'Admin::ProductDetails::PurchaseOptions::Remove'
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
  'Admin::ProductDetails::PurchaseOptions::Create': PurchaseOptionsCreateApi;
  'Admin::ProductDetails::PurchaseOptions::Add': PurchaseOptionsAddApi;
  'Admin::ProductDetails::PurchaseOptions::Edit': PurchaseOptionsEditApi;
  'Admin::ProductDetails::PurchaseOptions::Remove': PurchaseOptionsRemoveApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface PurchaseOptionsExtensionPointCallback {
  'Admin::ProductDetails::PurchaseOptions::Create': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::ProductDetails::PurchaseOptions::Create'],
    RemoteRoot<AppOverlaySchema>
  >;
  'Admin::ProductDetails::PurchaseOptions::Add': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::ProductDetails::PurchaseOptions::Add'],
    RemoteRoot<ModalSchema>
  >;
  'Admin::ProductDetails::PurchaseOptions::Edit': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::ProductDetails::PurchaseOptions::Edit'],
    RemoteRoot<AppOverlaySchema>
  >;
  'Admin::ProductDetails::PurchaseOptions::Remove': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::ProductDetails::PurchaseOptions::Remove'],
    RemoteRoot<ModalSchema>
  >;
}
