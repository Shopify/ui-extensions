import {extension, View} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const view = root.createComponent(
    View,
    {border: 'base', padding: 'base'},
    'View',
  );

  root.appendChild(view);
});
