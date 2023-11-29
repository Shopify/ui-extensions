import {createRemoteComponent} from '@remote-ui/core';

/**
 * @property `initialScreenName` sets the initial Screen by its `name` property.
 */
export interface NavigatorProps {
  initialScreenName?: string;
}

export const Navigator = createRemoteComponent<'Navigator', NavigatorProps>(
  'Navigator',
);
