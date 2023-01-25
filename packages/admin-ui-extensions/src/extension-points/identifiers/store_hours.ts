import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type StoreHoursExtensionPoint = 'Admin::LocationDetails::StoreHours';

// Declare the Container API if needed
export interface StoreHoursExtensionContainerApi {
  container: unknown;
}

// Declare the Data API if needed
export interface StoreHoursExtensionDataApi {
  data: unknown;
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface StoreHoursExtensionApi {
  'Admin::LocationDetails::StoreHours': StandardApi<StoreHoursExtensionPoint> &
    ToastApi &
    StoreHoursExtensionContainerApi &
    StoreHoursExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface StoreHoursExtensionPointCallback {
  'Admin::LocationDetails::StoreHours': RenderableExtensionCallback<
    StoreHoursExtensionApi['Admin::LocationDetails::StoreHours'],
    RemoteRoot<AllComponentsSchema>
  >;
}
