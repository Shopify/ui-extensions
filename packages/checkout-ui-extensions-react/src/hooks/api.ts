import {useContext} from 'react';
import {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/checkout-ui-extensions';

import {CheckoutUIExtensionError} from '../errors';
import {ExtensionApiContext} from '../context';

/**
 * Returns the full API object that was passed in to your extension when it was created.
 * Depending on the extension point, this object can contain different properties.
 *
 * For example, the `Checkout::CartLineDetails::RenderAfter` extension point will return the [CartLineRenderAfterApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/cartlinerenderafterapi) object.
 * Whereas others return the [StandardApi](https://shopify.dev/docs/api/checkout-ui-extensions/apis/standardapi) object.
 *
 * For reference, see [ExtensionPoints](https://shopify.dev/docs/api/checkout-ui-extensions/apis/extensionpoints) to determine what API object will be returned by your extension point.
 */
export function useExtensionApi<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ApiForRenderExtension<ID> {
  const api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new CheckoutUIExtensionError(
      'You can only call this hook when running as a UI extension.',
    );
  }

  return api as ApiForRenderExtension<ID>;
}
