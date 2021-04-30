import {extend, InlineSpacer, View} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const inlineStack = root.createComponent(View, undefined, [
    root.createComponent(View, undefined, 'View'),
    root.createComponent(InlineSpacer),
    root.createComponent(View, undefined, 'View'),
  ]);

  root.appendChild(inlineStack);
});
