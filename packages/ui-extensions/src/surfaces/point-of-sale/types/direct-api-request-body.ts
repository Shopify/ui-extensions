/**
 * Interface representing the structure of a direct API request body for GraphQL operations.
 */
export interface DirectApiRequestBody {
  /**
   * The GraphQL query or mutation string to be executed.
   */
  query: string;
  /**
   * Optional variables to be passed along with the GraphQL query.
   */
  variables?: Record<string, any>;
}
