import type {ExtensionTarget} from '../extension-targets';

import type {
  ApiVersion,
  Capability,
  CurrencyCode,
  Timezone,
  Country,
  CountryCode,
  GraphQLError,
  StorefrontApiVersion,
} from '../../../shared';

import type {SubscribableSignalLike} from '../../checkout/shared';

export {
  ApiVersion,
  Capability,
  CurrencyCode,
  Timezone,
  Country,
  CountryCode,
  GraphQLError,
  StorefrontApiVersion,
  SubscribableSignalLike,
};

/**
 * A key-value storage object for extension targets.
 *
 * Stored data is only available to this specific app
 * but can be shared across multiple extension targets.
 *
 * The storage backend is implemented with `localStorage` and
 * should persist for ... days
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

/**
 * Meta information about an extension target.
 */
export interface Extension<Target extends ExtensionTarget = ExtensionTarget> {
  /**
   * The API version that was set in the extension config file.
   *
   * @example '2023-04', '2023-07'
   */
  apiVersion: ApiVersion;

  /**
   * The allowed capabilities of the extension, defined
   * in your [shopify.ui.extension.toml](https://shopify.dev/docs/api/customer-account-ui-extensions/configuration) file.
   *
   * * [`api_access`](https://shopify.dev/docs/api/customer-account-ui-extensions/configuration#api-access): the extension can access the Storefront API.
   *
   * * [`network_access`](https://shopify.dev/docs/api/customer-account-ui-extensions/configuration#network-access): the extension can make external network calls.
   */
  capabilities: SubscribableSignalLike<Capability[]>;

  /**
   * Information about the editor where the extension is being rendered.
   *
   * The value is undefined if the extension is not rendering in an editor.
   */
  editor?: Editor;

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
  rendered: SubscribableSignalLike<boolean>;

  /**
   * The URL to the script that started the extension target.
   */
  scriptUrl: string;

  /**
   * The identifier that specifies where in Shopify’s UI your code is being
   * injected. This will be one of the targets you have included in your
   * extension’s configuration file.
   *
   * @example 'customer-account.order-status.block.render'
   * @see https://shopify.dev/docs/api/customer-account-ui-extensions/extension-targets-overview
   * @see https://shopify.dev/docs/apps/app-extensions/configuration#targets
   */
  target: Target;

  /**
   * The published version of the running extension target.
   *
   * For unpublished extensions, the value is `undefined`.
   *
   * @example 3.0.10
   */
  version?: string;
}

export interface Editor {
  /**
   * Indicates whether the extension is rendering in the checkout editor.
   */
  type: 'checkout';
}

export type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;

export interface SellingPlan {
  /**
   * A globally-unique identifier.
   * @example 'gid://shopify/SellingPlan/1'
   */
  id: string;
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

export interface MailingAddress {
  /**
   * The buyer's full name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'John Doe'
   */
  name?: string;

  /**
   * The buyer's first name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'John'
   */
  firstName?: string;

  /**
   * The buyer's last name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Doe'
   */
  lastName?: string;

  /**
   * The buyer's company name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Shopify'
   */
  company?: string;

  /**
   * The first line of the buyer's address, including street name and number.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example '151 O'Connor Street'
   */
  address1?: string;

  /**
   * The second line of the buyer's address, like apartment number, suite, etc.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Ground floor'
   */
  address2?: string;

  /**
   * The buyer's city.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Ottawa'
   */
  city?: string;

  /**
   * The buyer's postal or ZIP code.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'K2P 2L8'
   */
  zip?: string;

  /**
   * The ISO 3166 Alpha-2 format for the buyer's country. Refer to https://www.iso.org/iso-3166-country-codes.html.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'CA' for Canada.
   */
  countryCode?: CountryCode;

  /**
   * The buyer's province code, such as state, province, prefecture, or region.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'ON' for Ontario.
   */
  provinceCode?: string;

