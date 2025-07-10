/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * The search bar lets merchants enter search queries for objects throughout the app.
 */
export interface SearchBarProps extends GlobalProps {
  /**
   * The initial value for the search bar.
   */
  initialValue?: string;
  /**
   * Placeholder text shown when the search bar is empty.
   */
  placeholder?: string;
  /**
   * Whether the search bar is editable.
   */
  editable?: boolean;
  /**
   * Callback executed when search is submitted.
   */
  onSearch?: (value: string) => void;
  /**
   * Callback executed when text changes.
   */
  onTextChange?: (value: string) => void;
  /**
   * Callback executed when search bar gains focus.
   */
  onFocus?: () => void;
}

declare const SearchBar_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class SearchBar extends SearchBar_base implements SearchBarProps {
  accessor initialValue: SearchBarProps['initialValue'];
  accessor placeholder: SearchBarProps['placeholder'];
  accessor editable: SearchBarProps['editable'];
  accessor onsearch: CallbackEventListener<typeof tagName> | null;
  accessor ontextchange: CallbackEventListener<typeof tagName> | null;
  accessor onfocus: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: SearchBar;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SearchBarJSXProps &
        PreactBaseElementPropsWithChildren<SearchBar>;
    }
  }
}

declare const tagName = 's-search-bar';

export interface SearchBarJSXProps extends Partial<SearchBarProps> {
  onSearch?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onTextChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {SearchBar};
export type {SearchBarJSXProps};
