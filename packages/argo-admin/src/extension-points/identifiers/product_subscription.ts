import {RemoteRoot} from '@remote-ui/core';

import {ModalSchema, AppOverlaySchema} from '../../containers';
import {RenderableExtensionCallback, StandardApi, ToastApi, ContainerAction} from '../types';

export type ProductSubscriptionExtensionPoint =
  | 'Admin::Product::SubscriptionPlan::Add'
  | 'Admin::Product::SubscriptionPlan::Create'
  | 'Admin::Product::SubscriptionPlan::Edit'
  | 'Admin::Product::SubscriptionPlan::Remove';

export interface ProductSubscriptionContainerApi {
  close(): void;
  done(): void;
}

export interface ProductSubscriptionModalContainerApi {
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

export type ProductSubscriptionStandardApi<
  T extends ProductSubscriptionExtensionPoint
> = StandardApi<T> & ToastApi;

export type ProductSubscriptionCreateApi = ProductSubscriptionStandardApi<
  'Admin::Product::SubscriptionPlan::Create'
> & {
  container: ProductSubscriptionContainerApi;
  data: {
    productId: string;
    variantId?: string;
  };
};

export type ProductSubscriptionAddApi = ProductSubscriptionStandardApi<
  'Admin::Product::SubscriptionPlan::Add'
> & {
  container: ProductSubscriptionContainerApi &
    ProductSubscriptionModalContainerApi;
  data: {
    productId: string;
    variantId?: string;
  };
};

export type ProductSubscriptionEditApi = ProductSubscriptionStandardApi<
  'Admin::Product::SubscriptionPlan::Edit'
> & {
  container: ProductSubscriptionContainerApi;
  data: {
    sellingPlanGroupId: string;
    productId: string;
    variantId?: string;
  };
};

export type ProductSubscriptionRemoveApi = ProductSubscriptionStandardApi<
  'Admin::Product::SubscriptionPlan::Remove'
> & {
  container: ProductSubscriptionContainerApi &
    ProductSubscriptionModalContainerApi;
  data: {
    sellingPlanGroupId: string;
    productId: string;
    variantId?: string;
    variantIds: string[];
  };
};

export interface ProductSubscriptionExtensionApi {
  'Admin::Product::SubscriptionPlan::Create': ProductSubscriptionCreateApi;
  'Admin::Product::SubscriptionPlan::Add': ProductSubscriptionAddApi;
  'Admin::Product::SubscriptionPlan::Edit': ProductSubscriptionEditApi;
  'Admin::Product::SubscriptionPlan::Remove': ProductSubscriptionRemoveApi;
}

export interface ProductSubscriptionExtensionPointCallback {
  'Admin::Product::SubscriptionPlan::Create': RenderableExtensionCallback<
    ProductSubscriptionExtensionApi['Admin::Product::SubscriptionPlan::Create'],
    RemoteRoot<AppOverlaySchema>
  >;
  'Admin::Product::SubscriptionPlan::Add': RenderableExtensionCallback<
    ProductSubscriptionExtensionApi['Admin::Product::SubscriptionPlan::Add'],
    RemoteRoot<ModalSchema>
  >;
  'Admin::Product::SubscriptionPlan::Edit': RenderableExtensionCallback<
    ProductSubscriptionExtensionApi['Admin::Product::SubscriptionPlan::Edit'],
    RemoteRoot<AppOverlaySchema>
  >;
  'Admin::Product::SubscriptionPlan::Remove': RenderableExtensionCallback<
    ProductSubscriptionExtensionApi['Admin::Product::SubscriptionPlan::Remove'],
    RemoteRoot<ModalSchema>
  >;
}
