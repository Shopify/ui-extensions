/**
 * Options for URL-based invocations.
 *
 * When invoking via URL syntax, `action` and `type` are parsed from the
 * string. This companion type captures the remaining optional fields that can
 * be provided alongside the URL.
 */
export interface IntentQueryOptions {
  /**
   * Optional identifier of an existing resource to operate on.
   *
   * Typically a Shopify GID (e.g., `gid://shopify/Product/123`). If omitted, the
   * action typically targets creation flows or type-level operations.
   */
  value?: string;
  /**
   * Optional input payload passed to the intent.
   *
   * Used to seed forms or supply parameters. The accepted shape is
   * intent-specific and validated by the host. Values must be
   * JSON-serializable.
   */
  data?: Record<string, unknown>;
}

/**
 * Allowed actions that can be performed by an intent.
 *
 * Common actions include:
 * - `'create'`: Initiate creation of a new resource.
 * - `'edit'`: Modify an existing resource.
 */
export type IntentAction = 'create' | 'edit' | string;

/**
 * Structured description of an intent to invoke.
 *
 * Use this object form when programmatically composing an intent at runtime.
 * It pairs an action (verb) with a resource type and optional inputs.
 */
export interface IntentQuery extends IntentQueryOptions {
  /**
   * Verb describing the operation to perform on the target resource.
   *
   * Common values include `'create'` and `'edit'`. The set of
   * allowed verbs is intent-specific; unknown verbs will fail validation.
   */
  action: IntentAction;
  /**
   * MIME-type identifier for the resource type.
   *
   * The canonical format is `shopify/ResourceName`, for example
   * `shopify/Product`, `shopify/Order`, or `shopify/Discount`.
   */
  type: string;
}

/**
 * Successful intent completion.
 *
 * - `code` is always `'ok'`
 * - `data` contains the validated output payload as defined by the intent's
 *   schema (shape is intent-specific)
 */
export interface SuccessIntentResponse {
  /** Discriminator indicating successful completion. Always `'ok'`. */
  code: 'ok';
  /**
   * Validated output payload produced by the workflow.
   *
   * The shape is intent-specific and defined by the corresponding intent
   * schema. Consumers should narrow by `code === 'ok'` before accessing.
   */
  data: Record<string, unknown>;
}

/**
 * Path segment for structured error reporting.
 *
 * Mirrors the Standard Schema Specification's `PathSegment`, enabling precise
 * pointers to problematic inputs (object keys, indices, etc.).
 *
 * @see {@link https://github.com/standard-schema/standard-schema Standard Schema Specification}
 */
export interface PathSegment {
  /** Key identifying the segment within the path (object key or array index). */
  readonly key: PropertyKey;
}

/**
 * Issue describing a specific validation or processing problem.
 *
 * This structure aligns with the Standard Schema Specification and allows rich
 * error details, including a human-friendly `message`, optional machine-readable
 * `code`, and a `path` identifying the exact location of the issue within the
 * provided input.
 *
 * @see {@link https://github.com/standard-schema/standard-schema Standard Schema Specification}
 */
export interface Issue {
  /** Human-readable description of the issue. */
  readonly message: string;
  /**
   * Optional path to the offending value within the provided input.
   *
   * Combines property keys and structured {@link PathSegment} entries to
   * precisely locate nested fields.
   */
  readonly path?: ReadonlyArray<PropertyKey | PathSegment>;
}

/**
 * Failed intent completion.
 *
 * - `code` is always `'error'`
 * - `message` summarizes the failure
 * - `issues` optionally provides structured details for validation or
 *   field-specific problems following the Standard Schema convention
 *
 * Use `issues` to power UI-level error displays and fine-grained handling.
 */
export interface ErrorIntentResponse {
  /** Discriminator indicating failure. Always `'error'`. */
  code: 'error';
  /** Summary message describing why the workflow failed. */
  message: string;
  /**
   * Optional collection of structured issues for granular diagnostics
   * (validation errors, field-level problems, etc.).
   */
  issues?: Issue[];
}

/**
 * User dismissed or closed the workflow without completing it.
 *
 * Distinct from `error`: no failure occurred, the activity was simply
 * abandoned by the user.
 */
export interface ClosedIntentResponse {
  /** Discriminator indicating user dismissal. Always `'closed'`. */
  code: 'closed';
}

/**
 * Result of an intent activity.
 *
 * Discriminated union representing all possible completion outcomes for an
 * invoked intent. Prefer narrowing on `code` in control flow:
 */
export type IntentResponse =
  | SuccessIntentResponse
  | ErrorIntentResponse
  | ClosedIntentResponse;

/**
 * Handle to an in-flight intent workflow.
 *
 * The Activity pattern separates invocation from completion. Await `complete`
 * to obtain an {@link IntentResponse}. Future extensions may add cancellation
 * or progress reporting.
 */
export interface IntentActivity {
  /** Promise that resolves to the final {@link IntentResponse}. */
  complete: Promise<IntentResponse>;
}

/**
 * Entry point for Shopify intents.
 *
 * A unified surface for describing and orchestrating operations. Intents pair
 * an `action` (verb) with a resource `type` and optional `value` and `data`
 * to request a workflow.
 */
export interface IntentsApi {
  /**
   * Invoke an intent using the object syntax.
   *
   * @param query - Structured intent description, including `action` and `type`.
   * @returns A promise for an {@link IntentActivity} that completes with an
   *          {@link IntentResponse}.
   */
  invoke(query: IntentQuery): Promise<IntentActivity>;
  /**
   * Invoke an intent using the URL syntax.
   *
   * URL format: `action:type[,value][?params]`.
   *
   * @param intentURL - Intent in URL form, e.g. `create:shopify/Product` or
   *                    `edit:shopify/Product,gid://shopify/Product/123?title=Updated` or
   *                    `edit:gid://shopify/Product/123`.
   * @param options - Optional supplemental inputs such as `value` or `data`.
   * @returns A promise for an {@link IntentActivity} that completes with an
   *          {@link IntentResponse}.
   */
  invoke(
    intentURL: string,
    options?: IntentQueryOptions,
  ): Promise<IntentActivity>;
}
