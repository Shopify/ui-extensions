import {extend, DateField} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const datefield = root.createComponent(DateField, {
    label: 'Select a date',
  });

  root.appendChild(datefield);
});
