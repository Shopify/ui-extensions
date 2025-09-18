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
import type {
  StackProps,
  SizeKeyword,
  MaybeAllValuesShorthandProperty,
  MaybeTwoValuesShorthandProperty,
  Key,
  Ref,
} from './components-shared.d.ts';

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
export type PaddingKeyword = SizeKeyword | 'none';
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
  | 'rowGap'
>;
export interface StackJSXProps extends PickedProps {
  /**
   * Adjust the padding of all edges.
   *
   * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
   * supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * Adjust the block-padding.
   *
   * - `large none` means block-start padding is `large`, block-end padding is `none`.
   *
   * This overrides the block value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword | ''>;
  /**
   * Adjust the block-start padding.
   *
   * This overrides the block-start value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: PaddingKeyword | '';
  /**
   * Adjust the block-end padding.
   *
   * This overrides the block-end value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: PaddingKeyword | '';
  /**
   * Adjust the inline padding.
   *
   * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
   *
   * This overrides the inline value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword | ''>;
  /**
   * Adjust the inline-start padding.
   *
   * This overrides the inline-start value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: PaddingKeyword | '';
  /**
   * Adjust the inline-end padding.
   *
   * This overrides the inline-end value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: PaddingKeyword | '';
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
      [tagName]: StackJSXProps & BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}

export {tagName};
export type {StackJSXProps};
