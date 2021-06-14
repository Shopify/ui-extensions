import {extend, TextField} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'TextField',
  });

  root.appendChild(textfield);
});
