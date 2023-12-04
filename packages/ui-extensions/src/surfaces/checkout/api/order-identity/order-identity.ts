import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

export interface OrderIdentity {
  id: string;
  /**
   * A randomly generated alpha-numeric identifier for the order.
   */
  confirmationNumber?: string;
}

export interface OrderIdentityApi {
  /**
   * Order information that's available post-checkout.
   */
  orderIdentity: StatefulRemoteSubscribable<OrderIdentity | undefined>;
}