import {createRemoteComponent} from '@remote-ui/core';

import type {Size, VisibilityProps} from '../shared';

type Tone = 'default' | 'critical' | 'subdued';

export interface BadgeProps extends VisibilityProps {
  /**
   * The tone of the badge being rendered. Indicates its level of importance,
   * where subdued provides the least emphasis, while critical indicates the highest level of urgency.
   *
   * @default 'default'
   */
  tone?: Tone;
  /**
   * The size of the badge being rendered.
   *
   * @default 'base'
   */
  size?: Extract<Size, 'base' | 'small'>;
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be passed as `aria-label` to underlying element and announced to buyers using assistive technologies.
   */
  accessibilityLabel?: string;
}

/**
 * Use badges to highlight contextual information, like a label or a status, about an object. An object can be anything that has a status or label attributed to it.
 */
export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
