import {extend, Stepper} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const stepper = root.createComponent(Stepper, {
    label: 'Stepper',
  });

  root.appendChild(stepper);
});
