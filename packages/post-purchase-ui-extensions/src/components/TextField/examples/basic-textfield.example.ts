import {extend, TextField} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'TextField',
  });

  root.appendChild(textfield);
});
