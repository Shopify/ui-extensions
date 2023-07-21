import {extension, Divider} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const divider = root.createComponent(Divider);

  root.appendChild(divider);
});
