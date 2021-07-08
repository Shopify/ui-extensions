import type {ReactElement} from 'react';
import {render as remoteRender} from '@remote-ui/react';
import {extend} from '@shopify/checkout-ui-extensions';
import type {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/checkout-ui-extensions';

import {ExtensionApiContext} from './context';

/**
 * Registers your React-based UI extension to run for the selected extension point.
 * Additionally, this function will automatically provide the extension API as React
 * context, which you can access anywhere in your extension by using the `useExtensionApi()`
 * hook.
 *
 * @param extensionPoint The extension point you are registering for. This extension
 * point must be a `RenderExtensionPoint`; if you are trying to register for a non-
 * rendering extension point, like `Checkout::PostPurchase::ShouldRender`, use the
 * `extend()` function provided by this library instead.
 *
 * @param render The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension, and must return a React element that will be rendered into the extension
 * point you specified.
 */
export function render<ExtensionPoint extends RenderExtensionPoint>(
  extensionPoint: ExtensionPoint,
  render: (api: ApiForRenderExtension<ExtensionPoint>) => ReactElement<any>,
) {
  // TypeScript can’t infer the type of the callback because it’s a big union
  // type. To get around it, we’ll just fake like we are rendering the
  // KitchenSink extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return extend<'Checkout::KitchenSink'>(extensionPoint as any, (root, api) => {
    remoteRender(
      <ExtensionApiContext.Provider value={api}>
        {render(api as ApiForRenderExtension<ExtensionPoint>)}
      </ExtensionApiContext.Provider>,
      root,
      () => {
        root.mount();
      },
    );

    return {};
  });
}
