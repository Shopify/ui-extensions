import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type PurchaseOptionsExtensionPoint = 'Admin::Product::PurchaseOptions';

// Declare the Container API if needed
export interface PurchaseOptionsExtensionContainerApi {
  container: unknown;
}

// Declare the Data API if needed
export interface PurchaseOptionsExtensionDataApi {
  data: unknown;
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface PurchaseOptionsExtensionApi {
  'Admin::Product::PurchaseOptions': StandardApi<
    PurchaseOptionsExtensionPoint
  > &
    ToastApi &
    PurchaseOptionsExtensionContainerApi &
    PurchaseOptionsExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface PurchaseOptionsExtensionPointCallback {
  'Admin::Product::PurchaseOptions': RenderableExtensionCallback<
    PurchaseOptionsExtensionApi['Admin::Product::PurchaseOptions'],
    RemoteRoot<AllComponentsSchema>
  >;
}
