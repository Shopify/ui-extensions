import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface AppActionProps {
  title?: string;
  primaryAction?: RemoteFragment;
  secondaryAction?: RemoteFragment;
  children: any;
}
/**
 * AppAction is a component used by Admin Action extensions to configure a primary and secondary action and title.
 */
export const AppAction = createRemoteComponent<'AppAction', AppActionProps>(
  'AppAction',
);
