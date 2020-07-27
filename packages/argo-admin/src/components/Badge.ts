import {createRemoteComponent} from '@remote-ui/core';

type Status = 'success' | 'info' | 'attention' | 'warning' | 'new';

export interface BadgeProps {
  message: string;
  status?: Status;
}

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
