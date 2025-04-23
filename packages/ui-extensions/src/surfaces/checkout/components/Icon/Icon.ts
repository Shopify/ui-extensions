import type {IconProps as BaseIconProps} from '@shopify/ui-api-design';

export interface IconProps
  extends Omit<BaseIconProps, 'tone' | 'size' | 'type' | 'color'> {
  tone?: Extract<
    BaseIconProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'custom'
  >;

  size?: Extract<
    BaseIconProps['size'],
    'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;

  type?:
    | Extract<
        BaseIconProps['type'],
        | 'alert-circle'
        | 'alert-triangle'
        | 'arrow-down'
        | 'arrow-left'
        | 'arrow-right'
        | 'arrow-up'
        | 'arrow-up-right'
        | 'bag'
        | 'bullet'
        | 'calendar'
        | 'camera'
        | 'caret-down'
        | 'cart'
        | 'cash-dollar'
        | 'categories'
        | 'check'
        | 'check-circle'
        | 'chevron-down'
        | 'chevron-left'
        | 'chevron-right'
        | 'chevron-up'
        | 'circle'
        | 'clipboard'
        | 'clock'
        | 'credit-card'
        | 'delete'
        | 'delivered'
        | 'delivery'
        | 'disabled'
        | 'discount'
        | 'edit'
        | 'email'
        | 'empty'
        | 'external'
        | 'filter'
        | 'geolocation'
        | 'gift-card'
        | 'globe'
        | 'grid'
        | 'image'
        | 'info'
        | 'list-bulleted'
        | 'location'
        | 'lock'
        | 'map'
        | 'menu'
        | 'menu-horizontal'
        | 'menu-vertical'
        | 'minus'
        | 'mobile'
        | 'note'
        | 'order'
        | 'organization'
        | 'plus'
        | 'profile'
        | 'question-circle-filled'
        | 'question-circle'
        | 'reorder'
        | 'reset'
        | 'return'
        | 'savings'
        | 'search'
        | 'settings'
        | 'star-filled'
        | 'star'
        | 'store'
        | 'truck'
        | 'upload'
        | 'x'
        | 'x-circle'
      >
    | 'alert-triangle-filled' /* missing in ui-api-design */
    | 'info-filled' /* missing in ui-api-design */
    | 'star-half' /* missing in ui-api-design */
    | 'x-circle-filled' /* missing in ui-api-design */;
}

export interface IconElement extends IconProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-icon': IconElement;
  }
}
