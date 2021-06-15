import {extend, Spinner} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
