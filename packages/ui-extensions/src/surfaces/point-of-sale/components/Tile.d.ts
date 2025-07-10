/** VERSION: 0.0.0 **/
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactCustomElement,
  CallbackEventListener,
  CallbackEvent,
  PreactBaseElementPropsWithChildren,
  GlobalProps,
} from './shared';

export interface TileProps extends GlobalProps {
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

declare const Tile_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Tile extends Tile_base implements TileProps {
  accessor title: string;
  accessor subtitle: string;
  accessor enabled: boolean;
  accessor destructive: boolean;
  accessor badgeValue: number;
  accessor onpress: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
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
  /** Event handler when pressed - maps to onPress prop */
  onPress?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Tile};
export type {TileJSXProps};
