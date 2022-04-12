import {extend, Heading} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Heading');

  root.appendChild(heading);
});
