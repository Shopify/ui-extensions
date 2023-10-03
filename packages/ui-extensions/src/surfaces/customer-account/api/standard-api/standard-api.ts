import {Extension, I18n, Storage, Language} from '../shared';

import type {ExtensionTarget} from '../../targets';
import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

/**
 * The following APIs are provided to all extension targets.
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
   * Meta information about the extension.
   */
  extension: Extension;

  /**
   * Information about the buyer.
   */
  buyerIdentity: BuyerIdentity;

  /**
   * The renderer version being used for the extension.
   *
   * @example 'unstable'
   */
  version: RendererVersion;

  /**
   * Details about the language of the buyer.
   */
  localization: Localization;

  /**
   * Utilities for translating content and formatting values according to the current `localization`
   * of the user.
   */
  i18n: I18n;

  router: {
    getExtensionFullPageUrl(relative: string): Promise<string>;
    navigate(to: string): Promise<void>;
  };

  /**
   * An authenticated redirect is a way to seamlessly integrate 3P apps
   * built outside of self-serve into the self-serve experience. The 3P app accepts this data,
   * bypasses any authentication screens on their side, and sends the user directly into
   * their app to complete the task at hand. Once the task is complete, the app routes the user back into self-serve.
   */
  authenticatedRedirect: {
    getStartUrl(): Promise<string>;
  };

  /**
   * Key-value storage for the extension target.
   */
  storage: Storage;

  /**
   * Methods to interact with the extension's UI.
   */
  ui: {
    overlay: {
      close(overlayId: string): void;
    };
  };
  navigation: StandardExtensionNavigation;
}

export interface CompanyLocationApi {
  locationId: string;
}

export interface BuyerIdentity {
  /**
   * Provides the company info that the business customer is purchasing on behalf of.
   * If the buyer is not a business customer, this value is `undefined`.
   */
  purchasingCompany: StatefulRemoteSubscribable<PurchasingCompany | undefined>;
}

export interface PurchasingCompany {
  /**
   * Include information of the company that the business customer is purchasing on behalf of.
   */
  company: Company;
}

export interface Company {
  /**
   * Company ID.
   */
  id: string;
}

export interface Localization {
  /**
   * The language the buyer sees in the customer account hub.
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
 * An enumerated value representing the type of navigation.
 */
export type NavigationType = 'push' | 'replace' | 'traverse';

export interface NavigationOptions {
  /**
   * Developer-defined information to be stored in the associated NavigationHistoryEntry once the navigation is complete, retrievable via getState().
   */
  state?: Record<string, any>;
  /**
   * An enumerated value that sets the history behavior of this navigation.
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
   * The navigate() method navigates to a specific URL, updating any provided state in the history entries list.
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
  addEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
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

export type RendererVersion = 'unstable';
