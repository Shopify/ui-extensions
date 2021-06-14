import {extend, TextBlock} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const textBlock = root.createComponent(TextBlock, undefined, 'Textblock');

  root.appendChild(textBlock);
});
