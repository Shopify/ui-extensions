import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

/**
 * @property `initialScreenName` sets the initial Screen by its `name` property.
 */
export interface NavigatorProps extends TestableComponentProps {
  initialScreenName?: string;
}

export const Navigator = createRemoteComponent<'Navigator', NavigatorProps>(
  'Navigator',
);
