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
import type {BoxProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName = 's-box';
export interface BoxJSXProps
  extends Pick<
    BoxProps,
    | 'padding'
    | 'paddingBlock'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInline'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'blockSize'
    | 'minBlockSize'
    | 'maxBlockSize'
    | 'inlineSize'
    | 'minInlineSize'
    | 'maxInlineSize'
  > {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: BoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BoxJSXProps & BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}

export {tagName};
export type {BoxJSXProps};
