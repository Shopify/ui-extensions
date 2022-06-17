import {extend, InlineLayout, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const inlineLayout = root.createComponent(
    InlineLayout,
    {
      columns: ['20%', 'fill'],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, '20%'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'fill'),
    ],
  );

  root.appendChild(inlineLayout);
});
