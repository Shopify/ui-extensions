import type {ReadonlySignalLike} from '../../shared';
import type {Navigation} from './api/navigation-api/navigation-api';
import type {
  InterceptCapability,
  ShopifyEventMap,
  ShopifyInterceptMap,
  ShopifyInterceptor,
} from './events';

/**
 * The `shopify` global provides APIs that are available to all POS extensions
 * without needing to access them through the target's `api` argument.
 *
 * @publicDocs
 */
export interface ShopifyGlobal {
  /**
   * The merchant-granted permissions for validation severities returned by POS
   * interceptors. This signal is available to every POS extension target.
   *
   * Capability names combine an event from the approved Intercept API with an
   * allowed severity: `${event}.error`, `${event}.warn`, or `${event}.info`.
   * Event names exactly match the names accepted by `shopify.intercept()`; the
   * severity suffixes are proposed by the target-scoped configuration contract.
   *
   * Permissions are cumulative and every implied permission is included in the
   * array. For example, `beforecheckout.error` is accompanied by
   * `beforecheckout.warn` and `beforecheckout.info`; `beforecheckout.warn` is
   * accompanied by `beforecheckout.info`.
   *
   * An extension can return `ERROR`, `WARNING`, or `INFO` only when the matching
   * `error`, `warn`, or `info` capability (respectively) is present. A stronger
   * capability also permits the weaker severities made explicit in the array.
   *
   * Extensions request events per target in `shopify.extension.toml`. Shopify
   * validates at deploy time that each event is supported by its target. The
   * declaration also tells POS to expect that target to register the matching
   * interceptor, so the host can detect a missing validator. Only the target
   * that registers the interceptor declares the event; companion UI targets can
   * read this signal without redeclaring it. This distinction matters for
   * compliance workflows where a validator failure can have legal implications
   * and must not look like an intentionally absent validator.
   *
   * @example
   * ```toml
   * [[extensions.targeting]]
   * target = "pos.app.ready.data"
   * module = "./src/Extension.ts"
   *
   * [extensions.targeting.capabilities]
   * intercepts = ["beforecheckout"]
   * ```
   *
   * ```ts
   * if (shopify.capabilities.value.includes('beforecheckout.error')) {
   *   // This interceptor may return ERROR, WARNING, or INFO validations.
   * }
   * ```
   *
   * @see https://github.com/Shopify/ui-api-design/blob/be97e2ca7089b05db762a00941400c0e4dd3df94/libraries/javascript/ui-api-design/types/extensions/configuration/capabilities.md
   * @see https://github.com/Shopify/ui-api-design/pull/1557
   * @see https://github.com/Shopify/ui-api-design/pull/1563
   */
  capabilities: ReadonlySignalLike<InterceptCapability[]>;
}

/**
 * Background-only extension of `ShopifyGlobal`. Adds host-event listener APIs
 * that are only valid from the session-lifetime background target
 * (`pos.app.ready.data`). Non-background targets see the narrower
 * `ShopifyGlobal` and cannot type-check calls to these methods.
 *
 * @publicDocs
 */
export interface BackgroundShopifyGlobal extends ShopifyGlobal {
  /**
   * Register a listener for a POS host event. Listeners are fire-and-forget:
   * their return values are ignored, and their errors are caught without
   * affecting the host or other listeners.
   */
  addEventListener<K extends keyof ShopifyEventMap>(
    type: K,
    listener: (event: ShopifyEventMap[K]) => void,
  ): void;

  /**
   * Remove a listener previously registered with `addEventListener`. The
   * `listener` reference must match the one used to register.
   */
  removeEventListener<K extends keyof ShopifyEventMap>(
    type: K,
    listener: (event: ShopifyEventMap[K]) => void,
  ): void;

  /**
   * Register an interceptor for a POS host workflow that can be blocked.
   * Returns a function that unregisters the interceptor.
   */
  intercept<K extends keyof ShopifyInterceptMap>(
    type: K,
    interceptor: ShopifyInterceptor<ShopifyInterceptMap[K]>,
  ): () => void;
}

declare global {
  // @ts-expect-error - Intentionally overriding navigation type for POS context
  const navigation: Navigation;

  // Collides with checkout/globals.ts during this package's own typecheck: both
  // declare `const shopify` with surface-specific shapes. Consumers import only
  // one surface, so the collision is internal to this package's build.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const shopify: ShopifyGlobal;
}
