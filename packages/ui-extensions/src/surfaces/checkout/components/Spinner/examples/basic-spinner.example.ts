import {extension, Spinner} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
