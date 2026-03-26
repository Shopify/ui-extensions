import {createRemoteComponent} from '@remote-ui/core';

import type {Appearance, IdProps, Size} from '../shared';

/**
 * The name of the icon to display. Each value maps to a specific
 * pictogram from the checkout icon set.
 */
export type IconSource =
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'arrowUpRight'
  | 'arrowDown'
  | 'bag'
  | 'bullet'
  | 'calendar'
  | 'camera'
  | 'caretDown'
  | 'cart'
  | 'cashDollar'
  | 'categories'
  | 'checkmark'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'chevronDown'
  | 'clipboard'
  | 'clock'
  | 'close'
  | 'creditCard'
  | 'critical'
  | 'delete'
  | 'delivered'
  | 'delivery'
  | 'disabled'
  | 'discount'
  | 'email'
  | 'error'
  | 'errorFill'
  | 'external'
  | 'filter'
  | 'geolocation'
  | 'gift'
  /** @deprecated use gift instead */
  | 'giftFill'
  | 'grid'
  | 'hamburger'
  | 'hollowCircle'
  | 'horizontalDots'
  | 'image'
  | 'info'
  | 'infoFill'
  | 'list'
  | 'lock'
  | 'magnify'
  | 'map'
  | 'marker'
  | 'minus'
  | 'mobile'
  | 'note'
  | 'orderBox'
  | 'pen'
  | 'plus'
  | 'profile'
  | 'question'
  | 'questionFill'
  | 'reorder'
  | 'reset'
  | 'return'
  | 'savings'
  | 'settings'
  | 'star'
  | 'starFill'
  | 'starHalf'
  | 'store'
  | 'success'
  | 'truck'
  | 'upload'
  | 'verticalDots'
  | 'warning'
  | 'warningFill';

export interface IconProps extends IdProps {
  /**
   * A label that describes the purpose or contents of the icon. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * The color of the icon, set using a design-system keyword.
   *
   * @defaultValue 'base'
   */
  appearance?: Appearance;

  /**
   * The size of the icon.
   *
   * - `extraSmall`: The smallest available icon size.
   * - `small`: A compact icon size, smaller than the default.
   * - `large`: A larger icon for increased visual prominence.
   * - `base`: Renders the icon at its standard size.
   * - `fill`: Stretches the icon to fill the available space in its
   *   container while preserving its aspect ratio.
   *
   * @defaultValue 'base'
   */
  size?: Extract<Size, 'extraSmall' | 'small' | 'base' | 'large' | 'fill'>;

  /**
   * The name of the icon to display.
   */
  source: IconSource;
}

/**
 * Icons are pictograms or graphic symbols.
 * They can act as wayfinding tools or as a means of communicating functionality.
 */
export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
