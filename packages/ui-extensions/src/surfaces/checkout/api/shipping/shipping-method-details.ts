import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import {ShippingOption} from '../standard/standard';

export interface ShippingMethodDetailsApi {
  /**
   * The shipping option the extension is attached to.
   */
  target: StatefulRemoteSubscribable<ShippingOption | undefined>;

  /**
   * Whether the shipping option the extension is attached to is currently selected in the UI.
   */
  targetSelected: StatefulRemoteSubscribable<boolean>;
}
