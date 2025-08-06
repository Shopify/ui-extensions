/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
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
type SupportedIconNames = Extract<
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
type SupportedSizes = Extract<
  IconProps['size'],
  'small' | 'base' | 'large' | 'large-100'
>;
export interface IconJSXProps extends Pick<IconProps, 'tone' | 'color'> {
  /**
   * The type of icon to display. Maps to PDS icon names.
   * @default ''
   */
  type?: SupportedIconNames;
  /**
   * The size of the icon.
   * @default 'base'
   */
  size?: SupportedSizes;
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