  /**
   * The buyer's phone number.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example '+1 613 111 2222'.
   */
  phone?: string;
}

export interface AuthenticatedAccount {
  /**
   * Provides the company info of the authenticated business customer.
   * If the customer is not authenticated or is not a business customer, this value is `undefined`.
   */
  purchasingCompany: SubscribableSignalLike<PurchasingCompany | undefined>;
  /**
   * Provides the customer information of the authenticated customer.
   */
  customer: SubscribableSignalLike<Customer | undefined>;
}

/**
 * Information about the authenticated customer.
 *
 * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
 */
export interface Customer {
  /**
   * Customer ID.
   *
   * @example 'gid://shopify/Customer/123'
   */
  id: string;
}

export interface PurchasingCompany {
  /**
   * Include information of the company of the logged in business customer.
   */
  company: Company;

  /**
   * Include information of the company location of the logged in business customer.
   */
  location?: CompanyLocation;
}

export interface Company {
  /**
   * Company ID.
   */
  id: string;
}

export interface CompanyLocation {
  /**
   * Company location ID.
   */
  id: string;
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

export interface Analytics {
  /**
   * Publish method to emit analytics events to [Web Pixels](https://shopify.dev/docs/apps/marketing).
   */
  publish(name: string, data: Record<string, unknown>): Promise<boolean>;

