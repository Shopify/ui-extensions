import {extend, Heading} from '@shopify/argo-post-purchase';

extend('Checkout::Feature::Render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Heading');

  root.appendChild(heading);
});
