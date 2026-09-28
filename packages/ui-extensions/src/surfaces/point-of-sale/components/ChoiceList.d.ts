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
import type {ChoiceListProps, Key, Ref} from './components-shared.d.ts';

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
export type ElementForTag<T extends string> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;
export interface CallbackEvent<T extends string> {
  currentTarget: ElementForTag<T>;
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: ElementForTag<T> | null;
}

declare const tagName = 's-choice-list';
/**
 * Groups one or more selectable choices.
 * @publicDocs
 */
export interface ChoiceListJSXProps
  extends Pick<ChoiceListProps, 'id' | 'values' | 'multiple'> {
  /**
   * The values of the selected choices.
   *
   * When `values` is set, update it from `onChange` or `onInput` to control the
   * selection. When `values` is not set, the list manages its own state, starting
   * from choices that have `selected` set. Selections from `values` and from
   * `selected` choices are combined.
   *
   * Use a unique `value` for each choice. Choices that share a value can't be
   * selected independently.
   */
  values?: ChoiceListProps['values'];
  /**
   * Callback when the user changes a choice. Fires simultaneously with onChange.
   * The event's `currentTarget.values` is always an array of selected choice
   * values, even when `multiple` is `false`.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * Callback when the user changes a choice. Fires simultaneously with onInput.
   * The event's `currentTarget.values` is always an array of selected choice
   * values; in single-selection mode, only the first entry is rendered as selected.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * The content of the ChoiceList. Should be one or more Choice elements.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<ChoiceListJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ChoiceListJSXProps>;
    }
  }
}

export {tagName};
export type {ChoiceListJSXProps};
