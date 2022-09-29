import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {CurrencyCode, CountryCode, Timezone} from '../shared';

/**
 * A key-value storage object for extension points.
 *
 * Stored data is only available to this specific app
 * at this specific extension point.
 *
 * The storage backend is implemented with `localStorage` and
 * should persist across the buyer's checkout session.
 * However, data persistence isn't guaranteed.
 */
export interface Storage {
  /**
   * Read and return a stored value by key.
   *
   * The stored data is deserialized from JSON and returned as
   * its original primitive.
   *
   * Returns `null` if no stored data exists.
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
 * The high-level capabilities an extension is allowed to have access to.
 *
 * * `network_access` allows an extension to make network calls via fetch() and
 *    is requested by a partner
 *
 * * `block_progress` allows an extension to block a buyer's progress through
 *    checkout and may be granted by a merchant in differing checkout contexts
 */
export type Capability = 'network_access' | 'block_progress';

/**
 * Meta information about an extension point.
 */
export interface Extension {
  /**
   * The published version of the running extension point.
   *
   * For unpublished extensions, the value is `null`.
   *
   * @example 3.0.10
   */
  version?: string;

  /**
   * The URL to the script that started the extension point.
   */
  scriptUrl: string;

  /**
   * Whether your extension is currently rendered to the screen.
   *
   * Shopify might render your extension before it's visible in the UI,
   * typically to pre-render extensions that will appear on a later step of the
   * checkout.
   *
   * Your extension might also continue to run after the buyer has navigated away
   * from where it was rendered. The extension continues running so that
   * your extension is immediately available to render if the buyer navigates back.
   */
  rendered: StatefulRemoteSubscribable<boolean>;

  /**
   * The allowed capabilities of the extension, defined
   * in your `shopify.ui.extension.toml` file .
   *
   * `network_access`:
   * You must [request access](https://shopify.dev/api/checkout-extensions/checkout/configuration#complete-a-request-for-network-access)
   * to make network calls.
   *
   * `block_progress`:
   * Merchants control whether your extension [can block checkout progress](https://shopify.dev/api/checkout-extensions/checkout/configuration#block-progress)
   */
  capabilities: StatefulRemoteSubscribable<Capability[]>;
}

/**
 * Removes a note
 */
export interface NoteRemoveChange {
  /**
   * The type of the `NoteRemoveChange` API.
   */
  type: 'removeNote';
}

/**
 * An Update to a note on the order.
 * for example, the buyer could request detailed packaging instructions in an order note
 */
export interface NoteUpdateChange {
  /**
   * The type of the `NoteUpdateChange` API.
   */
  type: 'updateNote';
  /**
   * The new value of the note.
   */
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
   * Returns a localized number.
   *
   * This function behaves like the standard `Intl.NumberFormat()`
   * with a style of `decimal` applied. It uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatNumber: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * Returns a localized currency value.
   *
   * This function behaves like the standard `Intl.NumberFormat()`
   * with a style of `currency` applied. It uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatCurrency: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * Returns a localized date value.
   *
   * This function behaves like the standard `Intl.DateTimeFormatOptions()` and uses
   * the buyer's locale by default. Formatting options can be passed in as
   * options.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat0
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatDate: (
    date: Date,
    options?: {inExtensionLocale?: boolean} & Intl.DateTimeFormatOptions,
  ) => string;

  /**
   * Returns translated content in the buyer's locale,
   * as supported by the extension.
   *
   * - `options.count` is a special numeric value used in pluralization.
   * - The other option keys and values are treated as replacements for interpolation.
   * - If the replacements are all primitives, then `translate()` returns a single string.
   * - If replacements contain UI components, then `translate()` returns an array of elements.
   */
  translate: I18nTranslate;
}

export interface Language {
  /**
   * The BCP-47 language tag. It may contain a dash followed by an ISO 3166-1 alpha-2 region code.
   *
   * @example 'en' for English, or 'en-US' for English local to United States.
   * @see https://en.wikipedia.org/wiki/IETF_language_tag
   * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  isoCode: string;
}

export interface Currency {
  /**
   * The ISO-4217 code for this currency.
   * @see https://www.iso.org/iso-4217-currency-codes.html
   */
  isoCode: CurrencyCode;
}

export interface Localization {
  /**
   * The currency that the buyer sees for money amounts in the checkout.
   */
  currency: StatefulRemoteSubscribable<Currency>;

  /**
   * The buyer’s time zone.
   */
  timezone: StatefulRemoteSubscribable<Timezone>;

  /**
   * The language the buyer sees in the checkout.
   */
  language: StatefulRemoteSubscribable<Language>;

