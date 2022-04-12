import {extend, BlockLayout, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const blockLayout = root.createComponent(
    BlockLayout,
    {
      rows: ['auto', '200px'],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    ],
  );

  root.appendChild(blockLayout);
});
