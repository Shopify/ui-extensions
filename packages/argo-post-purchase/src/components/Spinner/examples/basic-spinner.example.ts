import {extend, Spinner} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
