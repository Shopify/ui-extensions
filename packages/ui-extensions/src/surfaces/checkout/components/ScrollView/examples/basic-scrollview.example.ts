import {extension, ScrollView, View} from '@shopify/ui-extensions/checkout';

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
