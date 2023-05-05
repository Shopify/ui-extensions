import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {
  CurrencyCode,
  CountryCode,
  Timezone,
  GraphQLError,
  StorefrontApiVersion,
  ValidationError,
} from '../shared';

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
 * The capabilities an extension has access to.
 *
 * * [`api_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#api-access): the extension can access the Storefront API.
 *
 * * [`network_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access): the extension can make external network calls.
 *
 * * [`block_progress`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress): the extension can block a buyer's progress and the merchant has allowed this blocking behavior.
 */
export type Capability = 'api_access' | 'network_access' | 'block_progress';

/**
 * Meta information about an extension point.
 */
export interface Extension {
  /**
   * The published version of the running extension point.
   *
   * For unpublished extensions, the value is `undefined`.
   *
   * @example 3.0.10
   */
  version?: string;

  /**
   * The API version that was set in the extension config file.
   *
   * @example '2023-01', '2022-10'
   */
  apiVersion: ApiVersion;

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
   * in your [shopify.ui.extension.toml](https://shopify.dev/docs/api/checkout-ui-extensions/configuration) file.
   *
   * * [`api_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#api-access): the extension can access the Storefront API.
   *
   * * [`network_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access): the extension can make external network calls.
   *
   * * [`block_progress`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress): the extension can block a buyer's progress and the merchant has allowed this blocking behavior.
   */
  capabilities: StatefulRemoteSubscribable<Capability[]>;

  /**
   * Information about the editor where the extension is being rendered.
   *
   * The value is undefined if the extension is not rendering in an editor.
   */
  editor?: Editor;
}

export interface Editor {
  /**
   * Indicates whether the extension is rendering in the checkout editor.
   */
  type: 'checkout';
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
  /**
   * The type of the metafield owner.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) when the type is `customer`.
   */
  type: 'customer' | 'product' | 'shop' | 'variant';

  /** The numeric owner ID that is associated with the metafield. */
  id: string;
}

/**
 * A metafield associated with the shop or a resource on the checkout.
 */
export interface AppMetafieldEntry {
  /**
   * The target that is associated to the metadata.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) when the type is `customer`.
   */
  target: AppMetafieldEntryTarget;

  /** The metadata information. */
  metafield: AppMetafield;
}

export type ApiVersion = '2022-10' | '2023-01' | '2023-04' | 'unstable';

export type Version = string;

/**
 * This returns a translated string matching a key in a locale file.
 *
 * @example translate("banner.title")
 */
export type I18nTranslate<ReplacementType = string> = (
  key: string,
  options?: {[placeholderKey: string]: ReplacementType | string | number},
) => ReplacementType extends string | number
  ? string
  : (string | ReplacementType)[];

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

export interface Country {
  /**
   * The ISO-3166-1 code for this country.
   * @see https://www.iso.org/iso-3166-country-codes.html
   */
  isoCode: CountryCode;
}

export interface Market {
  /**
   * A globally-unique identifier for a market.
   */
  id: string;

  /**
   * The human-readable, shop-scoped identifier for the market.
   */
  handle: string;
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

  /**
   * The country context of the checkout. This value carries over from the
   * context of the cart, where it was used to contextualize the storefront
   * experience. It will update if the buyer changes the country of their
   * shipping address. The value is undefined if unknown.
   */
  country: StatefulRemoteSubscribable<Country | undefined>;

  /**
   * The [market](https://shopify.dev/docs/apps/markets) context of the
   * checkout. This value carries over from the context of the cart, where it
   * was used to contextualize the storefront experience. It will update if the
   * buyer changes the country of their shipping address. The value is undefined
   * if unknown.
   */
  market: StatefulRemoteSubscribable<Market | undefined>;
}

/**
 * Provides details on the buyer's progression through the checkout.
 */
export interface BuyerJourney {
  /**
   * Installs a function for intercepting and preventing progress on checkout.
   *
   * This returns a promise that resolves to a teardown function. Calling the
   * teardown function will remove the interceptor.
   *
   * To block checkout progress, you must set the [block_progress](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress)
   * capability in your extension's configuration.
   */
  intercept(interceptor: Interceptor): Promise<() => void>;

