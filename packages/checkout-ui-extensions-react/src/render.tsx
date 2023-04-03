import type {ReactElement, PropsWithChildren} from 'react';
import {Component} from 'react';
import {render as remoteRender} from '@remote-ui/react';
import {extend} from '@shopify/checkout-ui-extensions';
import type {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/checkout-ui-extensions';

import {ExtensionApiContext} from './context';

/**
 * Registers your React-based UI Extension to run for the selected extension point.
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
  // Checkout::Dynamic::Render extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return extend<'Checkout::Dynamic::Render'>(
    extensionPoint as any,
    (root, api) => {
      return new Promise((resolve, reject) => {
        try {
          remoteRender(
            <ExtensionApiContext.Provider value={api}>
              <ErrorBoundary>
                {render(api as ApiForRenderExtension<ExtensionPoint>)}
              </ErrorBoundary>
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
  );
}

interface ErrorState {
  hasError: boolean;
}

// Using ErrorBoundary allows us to relay the errors coming from React reconcilation
// to the global object using reportError.
// eslint-disable-next-line @typescript-eslint/ban-types
class ErrorBoundary extends Component<PropsWithChildren<{}>, ErrorState> {
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  state: ErrorState = {hasError: false};

  componentDidCatch(error: Error, errorInfo: {componentStack: string}) {
    // in development, these errors are logged by React itself so we don’t need to re-log them
    // eslint-disable-next-line no-process-env
    if (process.env.NODE_ENV !== 'development') {
      // eslint-disable-next-line no-console
      console.error(
        `The above error occurred in the <${extractComponentName(
          errorInfo.componentStack,
        )}> component:\n${errorInfo.componentStack}`,
      );
    }
    reportError(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

// This is an example of component stack:
//
// at Hello (webpack:///./src/index.tsx_+_220_modules?:1082:9)
// at Banner
// at Extension (webpack:///./src/index.tsx_+_220_modules?:1075:7)
// at render_esnext_ErrorBoundary (webpack:///./src/index.tsx_+_220_modules?:1052:124)
export function extractComponentName(componentStack: string) {
  const match = componentStack.match(/^\s+at\s(\w+)\s/);
  return (match && match[1]) ?? 'Unknown';
}
