import {extend, Divider} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const divider = root.createComponent(Divider);

  root.appendChild(divider);
});
