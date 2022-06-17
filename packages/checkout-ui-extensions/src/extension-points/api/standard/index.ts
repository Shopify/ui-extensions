import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {CurrencyCode, CountryCode, Timezone} from '../shared';

/**
 * A key-value storage object for extension points.
 *
 * Stored data is only available to this specific app
 * at this specific extension point.
 *
 * The storage backend is implemented with `localStorage` and
 * should persist across the buyer's checkout session, however, this
 * is not guaranteed.
 */
export interface Storage {
  /**
   * Read and return a stored value by key.
   *
   * The stored data is deserialized from JSON and returned as
   * its original primitive.
   *
   * Returns null if no stored data exists.
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
   * For unpublished extensions, the value is null.
   *
   * @example 3.0.10
   */
  version?: string;

  /**
   * URL to the script that started the extension point.
   */
  scriptUrl: string;

  /**
   * Whether your extension is currently rendered to the screen.
   *
   * Shopify may render your extension before it's actually visible in the UI,
   * typically to pre-render extensions that will appear on a later step of the
   * checkout.
   *
   * Your extension may also continue to run “in the background” after the buyer
   * has navigated away from where it was rendered. This is done so that, if the
   * buyer navigates back, your extension is immediately available to render.
   */
  rendered: StatefulRemoteSubscribable<boolean>;
}

/**
 * Removes a note
 */
export interface NoteRemoveChange {
  type: 'removeNote';
}

/**
 * An Update to a note on the order.
 * for example, the buyer could request detailed packaging instructions in an order note
 */
export interface NoteUpdateChange {
  type: 'updateNote';
  note: string;
}

export type NoteChange = NoteRemoveChange | NoteUpdateChange;

export interface NoteChangeResultSuccess {
  /**
   * The type of the `NoteChangeResultSuccess` API.
   */
  type: 'success';
}

export interface NoteChangeResultError {
  /**
   * The type of the `NoteChangeResultError` API.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It is **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
}

export type NoteChangeResult = NoteChangeResultSuccess | NoteChangeResultError;

/**
 * Updates an attribute on the order. If an attribute with the
 * provided key does not already exist, it gets created.
 */
export interface AttributeUpdateChange {
  /**
   * The type of the `AttributeUpdateChange` API.
   */
  type: 'updateAttribute';

  /**
   * Key of the attribute to add or update
   */
  key: string;

  /**
   * Value for the attribute to add or update
   */
  value: string;
}

export type AttributeChange = AttributeUpdateChange;

/**
 * The returned result of a successful update to an attribute.
 */
export interface AttributeChangeResultSuccess {
  /**
   * The type of the `AttributeChangeResultSuccess` API.
   */
  type: 'success';
}

/**
 * The returned result of an unsuccessful update to an attribute
 * with a message detailing the type of error that occurred.
 */
export interface AttributeChangeResultError {
  /**
   * The type of the `AttributeChangeResultError` API.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It is **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
}

export type AttributeChangeResult =
  | AttributeChangeResultSuccess
  | AttributeChangeResultError;

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

/** Removes a metafield. */
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
 * Updates a metafield. If a metafield with the
 * provided key and namespace does not already exist, it gets created.
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

/**
 * Represents a custom metadata attached to a resource.
 */
export interface AppMetafield {
  /** The key name of a metafield. */
  key: string;

  /** The namespace for a metafield. */
  namespace: string;

  /** The value of a metafield. */
  value: string | number | boolean;

  /** The metafield’s information type. */
  valueType: 'boolean' | 'float' | 'integer' | 'json_string' | 'string';
}

/**
 * The metafield owner.
 */
export interface AppMetafieldEntryTarget {
  /** The type of the metafield owner. */
  type: 'customer' | 'product' | 'shop' | 'variant';

  /** The numeric owner ID that is associated with the metafield. */
  id: string;
}

/**
 * A metafield associated with the shop or a resource on the checkout.
 */
export interface AppMetafieldEntry {
  /** The target that is associated to the metadata. */
  target: AppMetafieldEntryTarget;

