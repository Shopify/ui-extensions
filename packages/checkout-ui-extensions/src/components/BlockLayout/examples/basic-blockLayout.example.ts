import {extend, BlockLayout, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const blockLayout = root.createComponent(
    BlockLayout,
    {
      rows: ['auto', 200],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, 'auto'),
      root.createComponent(View, {border: 'base', padding: 'base'}, '200'),
    ],
  );

  root.appendChild(blockLayout);
});
