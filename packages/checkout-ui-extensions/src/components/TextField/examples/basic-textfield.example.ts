import {extend, TextField} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'TextField',
  });

  root.appendChild(textfield);
});
