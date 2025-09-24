import type {SubscribableSignalLike} from '../../shared';

export interface PickupPointListApi {
  /**
   * Whether the customer location input form is shown to the buyer.
   */
  isLocationFormVisible: SubscribableSignalLike<boolean>;
}
