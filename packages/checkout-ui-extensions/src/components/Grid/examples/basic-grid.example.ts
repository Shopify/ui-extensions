import {extend, Grid, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const grid = root.createComponent(
    Grid,
    {
      columns: ['20%', 'fill'],
      rows: ['auto', 200],
    },
    [
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        '20% / auto',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'fill / auto',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        '20% / 200',
      ),
      root.createComponent(
        View,
        {border: 'base', padding: 'base'},
        'fill / 200',
      ),
    ],
  );

  root.appendChild(grid);
});