  /**
   * This is the buyer's language, as supported by the extension.
   * If the buyer's actual language is not supported by the extension,
   * this is the fallback locale used for translations.
   *
   * For example, if the buyer's language is 'fr-CA' but your extension
   * only supports translations for 'fr', then the `isoCode` for this
   * language is 'fr'. If your extension does not provide french
   * translations at all, this value is the default locale for your
   * extension (that is, the one matching your .default.json file).
   */
  extensionLanguage: StatefulRemoteSubscribable<Language>;
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
   * Provides details on buyer progression through the steps of the checkout.
   */
  buyerJourney: {
    /**
     * A function for intercepting and preventing progress on checkout. You can block
     * checkout progress by returning an object with `{behavior: 'block', reason: InvalidResultReason.InvalidExtensionState}`.
     * If you do, then you're expected to also update some part of your UI to reflect the reason why progress
     * was blocked.
     *
     * To block checkout progress, you must set the [block_progress](https://shopify.dev/api/checkout-extensions/checkout/configuration#block-progress) capability in your extension's configuration.
     */
    intercept(interceptor: Interceptor): Promise<() => void>;
  };

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
   * Key-value storage for the extension point.
   */
  storage: Storage;

  /**
   * The proposed buyer shipping address. During the information step, the address
   * updates when the field is committed (on change) rather than every keystroke.
   * An address value is only present if delivery is required. Otherwise, the
   * subscribable value is undefined.
   */
  shippingAddress?: StatefulRemoteSubscribable<MailingAddress | undefined>;

  /**
   * Information about the buyer that is interacting with the checkout.
   */
  buyerIdentity?: BuyerIdentity;

  /** Shop where the checkout is taking place. */
  shop: Shop;

  /**
   * Details on the costs the buyer will pay for this checkout.
   */
  cost: CartCost;

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
   * A list of lines containing information about the items the customer intends to purchase.
   */
  lines: StatefulRemoteSubscribable<CartLine[]>;

  /**
   * A list of the line items displayed in the checkout. These may be the same as lines, or may be a subset.
   */
  presentmentLines: StatefulRemoteSubscribable<PresentmentCartLine[]>;

  /**
   * Performs an update on the merchandise line items. It resolves when the new
   * line items have been negotiated and results in an update to the value
   * retrieved through the `lines` property.
   */
  applyCartLinesChange(change: CartLineChange): Promise<CartLineChangeResult>;

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
   * Details about the location, language, and currency of the buyer. For utilities to easily
   * format and translate content based on these details, you can use the `i18n` object instead.
   */
  localization: Localization;

  /**
   * Utilities for translating content and formatting values according to the current `localization`
   * of the checkout.
   */
  i18n: I18n;

  /**
   * The settings matching the settings definition written in the `shopify.ui.extension.toml` file.
   *
   * **Note:** When an extension is being installed in the editor, the settings will be empty until
   * a merchant sets a value. In that case, this object will be updated in real time as a merchant fills in the settings.
   */
  settings: StatefulRemoteSubscribable<ExtensionSettings>;

  /**
   * Exposes a `analytics.publish` method to publish analytics events.
   */
  analytics: Analytics;
}

export interface BuyerIdentity {
  /**
   * The customer account from the buyer. This value will update when there's a
   * change in the account. The value is undefined if the buyer isn’t a known customer
   * for this shop.
   */
  customer: StatefulRemoteSubscribable<Customer | undefined>;
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

export interface MailingAddress {
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
  zip?: string;

  /**
   * The ISO 3166 Alpha-2 format for the buyer's country. Refer to https://www.iso.org/iso-3166-country-codes.html.
   * @example 'CA' for Canada.
   */
  countryCode?: CountryCode;

  /**
   * The buyer's zone code, such as state, province, prefecture, or region.
   * @example 'ON' for Ontario.
   */
  provinceCode?: string;

  /**
   * The buyer's phone number.
   * @example '+1 613 111 2222'.
   */
  phone?: string;
}

export interface CartCost {
  /**
   * A `Money` value representing the minimum a buyer can expect to pay at the current
   * step of checkout. This value excludes amounts yet to be negotiated. For example,
   * the information step might not have delivery costs calculated.
   */
  totalAmount: StatefulRemoteSubscribable<Money>;
}

export interface CartLine {
  /**
   * These line item IDs are not stable at the moment, they might change after
   * any operations on the line items. You should always look up for an updated
   * ID before any call to `applyCartLinesChange` because you'll need the ID to
   * create a `CartLineChange` object.
   * @example 'gid://shopify/CartLine/123'
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
   * The details about the cost components attributed to the cart line.
   */
  cost: CartLineCost;

  /**
   * The line item additional custom attributes.
   */
  attributes: Attribute[];
}

export interface CartLineCost {
  /**
   * The total amount the buyer can expect to pay that is directly attributable to a single
   * cart line.
   */
  totalAmount: Money;
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

export type Merchandise = ProductVariant;

export interface BaseMerchandise {
  /**
   * The merchandise ID.
   */
  id: string;
}

export interface ProductVariant extends BaseMerchandise {
  type: 'variant';

  /**
   * A globally-unique identifier.
   * @example 'gid://shopify/ProductVariant/123'
   */
  id: string;

  /**
   * The product variant’s title.
   */
  title: string;

  /**
   * Image associated with the product variant. This field falls back to the product
   * image if no image is available.
   */
  image?: ImageDetails;

  /**
   * List of product options applied to the variant.
   */
  selectedOptions: SelectedOption[];

