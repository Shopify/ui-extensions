import type {SubscribableSignalLike} from '../../shared';
import type {PickupLocationOption} from '../standard/standard';
import type {RenderMode} from '../shared';

export interface PickupLocationItemApi {
  /**
   * The pickup location the extension is attached to.
   */
  target: SubscribableSignalLike<PickupLocationOption>;

  /**
   * Whether the pickup location is currently selected.
   */
  isTargetSelected: SubscribableSignalLike<boolean>;

  /**
   * The render mode of the pickup location option.
   */
  renderMode: RenderMode;
}
