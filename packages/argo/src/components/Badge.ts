import {createRemoteComponent} from '../utilities';

type Status = 'success' | 'info' | 'attention' | 'warning' | 'new';

export interface BadgeProps {
  message: string;
  status?: Status;
}

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
