import {createRemoteComponent} from '@remote-ui/core';
import {IconName} from './IconName';

/**
 * Props for the `Icon` component, which renders a Polaris icon by name.
 */
export interface IconProps {
  /**
   * A label that describes the purpose or contents of the icon for
   * assistive technologies. When set, it will be announced to users
   * using screen readers and will provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * The color of the icon.
   *
   * - `inherit`: Uses the color from the icon's parent, giving it a
   *   monochrome appearance that matches surrounding text.
   * - `critical`: Applies a red, attention-grabbing color for error or
   *   destructive contexts.
   *
   * @defaultValue 'inherit'
   */
  tone?: 'inherit' | 'critical';

  /**
   * A unique identifier for the icon.
   */
  id?: string;

  /**
   * The size of the icon.
   *
   * - `base`: Renders the icon at its standard size.
   * - `fill`: Stretches the icon to fill the available space in its
   *   container while preserving its aspect ratio.
   *
   * @defaultValue 'base'
   */
  size?: 'base' | 'fill';

  /**
   * The name of the icon to display.
   */
  name: IconName;
}
/**
 * Re-export of the `IconName` type, which enumerates all available
 * Polaris icon names.
 */
export type {IconName};

/**
 * Renders a Polaris icon by name, with optional tone and size overrides.
 */
export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
