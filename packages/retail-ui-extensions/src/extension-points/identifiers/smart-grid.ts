import {StandardApi} from '../types';

export type ExtensionPoint =
  | 'Retail::SmartGrid::Tile'
  | 'Retail::SmartGrid::Modal';

export type SmartGridStandardApi<T extends ExtensionPoint> = StandardApi<T>;

export type SmartGridTileApi = SmartGridStandardApi<'Retail::SmartGrid::Tile'>;

export type SmartGridModalApi = SmartGridStandardApi<
  'Retail::SmartGrid::Modal'
>;

export interface SmartGridExtensionApi {
  'Retail::SmartGrid::Tile': SmartGridTileApi;
  'Retail::SmartGrid::Modal': SmartGridModalApi;
}
