import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import {PresentmentCartLine, StandardApi} from './standard';

export interface CartLineRenderAfterApi
  extends StandardApi<'Checkout::CartLineDetails::RenderAfter'> {
  /**
   * The cart line this extension is attached to.
   */
  target: StatefulRemoteSubscribable<PresentmentCartLine>;
}
