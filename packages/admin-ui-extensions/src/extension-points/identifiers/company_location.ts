import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type CompanyLocationExtensionPoint =
  'Admin::CompanyLocation::CompanyLocation';

// Declare the Container API if needed
export interface CompanyLocationExtensionContainerApi {
  container: unknown;
}

// Declare the Data API if needed
export interface CompanyLocationExtensionDataApi {
  data: unknown;
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface CompanyLocationExtensionApi {
  'Admin::CompanyLocation::CompanyLocation': StandardApi<CompanyLocationExtensionPoint> &
    ToastApi &
    CompanyLocationExtensionContainerApi &
    CompanyLocationExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface CompanyLocationExtensionPointCallback {
  'Admin::CompanyLocation::CompanyLocation': RenderableExtensionCallback<
    CompanyLocationExtensionApi['Admin::CompanyLocation::CompanyLocation'],
    RemoteRoot<AllComponentsSchema>
  >;
}
