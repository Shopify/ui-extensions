import {extend, View} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const view = root.createComponent(View, undefined, 'View');

  root.appendChild(view);
});
