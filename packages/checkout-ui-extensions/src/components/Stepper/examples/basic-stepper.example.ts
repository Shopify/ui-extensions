import {extend, Stepper} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const stepper = root.createComponent(Stepper, {
    label: 'Stepper',
  });

  root.appendChild(stepper);
});
