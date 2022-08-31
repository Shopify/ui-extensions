import type {ReactElement} from 'react';
import {render as remoteRender} from '@remote-ui/react';
import {extend} from '@shopify/customer-account-ui-extensions';
import type {
  ApiForExtension,
  RenderExtension,
  RenderExtensionPoint,
} from '@shopify/customer-account-ui-extensions';

type RenderFunction<T> = RenderExtension<T, any>;

/**
 * Registers your React-based UI Extension to run for the selected extension point.
 *
 * @param extensionPoint The extension point you are registering for. This extension
 * point must be a `RenderExtensionPoint`; if you are trying to register for a non-
 * rendering extension point, use the`extend()` function provided by this library instead.
 *
 * @param render The function that will be called when Customer Account begins rendering
 * your extension. This function is called with the API Customer Account provided to your
 * extension, and must return a React element that will be rendered into the extension
 * point you specified.
 */
export function render<ExtensionPoint extends RenderExtensionPoint>(
  extensionPoint: ExtensionPoint,
  render: (api: ApiForExtension<ExtensionPoint>) => ReactElement<any>,
) {
  const extendCallback: RenderFunction<any> = (root, api) => {
    return new Promise<void>((resolve, reject) => {
      try {
        remoteRender(render(api), root, () => {
          resolve();
        });
      } catch (error) {
        // Workaround for https://github.com/Shopify/ui-extensions/issues/325
        // eslint-disable-next-line no-console
        console.error(error);
        reject(error);
      }
    });
  };

  return extend<ExtensionPoint>(extensionPoint, extendCallback);
}
