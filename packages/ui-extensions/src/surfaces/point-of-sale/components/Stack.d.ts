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
import type {StackProps, Key, Ref} from './components-shared.d.ts';

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

declare const tagName = 's-stack';
export type PickedProps = Pick<
  StackProps,
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'columnGap'
  | 'direction'
  | 'blockSize'
  | 'maxBlockSize'
  | 'maxInlineSize'
  | 'minBlockSize'
  | 'minInlineSize'
  | 'inlineSize'
  | 'justifyContent'
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockStart'
  | 'paddingBlockEnd'
  | 'paddingInline'
  | 'paddingInlineStart'
  | 'paddingInlineEnd'
  | 'rowGap'
>;
export interface StackJSXProps extends PickedProps {
  children?: ComponentChildren;
  /**
   * Adjust the block size.
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
   *
   * @default 'auto'
   */
  blockSize?: PickedProps['blockSize'];
  /**
   * Adjust the maximum block size.
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   *
   * @default 'none'
   */
  maxBlockSize?: PickedProps['maxBlockSize'];
  /**
   * Adjust the maximum inline size.
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
   *
   * @default 'none'
   */
  maxInlineSize?: PickedProps['maxInlineSize'];
  /**
   * Adjust the minimum block size.
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
   *
   * @default '0'
   */
  minBlockSize?: PickedProps['minBlockSize'];
  /**
   * Adjust the minimum inline size.
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
   *
   * @default '0'
   */
  minInlineSize?: PickedProps['minInlineSize'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: StackJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}

export {tagName};
export type {StackJSXProps};
