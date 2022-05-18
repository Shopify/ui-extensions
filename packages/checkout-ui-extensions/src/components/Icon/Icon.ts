import {createRemoteComponent} from '@remote-ui/core';

export type IconSource =
  | 'arrowLeft'
  | 'arrowRight'
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
  | 'spinner'
  | 'spinnerSmall'
  | 'store'
  | 'success'
  | 'truck'
  | 'warning'
  | 'warningFill'
  | 'giftFill'
  | 'external'
  | 'profile';
/**
 * `accent`:
 * Use to convey emphasis and draw attention to the icon.
 *
 * `interactive`:
 * Use to convey that the icon is pressable, hoverable or otherwise interactive.
 *
 * `subdued`:
 * Use to convey a subdued or disabled state for the icon.
 *
 * `info`:
 * Use to convey icon is informative or has information.
 *
 * `success`:
 * Use to convey a successful interaction.
 *
 * `warning`:
 * Use to convey something needs attention or an action needs to be taken.
 *
 * `critical`:
 * Use to convey a problem has arisen.
 */
type Appearance =
  | 'accent'
  | 'interactive'
  | 'subdued'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical';

type Size = 'small' | 'base' | 'large';

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
   * By default the icon will take up the entire width of its container
   * */
  size?: Size;

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
