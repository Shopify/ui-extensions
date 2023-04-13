import {createRemoteComponent} from '@remote-ui/core';

export type BadgeVariant =
  | 'neutral'
  | 'critical'
  | 'warning'
  | 'success'
  | 'highlight';

export interface BadgeProps {
  text: string;
  variant: BadgeVariant;
}

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
