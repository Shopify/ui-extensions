import {extend, Text} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const text = root.createComponent(Text, undefined, 'Text');

  root.appendChild(text);
});
