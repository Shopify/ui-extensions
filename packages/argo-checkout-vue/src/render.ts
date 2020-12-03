import type {Component} from 'vue';
import {createRenderer} from '@remote-ui/vue';

import {extend} from '@shopify/argo-checkout';
import type {
  RenderExtensionPoint,
  // InputForRenderExtension,
} from '@shopify/argo-checkout';

export function render<ExtensionPoint extends RenderExtensionPoint>(
  extensionPoint: ExtensionPoint,
  App: Component,
) {
  return extend<'Checkout::KitchenSink'>(
    extensionPoint as any,
    (root, _input) => {
      const {createApp} = createRenderer(root);

      createApp(App).mount(root);
      root.mount();

      return {};
    },
  );
}
