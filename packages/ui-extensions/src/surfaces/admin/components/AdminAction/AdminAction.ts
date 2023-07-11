import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface AdminActionProps {
  title?: string;
  primaryAction?: RemoteFragment;
  secondaryAction?: RemoteFragment;
  children: any;
}
/**
 * AdminAction is a component used by Admin Action extensions to configure a primary and secondary action and title.
 */
export const AdminAction = createRemoteComponent<
  'AdminAction',
  AdminActionProps
>('AdminAction');
