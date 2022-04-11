import type {ReactElement} from 'react';
import {render as remoteRender} from '@remote-ui/react';
import {extend} from '@shopify/retail-ui-extensions/src';
import type {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/retail-ui-extensions/src';

import {ExtensionApiContext} from './context';

/**
 * Registers your React-based UI Extension to run for the selected extension point.
 * Additionally, this function will automatically provide the extension API as React
 * context, which you can access anywhere in your extension by using the `useExtensionApi()`
 * hook.
 *
 * @param extensionPoint The extension point you are registering for. This extension
 * point must be a `RenderExtensionPoint`; if you are trying to register for a non-
 * rendering extension point, like `Retail::SmartGrid::Tile`, use the
 * `extend()` function provided by this library instead.
 *
 * @param render The function that will be called when Shopify Point of Sale begins rendering
 * your extension. This function is called with the API Point of Sale provided to your
 * extension, and must return a React element that will be rendered into the extension
 * point you specified.
 */
export function render<ExtensionPoint extends RenderExtensionPoint>(
  extensionPoint: ExtensionPoint,
  render: (api: ApiForRenderExtension<ExtensionPoint>) => ReactElement<any>,
) {
  // TypeScript can’t infer the type of the callback because it’s a big union
  // type. To get around it, we’ll just fake like we are rendering the
  // Tile extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return extend<'Retail::SmartGrid::Tile'>(
    extensionPoint as any,
    (root, api) => {
      return new Promise((resolve, reject) => {
        try {
          remoteRender(
            <ExtensionApiContext.Provider value={api}>
              {render(api as ApiForRenderExtension<ExtensionPoint>)}
            </ExtensionApiContext.Provider>,
            root,
            () => {
              resolve();
            },
          );
        } catch (error) {
          reject(error);
        }
      });
    },
  );
}
