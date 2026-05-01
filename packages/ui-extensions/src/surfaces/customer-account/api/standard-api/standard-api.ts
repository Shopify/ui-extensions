import {
  Extension,
  I18n,
  Storage,
  Language,
  Country,
  AuthenticatedAccount,
  GraphQLError,
  StorefrontApiVersion,
  Ui,
  SessionToken,
  Analytics,
  CustomerPrivacy,
  ApplyTrackingConsentChangeType,
} from '../shared';

import type {ExtensionTarget} from '../../targets';
import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

/**
 * The merchant-defined setting values for the extension, as configured in the [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/{API_VERSION}#configuration) file.
 */
export interface ExtensionSettings {
  [key: string]: string | number | boolean | undefined;
}
/**
 * The base API object provided to all customer account extension targets.
 */
export interface StandardApi<Target extends ExtensionTarget = ExtensionTarget> {
  /**
   * The identifier that specifies where in Shopify’s UI your code is being
   * injected. This will be one of the targets you have included in your
   * extension’s configuration file. For available targets, see the [extension targets overview](https://shopify.dev/docs/api/customer-account-ui-extensions/{API_VERSION}/extension-targets-overview). For configuration details, see [extension targets](https://shopify.dev/docs/apps/app-extensions/configuration#targets).
   *
   * @example 'customer-account.order-status.block.render'
   *
   * @deprecated Use `extension.target` instead.
   */
  extensionPoint: Target;

  /**
   * Metadata about the extension, including its target, version, and editor context. For configuration details, see [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/{API_VERSION}#configuration).
   */
  extension: Extension;

  /**
   * The authenticated customer's account information, including their customer ID and B2B company details.
   */
  authenticatedAccount: AuthenticatedAccount;

  /**
   * The API version your extension is running against. This is the version specified in your [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/{API_VERSION}#configuration) file.
   *
   * @example '2025-07'
   */
  version: Version;

  /**
   * The buyer's language, country, and locale context. For formatting utilities, use the `i18n` object instead.
   */
  localization: Localization;

  /**
   * Utilities for translating strings, formatting currencies, numbers, and dates according to the buyer's locale. Supports both the buyer's locale and the extension's fallback locale.
   */
  i18n: I18n;

  /**
   * Key-value storage that persists across customer sessions. Data is scoped to your app and shared across all extension targets.
   */
  storage: Storage;

  /**
   * Provides access to session tokens for verifying requests from your extension to your app's backend. Session tokens are signed [JSON Web Tokens (JWTs)](https://jwt.io/) that contain information about the current session. For more details, see the [Session Token API](/docs/api/customer-account-ui-extensions/{API_VERSION}/apis/session-token).
   */
  sessionToken: SessionToken;

  /**
   * Methods for interacting with [web pixels](/docs/apps/build/marketing-analytics/pixels), such as publishing analytics events.
   *
   * > Note: Requires a [connected third-party domain](https://help.shopify.com/en/manual/domains/add-a-domain/connecting-domains/connect-domain-customer-account) for your customer account pages.
   */
  analytics: Analytics;

  /**
   * The merchant-configured [settings](/docs/api/customer-account-ui-extensions/{API_VERSION}#configuration) for this extension. Settings are empty until the merchant configures them, and values update in real time as the merchant saves changes.
   */
  settings: StatefulRemoteSubscribable<ExtensionSettings>;

  /**
   * Triggers platform-level UI interactions, such as displaying toast notifications. Use this to show success or error messages in response to customer actions.
   */
  ui: Ui;

  /**
   * Methods for navigating within the customer account, including URL-based navigation and history management.
   */
  navigation: StandardExtensionNavigation;

