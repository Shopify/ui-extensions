import {extension, Heading} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Store name');

  root.appendChild(heading);
});
