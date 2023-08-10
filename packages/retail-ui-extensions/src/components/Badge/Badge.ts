import {createRemoteComponent} from '@remote-ui/core';

export type BadgeVariant =
  | 'neutral'
  | 'critical'
  | 'warning'
  | 'success'
  | 'highlight';

export type BadgeStatus = 'empty' | 'partial' | 'complete';

export interface BadgeProps {
  text: string;
  variant: BadgeVariant;
  status?: BadgeStatus;
}

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
