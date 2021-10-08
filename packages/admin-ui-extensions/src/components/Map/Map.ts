import {createRemoteComponent} from '@remote-ui/core';

import {DestructableAction} from '../types';

export interface MapProps {
  /**
   * longitude content for the map, when rendered.
   */
  longitude: string;
  /**
   * latitude content for the map, when rendered.
   */
  latitude: string;
}

/**
 * Maps are backed by google maps
 *
 */
export const Map = createRemoteComponent<'Map', MapProps>('Map');
