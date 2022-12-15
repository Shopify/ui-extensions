import {extend, ScrollView, View} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const scrollView = root.createComponent(ScrollView, {maxBlockSize: 400}, [
    root.createComponent(
      View,
      {border: 'base', padding: 'base', minBlockSize: 50},
      'View',
    ),
    root.createComponent(
      View,
      {border: 'base', padding: 'base', minBlockSize: 50},
      'View',
    ),
    root.createComponent(
      View,
      {border: 'base', padding: 'base', minBlockSize: 50},
      'View',
    ),
    root.createComponent(
      View,
      {border: 'base', padding: 'base', minBlockSize: 50},
      'View',
    ),
    root.createComponent(
      View,
      {border: 'base', padding: 'base', minBlockSize: 50},
      'View',
    ),
    root.createComponent(
      View,
      {border: 'base', padding: 'base', minBlockSize: 50},
      'View',
    ),
  ]);

  root.appendChild(scrollView);
});
