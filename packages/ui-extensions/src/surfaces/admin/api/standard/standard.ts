import type {I18n} from '../../../../api';
import {ApiVersion} from '../../../../shared';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/**
 * Information provided to the receiver of an intent. Use this to access data passed from other extensions or parts of the admin when your extension is launched through intent-based navigation.
 */
export interface Intents {
  /**
   * The URL that was used to launch the intent. Use this to understand how your extension was invoked or to pass context between extensions.
   */
  launchUrl?: string | URL;
}

/**
 * The `Navigation` object provides methods for programmatic navigation within the Shopify admin.
 */
export interface Navigation {
  /**
   * Navigates to a specific admin route or URL. Use this to redirect merchants to other pages in the admin, such as detail pages, index pages, or other extensions. Supports both absolute admin URLs and relative paths.
   *
   * @param url - The destination URL, which can be an admin path (e.g., `/admin/products/123`) or a full URL
   * @example navigation.navigate('/admin/products/123')
   * @example navigation.navigate('https://admin.shopify.com/store/my-store/products')
   */
  navigate: (url: string | URL) => void;
}

/**
 * The GraphQL error returned by the [GraphQL Admin API](/docs/api/admin-graphql).
 */
export interface GraphQLError {
  /**
   * A human-readable error message describing what went wrong with the GraphQL query. Use this to understand the cause of the error and how to fix your query.
   */
  message: string;
  /**
   * The location in the GraphQL query where the error occurred. Provides the line number and column position to help identify the exact source of the error in your query string.
   */
  locations: {
    /** The line number in the GraphQL query where the error occurred. */
    line: number;
    /** The column position in the GraphQL query where the error occurred. */
    column: string;
  };
}

/**
 * The `StandardApi` object provides core methods available to all extension targets. Access the following properties on the `StandardApi` object to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle intents, and persist data.
 */
export interface StandardApi<ExtensionTarget extends AnyExtensionTarget> {
  /**
   * The identifier of the running extension target. Use this to determine which target your extension is rendering in and conditionally adjust functionality or UI based on the extension context.
   */
  extension: {
    target: ExtensionTarget;
  };

  /**
   * Utilities for translating content according to the current localization of the admin. Use these methods to provide translated strings that match the merchant's language preferences, ensuring your extension is accessible to a global audience.
   */
  i18n: I18n;

  /**
   * Provides information to the receiver of an intent. Use this to access data passed from other extensions or parts of the admin when your extension is launched through intent-based navigation.
   */
  intents: Intents;

  /**
   * Provides methods for programmatic navigation within the Shopify admin. Use this to redirect merchants to other admin pages, such as resource detail pages, index pages, or settings. Navigation updates the browser URL and navigates within the admin without triggering a full page reload.
   */
  navigation: Navigation;

  /**
   * Executes GraphQL queries against the [GraphQL Admin API](/docs/api/admin-graphql). Use this to fetch shop data, manage resources, or perform mutations. Queries are automatically authenticated with the current user's permissions. Optionally specify GraphQL variables and API version for your query.
   */
  query: <Data = unknown, Variables = {[key: string]: unknown}>(
    query: string,
    options?: {variables?: Variables; version?: Omit<ApiVersion, '2023-04'>},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;
}
