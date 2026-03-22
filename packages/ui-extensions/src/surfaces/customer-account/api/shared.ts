import type {ExtensionTarget} from '../targets';
import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

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

export {
  ApiVersion,
  Capability,
  CurrencyCode,
  Timezone,
  Country,
  CountryCode,
  GraphQLError,
  StorefrontApiVersion,
};

/**
 * A key-value storage object for the extension. Data is scoped to your app and shared across all of your extension targets. The storage backend uses `localStorage`, so data persistence isn't guaranteed across sessions.
 */
export interface Storage {
  /**
   * Reads and returns a stored value by key. The stored data is deserialized from JSON and returned as its original type. Returns `null` if no data exists for the given key.
   */
  read<T = unknown>(key: string): Promise<T | null>;

  /**
   * Writes data for the given key. The data must be serializable to JSON.
   */
  write(key: string, data: any): Promise<void>;

  /**
   * Deletes the stored data for the given key.
   */
  delete(key: string): Promise<void>;
}

export interface Language {
  /**
   * The [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language tag. May include a region subtag following a dash.
   *
   * @example 'en' for English, or 'en-US' for English as used in the United States.
   * @see https://en.wikipedia.org/wiki/IETF_language_tag
   * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  isoCode: string;
}

/**
 * The signature for the `i18n.translate()` function, which returns translated content matching a key in a locale file.
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
   * Returns a localized number string.
   *
   * This function behaves like the standard [`Intl.NumberFormat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
   * with a style of `decimal` applied. Uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatNumber: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * Returns a localized currency string.
   *
   * This function behaves like the standard [`Intl.NumberFormat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
   * with a style of `currency` applied. Uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatCurrency: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * Returns a localized date string.
   *
   * This function behaves like the standard [`Intl.DateTimeFormat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) and uses
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
 * Metadata about the running extension, including its API version, capabilities, and target.
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
   * in your [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/latest#configuration) file.
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
   * The value is undefined if the extension isn’t rendering in an editor.
   */
  editor?: Editor;

  /**
   * Whether your extension is currently rendered to the screen.
   *
   * Shopify may render your extension before it's visible in the UI
   * to pre-render content. Your extension may also continue running after
   * the buyer navigates away so it's immediately available if they return.
   */
  rendered: StatefulRemoteSubscribable<boolean>;

  /**
   * The URL of the JavaScript file that powers this extension target.
   */
  scriptUrl: string;

  /**
   * The identifier that specifies where in Shopify’s UI your code is being
   * injected. This will be one of the targets you have included in your
   * extension’s configuration file.
   *
   * @example 'customer-account.order-status.block.render'
   * @see https://shopify.dev/docs/api/checkout-ui-extensions/unstable/extension-targets-overview
   * @see https://shopify.dev/docs/apps/app-extensions/configuration#targets
   */
  target: Target;

  /**
   * The published version of the running extension.
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

/** A utility type that accepts either a value of type `T` or a `Promise` that resolves to `T`. */
export type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;

export interface SellingPlan {
  /**
   * A globally-unique identifier for the selling plan.
   * @example 'gid://shopify/SellingPlan/1'
   */
  id: string;

  /**
   * Whether purchasing the selling plan will result in multiple deliveries.
   */
  recurringDeliveries: boolean;
}

export interface Attribute {
  /**
   * The attribute name. Keys are unique within the attribute list.
   */
  key: string;

  /**
   * The attribute value as a string.
   */
  value: string;
}

/**
 * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). Most properties require level 2 access. The `company` property requires level 1 access.
 */
export interface MailingAddress {
  /**
   * The buyer's full name, typically the first and last name combined.
   *
   * @example 'John Doe'
   */
  name?: string;

  /**
   * The buyer's given name.
   *
   * @example 'John'
   */
  firstName?: string;

  /**
   * The buyer's family name.
   *
   * @example 'Doe'
   */
  lastName?: string;

  /**
   * The company or organization name associated with the address.
   *
   * @example 'Shopify'
   */
  company?: string;

  /**
   * The first line of the street address, including the street number and name.
   *
   * @example '151 O'Connor Street'
   */
  address1?: string;

  /**
   * The second line of the street address, such as apartment number, suite, or unit.
   *
   * @example 'Ground floor'
   */
  address2?: string;

  /**
   * The city, town, or village name.
   *
   * @example 'Ottawa'
   */
  city?: string;

  /**
   * The postal code or ZIP code.
   *
   * @example 'K2P 2L8'
   */
  zip?: string;

  /**
   * The [ISO 3166-1 Alpha-2](https://www.iso.org/iso-3166-country-codes.html) country code.
   *
   * @example 'CA' for Canada.
   */
  countryCode?: CountryCode;

  /**
   * The buyer's province, state, or region code.
   *
   * @example 'ON' for Ontario.
   */
  provinceCode?: string;

  /**
   * The phone number associated with the address.
   *
   * @example '+1 613 111 2222'.
   */
  phone?: string;
}

export interface AuthenticatedAccount {
  /**
   * The B2B company information for the authenticated business customer. The value is `undefined` if the customer isn't authenticated or isn't a B2B customer.
   */
  purchasingCompany: StatefulRemoteSubscribable<PurchasingCompany | undefined>;
  /**
   * The authenticated customer's account information, including their globally-unique ID.
   */
  customer: StatefulRemoteSubscribable<Customer | undefined>;
}

/**
 * The authenticated customer's account information.
 *
 * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
 */
export interface Customer {
  /**
   * A globally-unique identifier for the customer.
   *
   * @example 'gid://shopify/Customer/123'
   */
  id: string;
}

export interface PurchasingCompany {
  /**
   * The company that the authenticated B2B customer belongs to.
   */
  company: Company;

