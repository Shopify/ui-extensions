import type {ReactElement} from 'react';
import {render as remoteRender} from '@remote-ui/react';

import {extension} from '@shopify/ui-extensions/checkout';
import type {
  ExtensionPoints,
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/ui-extensions/checkout';

import {ExtensionApiContext} from './context';

/**
 * Registers your React-based UI Extension to run for the selected extension point.
 * Additionally, this function will automatically provide the extension API as React
 * context, which you can access anywhere in your extension by using the `useApi()`
 * hook.
 *
 * @param target The extension point you are registering for. This extension
 * point must be a `RenderExtensionPoint`; if you are trying to register for a non-
 * rendering extension point, like `Checkout::PostPurchase::ShouldRender`, use the
 * `extension()` function provided by this library instead.
 *
 * @param render The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension, and must return a React element that will be rendered into the extension
 * point you specified.
 */
export function reactExtension<ExtensionPoint extends RenderExtensionPoint>(
  target: ExtensionPoint,
  render: (
    api: ApiForRenderExtension<ExtensionPoint>,
  ) => ReactElement<any> | Promise<ReactElement<any>>,
): ExtensionPoints[ExtensionPoint] {
  // TypeScript can’t infer the type of the callback because it’s a big union
  // type. To get around it, we’ll just fake like we are rendering the
  // Checkout::Dynamic::Render extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return extension<'Checkout::Dynamic::Render'>(
    target as any,
    async (root, api) => {
      const element = await render(
        api as ApiForRenderExtension<ExtensionPoint>,
      );

      await new Promise<void>((resolve, reject) => {
        try {
          remoteRender(
            <ExtensionApiContext.Provider value={api}>
              {element}
            </ExtensionApiContext.Provider>,
            root,
            () => {
              resolve();
            },
          );
        } catch (error) {
          // Workaround for https://github.com/Shopify/ui-extensions/issues/325
          // eslint-disable-next-line no-console
          console.error(error);
          reject(error);
        }
      });
    },
  ) as any;
}

export {reactExtension as render};