  /** The metadata information. */
  metafield: AppMetafield;
}

export type Version = 'unstable';

/**
 * This defines the i18n.translate() signature.
 */
export interface I18nTranslate {
  /**
   * This returns a translated string matching a key in a locale file.
   *
   * @example translate("banner.title")
   */
  <ReplacementType = string>(
    key: string,
    options?: {[placeholderKey: string]: ReplacementType | string | number},
  ): ReplacementType extends string | number
    ? string
    : (string | ReplacementType)[];
}

export interface I18n {
  /**
   * This is the buyer's locale.
   * @example 'en' for English, or 'en-US' for English local to United States.
   *
   * The value is a BCP-47 language tag. It may contain a dash followed by an ISO 3166-1 alpha-2 region code.
   *
   * See https://en.wikipedia.org/wiki/IETF_language_tag
   * See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  locale: StatefulRemoteSubscribable<string>;

  /**
   * This is the buyer's locale, as supported by the extension.
   * @example en-US
   *
   * If the buyer's actual locale is not supported by the extension,
   * this is the fallback locale used for translations.
   * For example, if the buyer's locale is fr-CA but the extension
   * only supports translations for fr then fr is the extension's locale.
   *
   * The value is a BCP-47 language tag.
   * See https://en.wikipedia.org/wiki/IETF_language_tag
   */
  extensionLocale: StatefulRemoteSubscribable<string>;

  /**
   * This returns a localized number.
   *
   * This behaves like the standard Intl.NumberFormat()
   * with a style of 'decimal' and uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatNumber: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * This returns a localized currency value.
   *
   * This behaves like the standard Intl.NumberFormat()
   * with a style of 'currency' and uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatCurrency: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * This returns translated content in the buyer's locale,
   * as supported by the extension.
   *
   * - options.count is a special numeric value used in pluralization.
   * - The other option keys and values are treated as replacements for interpolation.
   * - If the replacements are all primitives, translate() returns a single string.
   * - If replacements contain UI components, translate() returns an array of elements.
   */
  translate: I18nTranslate;
}

export interface Buyer {
  /**
   * This is the buyer's currency.
   * @example USD
   *
   * The value is an ISO-4217 code.
   * See https://www.iso.org/iso-4217-currency-codes.html
   */
  currency: StatefulRemoteSubscribable<CurrencyCode>;

