import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface CustomerAccountActionProps {
  /**
   * Sets the heading of the Action container.
   */
  heading: string;
  /**
   * Sets the Primary action button of the container. This component must be a button component.
   */
  primaryAction?: RemoteFragment;
  /**
   * Sets the Secondary actions button of the container. This component must be a button component.
   */
  secondaryActions?: RemoteFragment;
}

export const CustomerAccountAction = createRemoteComponent<
  'CustomerAccountAction',
  CustomerAccountActionProps
>('CustomerAccountAction');
