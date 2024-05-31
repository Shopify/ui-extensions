import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {DeliveryGroup} from '../standard/standard';

export interface ShippingOptionListApi {
  /**
   * The delivery group the extension is attached to. The target will be undefined if the group is not available.
   */
  target: StatefulRemoteSubscribable<DeliveryGroup | undefined>;
}