  /**
   * This is the buyer's time zone.
   * @example America/New_York
   *
   * The value is an IANA time zone.
   * See https://www.iana.org/time-zones
   */
  timezone: StatefulRemoteSubscribable<Timezone>;
}

/**
 * The following APIs are provided to all extension points.
 */
export interface StandardApi<
  ExtensionPoint extends import('../../extension-points').ExtensionPoint
> {
  /**
   * The renderer version being used for the extension.
   *
   * @example 'unstable'
   */
  version: Version;

  /**
   * The minimum a buyer can expect to pay at the current step of checkout.
   * This value excludes amounts that are yet to be negotiated. For example, the information step
   * may not have delivery costs calculated.
   */
  runningTotal: StatefulRemoteSubscribable<Money | undefined>;

  /**
   * Provides details on buyer progression through the steps of the checkout.
   */
  buyerJourney: {
    /**
     * A function for intercepting and preventing navigation on checkout. You can block
     * navigation by returning an object with `{behavior: 'block', reason: InvalidResultReason.InvalidExtensionState}`. If you do, you are
     * expected to also update some part of your UI to reflect the reason why navigation
     * was blocked.
     */
    intercept(interceptor: Interceptor): Promise<() => void>;
  };

  /**
   * The proposed billing address is what the buyer has input in the billing
   * address form of the payment page. The address updates when the field is
   * committed (on change) rather than every keystroke. This form value is always
   * available in the API and is distinct from the shipping address, even when the buyer
   * selects the "same as shipping" option. If the buyer doesn't specify a direct payment
   * line, then the billing address is not collected and the subscribable value
   * is undefined.
   */
  billingAddress: StatefulRemoteSubscribable<Address | undefined>;

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
   * The primaryAddress field is a shortcut to the first address a buyer fills out in checkout, if any.
   * When a checkout requires shipping, this field is identical to the `shippingAddress` field.
   * When a checkout does not require shipping, this field is identical to the `billingAddress` field.
   */
  primaryAddress: StatefulRemoteSubscribable<Address | undefined>;

  /**
   * Key / value storage for this extension point.
   */
  storage: Storage;

  /**
   * The proposed buyer shipping address. During the information step, the address
   * updates when the field is committed (on change) rather than every keystroke.
   * An address value is only present if delivery is required. Otherwise, the
   * subscribable value is undefined.
   */
  shippingAddress: StatefulRemoteSubscribable<Address | undefined>;

  /** Shop where the checkout is taking place. */
  shop: Shop;

  /**
   * A note left by the customer to the merchant, either in their cart or during checkout.
   */
  note: StatefulRemoteSubscribable<string | undefined>;

  /**
   * Performs an update on the note attached to the cart and checkout. If
   * successful, this mutation results in an update to the value retrieved
   * through the `note` property.
   */
  applyNoteChange(change: NoteChange): Promise<NoteChangeResult>;

  /**
   * Custom attributes left by the customer to the merchant, either in their cart or during checkout.
   */
  attributes: StatefulRemoteSubscribable<Attribute[] | undefined>;

  /**
   * Performs an update on an attribute attached to the cart and checkout. If
   * successful, this mutation results in an update to the value retrieved
   * through the `attributes` property.
   */
  applyAttributeChange(change: AttributeChange): Promise<AttributeChangeResult>;

  /**
   * The account belonging to the customer. This value updates when there's a
   * change in the account. The value is undefined if the customer doesn't have
   * an account or if they aren't logged in.
   */
  customerAccount: StatefulRemoteSubscribable<CustomerAccount | undefined>;

  /**
   * The metafields that apply to the current checkout. The actual resource
   * on which these metafields exist depends on the source of the checkout:
   *
   * - If the source is an order, then the metafields are on the order.
   * - If the source is a draft order, then the initial value of metafields are
   *   from the draft order, and any new metafields you write are applied
   *   to the order created by this checkout.
   * - For all other sources, the metafields are only stored locally on the
   *   client creating the checkout, and are applied to the order that
   *   results from checkout.
   *
   * These metafields are shared by all extensions running on checkout, and
   * persist for as long as the customer is working on this checkout.
   *
   * Once the order is created, you can query these metafields using the
   * [GraphQL Admin API](https://shopify.dev/docs/admin-api/graphql/reference/orders/order#metafield-2021-01)
   */
  metafields: StatefulRemoteSubscribable<Metafield[]>;

  /**
   * Performs an update on a piece of metadata attached to the checkout. If
   * successful, this mutation results in an update to the value retrieved
   * through the `metafields` property.
   */
  applyMetafieldChange(change: MetafieldChange): Promise<MetafieldChangeResult>;

  /**
   * Merchandise items the customer is purchasing.
   */
  lineItems: StatefulRemoteSubscribable<LineItem[]>;
  /**
   * Performs an update on the merchandise line items. It resolves when the new
   * line items have been negotiated and results in an update to the value
   * retrieved through the `lineItems` property.
   */
  applyLineItemsChange(change: LineItemChange): Promise<LineItemChangeResult>;
  /**
   * The metafields requested in the `shopify.ui.extension.toml` file. These metafields are
   * updated when there's a change in the merchandise items being purchased by the customer.
   *
   * NOTE: There is a delay between the merchandise items updating and receiving the
   * updated metafield values. This is a temporary limitation and should get resolved when
   * this API goes public such that expected behavior would be that the metafields data
   * are synchronous with the merchandise items' updates.
   */
  appMetafields: StatefulRemoteSubscribable<AppMetafieldEntry[]>;

  /**
   * Defines the i18n (internationalization) API for the extension.
   */
  i18n: I18n;

  /**
   * This defines the buyer API for the extension.
   * It provides the currency and timezone of the buyer.
   */
  buyer: Buyer;
}

export interface Shop {
  /**
   * The shop ID.
   * @example 'gid://shopify/Shop/123'
   */
  id: string;
  /**
   * The name of the shop.
   */
  name: string;
  /**
   * The primary storefront URL.
   */
  storefrontUrl?: string;
  /**
   * The shop's myshopify.com domain.
   */
  myshopifyDomain: string;
}

export interface Address {
  /**
   * The buyer's full name.
   * @example 'John Doe'
   */
  name?: string;

  /**
   * The buyer's first name.
   * @example 'John'
   */
  firstName?: string;

  /**
   * The buyer's last name.
   * @example 'Doe'
   */
  lastName?: string;

