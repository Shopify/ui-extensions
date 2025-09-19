import type {SubscribableSignalLike} from '../../shared';
import type {CartLine} from '../standard/standard';

export interface CartLineItemApi {
  /**
   * The cart line the extension is attached to. Until version `2023-04`, this property was a `ReadonlySignalLike<PresentmentCartLine>`.
   */
  target: SubscribableSignalLike<CartLine>;
}
