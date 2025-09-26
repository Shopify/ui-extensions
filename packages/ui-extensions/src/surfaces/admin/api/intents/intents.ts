/**
 * User dismissed or closed the workflow without completing it.
 */
export interface ClosedIntentResponse {
  code?: 'closed';
}

/**
 * Successful intent completion.
 */
export interface SuccessIntentResponse {
  code?: 'ok';
  data?: {[key: string]: unknown};
}

/**
 * Failed intent completion.
 */
export interface ErrorIntentResponse {
  code?: 'error';
  message?: string;
  issues?: {
    /**
     * The path to the field with the issue.
     */
    path?: string[];
    /**
     * The error message for the issue.
     */
    message?: string;
    /**
     * A code identifier for the issue.
     */
    code?: string;
  }[];
}

/**
 * Result of an intent activity.
 * Discriminated union representing all possible completion outcomes.
 */
export type IntentResponse =
  | SuccessIntentResponse
  | ErrorIntentResponse
  | ClosedIntentResponse;

/**
 * Activity handle for tracking intent workflow progress.
 */
export interface IntentActivity {
  /**
   * A Promise that resolves when the intent workflow completes, returning the response.
   */
  complete?: Promise<IntentResponse>;
}

/**
 * The action to perform on a resource.
 */
export type IntentAction = 'create' | 'edit';

/**
 * Supported resource types that can be targeted by intents.
 */
export type IntentType =
  | 'shopify/Article'
  | 'shopify/Catalog'
  | 'shopify/Collection'
  | 'shopify/Customer'
  | 'shopify/Discount'
  | 'shopify/Market'
  | 'shopify/Menu'
  | 'shopify/MetafieldDefinition'
  | 'shopify/Metaobject'
  | 'shopify/MetaobjectDefinition'
  | 'shopify/Page'
  | 'shopify/Product'
  | 'shopify/ProductVariant';

/**
 * Options for invoking intents when using the query string format.
 */
export interface IntentQueryOptions {
  /**
   * The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').
   */
  value?: string;
  /**
   * Additional data required for certain intent types.
   * For example:
   * - Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' }
   * - ProductVariant creation requires { productId: 'gid://shopify/Product/123' }
   * - Metaobject creation requires { type: 'shopify--color-pattern' }
   */
  data?: {[key: string]: unknown};
}

/**
 * Structured description of an intent to invoke.
 */
export interface IntentQuery extends IntentQueryOptions {
  /**
   * The operation to perform on the target resource.
   */
  action: IntentAction;
  /**
   * The resource type (e.g., 'shopify/Product').
   */
  type: IntentType;
}

/**
 * The invoke API for triggering intent workflows.
 *
 * @param intent - Either a string query or structured object describing the intent
 * @param options - Optional parameters when using string query format
 * @returns A Promise resolving to an activity handle for tracking the workflow
 *
 * @example
 * ```javascript
 * // Create a new product
 * const activity = await intents.invoke('create:shopify/Product');
 * const response = await activity.complete;
 *
 * // Edit an existing product
 * const activity = await intents.invoke('edit:shopify/Product,gid://shopify/Product/123');
 * const response = await activity.complete;
 *
 * // Create a discount with required type
 * const activity = await intents.invoke('create:shopify/Discount', {
 *   data: { type: 'amount-off-product' }
 * });
 * const response = await activity.complete;
 * ```
 */
export interface IntentInvokeApi {
  (query: IntentQuery): Promise<IntentActivity>;
  (intentURL: string, options?: IntentQueryOptions): Promise<IntentActivity>;
}

/**
 * Intent information provided to the receiver of an intent.
 */
export interface Intents {
  /**
   * The URL that was used to launch the intent.
   */
  launchUrl?: string | URL;
  /**
   * Invoke an intent workflow to create or edit Shopify resources.
   */
  invoke?: IntentInvokeApi;
}
