import type {SubscribableSignalLike} from '../../shared';
import type {ShippingOption} from '../standard/standard';
import type {RenderMode} from '../shared';

export interface ShippingOptionItemApi {
  /**
   * The shipping option the extension is attached to.
   */
  target: SubscribableSignalLike<ShippingOption>;

  /**
   * Whether the shipping option the extension is attached to is currently selected in the UI.
   */
  isTargetSelected: SubscribableSignalLike<boolean>;

  /**
   * The render mode of the shipping option.
   */
  renderMode: RenderMode;
}
