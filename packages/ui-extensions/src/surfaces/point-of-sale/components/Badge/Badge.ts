import {createRemoteComponent} from '@remote-ui/core';

export type BadgeVariant =
  | 'neutral'
  | 'critical'
  | 'warning'
  | 'success'
  | 'highlight';

export type BadgeStatus = 'empty' | 'partial' | 'complete';

/**
 * @property text - The text displayed inside the badge.
 * @property variant - The appearance and function of the badge.
 * @property status - A circle icon displaying the status of the badge.
 * @deprecated status - No longer supported as of POS 10.0.0.
 */
export interface BadgeProps {
  /**
   * The text displayed inside the badge.
   */
  text: string;

  /**
   * The appearance and function of the badge.
   */
  variant: BadgeVariant;

  /**
   * A circle icon displaying the status of the badge.
   * @deprecated No longer supported as of POS 10.0.0.
   */
  status?: BadgeStatus;
}

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
