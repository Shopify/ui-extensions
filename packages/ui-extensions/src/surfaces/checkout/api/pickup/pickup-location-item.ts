import type {SubscribableSignalLike} from '../../shared';
import type {PickupLocationOption} from '../standard/standard';

export interface PickupLocationItemApi {
  /**
   * The pickup location that this extension is attached to. Use this to read the location's name, address, and other details.
   */
  target: SubscribableSignalLike<PickupLocationOption>;

  /**
   * Whether the buyer has selected the target pickup location. When `true`, the target location is the buyer's active choice. When `false`, the buyer has chosen a different pickup location.
   */
  isTargetSelected: SubscribableSignalLike<boolean>;
}
