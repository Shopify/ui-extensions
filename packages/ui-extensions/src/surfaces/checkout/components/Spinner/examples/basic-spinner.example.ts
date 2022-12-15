import {extend, Spinner} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
