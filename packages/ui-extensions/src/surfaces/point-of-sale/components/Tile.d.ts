/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

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
   */
  enabled?: boolean;
  /**
   * Sets whether or not the tile has a destructive appearance and active state.
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

declare class Tile extends PreactCustomElement implements TileProps {
  accessor title: TileProps['title'];
  accessor subtitle: TileProps['subtitle'];
  accessor enabled: TileProps['enabled'];
  accessor destructive: TileProps['destructive'];
  accessor badgeValue: TileProps['badgeValue'];
  accessor onpress: CallbackEventListener<typeof tagName> | null;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Tile;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TileJSXProps & PreactBaseElementPropsWithChildren<Tile>;
    }
  }
}

declare const tagName = 's-tile';

export interface TileJSXProps extends Partial<Omit<TileProps, 'title'>> {
  // title is required, so we add it back without Partial
  title: string;
  onPress?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {Tile};
export type {TileJSXProps};
