import {useContext} from 'react';
import {
  RenderExtensionTarget,
  ApiForRenderExtension,
} from '@shopify/ui-extensions/checkout';

import {CheckoutUIExtensionError} from '../errors';
import {ExtensionApiContext} from '../context';

/**
 * Returns the full API object that was passed in to your extension when it was created.
 * Depending on the extension target, this object can contain different properties.
 *
 * For example, the `Checkout::CartLineDetails::RenderAfter` extension target will return the [CartLineDetailsApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/cartlinedetailsapi) object.
 * Whereas others return the [StandardApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi) object.
 *
 * For reference, see [ExtensionTargets](https://shopify.dev/docs/api/checkout-ui-extensions/apis/extensiontargets) to determine what API object will be returned by your extension target.
 */
export function useApi<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): ApiForRenderExtension<Target> {
  const api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new CheckoutUIExtensionError(
      'You can only call this hook when running as a UI extension.',
    );
  }

  return api as ApiForRenderExtension<Target>;
}

/**
 * Returns the full API object that was passed in to your extension when it was created.
 * Depending on the extension target, this object can contain different properties.
 *
 * For example, the `Checkout::CartLineDetails::RenderAfter` extension target will return the [CartLineDetailsApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/cartlinedetailsapi) object.
 * Whereas others return the [StandardApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi) object.
 *
 * For reference, see [ExtensionTargets](https://shopify.dev/docs/api/checkout-ui-extensions/apis/extensiontargets) to determine what API object will be returned by your extension target.
 *
 * > Caution: This is deprecated, use `useApi` instead.
 *
 * @deprecated This is deprecated, use `useApi` instead.
 */
export function useExtensionApi<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): ApiForRenderExtension<Target> {
  return useApi();
}