  /**
   * The buyer's company name.
   * @example 'Shopify'
   */
  company?: string;

  /**
   * The first line of the buyer's address, including street name and number.
   * @example '151 O'Connor Street'
   */
  address1?: string;

  /**
   * The second line of the buyer's address, like apartment number, suite, etc.
   * @example 'Ground floor'
   */
  address2?: string;

  /**
   * The buyer's city.
   * @example 'Ottawa'
   */
  city?: string;

  /**
   * The buyer's postal or ZIP code.
   * @example 'K2P 2L8'
   */
  postalCode?: string;

  /**
   * The ISO 3166 Alpha-2 format for the buyer's country. Refer to https://www.iso.org/iso-3166-country-codes.html.
   * @example 'CA' for Canada.
   */
  countryCode?: CountryCode;

  /**
   * The buyer's zone code, such as state, province, prefecture, or region.
   * @example 'ON' for Ontario.
   */
  zoneCode?: string;

  /**
   * The buyer's phone number.
   * @example '+1 613 111 2222'.
   */
  phone?: string;
}

export interface GeographicalCoordinates {
  latitude: number;
  longitude: number;
}

export interface LineItem {
  /**
   * These line item IDs are not stable at the moment, they might change after
   * any operations on the line items. You should always look up for an updated
   * ID before any call to `applyLineItemsChange` because you'll need the ID to
   * create a `LineItemChange` object.
   * @example 'gid://shopify/MerchandiseLineItem/123'
   */
  id: string;
  /**
   * The merchandise being purchased.
   */
  merchandise: Merchandise;
  /**
   * The quantity of the merchandise being purchased.
   */
  quantity: number;
  /**
   * The price for the merchandise multiplied by the quantity.
   */
  totalPrice: Money;
  /**
   * The line item additional custom attributes.
   */
  attributes: Attribute[];
}

export interface Money {
  /**
   * The price amount.
   */
  amount: number;
  /**
   * The ISO 4217 format for the currency.
   * @example 'CAD' for Canadian dollar
   */
  currencyCode: CurrencyCode;
}

export type Merchandise = ProductVariantMerchandise;

export interface BaseMerchandise {
  /**
   * The merchandise ID.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  id: string;
}

export interface ProductVariantMerchandise extends BaseMerchandise {
  type: 'variant';
  /**
   * The merchandise title.
   */
  title: string;
  /**
   * The merchandise vendor name.
   */
  vendor: string;
  /**
   * The merchandise image.
   */
  image?: MerchandiseImage;
  /**
   * The merchandise product type.
   */
  productType: string;
  /**
   * The merchandise options.
   * @example Variant name and value
   */
  options: MerchandiseOption[];
}

export interface Image {
  /**
   * The image URL.
   */
  url: string;
}

export interface MerchandiseImage extends Image {
  /**
   * The alternative text for the image.
   */
  altText?: string;
}

export interface Attribute {
  /**
   * The key for the attribute.
   */
  key: string;

  /**
   * The value for the attribute.
   */
  value: string;
}

export interface MerchandiseOption {
  /**
   * The name of the merchandise option.
   */
  name: string;
  /**
   * The value of the merchandise option.
   */
  value: string;
}

export interface LineItemChangeResultSuccess {
  /**
   * Indicates that the line item was changed successfully.
   */
  type: 'success';
}

export interface LineItemChangeResultError {
  /**
   * Indicates that the line item was not changed successfully. Refer to the `message` property for details about the error.
   */
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
  /**
   * An identifier for changes that add line items.
   */
  type: 'addLineItem';
  /**
   * The merchandise ID being added.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  merchandiseId: string;
  /**
   * The quantity of the merchandise being added.
   */
  quantity: number;
  /**
   * The attributes associated with the line item.
   */
  attributes?: Attribute[];
}

export interface LineItemRemoveChange {
  /**
   * An identifier for changes that remove line items.
   */
  type: 'removeLineItem';

  /**
   * Line Item ID.
   * @example 'gid://shopify/MerchandiseLineItem/123'
   */
  id: string;
  /**
   * The quantity being removed for this line item.
   */
  quantity: number;
}

export interface LineItemUpdateChange {
  /**
   * An identifier for changes that update line items.
   */
  type: 'updateLineItem';

