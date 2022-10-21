import type {CartLine} from '../shared';
import type {StandardApi} from '../standard/standard';

export interface CartLineDetailsRenderAfterApi
  extends StandardApi<'Checkout::CartLineDetails::RenderAfter'> {
  readonly target: CartLine;
}
