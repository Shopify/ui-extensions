import {extend, Separator} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const separator = root.createComponent(Separator);

  root.appendChild(separator);
});
