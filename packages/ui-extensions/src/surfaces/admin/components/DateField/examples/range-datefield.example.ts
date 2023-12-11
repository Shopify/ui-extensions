import {extend, DateField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const dateField = root.createComponent(
    DateField,
    { selected: {start: '2023-11-08', end: '2023-11-10' } },
    'DateField',
  );

  root.appendChild(dateField);
});
