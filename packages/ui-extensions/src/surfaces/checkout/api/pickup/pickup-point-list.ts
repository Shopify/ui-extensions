import type {SubscribableSignalLike} from '../../shared';

/** @publicDocs */
export interface PickupPointListApi {
  /**
   * Whether the location search form is currently visible to the buyer.
   * Use this to conditionally render UI that depends on the buyer actively
   * searching for pickup points.
   */
  isLocationFormVisible: SubscribableSignalLike<boolean>;
}
