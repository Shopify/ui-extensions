import {createRemoteComponent} from '@remote-ui/core';
import {ActionProps} from '../shared';

export interface AdminActionProps extends ActionProps {
  /**
   * Sets the title of the Action container. If not provided, the name of the extension will be used. Titles longer than 40 characters will be truncated.
   */
  title?: string;

  /**
   * Sets the loading state of the action modal
   */
  loading?: boolean;
}
/**
 * AdminAction is a component used by Admin Action extensions to configure a primary and secondary action and title.
 */
export const AdminAction = createRemoteComponent<
  'AdminAction',
  AdminActionProps
>('AdminAction');