  /**
   * The company location that the authenticated B2B customer is purchasing for.
   */
  location?: CompanyLocation;
}

export interface Company {
  /**
   * A globally-unique identifier for the company.
   */
  id: string;
}

export interface CompanyLocation {
  /**
   * A globally-unique identifier for the company location.
   */
  id: string;
}

export interface Ui {
  /**
   * An overlay is a contextual element on top of the main interface that provides additional information or functionality.
   */
  overlay: {
    close(overlayId: string): void;
  };
  /**
   * The Toast API displays a non-disruptive message that displays at the bottom
   * of the interface to provide quick, at-a-glance feedback on the outcome
   * of an action.
   *
   * How to use:
   *
   * - Use toasts to confirm successful actions.
   *
   * - Aim for two words.
   *
   * - Use noun + past tense verb format. For example, \`Changes saved\`.
   *
   * For errors, or information that needs to persist on the page, use a [banner](/docs/api/checkout-ui-extensions/unstable/components/feedback/banner) component.
   */
  toast: {
    show(content: string): void;
  };
  /**
   * Refresh data so the surrounding information on the page is updated. The `content` string will appear in a toast message after refresh, to confirm the action was successful.
   *
   * To request access to this API:
   *
   * 1. Go to your partner dashboard and click **Apps**.
   *
   * 2. Select the app you need to request access for.
   *
   * 3. Click **API access**.
   *
   * 4. Under **Access force data refresh**, click **Request access**.
   */
  forceDataRefresh(content: string): Promise<void>;
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
   * Publishes analytics events to [Web Pixels](/docs/apps/build/marketing). Events are forwarded to all subscribed pixels.
   */
  publish(name: string, data: Record<string, unknown>): Promise<boolean>;

  /**
   * Captures visitor identity data (email or phone) for analytics and marketing attribution.
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
   * Indicates the visitor information was successfully validated and submitted.
   */
  type: 'success';
}

/**
 * Represents an unsuccessful visitor result.
 */
export interface VisitorError {
  /**
   * Indicates the visitor information was invalid and wasn't submitted, such as using an incorrect data type or missing a required property.
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
   * Whether the app can collect analytics about how the buyer interacted with the shop.
   */
  analytics: boolean;
  /**
   * Whether the app can use the buyer's data for marketing, attribution, and targeted advertising.
   */
  marketing: boolean;
  /**
   * Whether the app can store the buyer's preferences, such as language, currency, and size.
   */
  preferences: boolean;
  /**
   * Whether the buyer has opted out of data sharing with third parties for behavioral advertising.
   */
  saleOfData: boolean;
}

export interface VisitorConsent {
  /**
   * Whether the visitor consents to analytics tracking that measures how they interact with the site.
   */
  analytics?: boolean;
  /**
   * Whether the visitor consents to ads and marketing communications based on their interests.
   */
  marketing?: boolean;
  /**
   * Whether the visitor consents to storing preferences, such as country or language, to personalize their experience.
   */
  preferences?: boolean;
  /**
   * Whether the visitor opts out of data sharing or sale of their personal data.
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
   * The stored consent preference value, such as a consent level or a stringified JSON object with granular settings.
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
  /** The type of consent change. Always `'changeVisitorConsent'`. */
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
   * Flags indicating which data processing activities are allowed, based on the visitor's consent, merchant configuration, and the visitor's location.
   */
  allowedProcessing: AllowedProcessing;
  /**
   * Custom key-value pairs that store additional tracking consent preferences, such as granular opt-in choices for analytics or marketing categories. The array is empty when no consent metafields have been set.
   *
   * @example `[{key: 'analyticsType', value: 'granular'}, {key: 'marketingType', value: 'granular'}]`, or `[]`
   */
  metafields: TrackingConsentMetafield[];
  /**
   * The visitor's explicit consent choices for analytics, marketing, preferences, and sale of data. Each flag is `true` (granted), `false` (denied), or `undefined` (no decision yet).
   * @example `true` — the customer has actively granted consent, `false` — the customer has actively denied consent, or `undefined` — the customer hasn’t yet made a decision.
   */
  visitorConsent: VisitorConsent;
  /**
   * Whether a consent banner should display when the page loads. Determined by the visitor's current consent, the shop's [region visibility configuration](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings#add-a-cookie-banner), and the visitor's location.
   */
  shouldShowBanner: boolean;
  /**
   * Whether the visitor is in a region that requires explicit opt-out controls for the sale of personal data.
   */
  saleOfDataRegion: boolean;
  /**
   * The visitor's geolocation data, used to determine whether region-specific consent controls should be displayed.
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
 * The result returned when a tracking consent preference update succeeds.
 */
export interface TrackingConsentChangeResultSuccess {
  /**
   * Always `'success'`, indicating the consent change was applied.
   */
  type: 'success';
}

/**
 * The result returned when a tracking consent preference update fails, including an error message.
 */
export interface TrackingConsentChangeResultError {
  /**
   * Always `'error'`, indicating the consent change failed.
   */
  type: 'error';

  /**
   * A message that explains the error. This message is useful for debugging.
   * It isn’t localized, and therefore shouldn’t be presented directly
   * to the buyer.
   */
  message: string;
}
