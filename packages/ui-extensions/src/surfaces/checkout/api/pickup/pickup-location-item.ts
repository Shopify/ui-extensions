import type {SubscribableSignalLike} from '../../shared';
import type {PickupLocationOption} from '../standard/standard';

export interface PickupLocationItemApi {
  /**
   * The pickup location that this extension is attached to. Use this to read the location's name, address, and other details.
   */
  target: SubscribableSignalLike<PickupLocationOption>;

  /**
   * Whether the pickup location this extension is attached to is currently selected by the buyer. When `true`, the buyer has chosen this location. When `false`, the buyer has selected a different pickup location.
   */
  isTargetSelected: SubscribableSignalLike<boolean>;
}
