/**
 * GraphQL error returned by the Shopify Storefront APIs.
 */
export interface GraphQLError {
  message: string;
  extensions: {
    requestId: string;
    code: string;
  };
}

/**
 * Union of supported customer account API versions
 */
export type CustomerAccountApiVersion = 'unstable';

/**
 * Used to query the customer account API with pre-fetched token
 */

export type Query = <Data = unknown, Variables = {[key: string]: unknown}>(
  query: string,
  options?: {variables?: Variables; version?: CustomerAccountApiVersion},
) => Promise<{data?: Data; errors?: GraphQLError[]}>;
