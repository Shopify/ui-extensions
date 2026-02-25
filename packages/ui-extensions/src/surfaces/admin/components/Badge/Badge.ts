import {createRemoteComponent} from '@remote-ui/core';
import type {AccessibilityLabelProps, SizeScale, Tone} from '../shared';
import {IconName} from '../Icon/IconName';

/**
 * Base props shared by all Badge variants. Controls the semantic tone
 * and size of the badge.
 */
interface BadgeBaseProps extends AccessibilityLabelProps {
  /**
   * The color and semantic tone of the badge. Use this to communicate
   * the status or importance of the information the badge represents.
   *
   * - `info`: Neutral informational content with no implied urgency.
   * - `success`: A positive outcome or completed action.
   * - `warning`: Something that needs attention but isn't blocking.
   * - `critical`: A serious problem that needs immediate action.
   */
  tone?: Tone;
  /**
   * The size of the badge.
   *
   * - `small-100`: A smaller badge, useful for compact layouts.
   * - `base`: The standard badge size.
   *
   * @defaultValue 'base'
   */
  size?: Extract<SizeScale, 'small-100' | 'base'>;
}

/**
 * Props available when the badge displays an icon. When `icon` is set,
 * you can also configure `iconPosition` to control where the icon appears.
 */
interface BadgeIconProps {
  /**
   * The name of the icon to display inside the badge. Use an icon to
   * provide additional visual context alongside the badge text.
   */
  icon: IconName;
  /**
   * The position of the icon within the badge. Use `'end'` to place
   * the icon after the badge text instead of before it.
   *
   * Requires `icon` to be set.
   *
   * - `start`: Icon appears before the text.
   * - `end`: Icon appears after the text.
   *
   * @defaultValue 'start'
   */
  iconPosition?: 'start' | 'end';
}

/**
 * Props for a badge without an icon. These properties are typed as `never`
 * to ensure that `icon` and `iconPosition` can't be set when no icon is
 * intended. This creates a discriminated union with `BadgeIconProps`.
 */
interface BadgeNoIconProps {
  /**
   * The name of the icon to display inside the badge. Typed as `never`
   * on this variant because no icon is provided. Use the `BadgeIconProps`
   * variant to set an icon.
   */
  icon?: never;
  /**
   * The position of the icon within the badge. Typed as `never` on this
   * variant because no icon is provided. Set `icon` first to configure
   * its position.
   */
  iconPosition?: never;
}

/**
 * Props for the Badge component. A badge can optionally include an icon
 * (`BadgeIconProps`) or omit one (`BadgeNoIconProps`). This union ensures
 * type safety so that `iconPosition` can only be set when `icon` is present.
 */
export type BadgeProps = BadgeBaseProps & (BadgeIconProps | BadgeNoIconProps);

/**
 * Badge renders a small label used to highlight the status or category of
 * an item, with optional icon support and configurable tone and size.
 */
export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
