import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type LocationDetailsExtensionPoint = 'Admin::LocationDetails';

// Declare the Container API if needed
export interface LocationDetailsExtensionContainerApi {
  container: unknown;
}

// Declare the Data API if needed
export interface LocationDetailsExtensionDataApi {
  data: {
    locationId?: string;
  };
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface LocationDetailsExtensionApi {
  'Admin::LocationDetails': StandardApi<LocationDetailsExtensionPoint> &
    ToastApi &
    LocationDetailsExtensionContainerApi &
    LocationDetailsExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface LocationDetailsExtensionPointCallback {
  'Admin::LocationDetails': RenderableExtensionCallback<
    LocationDetailsExtensionApi['Admin::LocationDetails'],
    RemoteRoot<AllComponentsSchema>
  >;
}
