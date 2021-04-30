import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {CurrencyCode, CountryCode} from '../shared';

/**
 * This is a key / value storage object for extension points.
 *
 * Stored data will only be available to this specific app
 * at this specific extension point.
 *
 * The storage backend is implemented with localStorage and
 * will persist across the buyer's checkout session but this
 * is not guaranteed.
 */
export interface Storage {
  /**
   * Read and return a stored value by key.
   *
   * The stored data will be deserialized from JSON and returned as
   * its original primitive.
   *
   * This returns null if no stored data exists.
   */
  read<T = unknown>(key: string): Promise<T | null>;

  /**
   * Write stored data for this key.
   *
   * The data must be serializable to JSON.
   */
  write(key: string, data: any): Promise<void>;

  /**
   * Delete stored data by key.
   */
  delete(key: string): Promise<void>;
}

/**
 * Meta information about an extension point.
 */
export interface Extension {
  /**
   * Published version of the running extension point.
   *
   * For unpublished extensions, this will be null.
   *
   * @example 3.0.10
   */
  version: string | null;

  /**
   * URL to the script that started the extension point.
   */
  scriptUrl: string;

  /**
   * Function for subscribing to 'render' events
   *
   * A render is the first time a unique extension point is displayed
   * on the screen.
   */
  on(event: 'render', callback: () => void): void;
}

/**
 * Metadata associated with the checkout.
 */
export interface Metafield {
  /**
   * The name of the metafield. It must be between 3 and 30 characters in
   * length (inclusive).
   */
  key: string;

  /**
   * A container for a set of metafields. You need to define a custom
   * namespace for your metafields to distinguish them from the metafields
   * used by other apps. This must be between 2 and 20 characters in length (inclusive).
   */
  namespace: string;

  /**
   * The information to be stored as metadata.
   */
  value: string | number;

  /** The metafield’s information type. */
  valueType: 'integer' | 'string' | 'json_string';
}

/** Removes a public or private metafield. */
export interface MetafieldRemoveChange {
  /**
   * The type of the `MetafieldRemoveChange` API.
   */
  type: 'removeMetafield';

  /**
   * The name of the metafield to remove.
   */
  key: string;

  /**
   * The namespace of the metafield to remove.
   */
  namespace: string;
}

/**
 * Updates a public or private metafield. If a metafield with the
 * provided key and namespace does not already exist, it will be created.
 */
export interface MetafieldUpdateChange {
  /**
   * The type of the `MetafieldUpdateChange` API.
   */
  type: 'updateMetafield';

  /** The name of the metafield to update. */
  key: string;

  /** The namespace of the metafield to add. */
  namespace: string;

  /** The new information to store in the metafield. */
  value: string | number;

  /**
   * The metafield’s information type.
   */
  valueType: 'integer' | 'string' | 'json_string';
}

export type MetafieldChange = MetafieldRemoveChange | MetafieldUpdateChange;

export interface MetafieldChangeResultSuccess {
  /**
   * The type of the `MetafieldChangeResultSuccess` API.
   */
  type: 'success';
}

