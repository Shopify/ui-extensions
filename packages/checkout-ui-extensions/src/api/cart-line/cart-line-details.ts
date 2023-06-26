import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import {PresentmentCartLine} from '../standard/standard';

export interface CartLineDetailsApi {
  /**
   * The cart line the extension is attached to.
   */
  target: StatefulRemoteSubscribable<PresentmentCartLine>;
}
