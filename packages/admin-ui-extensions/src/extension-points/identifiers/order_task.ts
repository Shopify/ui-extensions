import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type OrderTaskExtensionPoint = 'Admin::OrderWorkspaces::OrderTask';

// Declare the Container API if needed
// Not sure if we will need these yet
export interface OrderTaskExtensionContainerApi {
  container: {
    close(): void;
    done(): void;
  };
}

// Declare the Data API if needed
// Adding placeholder stuff for now
export interface OrderTaskExtensionDataApi {
  data: {
    initialData: any;
    onTypeSelection: (type: string) => any;
    onTaskComplete: () => void;
  };
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface OrderTaskExtensionApi {
  'Admin::OrderWorkspaces::OrderTask': StandardApi<OrderTaskExtensionPoint> &
    ToastApi &
    OrderTaskExtensionContainerApi &
    OrderTaskExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface OrderTaskExtensionPointCallback {
  'Admin::OrderWorkspaces::OrderTask': RenderableExtensionCallback<
    OrderTaskExtensionApi['Admin::OrderWorkspaces::OrderTask'],
    RemoteRoot<AllComponentsSchema>
  >;
}
