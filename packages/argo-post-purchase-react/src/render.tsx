import type {ReactElement} from 'react';
import {render as remoteRender} from '@remote-ui/react';

import {extend} from '@shopify/argo-post-purchase';
import type {
  RenderExtensionPoint,
  InputForRenderExtension,
} from '@shopify/argo-post-purchase';

import {ExtensionInputContext} from './context';

export function render<ExtensionPoint extends RenderExtensionPoint>(
  extensionPoint: ExtensionPoint,
  render: (input: InputForRenderExtension<ExtensionPoint>) => ReactElement<any>,
) {
  // TypeScript can’t infer the type of the callback because it’s a big union
  // type. To get around it, we’ll just fake like we are rendering the
  // KitchenSink extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return extend<'Checkout::KitchenSink'>(
    extensionPoint as any,
    (root, input) => {
      remoteRender(
        <ExtensionInputContext.Provider value={input}>
          {render(input as InputForRenderExtension<ExtensionPoint>)}
        </ExtensionInputContext.Provider>,
        root,
        () => {
          root.mount();
        },
      );

      return {};
    },
  );
}
