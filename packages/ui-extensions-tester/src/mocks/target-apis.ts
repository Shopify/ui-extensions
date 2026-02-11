import type {AnyExtensionTarget, ApiForTarget} from '../targets';
import {isCheckoutTarget} from '../targets';
import {createMockCheckoutTargetApi} from '../checkout';

/**
 * Returns the default mock API values for a given target, or an empty
 * object if no mock has been implemented yet.
 */
export function createMockTargetApi<T extends AnyExtensionTarget>(
  target: T,
): Partial<ApiForTarget<T>> {
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
