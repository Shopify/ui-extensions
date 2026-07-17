import type {CapabilitiesApi} from './api/capabilities-api/capabilities-api';
import type {Navigation} from './api/navigation-api/navigation-api';
import type {
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
export interface ShopifyGlobal extends CapabilitiesApi {}

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
