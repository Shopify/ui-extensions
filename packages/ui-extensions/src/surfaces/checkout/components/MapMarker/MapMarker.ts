import {createRemoteComponent} from '@remote-ui/core';

import type {OverlayActivatorProps} from '../shared';

/**
 * MapMarker represents a specific location or point of interest on a map.
 * @publicDocs
 */
export interface MapMarkerProps extends OverlayActivatorProps {
  /**
   * The latitude of the marker, in degrees. Valid values range from
   * -90 (south pole) to 90 (north pole).
   */
  latitude: number;
  /**
   * The longitude of the marker, in degrees. Valid values range from
   * -180 (west) to 180 (east).
   */
  longitude: number;
  /**
   * A label that describes the purpose or contents of the marker. It will
   * be announced to users using assistive technologies and will provide
   * them with more context.
   */
  accessibilityLabel: string;
  /**
   * A flag that indicates whether the marker can be grouped into clusters
   * when the map is zoomed out. When `true`, nearby markers are visually
   * combined into a single cluster icon to reduce visual clutter at lower
   * zoom levels.
   */
  clusterable?: boolean;
  /**
   * A callback that fires when the user presses (clicks or taps) the marker.
   * The event does not propagate to the parent map's `onPress` handler.
   */
  onPress?(): void;
  /**
   * The URL of a custom icon image to display for the marker. When set,
   * the default marker pin is replaced with the provided image. Use
   * `blockSize` and `inlineSize` to control the icon's dimensions.
   */
  icon?: string;
  /**
   * The block size (height in horizontal writing modes) of the custom icon,
   * in pixels. Only used when the `icon` property is set.
   */
  blockSize?: number;
  /**
   * The inline size (width in horizontal writing modes) of the custom icon,
   * in pixels. Only used when the `icon` property is set.
   */
  inlineSize?: number;
}

/**
 * Use the `MapMarker` component to provide visual representation of single geographic location such as a shipping address or package pickup location.
 */
export const MapMarker = createRemoteComponent<'MapMarker', MapMarkerProps>(
  'MapMarker',
);