  /**
   * Line Item ID.
   * @example 'gid://shopify/MerchandiseLineItem/123'
   */
  id: string;
  /**
   * The new merchandise ID for the line item.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  merchandiseId?: string;
  /**
   * The new quantity for the line item.
   * @example 'gid://shopify/ProductVariantMerchandise/123'
   */
  quantity?: number;
  /**
   * The new attributes for the line item.
   */
  attributes?: Attribute[];
}

export enum InvalidResultReason {
  MissingSourceId = 'MISSING_SOURCE_ID',
  BlankSubscriptionAgreement = 'BLANK_SUBSCRIPTION_AGREEMENT',
  EmptyPaymentLines = 'EMPTY_PAYMENT_LINES',
  MissingTermsOfService = 'MISSING_TERMS_OF_SERVICE',
  CardFieldInputIsInvalid = 'CARD_FIELD_INPUT_IS_INVALID',
  CardFieldsIsLoading = 'CARD_FIELDS_IS_LOADING',
  InstallmentsFailed = 'INSTALLMENTS_FAILED',
  ShopPayPaymentFailed = 'SHOPPAY_PAYMENT_FAILED',
  MissingEmailInPaypalExpress = 'MISSING_EMAIL_IN_PAYPAL_EXPRESS',
  RedirectingToAmazonPayClassic = 'REDIRECTING_TO_AMAZON_PAY_CLASSIC',
  RedirectingToShopPay = 'REDIRECTING_TO_SHOP_PAY',
  InvalidAddress = 'INVALID_ADDRESS',
  UnknownReason = 'UNKNOWN_REASON',
  InvalidExtensionState = 'INVALID_EXTENSION_STATE',
}

type InterceptorResult = InterceptorResultAllow | InterceptorResultBlock;

interface InterceptorResultAllow {
  /**
   * Allows the buyer's journey to continue after interception.
   */
  behavior: 'allow';
}
// The reasons are used for tracing and debugging purposes.
interface InterceptorResultBlock {
  /**
   * Blocks the buyer's journey from continuing after interception.
   *
   * For example, if the buyer needs to resolve an error in the extension UI, the interceptor can block checkout until it's resolved.
   */
  behavior: 'block';

  /**
   * An array of reasons why the interceptor blocked the buyer's journey.
   */
  reasons: InvalidResultReason[];
}

export type InterceptorRequest =
  | InterceptorRequestAllow
  | InterceptorRequestBlock;

interface InterceptorRequestAllow {
  /**
   * Indicates that the interceptor will allow the buyer's journey to continue.
   */
  behavior: 'allow';
  /**
   * This callback is called when all interceptors finish. We recommend
   * setting errors or reasons for blocking at this stage, so that all the errors in
   * the UI show up at once.
   * @param result InterceptorResult with behavior as either 'allow' or 'block'
   */
  perform?(result: InterceptorResult): void | Promise<void>;
}
// The reason is used for tracing and debugging purposes.
interface InterceptorRequestBlock {
  /**
   * Indicates that the interceptor will block the buyer's journey from continuing.
   */
  behavior: 'block';

  /**
   * The reason for blocking the interceptor request.
   */
  reason: InvalidResultReason;
  /**
   * This callback is called when all interceptors finish. We recommend
   * setting errors or reasons for blocking at this stage, so that all the errors in
   * the UI show up at once.
   * @param result InterceptorResult with behavior as either 'allow' or 'block'
   */
  perform(result: InterceptorResult): void | Promise<void>;
}

export interface Interceptor {
  (): InterceptorRequest | Promise<InterceptorRequest>;
}

/**
 * Information about a customer account.
 */
export interface CustomerAccount {
  /**
   * Customer ID.
   * @example 'gid://shopify/Customer/123'
   */
  id: string;
  /**
   * The email of the customer.
   */
  email?: string;
  /**
   * The phone number of the customer.
   */
  phone?: string;
  /**
   * The full name of the customer.
   */
  fullName?: string;
  /**
   * The first name of the customer.
   */
  firstName?: string;
  /**
   * The last name of the customer.
   */
  lastName?: string;
  /**
   * The image associated with the customer.
   */
  image: Image;
  /**
   * Defines if the customer accepts marketing activities.
   */
  acceptsMarketing: boolean;
}
