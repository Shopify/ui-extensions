import {extend, Separator} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const separator = root.createComponent(Separator);

  root.appendChild(separator);
});
