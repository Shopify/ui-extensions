import {extend, DateField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const dateField = root.createComponent(
    DateField,
    {},
    'DateField',
  );

  root.appendChild(dateField);
});
