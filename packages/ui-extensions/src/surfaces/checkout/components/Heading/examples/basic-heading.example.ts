import {extension, Heading} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Store name');

  root.appendChild(heading);
});
