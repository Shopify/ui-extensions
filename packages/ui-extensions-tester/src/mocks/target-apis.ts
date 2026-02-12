import type {ExtensionTarget as CheckoutExtensionTarget} from '@shopify/ui-extensions/checkout';

import type {AnyExtensionTarget, ApiForTarget} from '../targets';
import {isCheckoutTarget} from '../targets';
import {createMockCheckoutTargetApi} from '../checkout/factories';

/**
 * Returns the default mock API values for a given target.
 */
export function createMockTargetApi<T extends CheckoutExtensionTarget>(
  target: T,
): ApiForTarget<T>;
export function createMockTargetApi(target: AnyExtensionTarget): never;
export function createMockTargetApi(target: AnyExtensionTarget): object {
  let api: object;
  if (isCheckoutTarget(target)) {
    api = createMockCheckoutTargetApi(target);
  } else {
    throw new Error(
      `Unsupported target: "${target}". No mock factory is available for this target.`,
    );
  }

  // `@shopify/ui-extensions/preact` calls `shopify.setSignals()` as a
  // side-effect when imported.  Include a no-op so the proxy doesn't
  // reject the access.
  return Object.assign(api, {setSignals() {}});
}
