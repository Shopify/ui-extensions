import {extension, TextField} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'Last name',
  });

  root.appendChild(textfield);
});
