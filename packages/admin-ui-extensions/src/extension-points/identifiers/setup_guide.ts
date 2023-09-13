import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type SetupGuideExtensionPoint = 'Admin::HomePage::SetupGuide';

// Declare the Container API if needed
export interface SetupGuideExtensionContainerApi {
  container: unknown;
}

// Declare the Data API if needed
export interface SetupGuideExtensionDataApi {
  data: unknown;
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface SetupGuideExtensionApi {
  'Admin::HomePage::SetupGuide': StandardApi<SetupGuideExtensionPoint> &
    ToastApi &
    SetupGuideExtensionContainerApi &
    SetupGuideExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface SetupGuideExtensionPointCallback {
  'Admin::HomePage::SetupGuide': RenderableExtensionCallback<
    SetupGuideExtensionApi['Admin::HomePage::SetupGuide'],
    RemoteRoot<AllComponentsSchema>
  >;
}
