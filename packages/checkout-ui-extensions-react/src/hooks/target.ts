import {ExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

class ExtensionHasNoTargetError extends Error {
  name = 'ExtensionHasNoTargetError';

  constructor(extensionPoint: ExtensionPoint) {
    super(
      `Cannot call 'useTargetLineItem()' on extensionPoint '${extensionPoint}'. Property 'target' is not found on api.`,
    );
  }
}

/**
 * Returns the cart line this extension is attached to.
 */
export function useTarget() {
  const api = useExtensionApi<'Checkout::CartLineDetails::RenderAfter'>();
  if (!api.target) {
    throw new ExtensionHasNoTargetError(api.extensionPoint);
  }
  return useSubscription(api.target);
}
