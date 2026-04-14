import {createRemoteComponent} from '@remote-ui/core';

import type {Size, VisibilityProps} from '../shared';
import type {IconSource} from '../Icon/Icon';

/**
 * The available tone values for the badge.
 *
 * - `default`: General information without specific intent.
 * - `critical`: Urgent problems or destructive actions requiring immediate attention.
 * - `subdued`: Reduced visual emphasis for less prominent badges.
 */
type Tone = 'default' | 'critical' | 'subdued';

/**
 * @publicDocs
 */
export interface BadgeProps extends VisibilityProps {
  /**
   * The semantic meaning and color treatment of the badge.
   *
   * @default 'default'
   */
  tone?: Tone;
  /**
   * The size of the badge.
   *
   * - `base`: The default size, suitable for most use cases.
   * - `small`: A smaller badge for compact layouts.
   *
   * @default 'base'
   */
  size?: Extract<Size, 'base' | 'small'>;
  /**
   * A label that describes the purpose or contents of the element. When set, it will be announced
   * to users using assistive technologies and will provide them with more context. When set, any
   * children or `label` supplied won't be announced to screen readers.
   */
  accessibilityLabel?: string;
  /**
   * An icon displayed inside the badge to provide additional visual context or reinforce the badge's meaning.
   */
  icon?: IconSource;
  /**
   * The position of the icon relative to the badge text.
   *
   * - `start`: Places the icon before the text.
   * - `end`: Places the icon after the text.
   *
   * @default 'start'
   */
  iconPosition?: 'start' | 'end';
}

/**
 * Use badges to highlight contextual information, like a label or a status, about an object. An object can be anything that has a status or label attributed to it.
 */
export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
