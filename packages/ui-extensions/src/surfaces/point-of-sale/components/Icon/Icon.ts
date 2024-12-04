import {createRemoteComponent} from '@remote-ui/core';

export type IconName =
  | 'add-customer'
  | 'analytics'
  | 'apps'
  | 'arrow'
  | 'arrow-left'
  | 'backspace'
  | 'card-reader'
  | 'call'
  | 'cancel'
  | 'not-stocked'
  | 'cash'
  | 'checkmark'
  | 'caret-down'
  | 'chevron-up'
  | 'chevron-right'
  | 'chevron-down'
  | 'circle-alert'
  | 'circle-cancel'
  | 'circle-checkmark'
  | 'circle-disconnected'
  | 'circle-info'
  | 'circle-outline'
  | 'clock'
  | 'collections'
  | 'copy'
  | 'credit-card'
  | 'custom-payment'
  | 'custom-sale'
  | 'discount'
  | 'external-link'
  | 'flag'
  | 'flip-camera'
  | 'gallery-view'
  | 'gift-card'
  | 'help'
  | 'hide-keyboard'
  | 'home'
  | 'horizontal-dots'
  | 'keypad'
  | 'lightning'
  | 'link'
  | 'list'
  | 'list-view'
  | 'lock'
  | 'mail'
  | 'available-at-other-locations'
  | 'menu'
  | 'minus'
  | 'mobile'
  | 'note'
  | 'drawer'
  | 'orders'
  | 'shopify-payments'
  | 'play-button'
  | 'plus'
  | 'products'
  | 'radio-active'
  | 'radio-inactive'
  | 'rearrange'
  | 'receipt'
  | 'refresh'
  | 'register'
  | 'retrieve-cart'
  | 'image-placeholder'
  | 'save-cart'
  | 'scan-barcode'
  | 'search'
  | 'send'
  | 'settings'
  | 'shipment'
  | 'split-payment'
  | 'sort'
  | 'staff'
  | 'star'
  | 'unordered-list'
  | 'internet'
  | 'delivery'
  | 'shop-pay';

export type IconSize = 'xxs' | 'xs' | 'l' | 'm' | 's' | 'xs' | 'xxs';

export interface IconProps {
  /**
   * A name used to render the icon.
   */
  name: IconName;
  /**
   * Size of the icon.
   * @defaultValue 'xl'
   */
  size?: IconSize;
}

export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
