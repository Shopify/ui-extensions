import {extend, DateField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const dateField = root.createComponent(
    DateField,
    { selected: ['2023-11-08'] },
    'DateField',
  );

  root.appendChild(dateField);
});
