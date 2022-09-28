import {RemoteRoot} from '@remote-ui/core';
import {CartApi} from 'extension-api';

import {AllComponents, SmartGridTileComponents} from '../component-sets';
import {RenderableExtensionCallback, StandardApi} from './types';

// Defines the extension pionts for smart grid
export type SmartGridExtensionPoint =
  | 'Retail::SmartGrid::Tile'
  | 'Retail::SmartGrid::Modal';

// Defines the base shared API for all smartgrid extension points
export type SmartGridStandardApi<
  T extends SmartGridExtensionPoint
> = StandardApi<T>;

// Defines the API specific to the Retail::SmartGrid::Tile extension point. Extension of the standard API that adds the cart API.
export type SmartGridTileApi = SmartGridStandardApi<
  'Retail::SmartGrid::Tile'
> & {
  cart: CartApi;
};

// Defines the API specific to the Retail::SmartGrid::Modal extension point. Extension of the standard API that adds the cart API.
export type SmartGridModalApi = SmartGridStandardApi<
  'Retail::SmartGrid::Tile'
> & {
  cart: CartApi;
};

export interface SmartGridExtensionApi {
  'Retail::SmartGrid::Tile': SmartGridTileApi;
  'Retail::SmartGrid::Modal': SmartGridModalApi;
}

export interface SmartGridExtensionPointCallback {
  'Retail::SmartGrid::Tile': RenderableExtensionCallback<
    SmartGridExtensionApi['Retail::SmartGrid::Tile'],
    RemoteRoot<SmartGridTileComponents>
  >;
  'Retail::SmartGrid::Modal': RenderableExtensionCallback<
    SmartGridExtensionApi['Retail::SmartGrid::Modal'],
    RemoteRoot<AllComponents>
  >;
}
