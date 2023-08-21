import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export type BadgeVariant =
  | 'neutral'
  | 'critical'
  | 'warning'
  | 'success'
  | 'highlight';

export type BadgeStatus = 'empty' | 'partial' | 'complete';

export interface BadgeProps extends TestableComponentProps {
  text: string;
  variant: BadgeVariant;
  status?: BadgeStatus;
}

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
