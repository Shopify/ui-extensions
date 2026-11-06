import type {
  MetafieldChange,
  MetafieldChangeResult,
} from '../../types/metafield';

/**
 * The `MetafieldApi` object provides methods for setting and removing [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields) on the cart and its line items. Access these methods through `shopify.applyMetafieldChange()`. It's available on the targets that can change the cart.
 *
 * Only available on API version `2027-01` and later, on POS version 12.0.0 and later.
 * @publicDocs
 */
export interface MetafieldApi {
  /**
   * Creates, updates, or removes one metafield on the cart or on one of its line items. Resolves with the result of the change. This is the same method, with the same change and result types, as [`applyMetafieldChange()` in checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions/latest/apis/metafields).
   *
   * - A change without a `namespace` uses the app-reserved namespace (`$app`) of the app that owns the extension. Values in an app-reserved namespace are only visible to that app.
   * - Line item changes (`updateCartLineMetafield`, `removeCartLineMetafield`) are available on line items being sold, including the new items of an exchange. They return an error for line items being returned.
   * - Cart changes (`updateCartMetafield`, `removeCartMetafield`) are only available in `'Checkout'` carts. They return an error in `'Return'` and `'Exchange'` carts.
   * - On a sale, a value is copied to the order or its line item only when a matching order or order line item metafield definition has the [cart to order copyable](https://shopify.dev/docs/apps/build/metafields/use-metafield-capabilities#cart-to-order-copyable) capability enabled. Other values stay on the cart, where [Shopify Functions](https://shopify.dev/docs/apps/build/functions) can read them during checkout.
   * - On an exchange, the values of each new line item are always copied to the order line item it creates.
   *
   * This method doesn't reject. A change that can't be applied resolves with an `error` result, and the cart is left unchanged.
   *
   * @param change the metafield change to apply
   * @returns the result of the change
   */
  applyMetafieldChange(change: MetafieldChange): Promise<MetafieldChangeResult>;

  /**
   * Creates, updates, or removes several metafields on the cart and its line items in one cart update. Resolves with one result per change, in the same order as `changes`. Cart and line item changes can be mixed in the same call.
   *
   * - Each result is what `applyMetafieldChange()` would return for that change on its own.
   * - Changes are applied in order. A change that fails is skipped, and the changes after it are still applied. When two changes target the same metafield (same owner, namespace, and key), the later successful change wins.
   * - All successful changes are applied in one cart update, so `cart.current` subscribers are notified once.
   * - A call accepts at most 25 changes. A longer list applies no change and resolves with an `error` result for every change.
   * - Input that isn't a list of metafield changes applies no change and resolves with `error` results.
   *
   * The rules for each change are the same as for a single change. This method doesn't reject.
   *
   * @param changes the metafield changes to apply, at most 25
   * @returns one result per change, in the same order as `changes`
   */
  applyMetafieldChange(
    changes: MetafieldChange[],
  ): Promise<MetafieldChangeResult[]>;
}
