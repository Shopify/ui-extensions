import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

export interface PickupPointsApi {
  /**
   * Whether the customer location input form is shown to the buyer.
   */
  isLocationFormVisible: StatefulRemoteSubscribable<boolean>;
}
