import type {SubscribableSignalLike} from '../../shared';
import type {ShippingOption} from '../standard/standard';

export interface ShippingOptionItemApi {
  /**
   * The shipping option that this extension is attached to. Use this to read the option's cost, carrier, delivery estimate, and other details.
   */
  target: SubscribableSignalLike<ShippingOption>;

  /**
   * Whether the shipping option this extension is attached to is currently selected by the buyer. When `true`, the buyer has chosen this option. When `false`, the buyer has selected a different shipping option.
   */
  isTargetSelected: SubscribableSignalLike<boolean>;

  /**
   * The render mode of this shipping option, indicating how the extension is displayed in the checkout UI.
   */
  renderMode: ShippingOptionItemRenderMode;
}

/**
 * The render mode of a shipping option.
 */
export interface ShippingOptionItemRenderMode {
  /**
   * Whether the shipping option is rendered in an overlay. When `true`, the extension appears in a modal or sheet on top of the checkout page. When `false`, the extension renders inline within the shipping options list.
   */
  overlay: boolean;
}
