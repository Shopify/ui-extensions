import {ExtensionTarget, CartLine} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

class ExtensionHasNoTargetError extends Error {
  name = 'ExtensionHasNoTargetError';

  constructor(target: ExtensionTarget) {
    super(
      `Cannot call 'useTarget()' on target '${target}'. Property 'target' is not found on api.`,
    );
  }
}

/**
 * Returns the cart line the extension is attached to. This is only applicable to the `Checkout::CartLineDetails::RenderAfter` and `Checkout::CartLineDetails::RenderLineComponents` extension target. Until version `2023-04`, this hook returned a `PresentmentCartLine` object.
 */
export function useTarget(): CartLine {
  const api = useApi<
    | 'Checkout::CartLineDetails::RenderAfter'
    | 'Checkout::CartLineDetails::RenderLineComponents'
  >();
  if (!api.target) {
    throw new ExtensionHasNoTargetError(api.extension.target);
  }
  return useSubscription(api.target);
}
