import {createRemoteComponent} from '@remote-ui/core';

export interface CustomerAccountCardProps {
  /**
   * Adjust the padding of all edges.
   *
   * `true` applies a default padding that is appropriate for the component.
   */
  padding?: boolean;
}

export const CustomerAccountCard = createRemoteComponent<
  'CustomerAccountCard',
  CustomerAccountCardProps
>('CustomerAccountCard');
