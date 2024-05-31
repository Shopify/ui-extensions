import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {ShippingOption} from '../standard/standard';

export interface ShippingOptionItemApi {
  /**
   * The shipping option the extension is attached to.
   */
  target: StatefulRemoteSubscribable<ShippingOption>;

  /**
   * Whether the shipping option the extension is attached to is currently selected in the UI.
   */
  isTargetSelected: StatefulRemoteSubscribable<boolean>;
}
