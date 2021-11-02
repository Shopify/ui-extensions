import {createRemoteComponent} from '@remote-ui/core';

export type IconSource =
  | 'arrowLeft'
  | 'arrowRight'
  | 'calendar'
  | 'camera'
  | 'cancelCircle'
  | 'caretDown'
  | 'cart'
  | 'checkmark'
  | 'checkmarkCircle'
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
  | 'info'
  | 'infoFill'
  | 'list'
  | 'locateMe'
  | 'lock'
  | 'map'
  | 'marker'
  | 'minus'
  | 'mobile'
  | 'note'
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
  | 'warningCircle'
  | 'warningFill'
  | 'giftFill'
  | 'external';

/**
 * Accent:
 * Use to convey emphasis and draw attention to the icon.
 *
 * Interactive:
 * Use to convey that the icon is pressable, hoverable or otherwise interactive.
 *
 * Subdued:
 * Use to convey a subdued or disabled state for the icon.
 *
 * Info:
 * Use to convey icon is informative or has information.
 *
 * Success:
 * Use to convey a successful interaction.
 *
 * Warning:
 * Use to convey something needs attention or an action needs to be taken.
 *
 * Critical:
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
  /** A label to use for the icon that will be used for buyers using assistive technology like screen readers. */
  accessibilityLabel?: string;

  /**
   * Sets the appearance (color) of the icon.
   * By default the icon will inherit the color of its container.
   */
  appearance?: Appearance;

  /**
   * Adjusts the size of the icon.
   * By default the icon will take up the entire width of its container
   * */
  size?: Size;

  /** Specifies which icon symbol to display */
  source: IconSource;
}

/**
 * An Icon is a glyph used to visually represent something else and communicate core.
 * They can act as wayfinding tools or as a means of communicating functionality.
 */
export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
