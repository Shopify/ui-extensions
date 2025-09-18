/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {TileProps, Key, Ref} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
export interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  currentTarget: HTMLElementTagNameMap[T];
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: HTMLElementTagNameMap[T] | null;
}

declare const tagName = 's-tile';
export interface TileJSXProps
  extends Pick<
    TileProps,
    'disabled' | 'heading' | 'id' | 'itemCount' | 'tone' | 'subheading'
  > {
  onClick?: (event: CallbackEvent<typeof tagName>) => void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TileJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TileJSXProps & BaseElementPropsWithChildren<TileJSXProps>;
    }
  }
}

export {tagName};
export type {TileJSXProps};
