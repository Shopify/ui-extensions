import type {
  ExtensionTargets as CheckoutExtensionTargets,
  ExtensionTarget as CheckoutExtensionTarget,
} from '@shopify/ui-extensions/checkout';
import type {ExtensionTargets as AdminExtensionTargets} from '@shopify/ui-extensions/admin';
import type {ExtensionTargets as CustomerAccountExtensionTargets} from '@shopify/ui-extensions/customer-account';
import type {ExtensionTargets as PointOfSaleExtensionTargets} from '@shopify/ui-extensions/point-of-sale';

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
 */
export type ApiForTarget<T extends AnyExtensionTarget> =
  AllExtensionTargets[T] extends {api: infer A}
    ? A
    : AllExtensionTargets[T] extends (data: infer D) => unknown
    ? D
    : never;

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
