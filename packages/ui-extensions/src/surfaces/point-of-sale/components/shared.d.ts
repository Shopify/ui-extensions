/** VERSION: 0.0.0 **/
/* eslint-disable @typescript-eslint/ban-types */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />

// Common types shared across POS components
export type ComponentChildren = any;

export interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
}

// Re-export PreactCustomElement from admin for consistency
export {PreactCustomElement} from '../../admin/components/shared';

// Common event types
export type CallbackEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};

export type CallbackEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> =
  | (EventListener & {
      (event: CallbackEvent<TTagName, TEvent>): void;
    })
  | null;

// Base Preact element props
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}

/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

// Type aliases
export type AnyString = string & {};

// Common enums and types for POS components
export type POSColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';
export type POSSize = 'small' | 'medium' | 'large';
export type POSVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'plain'
  | 'destructive';
