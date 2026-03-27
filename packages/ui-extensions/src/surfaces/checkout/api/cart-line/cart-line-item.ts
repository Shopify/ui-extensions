import type {SubscribableSignalLike} from '../../shared';
import type {CartLine} from '../standard/standard';

/** @publicDocs */
export interface CartLineItemApi {
  /**
   * The cart line that this extension is attached to. Use this to read the
   * line item's merchandise, quantity, cost, and attributes.
   *
   * > Note: Until version `2023-04`, this property was a `ReadonlySignalLike<PresentmentCartLine>`.
   */
  target: SubscribableSignalLike<CartLine>;
}
