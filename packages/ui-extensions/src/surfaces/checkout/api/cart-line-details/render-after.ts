import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {PresentmentCartLine, StandardApi} from '../standard/standard';

export interface CartLineDetailsRenderAfterApi
  extends StandardApi<'Checkout::CartLineDetails::RenderAfter'> {
  /**
   * The cart line the extension is attached to.
   */
  target: StatefulRemoteSubscribable<PresentmentCartLine>;
}
