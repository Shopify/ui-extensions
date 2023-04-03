import {
  ExtensionPoint,
  PresentmentCartLine,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

class ExtensionHasNoTargetError extends Error {
  name = 'ExtensionHasNoTargetError';

  constructor(extensionPoint: ExtensionPoint) {
    super(
      `Cannot call 'useTarget()' on extensionPoint '${extensionPoint}'. Property 'target' is not found on api.`,
    );
  }
}

/**
 * Returns the cart line the extension is attached to. This is only applicable to the `Checkout::CartLineDetails::RenderAfter` extension point.
 */
export function useTarget(): PresentmentCartLine {
  const api = useExtensionApi<'Checkout::CartLineDetails::RenderAfter'>();
  if (!api.target) {
    throw new ExtensionHasNoTargetError(api.extensionPoint);
  }
  return useSubscription(api.target);
}
