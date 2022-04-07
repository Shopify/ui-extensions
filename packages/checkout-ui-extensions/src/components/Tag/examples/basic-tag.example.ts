import {extend, Tag} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const tag = root.createComponent(Tag, {}, 'BOGO');

  root.appendChild(tag);
});
