import {extend, TextField} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'Last name',
  });

  root.appendChild(textfield);
});
