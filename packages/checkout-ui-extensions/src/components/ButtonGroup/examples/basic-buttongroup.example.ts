import {extend, ButtonGroup, Button} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const buttonGroup = root.createComponent(ButtonGroup, undefined, [
    root.createComponent(Button, undefined, 'Cancel'),
    root.createComponent(Button, undefined, 'Submit'),
  ]);

  root.appendChild(buttonGroup);
});
