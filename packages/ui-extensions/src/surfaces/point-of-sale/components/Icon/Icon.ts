import {createRemoteComponent} from '@remote-ui/core';

/**
 * The name identifier for the icon to display. Choose from the available icon set including commerce operations (`'cart'`, `'products'`, `'orders'`, `'custom-sale'`), payment methods (`'cash'`, `'credit-card'`, `'gift-card'`, `'shopify-payments'`), navigation elements (`'arrow'`, `'chevron-up'`, `'chevron-down'`, `'chevron-left'`, `'chevron-right'`), actions (`'add-customer'`, `'search'`, `'scan-barcode'`, `'refresh'`), status indicators (`'checkmark'`, `'circle-alert'`, `'circle-info'`, `'connectivity-warning'`), and system symbols (`'settings'`, `'help'`, `'menu'`, `'home'`).
 */
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
  | 'checkmark-active'
  | 'checkmark-inactive'
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
  | 'note-report'
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
  | 'connectivity-warning'
  | 'internet'
  | 'delivery'
  | 'shop-pay';

/**
 * The size of the icon to display. Controls the icon's dimensions and visual prominence in the interface.
 * - `'minor'` - Small size for compact spaces, secondary actions, or inline elements
 * - `'major'` - Standard size for primary buttons and prominent UI elements (default)
 * - `'spot'` - Larger size for featured content, empty states, or emphasis areas
 * - `'caption'` - Tiny size for accompanying small text or dense information displays
 * - `'badge'` - Minimal size for notification badges, indicators, or status markers
 */
export type IconSize = 'minor' | 'major' | 'spot' | 'caption' | 'badge';

/**
 * Configure the following properties on the Icon component.
 *
 * @publicDocs
 */
export interface IconProps {
  /**
   * A name used to render the icon. Choose from the available icon set including commerce-specific symbols like `'cart'`, `'payment'`, `'search'`, navigation arrows, and system indicators.
   */
  name: IconName;
  /**
   * The size of the icon. Use `'minor'` for small icons, `'major'` for standard size (default), `'spot'` for larger emphasis, `'caption'` for tiny text accompaniment, or `'badge'` for small indicators.
   *
   * @defaultValue 'major'
   */
  size?: IconSize;
}

export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
