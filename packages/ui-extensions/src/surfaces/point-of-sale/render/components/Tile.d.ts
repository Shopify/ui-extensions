/** VERSION: 1.0.0 **/

import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementProps,
  PreactCustomElement,
  WebComponentBase,
} from './shared';

/**
 * @property `title` the text set on the main label of the tile.
 * @property `subtitle` the text set on the secondary label of the tile.
 * @property `enabled` sets whether or not the tile can be tapped.
 * @property `destructive` sets whether or not the tile has a destructive appearance and active state.
 * @property `badgeValue` the number value displayed in the top right corner of the tile.
 * @property `onPress` the callback that is executed when the tile is tapped.
 */
export interface TileProps {
  /**
   * The text set on the main label of the tile.
   */
  title: string;
  /**
   * The text set on the secondary label of the tile.
   */
  subtitle?: string;
  /**
   * Sets whether or not the tile can be tapped.
   *
   * @default true
   */
  enabled?: boolean;
  /**
   * Sets whether or not the tile is in a red destructive appearance.
   *
   * @default false
   */
  destructive?: boolean;
  /**
   * The number value displayed in the top right corner of the tile.
   */
  badgeValue?: number;
  /**
   * The callback that is executed when the tile is tapped.
   */
  onPress?: () => void;
}

declare const tagName = 'pos-tile';

declare const Tile_base: WebComponentBase<TileProps>;

declare class Tile extends Tile_base implements TileProps {
  constructor();

  accessor title: TileProps['title'];
  accessor subtitle: TileProps['subtitle'];
  accessor enabled: TileProps['enabled'];
  accessor destructive: TileProps['destructive'];
  accessor badgeValue: TileProps['badgeValue'];
  accessor onpress: CallbackEventListener<typeof tagName> | null;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Tile;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TileJSXProps & PreactBaseElementProps<Tile>;
    }
  }
}

export interface TileJSXProps extends Partial<TileProps> {
  onPress?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Tile};
export type {TileJSXProps};
