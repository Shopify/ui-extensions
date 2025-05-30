import {createRemoteComponent} from '@remote-ui/core';

export interface BasicTileProps {
  /**
   * The callback that is executed when the tile is tapped.
   */
  onPress?: () => void;
}

export const BasicTile = createRemoteComponent<'BasicTile', BasicTileProps>('BasicTile');