  /**
   * A method for capturing details about a visitor on the online store.
   */
  visitor(data: {email?: string; phone?: string}): Promise<VisitorResult>;
}
/**
 * Represents a visitor result.
 */
export type VisitorResult = VisitorSuccess | VisitorError;

/**
 * Represents a successful visitor result.
 */
export interface VisitorSuccess {
  /**
   * Indicates that the visitor information was validated and submitted.
   */
  type: 'success';
}

/**
 * Represents an unsuccessful visitor result.
 */
export interface VisitorError {
  /**
   * Indicates that the visitor information is invalid and wasn't submitted.
   * Examples are using the wrong data type or missing a required property.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It's **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
}

export interface AllowedProcessing {
  /**
   * Can collect customer analytics about how the shop was used and interactions made on the shop.
   */
  analytics: boolean;
  /**
   * Can collect customer preference for marketing, attribution and targeted advertising from the merchant.
   */
  marketing: boolean;
  /**
   * Can collect customer preferences such as language, currency, size, and more.
   */
  preferences: boolean;
  /**
   * Can collect customer preference for sharing data with third parties, usually for behavioral advertising.
   */
  saleOfData: boolean;
}

export interface VisitorConsent {
  /**
   * Visitor consents to recording data to understand how customers interact with the site.
   */
  analytics?: boolean;
  /**
   * Visitor consents to ads and marketing communications based on customer interests.
   */
  marketing?: boolean;
  /**
   * Visitor consent to remembering customer preferences, such as country or language, to personalize visits to the website.
   */
  preferences?: boolean;
  /**
   * Opts the visitor out of data sharing / sales.
   */
  saleOfData?: boolean;
}

export interface TrackingConsentMetafield {
  /**
   * The name of the metafield. It must be between 3 and 30 characters in
   * length (inclusive).
   */
  key: string;
  /**
   * The information to be stored as metadata.
   *
   * @example 'any string', '', or a stringified JSON object
   */
  value: string;
}

export interface TrackingConsentMetafieldChange {
  /**
   * The name of the metafield. It must be between 3 and 30 characters in
   * length (inclusive).
   */
  key: string;
  /**
   * The information to be stored as metadata. If the value is `null`, the metafield will be deleted.
   *
   * @example 'any string', `null`, or a stringified JSON object
   */
  value: string | null;
}

export interface VisitorConsentChange extends VisitorConsent {
  /**
   * Tracking consent metafield data to be saved.
   *
   * If the value is `null`, the metafield will be deleted.
   *
   * @example `[{key: 'granularAnalytics', value: 'true'}, {key: 'granularMarketing', value: 'false'}]`
   */
  metafields?: TrackingConsentMetafieldChange[];
  type: 'changeVisitorConsent';
}

export type ApplyTrackingConsentChangeType = (
  visitorConsent: VisitorConsentChange,
) => Promise<TrackingConsentChangeResult>;

export interface CustomerPrivacyRegion {
  /**
   * The [ISO 3166 Alpha-2 format](https://www.iso.org/iso-3166-country-codes.html) for the buyer's country.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'CA' for Canada, 'US' for United States, 'GB' for Great Britain, or undefined if geolocation failed.
   */
  countryCode?: CountryCode;
  /**
   * The buyer's province code, such as state, province, prefecture, or region.
   *
   * Province codes can be found by clicking on the `Subdivisions assigned codes` column for countries listed [here](https://en.wikipedia.org/wiki/ISO_3166-2).
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'ON' for Ontario, 'ENG' for England, 'CA' for California, or undefined if geolocation failed or only the country was detected.
   */
  provinceCode?: string;
}

export interface CustomerPrivacy {
  /**
   * An object containing flags for each consent property denoting whether they can be processed based on visitor consent, merchant configuration, and user location.
   */
  allowedProcessing: AllowedProcessing;
  /**
   * Stored tracking consent metafield data.
   *
   * @example `[{key: 'analyticsType', value: 'granular'}, {key: 'marketingType', value: 'granular'}]`, or `[]`
   */
  metafields: TrackingConsentMetafield[];
  /**
   * An object containing the customer's current privacy consent settings.
   * *
   * @example `true` — the customer has actively granted consent, `false` — the customer has actively denied consent, or `undefined` — the customer has not yet made a decision.
   */
  visitorConsent: VisitorConsent;
  /**
   * Whether a consent banner should be displayed by default when the page loads. Use this as the initial open/expanded state of the consent banner.
   *
   * This is determined by the visitor's current privacy consent, the shop's [region visibility configuration](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings#add-a-cookie-banner) settings, and the region in which the visitor is located.
   */
  shouldShowBanner: boolean;
  /**
   * Whether the visitor is in a region requiring data sale opt-outs.
   */
  saleOfDataRegion: boolean;
  /**
   * Details about the visitor's current location for use in evaluating if more granular consent controls should render.
   *
   * @example `{countryCode: 'CA', provinceCode: 'ON'}` for a visitor in Ontario, Canada; `{countryCode: 'US', provinceCode: undefined}` for a visitor in the United States if geolocation fails to detect the state; or `undefined` if neither country nor province is detected or geolocation fails.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  region?: CustomerPrivacyRegion;
}

export type TrackingConsentChangeResult =
  | TrackingConsentChangeResultSuccess
  | TrackingConsentChangeResultError;

/**
 * The returned result of a successful tracking consent preference update.
 */
export interface TrackingConsentChangeResultSuccess {
  /**
   * The type of the `TrackingConsentChangeResultSuccess` API.
   */
  type: 'success';
}

/**
 * The returned result of an unsuccessful tracking consent preference update
 * with a message detailing the type of error that occurred.
 */
export interface TrackingConsentChangeResultError {
  /**
   * The type of the `TrackingConsentChangeResultError` API.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It is **not** localized, and therefore should not be presented directly
   * to the buyer.
   */
  message: string;
}

export interface ToastApiResult {
  hide: () => void;
}
export interface ToastApi {
  show: (content: string) => Promise<ToastApiResult>;
}

/**
 * Options for URL-based invocations.
 *
 * When invoking via URL syntax, `action` and `type` are parsed from the
 * string. This companion type captures the remaining optional fields that can
 * be provided alongside the URL.
 */
export interface IntentQueryOptions {
  /**
   * The resource identifier for edit actions (e.g. `gid://shopify/SubscriptionContract/123`).
   */
  value?: string;
  /**
   * Optional input payload passed to the intent.
   *
   * Used to seed forms or supply parameters. The accepted shape is
   * intent-specific. For example:
   * - Replacing a payment method on a subscription contract requires
   *   { field: 'paymentMethod' }
   */
  data?: Record<string, unknown>;
}

/**
 * Allowed actions that can be performed by an intent.
 *
 * Common actions include:
 * - `'create'`: Initiate creation of a new resource.
 * - `'open'`: Modify an existing resource.
 */
export type IntentAction = 'create' | 'open' | string;

/**
 * Structured description of an intent to invoke.
 *
 * Use this object form when programmatically composing an intent at runtime.
 * It pairs an action (verb) with a resource type and optional inputs.
 */
export interface IntentQuery extends IntentQueryOptions {
  /**
   * Verb describing the operation to perform on the target resource.
   *
   * Common values include `create` and `open`. The set of
   * allowed verbs is intent-specific; unknown verbs will fail validation.
   */
  action: IntentAction;
  /**
   * The resource type (e.g. `shopify/SubscriptionContract`).
   */
  type: string;
}

/**
 * Successful intent completion.
 *
 * - `code` is always `'ok'`
 * - `data` contains the output payload
 */
export interface SuccessIntentResponse {
  code: 'ok';
  /**
   * Validated output payload produced by the workflow.
   *
   * The shape is intent-specific. Consumers should narrow by `code === 'ok'` before accessing.
   */
  data: Record<string, unknown>;
}

/**
 * Failed intent completion.
 *
 * - `code` is always `'error'`
 * - `message` summarizes the failure
 * - `issues` optionally provides structured details for validation or
 *   field-specific problems following the Standard Schema convention
 *
 */
export interface ErrorIntentResponse {
  code?: 'error';
  message?: string;
  issues?: {
    /**
     * The path to the field with the issue.
     */
    path?: string[];
    /**
     * The error message for the issue.
     */
    message?: string;
  }[];
}

/**
 * User dismissed or closed the workflow without completing it.
 *
 * Distinct from `error`: no failure occurred, the activity was simply
 * abandoned by the user.
 */
export interface ClosedIntentResponse {
  code: 'closed';
}

/**
 * Result of an intent activity.
 *
 * Discriminated union representing all possible completion outcomes for an
 * invoked intent.
 */
export type IntentResponse =
  | SuccessIntentResponse
  | ErrorIntentResponse
  | ClosedIntentResponse;

/**
 * Activity handle for tracking intent workflow progress.
 */
export interface IntentActivity {
  /**
   * A Promise that resolves when the intent workflow completes, returning the response.
   */
  complete: Promise<IntentResponse>;
}

/**
 * Entry point for Shopify intents.
 *
 * Intents pair an `action` (verb) with a resource `type` and optional `value`
 * and `data` to request a workflow.
 */
export interface Intents {
  /**
   * Invoke an intent using the object or URL syntax.
   *
   * Object format: `{action, type, value?, data?}`
   *
   * @param query - Structured intent description, including `action` and `type`.
   * @returns A promise for an {@link IntentActivity} that completes with an
   *          {@link IntentResponse}.
   *
   * @example
   * ```javascript
   * const activity = await shopify.intents.invoke(
   *   {
   *     action: 'open',
   *     type: 'shopify/SubscriptionContract',
   *     value: 'gid://shopify/SubscriptionContract/69372608568',
   *     data: { field: 'paymentMethod' },
   *   }
   * );
   * ```
   */
  invoke(query: IntentQuery): Promise<IntentActivity>;
  /**
   * URL format: `action:type[,value][?params]`
   *
   * @param intentURL - Intent in URL form
   * @param options - Optional supplemental inputs such as `value` or `data`.
   * @returns A promise for an {@link IntentActivity} that completes with an
   *          {@link IntentResponse}.
   *
   * @example
   * ```javascript
   * // Using query string syntax
   * const activity = await shopify.intents.invoke('open:shopify/SubscriptionContract,gid://shopify/SubscriptionContract/69372608568?field=paymentMethod');
   *
   * // Or using a query string and options
   * const activity = await shopify.intents.invoke(
   *   'open:shopify/SubscriptionContract',
   *   {
   *    value: 'gid://shopify/SubscriptionContract/69372608568',
   *    data: { field: 'paymentMethod' },
   *   }
   * );
   * const response = await activity.complete;
   * ```
   */
  invoke(
    intentURL: string,
    options?: IntentQueryOptions,
  ): Promise<IntentActivity>;
}
