import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface AdminActionProps {
  /**
   * Sets the title of the Action container.
   */
  title?: string;

  /**
   * Sets the Primary action button of the container. This component must a button component.
   */
  primaryAction?: RemoteFragment;

  /**
   * Sets the Secondary action button of the container. This component must a button component.
   */
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
