import {extend, Spinner} from '@shopify/argo-post-purchase';

extend('Checkout::Feature::Render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
