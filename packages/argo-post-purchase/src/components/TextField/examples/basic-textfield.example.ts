import {extend, TextField} from '@shopify/argo-post-purchase';

extend('Checkout::Feature::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'TextField',
  });

  root.appendChild(textfield);
});
