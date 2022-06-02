import {createRemoteComponent} from '@remote-ui/core';

import {Appearance, Size} from '../shared';

export type IconSource =
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'arrowDown'
  | 'calendar'
  | 'camera'
  | 'caretDown'
  | 'cart'
  | 'checkmark'
  | 'chevronDown'
  | 'chevronUp'
  | 'chevronRight'
  | 'chevronLeft'
  | 'close'
  | 'critical'
  | 'discount'
  | 'delivered'
  | 'delivery'
  | 'disabled'
  | 'errorFill'
  | 'geolocation'
  | 'grid'
  | 'hamburger'
  | 'horizontalDots'
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
  | 'pen'
  | 'verticalDots'
  | 'plus'
  | 'questionFill'
  | 'reorder'
  | 'store'
  | 'success'
  | 'truck'
  | 'warning'
  | 'warningFill'
  | 'giftFill'
  | 'external'
  | 'profile';

export interface IconProps {
  /**
   * A label to use for the icon that will be used for buyers using assistive technology like screen readers.
   */
  accessibilityLabel?: string;

  /**
   * Sets the appearance (color) of the icon.
   *
   * By default the icon will inherit the color of its container.
   */
  appearance?: Appearance;

  /**
   * Adjusts the size of the icon.
   *
   * @defaultValue 'base'
   */
  size?: Extract<Size, 'extraSmall' | 'small' | 'base' | 'fill'>;

  /**
   * Specifies which icon symbol to display
   */
  source: IconSource;
}

/**
 * An Icon is a glyph used to visually represent something else and communicate core.
 * They can act as wayfinding tools or as a means of communicating functionality.
 */
export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
