import {extend, Layout} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const layout = root.createComponent(Layout, undefined, 'View');

  root.appendChild(layout);
});
