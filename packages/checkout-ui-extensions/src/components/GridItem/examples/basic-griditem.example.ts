import {extend, Grid, GridItem, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const grid = root.createComponent(
    Grid,
    {
      columns: 3,
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(GridItem, {columnSpan: 2}, [
        root.createComponent(
          View,
          {border: 'base', padding: 'base', blockSize: 1},
          'View span 2 columns',
        ),
      ]),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(GridItem, {rowSpan: 2}, [
        root.createComponent(
          View,
          {border: 'base', padding: 'base', blockSize: 1},
          'View span 2 rows',
        ),
      ]),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    ],
  );

  root.appendChild(grid);
});
