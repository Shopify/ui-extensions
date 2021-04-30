import {extend, Separator} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const separator = root.createComponent(Separator);

  root.appendChild(separator);
});
