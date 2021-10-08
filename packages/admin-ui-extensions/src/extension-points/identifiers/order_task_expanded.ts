import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type OrderTaskExpandedExtensionPoint = 'Admin::OrderWorkspaces::OrderTaskExpanded';

// Declare the Container API if needed
export interface OrderTaskExpandedExtensionContainerApi {
  container: {
    close(): void;
    done(): void;
  };
}

// Declare the Data API if needed
export interface OrderTaskExpandedExtensionDataApi {
  data: {
    initialData: any;
    onTypeSelection: (type: string) => any;
    onTaskComplete: () => void;
  };
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface OrderTaskExpandedExtensionApi {
  'Admin::OrderWorkspaces::OrderTaskExpanded': StandardApi<
    OrderTaskExpandedExtensionPoint
  > &
    ToastApi &
    OrderTaskExpandedExtensionContainerApi &
    OrderTaskExpandedExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface OrderTaskExpandedExtensionPointCallback {
  'Admin::OrderWorkspaces::OrderTaskExpanded': RenderableExtensionCallback<
    OrderTaskExpandedExtensionApi['Admin::OrderWorkspaces::OrderTaskExpanded'],
    RemoteRoot<AllComponentsSchema>
  >;
}
