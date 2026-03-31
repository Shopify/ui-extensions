import {createRemoteComponent} from '@remote-ui/core';

import type {SizingProps} from '../shared';

/**
 * The zoom level of the map, as an integer between 1 and 18. Lower
 * values show a wider area (such as a whole country), while higher
 * values show a more detailed view (such as a street block).
 */
export type MapZoom =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18;

/**
 * A geographic coordinate pair representing a point on the map.
 */
export interface MapLocation {
  /**
   * The latitude of the location, in degrees. Valid values range
   * from -90 (south pole) to 90 (north pole).
   */
  latitude: number;
  /**
   * The longitude of the location, in degrees. Valid values range
   * from -180 (west) to 180 (east).
   */
  longitude: number;
}

/**
 * A geographic bounding box defined by its north-east and south-west
 * corners. Used to describe the visible area of the map.
 */
export interface MapBounds {
  /**
   * The north-east (top-right) corner of the bounding box.
   */
  northEast: MapLocation;
  /**
   * The south-west (bottom-left) corner of the bounding box.
   */
  southWest: MapLocation;
}

/** @publicDocs */
export interface MapProps
  extends Pick<
    SizingProps,
    'maxBlockSize' | 'maxInlineSize' | 'minInlineSize' | 'minBlockSize'
  > {
  /**
   * The Google Maps API key used to authenticate requests. You can obtain
   * a key from the [Google Maps Platform](https://developers.google.com/maps).
   */
  apiKey: string;
  /**
   * The latitude of the center of the map, in degrees. Valid values
   * range from -90 (south pole) to 90 (north pole).
   */
  latitude: number;
  /**
   * The longitude of the center of the map, in degrees. Valid values
   * range from -180 (west) to 180 (east).
   */
  longitude: number;
  /**
   * A unique identifier for the map. Used to set a unique map ID for the
   * Google Maps API. If omitted, the map component automatically generates
   * a unique identifier. If you provide one, you must ensure it is unique
   * across all maps in the extension.
   */
  id?: string;
  /**
   * The initial zoom level of the map. Must be an integer between 0 and 18,
   * where lower values show a wider area and higher values show more detail.
   */
  zoom?: number;
  /**
   * The minimum zoom level the user can zoom out to. Prevents the map
   * from being zoomed out beyond this level.
   */
  minZoom?: number;
  /**
   * The maximum zoom level the user can zoom in to. Prevents the map
   * from being zoomed in beyond this level.
   */
  maxZoom?: number;
  /**
   * A label that describes the purpose or contents of the map. It will be
   * announced to users using assistive technologies and will provide them
   * with more context.
   */
  accessibilityLabel: string;
  /**
   * A callback that fires when the visible area of the map changes (for
   * example, after the user pans the map). Receives the new bounding box
   * as a `MapBounds` object with `northEast` and `southWest` corners.
   */
  onBoundsChange?: (bounds: MapBounds) => void;
  /**
   * A callback that fires when the center point of the map changes (for
   * example, after the user pans the map). Receives the new center as a
   * `MapLocation` coordinate pair.
   */
  onCenterChange?: (location: MapLocation) => void;
  /**
   * A callback that fires when the user presses (clicks or taps) the map.
   * Receives the geographic `MapLocation` coordinate pair of the press point.
   */
  onPress?: (location: MapLocation) => void;
  /**
   * A callback that fires when the user double-presses (double-clicks)
   * the map. Receives the geographic `MapLocation` coordinate pair of the
   * double-press point.
   */
  onDoublePress?: (location: MapLocation) => void;
  /**
   * A callback that fires when the map's zoom level changes (for example,
   * after the user pinches to zoom or uses the zoom controls). Receives
   * the new zoom level as a `MapZoom` value (1–18).
   */
  onZoomChange?: (zoom: MapZoom) => void;
}

/**
 * Use the Map component to provide visual representation of geographic data such as verifying address, package or pickup locations.
 * Please note that the merchant or partner has to provide an API key and a set of allowed domains where the map would render.
 */
export const Map = createRemoteComponent<'Map', MapProps>('Map');
