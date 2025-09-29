import type {I18n} from '../../../../api';
import {ApiVersion} from '../../../../shared';
import type {Storage} from './storage';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {Intents} from '../intents/intents';

export type {Intents} from '../intents/intents';

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

interface Auth {
  /**
   * Retrieves a Shopify OpenID Connect ID token for the current user.
   */
  idToken: () => Promise<string | null>;
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
   * Provides methods for authenticating calls to an app backend.
   */
  auth: Auth;

  /**
   * Utilities for translating content according to the current localization of the admin.
   * More info - https://shopify.dev/docs/apps/checkout/best-practices/localizing-ui-extensions
   */
  i18n: I18n;

  /**
   * Provides information to the receiver of an intent.
   */
  intents: Intents;

  /**
   * Provides methods for setting, getting, and clearing browser data from the extension
   */
  storage: Storage;

  /**
   * Used to query the Admin GraphQL API
   */
  query: <Data = unknown, Variables = {[key: string]: unknown}>(
    query: string,
    options?: {variables?: Variables; version?: Omit<ApiVersion, '2023-04'>},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;
}
