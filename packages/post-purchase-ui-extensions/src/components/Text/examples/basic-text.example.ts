import {extend, Text} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const text = root.createComponent(Text, undefined, 'Text');

  root.appendChild(text);
});