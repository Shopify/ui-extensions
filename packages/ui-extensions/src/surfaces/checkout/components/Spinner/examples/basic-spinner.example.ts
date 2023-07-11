import {extension, Spinner} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});
