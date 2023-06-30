import {createRemoteComponent} from '@remote-ui/core';

export interface FriendsProps {
  /**
   * Adjust the background.
   */
  content: string;
}

export const Friends = createRemoteComponent<'Friends', FriendsProps>(
  'Friends',
);
