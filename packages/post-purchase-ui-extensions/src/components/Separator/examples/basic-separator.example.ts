import {extend, Separator} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const separator = root.createComponent(Separator);

  root.appendChild(separator);
});
