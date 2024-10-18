import {ApiVersion, Auth, GraphQLError, I18n} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

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
   * Used to query the Admin GraphQL API
   */
  query: <Data = unknown, Variables = {[key: string]: unknown}>(
    query: string,
    options?: {variables?: Variables; version?: Omit<ApiVersion, '2023-04'>},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;
}
