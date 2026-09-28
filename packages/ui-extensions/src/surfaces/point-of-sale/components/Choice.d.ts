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
import type {ChoiceProps, Key, Ref} from './components-shared.d.ts';

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
export type IntrinsicElementProps<T> = T &
  BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;

declare const tagName = 's-choice';
/**
 * Represents a selectable option within a choice list.
 * @publicDocs
 */
export interface ChoiceJSXProps
  extends Pick<ChoiceProps, 'id' | 'value' | 'disabled' | 'selected'> {
  /**
   * The value that identifies this choice in the `ChoiceList` `values` prop and
   * in selection events.
   *
   * A choice needs a `value` to be selectable. Use a unique value for each choice
   * in the list; choices that share a value can't be selected independently.
   */
  value?: ChoiceProps['value'];
  /**
   * Whether the choice is selected.
   *
   * Selection can also be set with the `values` prop on the `ChoiceList`; the two
   * are combined.
   *
   * @default false
   */
  selected?: ChoiceProps['selected'];
  /**
   * The content of the choice.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<ChoiceJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ChoiceJSXProps>;
    }
  }
}

export {tagName};
export type {ChoiceJSXProps};