export interface MetafieldChangeResultError {
  /**
   * The type of the `MetafieldChangeResultError` API.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It is **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
}

export type MetafieldChangeResult =
  | MetafieldChangeResultSuccess
  | MetafieldChangeResultError;

export type Version = 'unstable';
/**
 * The following APIs are provided to all extension points.
 */
export interface StandardApi<
  ExtensionPoint extends import('../../extension-points').ExtensionPoint
> {
  /**
   * Merchant configuration for this extension.
   *
   * If the extension allows configuration, this object will hold values
   * that have been set by merchants. If the extension does not allow
   * configuration, the object will be empty.
   *
   * @example {layoutPosition: 'center'}
   */
  configuration: StatefulRemoteSubscribable<Record<string, unknown>>;

  /**
   * The Argo version being used for the extension.
   * @example 'unstable'
   */
  version: Version;

  /**
   * The IETF tag for the locale of the checkout.
   * @example 'en' for English
   */
  locale: StatefulRemoteSubscribable<string>;

  /**
   * The proposed billing address is what the buyer has input in the billing
   * address form of the payment page. The address will update once the field is
   * committed (on change) rather than every keystroke. This form value always be
   * available in the API and is distinct from shipping address, even when the buyer
   * selects the "same as shipping" option.
   */
  billingAddress: StatefulRemoteSubscribable<Address>;

  /**
   * The identifier of the running extension point.
   * @example 'Checkout::PostPurchase::Render'
   */
  extensionPoint: ExtensionPoint;

  /**
   * Meta information about the extension.
   */
  extension: Extension;

  /**
   * Key / value storage for this extension point.
   */
  storage: Storage;

  /**
   * Proposed buyer shipping address. During the information step, the address
   * will update once the field is committed (on change) rather than every keystroke.
   * Where the shipping address is not required, fields will return undefined.
   */
  shippingAddress: StatefulRemoteSubscribable<Address>;

  /** Shop where the checkout is taking place. */
  shop: Shop;

  /**
   * The metafields that apply to the current checkout. The actual resource
   * on which these metafields exists depends on the source of the checkout:
   *
   * - If the source is an order, the metafields are on the order.
   * - If the source is a draft order, the initial value of metafields are
   *   from the draft order, and any new metafields you write will be applied
   *   to the order created by this checkout.
   * - For all other sources, the metafields are only stored locally on the
   *   client creating the checkout, and will be applied to the order that
   *   results from checkout.
   *
   * These metafields are shared by all extensions running on checkout, and are
   * persisted for as long as the buyer is working on this checkout. If the data you
   * are writing is only relevant to your own merchant-facing application, you
   * should use `privateMetafields` instead. For example, if the merchant
   * might reference the metafield in a template for order confirmation emails,
   * then the metafield should be public since it will be accessed outside of
   * your application.
   *
   * Once the order is created, you can query these metafields using the
   * [GraphQL Admin API](https://shopify.dev/docs/admin-api/graphql/reference/orders/order#metafield-2021-01)
   */
  metafields: StatefulRemoteSubscribable<Metafield[]>;

  /**
   * The `privateMetafields` property is identical to `metafields`, but includes
   * the private metafields for your application instead. These metafields are
   * scoped to your application, and are shared by all extensions you author as part
   * of your application running on the checkout.
   *
   * Once the order is created, you can query these metafields using the
   * [GraphQL Admin API](https://shopify.dev/docs/admin-api/graphql/reference/orders/order#privatemetafield-2021-01).
   */
  privateMetafields: StatefulRemoteSubscribable<Metafield[]>;

  /**
   * Performs an update on a piece of metadata attached to the checkout. If
   * successful, this mutation will result in an update to the value retrieved
   * through the `metafields` property. If you want to change metadata that is
   * only ever used by your own back-office application, you should use
   * `applyPrivateMetafieldChange` instead.
   */
  applyMetafieldChange(change: MetafieldChange): Promise<MetafieldChangeResult>;

  /**
   * Performs an update on a piece of app-scoped metadata attached to the checkout.
   * If successful, this mutation will result in an update to the value retrieved
   * through the `privateMetafields` property.
   */
  applyPrivateMetafieldChange(
    change: MetafieldChange,
  ): Promise<MetafieldChangeResult>;

  /**
   * Merchandise items the buyer is purchasing.
   */
  lineItems: StatefulRemoteSubscribable<LineItem[]>;
  applyLineItemsChange(change: LineItemChange): Promise<LineItemChangeResult>;
}

export interface Shop {
  /**
   * The shop id.
   * @example 'gid://shopify/Shop/123'
   */
  id: string;
  /**
   * The name of the shop.
   */
  name: string;
  /**
   * The primary storefront url.
   */
  storefrontUrl?: string;
}

export interface Address {
  name?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  address1?: string;
  address2?: string;
  city?: string;
  postalCode?: string;
  countryCode: CountryCode;
  zoneCode?: string;
  phone?: string;
}

export {CountryCode};

export interface GeographicalCoordinates {
  latitude: number;
  longitude: number;
}

export interface LineItem {
  /**
   * Line Item id.
   * These line item IDs are not stable at the moment, they might change after any operations on the line items. You should always
   * look up for an updated ID before any call to `applyLineItemsChange` because you'll need the ID to create a `LineItemChange` object.
   * @example 'gid://shopify/MerchandiseLineItem/123'
   */
  id: string;
  /**
   * Merchandise being purchased.
   */
  merchandise: Merchandise;
  /**
   * Quantity of the Merchandise being purchased.
   */
  quantity: number;
  /**
   * Price for the merchandise multiplied by the quantity.
   */
  totalPrice: Money;
  /**
   * Line item additional custom attributes.
   */
  customAttributes: Attribute[];
}

export interface Money {
  /**
   * Price amount
   */
  amount: number;
  /**
   * The ISO 4217 format for the currency.
   * @example 'CAD' for Canadian dollar
   */
  currencyCode: CurrencyCode;
}

export interface Merchandise {
  /**
   * Merchandise id.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  id: string;
  /**
   * Merchandise title.
   */
  title: string;
  /**
   * Merchandise vendor name.
   */
  vendor: string;
  /**
   * Merchandise image.
   */
  image?: MerchandiseImage;
  /**
   * Merchandise product type.
   */
  productType: string;
  /**
   * Merchandise options.
   * @example Variant name and value
   */
  options: MerchandiseOption[];
}

export interface MerchandiseImage {
  /**
   * Image URL.
   */
  url: string;
  /**
   * Alternative text for the image.
   */
  altText?: string;
}

export interface Attribute {
  /**
   * Key for the attribute.
   */
  key: string;
  /**
   *Value for the attribute.
   */
  value: string;
}

export interface MerchandiseOption {
  /**
   *Name of the merchandise option.
   */
  name: string;
  /**
   *Value of the merchandise option.
   */
  value: string;
}

export interface LineItemChangeResultSuccess {
  type: 'success';
}

export interface LineItemChangeResultError {
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It is **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
}

export type LineItemChangeResult =
  | LineItemChangeResultSuccess
  | LineItemChangeResultError;

export type LineItemChange =
  | LineItemAddChange
  | LineItemRemoveChange
  | LineItemUpdateChange;

export interface LineItemAddChange {
  type: 'addLineItem';
  /**
   * Merchandise id being added.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  merchandiseId: string;
  /**
   * Quantity of merchandised being added.
   */
  quantity: number;
  /**
   * Attributes associated to the line item.
   */
  customAttributes?: Attribute[];
}

export interface LineItemRemoveChange {
  type: 'removeLineItem';
  /**
   * Line Item id.
   * @example 'gid://shopify/MerchandiseLineItem/123'
   */
  id: string;
  /**
   * Quantity being removed for this line item.
   */
  quantity: number;
}

export interface LineItemUpdateChange {
  type: 'updateLineItem';
  /**
   * Line Item id.
   * @example 'gid://shopify/MerchandiseLineItem/123'
   */
  id: string;
  /**
   * New merchandise id for the line item.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  merchandiseId?: string;
  /**
   * New quantity for the line item.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  quantity?: number;
  /**
   * New attributes for the line item.
   */
  customAttributes?: Attribute[];
}