  /**
   * Queries the Storefront GraphQL API using a prefetched token. Requires the [`api_access` capability](/docs/api/customer-account-ui-extensions/{API_VERSION}#configuration) in your extension configuration.
   */
  query: <Data = unknown, Variables = {[key: string]: unknown}>(
    query: string,
    options?: {variables?: Variables; version?: StorefrontApiVersion},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;

  /**
   * The buyer's current privacy consent settings, including consent flags, allowed processing activities, and region information.
   */
  customerPrivacy: StatefulRemoteSubscribable<CustomerPrivacy>;

  /**
   * Applies changes to the buyer's tracking consent preferences and consent metafields.
   *
   * > Note: Requires the [`collect_buyer_consent` capability](/docs/apps/build/customer-accounts/capabilities#collect-buyer-consent) to be set to `true`.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  applyTrackingConsentChange: ApplyTrackingConsentChangeType;
}

/**
 * Provides access to the company location context for B2B extension targets.
 */
export interface CompanyLocationApi {
  /** A globally-unique identifier for the company location. */
  locationId: string;
}

/**
 * Provides access to the fulfillment context for fulfillment-scoped extension targets.
 */
export interface FulfillmentApi {
  /** A globally-unique identifier for the fulfillment. */
  fulfillmentId: string;
}

/**
 * Provides access to the return context for return-scoped extension targets.
 */
export interface ReturnApi {
  /** A globally-unique identifier for the return. */
  returnId: string;
}

/**
 * Provides access to the order context for order-scoped extension targets.
 */
export interface OrderApi {
  /** A globally-unique identifier for the order. */
  orderId: string;
}

/**
 * The buyer’s language, country, and locale context in the customer account. Use this to adapt content to the buyer’s region and language preferences.
 */
export interface Localization {
  /**
   * The language the buyer sees in the customer account pages.
   */
  language: StatefulRemoteSubscribable<Language>;

  /**
   * The buyer's language, as supported by the extension. If the buyer's actual language is not supported by the extension, this is the fallback locale used for translations.
   *
   * For example, if the buyer's language is `fr-CA` but your extension only supports translations for `fr`, then the `isoCode` for this language is `fr`. If your extension doesn't provide French translations at all, this value is the default locale for your extension (that is, the one matching your `.default.json` file).
   */
  extensionLanguage: StatefulRemoteSubscribable<Language>;

  /**
   * The buyer's country context in the customer account, as a `StatefulRemoteSubscribable` that updates if the buyer changes their country. The value is `undefined` if the country is unknown.
   */
  country: StatefulRemoteSubscribable<Country | undefined>;
}

/**
 * An enumerated value representing the type of navigation:
 *
 * - `'push'`: A new entry is added to the history stack.
 * - `'replace'`: The current entry in the history stack is replaced.
 * - `'traverse'`: The user navigated to an existing entry in the history stack (back or forward).
 */
export type NavigationType = 'push' | 'replace' | 'traverse';

export interface NavigationOptions {
  /**
   * Developer-defined information to be stored in the associated NavigationHistoryEntry once the navigation is complete, retrievable via getState().
   */
  state?: Record<string, any>;
  /**
   * An enumerated value that sets the history behavior of this navigation:
   *
   * - `'auto'`: The default behavior, which is equivalent to `'push'`.
   * - `'push'`: Adds a new entry to the history stack.
   * - `'replace'`: Replaces the current entry in the history stack.
   */
  history: 'auto' | 'push' | 'replace';
}

/**
 * Represents a single navigation history entry. Based on the [Navigation API `NavigationHistoryEntry`](https://developer.mozilla.org/en-US/docs/Web/API/NavigationHistoryEntry) interface.
 */
export interface NavigationHistoryEntry {
  /** A unique, user-agent-generated value that represents the history entry's slot in the entries list, rather than the entry itself. */
  key: string;
  /**
   * The URL of this history entry.
   */
  url: string;
  /**
   * Returns a clone of the developer-supplied state associated with this history entry.
   */
  getState(): Record<string, any>;
}

/**
 * The event object for the `currententrychange` event, which fires when `Navigation.currentEntry` has changed. Based on the [Navigation API `NavigationCurrentEntryChangeEvent`](https://developer.mozilla.org/en-US/docs/Web/API/NavigationCurrentEntryChangeEvent) interface.
 */
export interface NavigationCurrentEntryChangeEvent {
  /**
   * The type of navigation that resulted in the change.
   */
  navigationType: NavigationType;
  /**
   * The `NavigationHistoryEntry` that was navigated from.
   */
  from: NavigationHistoryEntry;
}

/**
 * Provides URL-based navigation within the customer account. Supports navigation to customer account pages and [custom protocols](/docs/api/customer-account-ui-extensions/{API_VERSION}/apis/navigation).
 */
export interface StandardExtensionNavigation {
  /**
   * Navigates to a specific URL within the customer account, updating the history entries list.
   */
  navigate: NavigateFunction;
}

/**
 * Extended navigation for full-page customer account extensions, including history entry management and navigation event listeners.
 */
export interface FullExtensionNavigation extends StandardExtensionNavigation {
  /**
   * Returns a `NavigationHistoryEntry` representing the location the user is currently navigated to.
   */
  currentEntry: NavigationHistoryEntry;
  /**
   * Updates the state of the current entry without triggering a navigation or reload.
   */
  updateCurrentEntry(options: {state: Record<string, any>}): void;
  /** Registers a callback that fires whenever the current navigation entry changes. */
  addEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
  /** Removes a previously registered `currententrychange` event listener. */
  removeEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
}

/**
 * A function that performs navigation to a specific URL within the customer account.
 */
export interface NavigateFunction {
  /**
   * Navigates to a specific URL, updating any provided state in the history entries list.
   * @param url - The destination URL to navigate to.
   */
  (url: string, options?: NavigationOptions): void;
}

/**
 * The API version string for the extension. Corresponds to the version specified in the extension’s [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/{API_VERSION}#configuration) file.
 *
 * @example '2025-07'
 */
export type Version = string;
