import {createRemoteComponent} from '@remote-ui/core';

import type {Appearance, Size} from '../shared';

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
   * A label that describes the purpose or contents of the icon. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * Sets the appearance (color) of the icon.
   *
   * By default the icon will inherit the color of its parent.
   *
   * @defaultValue 'monochrome'
   */
  appearance?: Appearance;

  /**
   * Adjusts the size of the icon.
   *
   * @defaultValue 'base'
   */
  size?: Extract<Size, 'extraSmall' | 'small' | 'base' | 'fill'>;

  /**
   * Specifies which icon to display
   */
  source: IconSource;
}

/**
 * Icons are pictograms or graphic symbols.
 * They can act as wayfinding tools or as a means of communicating functionality.
 */
export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