  /**
   * This subscribable value will be true if the buyer completed submitting their order.
   *
   * For example, when viewing the order status page after submitting payment, the buyer will have completed their order.
   */
  completed: StatefulRemoteSubscribable<boolean>;
}

export interface StandardApi<
  ExtensionPoint extends import('../../extension-points').ExtensionPoint,
> {
  /**
   * Methods for interacting with [Web Pixels](https://shopify.dev/docs/apps/marketing), such as emitting an event.
   */
  analytics: Analytics;

  /**
   * Gift Cards that have been applied to the checkout.
   */
  appliedGiftCards: StatefulRemoteSubscribable<AppliedGiftCard[]>;

  /**
   * The metafields requested in the
   * [`shopify.ui.extension.toml`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration)
   * file. These metafields are updated when there's a change in the merchandise items
   * being purchased by the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  appMetafields: StatefulRemoteSubscribable<AppMetafieldEntry[]>;

  /**
   * Performs an update on an attribute attached to the cart and checkout. If
   * successful, this mutation results in an update to the value retrieved
   * through the [`attributes`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-applyattributechange) property.
   */
  applyAttributeChange(change: AttributeChange): Promise<AttributeChangeResult>;

  /**
   * Performs an update on the merchandise line items. It resolves when the new
   * line items have been negotiated and results in an update to the value
   * retrieved through the
   * [`lines`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-lines)
   * property.
   */
  applyCartLinesChange(change: CartLineChange): Promise<CartLineChangeResult>;

  /**
   * Performs an update on the discount codes.
   * It resolves when the new discount codes have been negotiated and results in an update
   * to the value retrieved through the [`discountCodes`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-discountcodes) property.
   *
   * > Caution:
   * > See [security considerations](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access) if your extension retrieves discount codes through a network call.
   */
  applyDiscountCodeChange(
    change: DiscountCodeChange,
  ): Promise<DiscountCodeChangeResult>;

  /**
   * Performs an update on the gift cards.
   * It resolves when gift card change have been negotiated and results in an update
   * to the value retrieved through the [`appliedGiftCards`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-appliedgiftcards) property.
   *
   * > Caution:
   * > See [security considerations](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access) if your extension retrieves gift card codes through a network call.
   */
  applyGiftCardChange(change: GiftCardChange): Promise<GiftCardChangeResult>;

  /**
   * Performs an update on a piece of metadata attached to the checkout. If
   * successful, this mutation results in an update to the value retrieved
   * through the [`metafields`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-metafields) property.
   */
  applyMetafieldChange(change: MetafieldChange): Promise<MetafieldChangeResult>;

  /**
   * Performs an update on the note attached to the cart and checkout. If
   * successful, this mutation results in an update to the value retrieved
   * through the [`note`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-note) property.
   */
  applyNoteChange(change: NoteChange): Promise<NoteChangeResult>;

  /**
   * Custom attributes left by the customer to the merchant, either in their cart or during checkout.
   */
  attributes: StatefulRemoteSubscribable<Attribute[] | undefined>;

  /**
   * Information about the buyer that is interacting with the checkout.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  buyerIdentity?: BuyerIdentity;

  /**
   * Provides details on the buyer's progression through the checkout.
   *
   * See [buyer journey](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#example-buyer-journey)
   * examples for more information.
   */
  buyerJourney: BuyerJourney;

  /**
   * Details on the costs the buyer will pay for this checkout.
   */
  cost: CartCost;

  /**
   * A list of discount codes currently applied to the checkout.
   */
  discountCodes: StatefulRemoteSubscribable<CartDiscountCode[]>;

  /**
   * Discounts that have been applied to the entire cart.
   */
  discountAllocations: StatefulRemoteSubscribable<CartDiscountAllocation[]>;

  /**
   * Meta information about the extension.
   */
  extension: Extension;

  /**
   * The identifier of the running extension point.
   * @example 'Checkout::PostPurchase::Render'
   */
  extensionPoint: ExtensionPoint;

  /**
   * Utilities for translating content and formatting values according to the current
   * [`localization`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-localization)
   * of the checkout.
   *
   * See [localization examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#example-localization)
   * for more information.
   */
  i18n: I18n;

  /**
   * A list of lines containing information about the items the customer intends to purchase.
   */
  lines: StatefulRemoteSubscribable<CartLine[]>;

  /**
   * Details about the location, language, and currency of the buyer. For utilities to easily
   * format and translate content based on these details, you can use the
   * [`i18n`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-i18n)
   * object instead.
   */
  localization: Localization;

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
   * A note left by the customer to the merchant, either in their cart or during checkout.
   */
  note: StatefulRemoteSubscribable<string | undefined>;

  /**
   * Order information that's available post-checkout.
   */
  order: StatefulRemoteSubscribable<Order | undefined>;

  /**
   * A list of the line items displayed in the checkout. These may be the same as lines, or may be a subset.
   */
  presentmentLines: StatefulRemoteSubscribable<PresentmentCartLine[]>;

  /**
   * Used to query the Storefront GraphQL API with a prefetched token.
   *
   * See [storefront api access examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#example-storefront-api-access) for more information.
   */
  query: <Data = unknown, Variables = {[key: string]: unknown}>(
    query: string,
    options?: {variables?: Variables; version?: StorefrontApiVersion},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;

  /**
   * Provides access to session tokens, which can be used to verify token claims on your app's server.
   *
   * See [session token examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#example-session-token) for more information.
   */
  sessionToken: SessionToken;

  /**
   * The settings matching the settings definition written in the
   * [`shopify.ui.extension.toml`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration) file.
   *
   *  See [settings examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi#example-settings) for more information.
   *
   * > Note: When an extension is being installed in the editor, the settings will be empty until
   * a merchant sets a value. In that case, this object will be updated in real time as a merchant fills in the settings.
   */
  settings: StatefulRemoteSubscribable<ExtensionSettings>;

  /**
   * The proposed buyer shipping address. During the information step, the address
   * updates when the field is committed (on change) rather than every keystroke.
   * An address value is only present if delivery is required. Otherwise, the
   * subscribable value is undefined.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  shippingAddress?: StatefulRemoteSubscribable<MailingAddress | undefined>;

  /** Shop where the checkout is taking place. */
  shop: Shop;

  /**
   * Key-value storage for the extension point.
   */
  storage: Storage;

  /**
   * The renderer version being used for the extension.
   *
   * @example 'unstable'
   */
  version: Version;
}

export interface SessionToken {
  /**
   * Requests a session token that hasn't expired. You should call this method every
   * time you need to make a request to your backend in order to get a valid token.
   * This method will return cached tokens when possible, so you don’t need to worry
   * about storing these tokens yourself.
   */
  get(): Promise<string>;
}

export interface BuyerIdentity {
  /**
   * The customer account from the buyer. This value will update when there's a
   * change in the account. The value is undefined if the buyer isn’t a known customer
   * for this shop.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  customer: StatefulRemoteSubscribable<Customer | undefined>;

  /**
   * The email address of the buyer that is interacting with the cart. This value will update when there's a
   * change in the checkout formulary. The value is undefined if no permission given.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  email: StatefulRemoteSubscribable<string | undefined>;

  /**
   * The phone number of the buyer that is interacting with the cart. This value will update when there's a
   * change in the checkout formulary. The value is undefined if no permission given.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  phone: StatefulRemoteSubscribable<string | undefined>;
}

export interface AppliedGiftCard {
  /**
   * The last four characters of the applied gift card's code.
   */
  lastCharacters: string;

  /**
   * The amount of the applied gift card that will be used when the checkout is completed.
   */
  amountUsed: Money;

  /**
   * The current balance of the applied gift card prior to checkout completion.
   */
  balance: Money;
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
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'John Doe'
   */
  name?: string;

  /**
   * The buyer's first name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'John'
   */
  firstName?: string;

  /**
   * The buyer's last name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Doe'
   */
  lastName?: string;

  /**
   * The buyer's company name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Shopify'
   */
  company?: string;

  /**
   * The first line of the buyer's address, including street name and number.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example '151 O'Connor Street'
   */
  address1?: string;

  /**
   * The second line of the buyer's address, like apartment number, suite, etc.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Ground floor'
   */
  address2?: string;

  /**
   * The buyer's city.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Ottawa'
   */
  city?: string;

  /**
   * The buyer's postal or ZIP code.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'K2P 2L8'
   */
  zip?: string;

  /**
   * The ISO 3166 Alpha-2 format for the buyer's country. Refer to https://www.iso.org/iso-3166-country-codes.html.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'CA' for Canada.
   */
  countryCode?: CountryCode;

  /**
   * The buyer's zone code, such as state, province, prefecture, or region.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'ON' for Ontario.
   */
  provinceCode?: string;

  /**
   * The buyer's phone number.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
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

  /**
   * Discounts applied to the cart line.
   */
  discountAllocations: CartDiscountAllocation[];

  /**
   * Sub lines of the merchandise line. If no sub lines are present, this will be an empty array.
   */
  lineComponents: CartLineComponentType[];
}

type CartLineComponentType = CartBundleLineComponent;

export interface CartBundleLineComponent {
  type: 'bundle';

  /**
   * A unique identifier for the bundle line component.
   *
   * This ID is not stable. If an operation updates the line items in any way, all IDs could change.
   *
   * @example 'gid://shopify/CartLineComponent/123'
   */
  id: string;

  /**
   * The merchandise of this bundle line component.
   */
  merchandise: Merchandise;

  /**
   * The quantity of merchandise being purchased.
   */
  quantity: number;

  /**
   * The cost attributed to this bundle line component.
   */
  cost: CartLineCost;

  /**
   * Additional custom attributes for the bundle line component.
   *
   * @example [{key: 'engraving', value: 'hello world'}]
   */
  attributes: Attribute[];
}

export interface CartLineCost {
  /**
   * The total amount after reductions the buyer can expect to pay that is directly attributable to a single
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
   * The product variant's subtitle.
   */
  subtitle?: string;

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

  /**
   * The selling plan associated with the merchandise.
   */
  sellingPlan?: SellingPlan;
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

export interface SellingPlan {
  /**
   * A globally-unique identifier.
   * @example 'gid://shopify/SellingPlan/1'
   */
  id: string;
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

  /**
   * The identifier of the selling plan that the merchandise is being purchased
   * with.
   */
  sellingPlanId?: SellingPlan['id'];
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

  /**
   * The identifier of the selling plan that the merchandise is being purchased
   * with or `null` to remove the the product from the selling plan.
   */
  sellingPlanId?: SellingPlan['id'] | null;
}

export interface CartDiscountCode {
  /**
   * The code for the discount
   */
  code: string;
}
export type CartDiscountAllocation =
  | CartCodeDiscountAllocation
  | CartAutomaticDiscountAllocation
  | CartCustomDiscountAllocation;

export interface CartDiscountAllocationBase {
  /**
   * The money amount that has been discounted from the order
   */
  discountedAmount: Money;
}

export interface CartCodeDiscountAllocation extends CartDiscountAllocationBase {
  /**
   * The code for the discount
   */
  code: string;

  /**
   * The type of the code discount
   */
  type: 'code';
}

export interface CartAutomaticDiscountAllocation
  extends CartDiscountAllocationBase {
  /**
   * The title of the automatic discount
   */
  title: string;

  /**
   * The type of the automatic discount
   */
  type: 'automatic';
}

export interface CartCustomDiscountAllocation
  extends CartDiscountAllocationBase {
  /**
   * The title of the custom discount
   */
  title: string;

  /**
   * The type of the custom discount
   */
  type: 'custom';
}

export type DiscountCodeChange =
  | DiscountCodeAddChange
  | DiscountCodeRemoveChange;

export type DiscountCodeChangeResult =
  | DiscountCodeChangeResultSuccess
  | DiscountCodeChangeResultError;

export interface DiscountCodeAddChange {
  /**
   * The type of the `DiscountCodeChange` API.
   */
  type: 'addDiscountCode';

  /**
   * The code for the discount
   */
  code: string;
}

export interface DiscountCodeRemoveChange {
  /**
   * The type of the `DiscountCodeChange` API.
   */
  type: 'removeDiscountCode';

  /**
   * The code for the discount
   */
  code: string;
}

export interface DiscountCodeChangeResultSuccess {
  /**
   * Indicates that the discount code change was applied successfully.
   */
  type: 'success';
}

export interface DiscountCodeChangeResultError {
  /**
   * Indicates that the discount code change failed.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It is **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
}

export type GiftCardChange = GiftCardAddChange | GiftCardRemoveChange;

export type GiftCardChangeResult =
  | GiftCardChangeResultSuccess
  | GiftCardChangeResultError;

export interface GiftCardAddChange {
  /**
   * The type of the `GiftCardChange` API.
   */
  type: 'addGiftCard';

  /**
   * Gift card code.
   */
  code: string;
}

export interface GiftCardRemoveChange {
  /**
   * The type of the `GiftCardChange` API.
   */
  type: 'removeGiftCard';

  /**
   * Gift card code.
   */
  code: string;
}

export interface GiftCardChangeResultSuccess {
  /**
   * Indicates that the gift card change was applied successfully.
   */
  type: 'success';
}

export interface GiftCardChangeResultError {
  /**
   * Indicates that the gift card change failed.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It is **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
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
   * Used to pass errors to the checkout UI, outside your extension's UI boundaries.
   */
  errors?: ValidationError[];

  /**
   * This callback is called when all interceptors finish. We recommend
   * setting errors or reasons for blocking at this stage, so that all the errors in
   * the UI show up at once.
   * @param result InterceptorResult with behavior as either 'allow' or 'block'
   */
  perform?(result: InterceptorResult): void | Promise<void>;
}

export interface InterceptorProps {
  /**
   * Whether the interceptor has the capability to block a buyer's progress through
   * checkout. This ability might be granted by a merchant in differing checkout contexts.
   */
  canBlockProgress: boolean;
}

/**
 * A function for intercepting and preventing navigation on checkout. You can block
 * navigation by returning an object with
 * `{behavior: 'block', reason: InvalidResultReason.InvalidExtensionState, errors?: ValidationErrors[]}`.
 * If you do, then you're expected to also update some part of your UI to reflect the reason why navigation
 * was blocked, either by targeting checkout UI fields, passing errors to the page level or rendering the errors in your extension.
 */
export type Interceptor = (
  interceptorProps: InterceptorProps,
) => InterceptorRequest | Promise<InterceptorRequest>;

/**
 * Information about a customer who has previously purchased from this shop.
 *
 * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
 */
export interface Customer {
  /**
   * Customer ID.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'gid://shopify/Customer/123'
   */
  id: string;
  /**
   * The email of the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  email?: string;
  /**
   * The phone number of the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  phone?: string;
  /**
   * The full name of the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  fullName?: string;
  /**
   * The first name of the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  firstName?: string;
  /**
   * The last name of the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  lastName?: string;
  /**
   * The image associated with the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  image: ImageDetails;
  /**
   * Defines if the customer accepts marketing activities.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  acceptsMarketing: boolean;
  /**
   * The Store Credit Accounts owned by the customer and usable during the checkout process.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires Level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @private
   */
  storeCreditAccounts: StoreCreditAccount[];
}

/**
 * Information about a Store Credit Account.
 */
export interface StoreCreditAccount {
  /**
   * A globally-unique identifier.
   * @example 'gid://shopify/StoreCreditAccount/1'
   */
  id: string;
  /**
   * The current balance of the Store Credit Account.
   */
  balance: Money;
}

/**
 * The merchant-defined setting values for the extension.
 */
export interface ExtensionSettings {
  [key: string]: string | number | boolean | undefined;
}

export interface Analytics {
  /**
   * Publish method to emit analytics events to [Web Pixels](https://shopify.dev/docs/apps/marketing).
   */
  publish(name: string, data: {[key: string]: unknown}): Promise<boolean>;
}

/**
 * Information about an order that was placed.
 */
export interface Order {
  /**
   * A globally-unique identifier.
   * @example 'gid://shopify/Order/1'
   */
  id: string;
  /**
   * Unique identifier for the order that appears on the order.
   * @example '#1000'
   */
  name: string;
  /**
   * If cancelled, the time at which the order was cancelled.
   */
  cancelledAt?: string;
}
