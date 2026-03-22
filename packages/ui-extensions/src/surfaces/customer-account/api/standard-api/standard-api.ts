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
 * The merchant-defined setting values for the extension, as configured in the [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/latest#configuration) file.
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
   * extension’s configuration file.
   *
   * @example 'customer-account.order-status.block.render'
   * @see https://shopify.dev/docs/api/checkout-ui-extensions/unstable/extension-targets-overview
   * @see https://shopify.dev/docs/apps/app-extensions/configuration#targets
   *
   * @deprecated Deprecated as of version `2023-07`, use `extension.target` instead.
   */
  extensionPoint: Target;

  /**
   * Metadata about the running extension, including its target, capabilities, and version.
   */
  extension: Extension;

  /**
   * The authenticated customer's account information, including their customer ID and B2B company details.
   */
  authenticatedAccount: AuthenticatedAccount;

  /**
   * The API version being used for the extension.
   *
   * @example '2025-07'
   */
  version: Version;

  /**
   * The buyer's language and country context. For formatting utilities, use the `i18n` object instead.
   */
  localization: Localization;

  /**
   * Utilities for translating content and formatting values according to the buyer's locale.
   */
  i18n: I18n;

  /**
   * Persistent key-value storage scoped to your app. Data is shared across all of your extension targets.
   */
  storage: Storage;

  /**
   * Provides access to session tokens for authenticating requests to your app's backend server.
   *
   * See [session token examples](/docs/api/customer-account-ui-extensions/apis/session-token#examples) for more information.
   */
  sessionToken: SessionToken;

  /**
   * Methods for interacting with [Web Pixels](/docs/apps/build/marketing), such as publishing analytics events.
   *
   * > Note: Requires a [connected third-party domain](https://help.shopify.com/en/manual/domains/add-a-domain/connecting-domains/connect-domain-customer-account) for your customer account pages.
   */
  analytics: Analytics;

  /**
   * The merchant-configured settings for this extension, as defined in the
   * [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/latest#configuration) file.
   *
   * > Note: When an extension is first installed, settings are empty until the merchant configures them. Values update in real time as the merchant saves changes.
   */
  settings: StatefulRemoteSubscribable<ExtensionSettings>;

  /**
   * Methods to interact with the extension's UI, including overlays, toasts, and data refresh.
   */
  ui: Ui;

  /**
   * Methods for navigating within the customer account, including URL-based navigation and history management.
   */
  navigation: StandardExtensionNavigation;

  /**
   * Queries the Storefront GraphQL API using a prefetched token.
   *
   * See [Storefront API access examples](/docs/api/customer-account-ui-extensions/apis/storefront-api#examples) for more information.
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
   * > Note: Requires the [`customer_privacy` capability](/docs/api/customer-account-ui-extensions/latest#configuration#collect-buyer-consent) to be set to `true`.
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

export interface Localization {
  /**
   * The language the buyer sees in the customer account pages.
   */
  language: StatefulRemoteSubscribable<Language>;

  /**
   * This is the buyer's language, as supported by the extension.
   * If the buyer's actual language is not supported by the extension,
   * this is the fallback locale used for translations.
   *
   * For example, if the buyer's language is 'fr-CA' but your extension
   * only supports translations for 'fr', then the `isoCode` for this
   * language is 'fr'. If your extension doesn’t provide French
   * translations at all, this value is the default locale for your
   * extension (that is, the one matching your .default.json file).
   */
  extensionLanguage: StatefulRemoteSubscribable<Language>;

  /**
   * The buyer's country context in the customer account. Updates if the buyer changes their country. The value is `undefined` if the country is unknown.
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
 * The NavigationHistoryEntry interface of the Navigation API represents a single navigation history entry.
 */
export interface NavigationHistoryEntry {
  /** Returns the key of the history entry. This is a unique, UA-generated value that represents the history entry's slot in the entries list rather than the entry itself. */
  key: string;
  /**
   * Returns the URL of this history entry.
   */
  url: string;
  /**
   * Returns a clone of the available state associated with this history entry.
   */
  getState(): Record<string, any>;
}

/**
 * The NavigationCurrentEntryChangeEvent interface of the Navigation API is the event object for the currententrychange event, which fires when the Navigation.currentEntry has changed.
 */
export interface NavigationCurrentEntryChangeEvent {
  /**
   * Returns the type of the navigation that resulted in the change.
   */
  navigationType: NavigationType;
  /**
   * Returns the NavigationHistoryEntry that was navigated from.
   */
  from: NavigationHistoryEntry;
}

export interface StandardExtensionNavigation {
  /**
   * Navigates to a specific URL within the customer account, updating the history entries list.
   */
  navigate: NavigateFunction;
}

export interface FullExtensionNavigation extends StandardExtensionNavigation {
  /**
   * The currentEntry read-only property of the Navigation interface returns a NavigationHistoryEntry object representing the location the user is currently navigated to right now.
   */
  currentEntry: NavigationHistoryEntry;
  /**
   * The updateCurrentEntry() method of the Navigation interface updates the state of the currentEntry; used in cases where the state change will be independent of a navigation or reload.
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

export interface NavigateFunction {
  /**
   * Navigates to a specific URL, updating any provided state in the history entries list.
   * @param url The destination URL to navigate to.
   */
  (url: string, options?: NavigationOptions): void;
}

/** The API version string for the extension, such as `'2025-07'`. */
export type Version = string;