  /**
   * The product object that the product variant belongs to.
   */
  product: Product;
}

export interface Product {
  /**
   * A globally-unique identifier.
   */
  id: string;

  /**
   * The product’s vendor name.
   */
  vendor: string;

  /**
   * A categorization that a product can be tagged with, commonly used for filtering and searching.
   */
  productType: string;
}

export interface ImageDetails {
  /**
   * The image URL.
   */
  url: string;

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

export interface SelectedOption {
  /**
   * The name of the merchandise option.
   */
  name: string;

  /**
   * The value of the merchandise option.
   */
  value: string;
}

export interface PresentmentCartLine {
  /**
   * The ID of the present cart line. This ID isn't stable and might change after
   * any operations on the line items.
   * @example 'gid://shopify/PresentmentCartLine/123'
   */
  id: string;

  /**
   * The quantity of the merchandise being purchased.
   */
  quantity: number;

  /**
   * The details about the cost components attributed to the presentment cart line.
   */
  cost: PresentmentCartLineCost;

  /**
   * The title of the line item.
   */
  title: string;

  /**
   * The subtitle of the line item.
   */
  subtitle?: string;

  /**
   * The image associated with the line item.
   */
  image?: ImageDetails;

  /**
   * The merchandise lines being purchased.
   */
  lines: CartLine[];
}

export interface PresentmentCartLineCost {
  /**
   * The total cost of the merchandise line.
   */
  totalAmount: Money;
}

export interface CartLineChangeResultSuccess {
  /**
   * Indicates that the line item was changed successfully.
   */
  type: 'success';
}

export interface CartLineChangeResultError {
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

export type CartLineChangeResult =
  | CartLineChangeResultSuccess
  | CartLineChangeResultError;

export type CartLineChange =
  | CartLineAddChange
  | CartLineRemoveChange
  | CartLineUpdateChange;

export interface CartLineAddChange {
  /**
   * An identifier for changes that add line items.
   */
  type: 'addCartLine';

  /**
   * The merchandise ID being added.
   * @example 'gid://shopify/ProductVariant/123'
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

export interface CartLineRemoveChange {
  /**
   * An identifier for changes that remove line items.
   */
  type: 'removeCartLine';

  /**
   * Line Item ID.
   * @example 'gid://shopify/CartLine/123'
   */
  id: string;

  /**
   * The quantity being removed for this line item.
   */
  quantity: number;
}

export interface CartLineUpdateChange {
  /**
   * An identifier for changes that update line items.
   */
  type: 'updateCartLine';

  /**
   * Line Item ID.
   * @example 'gid://shopify/CartLine/123'
   */
  id: string;

  /**
   * The new merchandise ID for the line item.
   * @example 'gid://shopify/ProductVariant/123'
   */

  merchandiseId?: string;
  /**
   * The new quantity for the line item.
   */
  quantity?: number;

  /**
   * The new attributes for the line item.
   */
  attributes?: Attribute[];
}

type InterceptorResult = InterceptorResultAllow | InterceptorResultBlock;

interface InterceptorResultAllow {
  /**
   * Indicates that the buyer was allowed to progress through checkout.
   */
  behavior: 'allow';
}

interface InterceptorResultBlock {
  /**
   * Indicates that some part of the checkout UI intercepted and prevented
   * the buyer’s progress. The buyer typically needs to take some action
   * to resolve this issue and to move on to the next step.
   */
  behavior: 'block';
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
   * The reason for blocking the interceptor request. This value isn't presented to
   * the buyer, so it doesn't need to be localized. The value is used only for Shopify’s
   * own internal debugging and metrics.
   */
  reason: string;

  /**
   * This callback is called when all interceptors finish. We recommend
   * setting errors or reasons for blocking at this stage, so that all the errors in
   * the UI show up at once.
   * @param result InterceptorResult with behavior as either 'allow' or 'block'
   */
  perform(result: InterceptorResult): void | Promise<void>;
}

export interface InterceptorProps {
  /**
   * Whether the interceptor has the capability to block a buyer's progress through
   * checkout. This ability might be granted by a merchant in differing checkout contexts.
   */
  canBlockProgress: boolean;
}

export interface Interceptor {
  /**
   * A function for intercepting and preventing navigation on checkout. You can block
   * navigation by returning an object with `{behavior: 'block', reason: InvalidResultReason.InvalidExtensionState}`.
   * If you do, then you're expected to also update some part of your UI to reflect the reason why navigation
   * was blocked.
   */
  (interceptorProps: InterceptorProps):
    | InterceptorRequest
    | Promise<InterceptorRequest>;
}

/**
 * Information about a customer who has previously purchased from this shop.
 */
export interface Customer {
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
  image: ImageDetails;
  /**
   * Defines if the customer accepts marketing activities.
   */
  acceptsMarketing: boolean;
}

/**
 * The merchant-defined setting values for the extension.
 */
export interface ExtensionSettings {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Publish method to emit analytics events to Web Pixels.
 */
export interface Analytics {
  publish(name: string, data: {[key: string]: unknown}): Promise<boolean>;
}
