/**
 * A [metafield](https://shopify.dev/docs/apps/build/custom-data/metafields) on the cart or on one of its line items.
 *
 * Extensions set cart and line item metafields using `applyMetafieldChange()`. Unlike line item properties, metafields are typed, belong to the app that set them when they use an app-reserved namespace, and can be copied to the order when it's created.
 * @publicDocs
 */
export interface CartMetafield {
  /**
   * The key name of the metafield, such as `'gift_message'` or `'event_date'`. Together with `namespace`, this uniquely identifies the metafield on its owner (the cart or a line item).
   */
  key: string;

  /**
   * The namespace of the metafield, such as `'custom'` or the app-reserved `'$app'`. Together with `key`, this uniquely identifies the metafield on its owner (the cart or a line item).
   */
  namespace: string;

  /**
   * The value stored in the metafield, always as a string. For example, a `number_integer` metafield stores `'42'`, and a `json` metafield stores a JSON string.
   */
  value: string;

  /**
   * The metafield's [type name](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types), such as `'single_line_text_field'`, `'date'`, or `'json'`.
   */
  type: string;
}

/**
 * A [metafield](https://shopify.dev/docs/apps/build/custom-data/metafields) to create or update, such as with `applyMetafieldChange()`. Named after the Admin GraphQL API's [`MetafieldInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput), with `key`, `value`, and `type` required.
 * @publicDocs
 */
export interface MetafieldInput {
  /** The name of the metafield. */
  key: string;

  /**
   * The namespace of the metafield. When omitted, the metafield is stored in the app-reserved namespace (`$app`) of the app that owns the extension.
   */
  namespace?: string;

  /** The information to store in the metafield. */
  value: string;

  /**
   * The metafield's information type. Required because POS checks the value against its type when the change is applied, including while offline.
   * See the [metafield types documentation](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types) for a list of supported types.
   */
  type: string;
}

/**
 * Creates or updates a cart [metafield](https://shopify.dev/docs/apps/build/custom-data/metafields). Pass this to `applyMetafieldChange()` to set a metafield value. If a metafield with the provided key and namespace doesn't already exist, then it gets created.
 *
 * Only available in `'Checkout'` carts.
 * @publicDocs
 */
export interface MetafieldUpdateCartChange {
  /**
   * Identifies this as a cart metafield creation or update. Set this when creating a change to set a metafield value.
   */
  type: 'updateCartMetafield';

  /**
   * The metafield data to set on the cart. If a metafield with this key and namespace already exists, then its value is replaced.
   */
  metafield: MetafieldInput;
}

/**
 * Removes a cart [metafield](https://shopify.dev/docs/apps/build/custom-data/metafields). Pass this to `applyMetafieldChange()` to delete a metafield by key and namespace.
 *
 * Only available in `'Checkout'` carts.
 * @publicDocs
 */
export interface MetafieldRemoveCartChange {
  /**
   * Identifies this as a cart metafield removal. Set this when creating a change to delete an existing metafield by key and namespace.
   */
  type: 'removeCartMetafield';

  /**
   * The name of the metafield to remove.
   */
  key: string;

  /**
   * The namespace of the metafield to remove. When omitted, the app-reserved namespace (`$app`) of the app that owns the extension is used.
   */
  namespace?: string;
}

/**
 * Creates or updates a [metafield](https://shopify.dev/docs/apps/build/custom-data/metafields) on one cart line item. Pass this to `applyMetafieldChange()` to set a line item metafield value. If a metafield with the provided key and namespace doesn't already exist on the line item, then it gets created.
 *
 * Available on line items being sold, including the new items of an exchange. Not available on line items being returned.
 * @publicDocs
 */
export interface MetafieldUpdateCartLineChange {
  /**
   * Identifies this as a line item metafield creation or update. Set this when creating a change to set a metafield value on a line item.
   */
  type: 'updateCartLineMetafield';

  /**
   * The `uuid` of the line item to change.
   */
  lineItemUuid: string;

  /**
   * The metafield data to set on the line item. If a metafield with this key and namespace already exists on the line item, then its value is replaced.
   */
  metafield: MetafieldInput;
}

/**
 * Removes a [metafield](https://shopify.dev/docs/apps/build/custom-data/metafields) from one cart line item. Pass this to `applyMetafieldChange()` to delete a line item metafield by key and namespace.
 *
 * Available on line items being sold, including the new items of an exchange. Not available on line items being returned.
 * @publicDocs
 */
export interface MetafieldRemoveCartLineChange {
  /**
   * Identifies this as a line item metafield removal. Set this when creating a change to delete an existing metafield from a line item.
   */
  type: 'removeCartLineMetafield';

  /**
   * The `uuid` of the line item to change.
   */
  lineItemUuid: string;

  /**
   * The name of the metafield to remove.
   */
  key: string;

  /**
   * The namespace of the metafield to remove. When omitted, the app-reserved namespace (`$app`) of the app that owns the extension is used.
   */
  namespace?: string;
}

/**
 * The input for `applyMetafieldChange()`. Use the `type` property to specify the operation.
 *
 * - `MetafieldUpdateCartChange` (`type: 'updateCartMetafield'`): Creates or updates a cart [metafield](https://shopify.dev/docs/apps/build/custom-data/metafields).
 * - `MetafieldRemoveCartChange` (`type: 'removeCartMetafield'`): Removes a cart metafield.
 * - `MetafieldUpdateCartLineChange` (`type: 'updateCartLineMetafield'`): Creates or updates a metafield on a line item.
 * - `MetafieldRemoveCartLineChange` (`type: 'removeCartLineMetafield'`): Removes a metafield from a line item.
 * @publicDocs
 */
export type MetafieldChange =
  | MetafieldUpdateCartChange
  | MetafieldRemoveCartChange
  | MetafieldUpdateCartLineChange
  | MetafieldRemoveCartLineChange;

/**
 * The result of a successful metafield change. The `type` property is `'success'`.
 * @publicDocs
 */
export interface MetafieldChangeResultSuccess {
  /**
   * Indicates that the metafield change was applied successfully.
   */
  type: 'success';
}

/**
 * The result of a failed metafield change. Check the `message` property for details about what went wrong.
 * @publicDocs
 */
export interface MetafieldChangeResultError {
  /**
   * Indicates that the metafield change couldn't be applied. Check the `message` property for details.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It isn't localized and shouldn't be displayed to staff.
   *
   * Render your own localized error text rather than displaying this message
   * to staff.
   */
  message: string;
}

/**
 * The result of one change passed to `applyMetafieldChange()`. Use the `type` property to determine whether the change succeeded or failed.
 * @publicDocs
 */
export type MetafieldChangeResult =
  | MetafieldChangeResultSuccess
  | MetafieldChangeResultError;
