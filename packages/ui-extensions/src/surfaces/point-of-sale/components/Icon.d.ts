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
import type {IconProps, Key, Ref} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}

declare const tagName = 's-icon';
export type SupportedIconNames = Extract<
  IconProps['type'],
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'apps'
  | 'analytics'
  | 'backspace'
  | 'call'
  | 'cancel'
  | 'cash'
  | 'checkmark'
  | 'cart'
  | 'cart-filled'
  | 'check'
  | 'check-circle'
  | 'alert-circle'
  | 'info'
  | 'phone'
  | 'edit'
  | 'delete'
  | 'settings'
  | 'search'
  | 'print'
  | 'refresh'
  | 'help'
  | 'plus'
  | 'minus'
  | 'email'
  | 'gift-card'
  | 'discount'
  | 'receipt'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'menu'
  | 'home'
  | 'location'
  | 'time'
  | 'calendar'
  | 'products'
  | 'orders'
  | 'customers'
  | 'collection'
>;
export interface IconJSXProps
  extends Pick<IconProps, 'tone' | 'color' | 'size'> {
  /**
   * The type of icon to display. Maps to PDS icon names.
   * @default ''
   */
  type?: SupportedIconNames;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: IconJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementProps<IconJSXProps>;
    }
  }
}

export {tagName};
export type {IconJSXProps};
