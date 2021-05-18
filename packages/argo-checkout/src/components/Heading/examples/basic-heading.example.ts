import {extend, Heading} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Heading');

  root.appendChild(heading);
});
