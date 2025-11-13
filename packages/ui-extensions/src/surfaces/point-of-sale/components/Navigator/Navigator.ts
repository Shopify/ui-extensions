import {createRemoteComponent} from '@remote-ui/core';

export interface NavigatorProps {
  /**
   * The name of the initial `Screen` component to display when the Navigator is first rendered. Must match the `name` property of a child `Screen` component.
   */
  initialScreenName?: string;
}

export const Navigator = createRemoteComponent<'Navigator', NavigatorProps>(
  'Navigator',
);
