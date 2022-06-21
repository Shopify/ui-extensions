import {extend, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const view = root.createComponent(
    View,
    {border: 'base', padding: 'base'},
    'View',
  );

  root.appendChild(view);
});
