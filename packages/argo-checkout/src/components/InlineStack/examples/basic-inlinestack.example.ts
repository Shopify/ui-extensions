import {extend, InlineStack, View} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const inlineStack = root.createComponent(InlineStack, undefined, [
    root.createComponent(View, undefined, 'View'),
    root.createComponent(View, undefined, 'View'),
    root.createComponent(View, undefined, 'View'),
  ]);

  root.appendChild(inlineStack);
});
