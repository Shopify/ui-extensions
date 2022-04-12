import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import {LineItem, StandardApi} from './standard';

export interface LineItemRenderAfterApi
  extends StandardApi<'Checkout::LineItemDetails::RenderAfter'> {
  /**
   * The line item this extension is attached to.
   */
  target: StatefulRemoteSubscribable<LineItem>;
}
