import {extend, TextBlock} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const textBlock = root.createComponent(TextBlock, undefined, 'Textblock');

  root.appendChild(textBlock);
});
