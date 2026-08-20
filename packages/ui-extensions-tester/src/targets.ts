import type {
  ExtensionTargets as CheckoutExtensionTargets,
  ExtensionTarget as CheckoutExtensionTarget,
} from '@shopify/ui-extensions/checkout';
import type {
  ExtensionTarget as AdminExtensionTarget,
  ExtensionTargets as AdminExtensionTargets,
} from '@shopify/ui-extensions/admin';
import type {
  ExtensionTarget as PosExtensionTarget,
  ExtensionTargets as PointOfSaleExtensionTargets,
  ShopifyEventMap as PosEventMap,
  ShopifyInterceptMap as PosInterceptMap,
} from '@shopify/ui-extensions/point-of-sale';
import type {
  CustomerAccountExtensionTarget,
  ExtensionTargets as CustomerAccountExtensionTargets,
} from '@shopify/ui-extensions/customer-account';

/**
 * Combined extension targets from all surfaces.
 */
export interface AllExtensionTargets
  extends CheckoutExtensionTargets,
    AdminExtensionTargets,
    CustomerAccountExtensionTargets,
    PointOfSaleExtensionTargets {}

/**
 * Any valid extension target name.
 */
export type AnyExtensionTarget = keyof AllExtensionTargets;

/**
 * Extracts the API type for a given extension target.
 *
 * For render targets this is the `api` property of the `RenderExtension`.
 * For event targets (functions) this is the `data` parameter type.
 */
export type ApiForTarget<T extends AnyExtensionTarget> =
  AllExtensionTargets[T] extends {api: infer A}
    ? A
    : AllExtensionTargets[T] extends (data: infer D) => unknown
    ? D
    : never;

/**
 * Maps an extension target to the event map available via
 * `shopify.addEventListener` on that surface.
 *
 * - POS targets: the POS `ShopifyEventMap`.
 * - Other surfaces: no host events, so the map is empty.
 */
export type EventMapForTarget<T extends AnyExtensionTarget> =
  T extends PosExtensionTarget ? PosEventMap : Record<string, never>;

/**
 * Maps an extension target to the intercept map available via
 * `shopify.intercept` on that surface.
 *
 * - POS targets: the POS `ShopifyInterceptMap`.
 * - Other surfaces: no interceptable workflows, so the map is empty.
 */
export type InterceptMapForTarget<T extends AnyExtensionTarget> =
  T extends PosExtensionTarget ? PosInterceptMap : Record<string, never>;

export function isCheckoutTarget(
  target: string,
): target is CheckoutExtensionTarget {
  return (
    target.startsWith('purchase.checkout') ||
    target.startsWith('purchase.thank-you') ||
    target.startsWith('purchase.cart-line-item') ||
    target.startsWith('Checkout::')
  );
}

export function isPosTarget(target: string): target is PosExtensionTarget {
  return target.startsWith('pos.');
}

export function isCustomerAccountTarget(
  target: string,
): target is CustomerAccountExtensionTarget {
  return target.startsWith('customer-account.');
}

export function isAdminTarget(target: string): target is AdminExtensionTarget {
  return target.startsWith('admin.');
}
