import {createRemoteComponent} from '@remote-ui/core';

type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';
type Spacing = 'none' | 'xtight' | 'tight' | 'loose' | 'xloose';

export interface TilesProps {
  /**
   * Number of tiles per line.
   */
  maxPerLine?: number;
  /**
   * Width of the component when the tiles stack on the cross-axis.
   * Each tile will then take all the available space.
   * It accepts a number in pixel. If not specified, the tiles
   * will never stack and each of them will progressively shrink
   * when the screen is resized.
   */
  breakAt?: number;
  /**
   * Position tiles along the cross axis
   */
  alignment?: Alignment;
  /**
   * Adjust spacing between tiles
   */
  spacing?: Spacing;
}

/**
 * The Tiles component is used to lay out elements inside equal sized containers (`Tile`).
 * They can wrap on multiple lines as well as stack when space is limited.
 */
export const Tiles = createRemoteComponent<'Tiles', TilesProps>('Tiles');

export interface TileProps {}

/**
 * A tile should always be nested under a Tiles component. Its contents will then be
 * sized equally with any sibling tiles.
 */
export const Tile = createRemoteComponent<'Tile', TileProps>('Tile');
