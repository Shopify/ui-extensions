import {extend, TextBlock} from '@shopify/argo-post-purchase';

extend('Checkout::Feature::Render', (root) => {
  const textBlock = root.createComponent(TextBlock, undefined, 'Textblock');

  root.appendChild(textBlock);
});
