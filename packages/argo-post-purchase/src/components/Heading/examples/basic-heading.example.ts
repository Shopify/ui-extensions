import {extend, Heading} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Heading');

  root.appendChild(heading);
});
