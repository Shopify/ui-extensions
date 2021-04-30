import {extend, TextBlock} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const textBlock = root.createComponent(TextBlock, undefined, 'Textblock');

  root.appendChild(textBlock);
});
