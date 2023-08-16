import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

export interface PickupLocationsApi {
  /**
   * Whether the customer location input form is shown to the buyer.
   */
  isLocationFormVisible: StatefulRemoteSubscribable<boolean>;
}
