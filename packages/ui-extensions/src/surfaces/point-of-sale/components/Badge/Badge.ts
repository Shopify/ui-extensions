import {createRemoteComponent} from '@remote-ui/core';

export type BadgeVariant =
  | 'neutral'
  | 'critical'
  | 'warning'
  | 'success'
  | 'highlight';

export type BadgeStatus = 'empty' | 'partial' | 'complete';

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
   * A circle icon on the badge.
   */
  status?: BadgeStatus;
}

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
