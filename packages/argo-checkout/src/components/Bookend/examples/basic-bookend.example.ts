import {extend, Bookend, TextField, Button} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const bookend = root.createComponent(Bookend, undefined, [
    root.createComponent(TextField, {label: 'Discount'}),
    root.createComponent(Button, undefined, 'Submit'),
  ]);

  root.appendChild(bookend);
});
