import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import {StandardApi} from '../standard/standard';

export interface PickupPointsApi<
  T extends
    | 'Checkout::PickupPoints::RenderBefore'
    | 'Checkout::PickupPoints::RenderAfter',
> extends StandardApi<T> {
  /**
   * Whether the customer location input form is visible to the buyer.
   */
  locationFormVisible: StatefulRemoteSubscribable<boolean>;
}
