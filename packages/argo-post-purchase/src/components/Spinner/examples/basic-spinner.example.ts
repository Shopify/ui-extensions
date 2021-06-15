import {extend, Spinner} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
