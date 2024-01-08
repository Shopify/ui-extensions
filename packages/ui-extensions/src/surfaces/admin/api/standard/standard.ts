import type {I18n} from '../../../../api';
import {ApiVersion} from '../../../../shared';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface Intents {
  /**
   * The URL that was used to launch the intent.
   */
  launchUrl?: string | URL;
}

/**
 * GraphQL error returned by the Shopify Admin API.
 */
export interface GraphQLError {
  message: string;
  locations: {
    line: number;
    column: string;
  };
}

/**
 * The following APIs are provided to all extension targets.
 */
export interface StandardApi<ExtensionTarget extends AnyExtensionTarget> {
  /**
   * The identifier of the running extension target.
   */
  extension: {
    target: ExtensionTarget;
  };

  /**
   * Utilities for translating content according to the current localization of the admin.
   * More info - https://shopify.dev/docs/apps/checkout/best-practices/localizing-ui-extensions
   */
  i18n: I18n;

  /**
   * Provides information to the receiver the of an intent.
   */
  intents: Intents;

  /**
   * Used to query the Admin GraphQL API
   */
  query: <Data = unknown, Variables = {[key: string]: unknown}>(
    query: string,
    options?: {variables?: Variables; version?: Omit<ApiVersion, '2023-04'>},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;
}
