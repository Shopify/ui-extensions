import {extension, Heading} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Store name');

  root.appendChild(heading);
});
