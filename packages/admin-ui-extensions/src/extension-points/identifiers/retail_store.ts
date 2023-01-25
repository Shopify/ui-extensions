import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type RetailStoreExtensionPoint = 'Admin::LocationDetails::RetailStore';

// Declare the Container API if needed
export interface RetailStoreExtensionContainerApi {
  container: unknown;
}

// Declare the Data API if needed
export interface RetailStoreExtensionDataApi {
  data: unknown;
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface RetailStoreExtensionApi {
  'Admin::LocationDetails::RetailStore': StandardApi<RetailStoreExtensionPoint> &
    ToastApi &
    RetailStoreExtensionContainerApi &
    RetailStoreExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface RetailStoreExtensionPointCallback {
  'Admin::LocationDetails::RetailStore': RenderableExtensionCallback<
    RetailStoreExtensionApi['Admin::LocationDetails::RetailStore'],
    RemoteRoot<AllComponentsSchema>
  >;
}
