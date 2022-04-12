import {extend, Text} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const text = root.createComponent(Text, undefined, 'Text');

  root.appendChild(text);
});
