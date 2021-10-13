import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type InventoryForecastingExtensionPoint = 'Admin::ProductDetails::InventoryForecasting';

// Declare the Container API if needed
export interface InventoryForecastingExtensionContainerApi {
  container: {
    close(): void;
    done(): void;
  };
}

// Declare the Data API if needed
export interface InventoryForecastingExtensionDataApi {
  data: {
    initialData: any;
    onComplete: () => void;
  };
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface InventoryForecastingExtensionApi {
  'Admin::ProductDetails::InventoryForecasting': StandardApi<
    InventoryForecastingExtensionPoint
  > &
    ToastApi &
    InventoryForecastingExtensionContainerApi &
    InventoryForecastingExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface InventoryForecastingExtensionPointCallback {
  'Admin::ProductDetails::InventoryForecasting': RenderableExtensionCallback<
    InventoryForecastingExtensionApi['Admin::ProductDetails::InventoryForecasting'],
    RemoteRoot<AllComponentsSchema>
  >;
}
