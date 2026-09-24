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
  ScrollBoxProps,
  MaybeAllValuesShorthandProperty,
  MaybeTwoValuesShorthandProperty,
  SizeKeyword,
  SizeUnitsOrAuto,
  SizeUnitsOrNone,
  SizeUnits,
  Key,
  Ref,
} from './components-shared.d.ts';

/** @publicDocs */
export type ComponentChildren = any;
/**
 * The base props for elements without children, providing key, ref, and slot properties.
 * @publicDocs
 */
export interface BaseElementProps<TClass = HTMLElement> {
  /**
   * A unique identifier for the element in lists. Used by Preact for efficient rendering and reconciliation.
   */
  key?: Key;
  /**
   * A reference to the underlying DOM element. Commonly used to access the element directly for imperative operations.
   */
  ref?: Ref<TClass>;
  /**
   * The named [slot](/docs/api/polaris/using-polaris-web-components#slots) this element should be placed in when used within a web component.
   */
  slot?: Lowercase<string>;
}
/**
 * The base props for elements with children, extending `BaseElementProps` with children support.
 * @publicDocs
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
/** @publicDocs */
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T & HTMLElement>;
/**
 * Represents the event object passed to callback functions when interactive events occur. Contains metadata about the event, including the target element, event phase, and propagation behavior.
 * @publicDocs
 */
export interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  /**
   * The element that the event listener is attached to.
   */
  currentTarget: HTMLElementTagNameMap[T];
  /**
   * Whether the event bubbles up through the DOM tree.
   */
  bubbles?: boolean;
  /**
   * Whether the event can be canceled.
   */
  cancelable?: boolean;
  /**
   * Whether the event will trigger listeners outside of a shadow root.
   */
  composed?: boolean;
  /**
   * Additional data associated with the event.
   */
  detail?: any;
  /**
   * The current phase of the event flow. Returns a number indicating which phase the event is in: 1 (capturing phase), 2 (at target), or 3 (bubbling phase). This helps determine how the event is propagating through the DOM hierarchy.
   */
  eventPhase: number;
  /**
   * The element that triggered the event.
   */
  target: HTMLElementTagNameMap[T] | null;
}

/**
 * Defines the available padding size options using a semantic scale. Provides consistent spacing values that align with the POS design system.
 * @publicDocs
 */
export type PaddingKeyword = SizeKeyword | 'none';
declare const tagName = 's-scroll-box';
/** @publicDocs */
export interface ScrollBoxJSXProps extends Pick<ScrollBoxProps, 'id'> {
  /**
   * The block size of the scrollable container. Auto automatically sizes based on the container's content and available space.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * The inline size of the scrollable container. Auto automatically sizes based on the container's content and available space.
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * The maximum block size constraint for the scrollable container.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * The maximum inline size constraint for the scrollable container.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
  /**
   * The minimum block size constraint for the scrollable container.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * The minimum inline size constraint for the scrollable container.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * The padding applied to all edges of the scrollable container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * The block-axis padding for the scrollable container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | '';
  /**
   * The block-start padding for the scrollable container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: PaddingKeyword | '';
  /**
   * The block-end padding for the scrollable container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: PaddingKeyword | '';
  /**
   * The inline-axis padding for the scrollable container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | '';
  /**
   * The inline-start padding for the scrollable container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: PaddingKeyword | '';
  /**
   * The inline-end padding for the scrollable container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: PaddingKeyword | '';
  /**
   * Callback when the user scrolls to the end of the content.
   *
   * Fires when the end of the content comes within 20% of the visible height, including when the
   * content is shorter than the scroll box. It fires again once the content changes, such as when
   * the next page is appended; scrolling away from the end and back does not fire it again. Use it
   * to load and append the next page of content.
   */
  onEndReached?: (event: CallbackEvent<typeof tagName>) => void;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ScrollBoxJSXProps & HTMLElement;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ScrollBoxJSXProps>;
    }
  }
}

export {tagName};
export type {ScrollBoxJSXProps};
