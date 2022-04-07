import {extend, InlineLayout, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const inlineLayout = root.createComponent(
    InlineLayout,
    {
      columns: ['200px', 'fill'],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    ],
  );

  root.appendChild(inlineLayout);
});
