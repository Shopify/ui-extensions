import {extend, Stepper} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const stepper = root.createComponent(Stepper, {
    label: 'Quantity',
    value: 1,
  });

  root.appendChild(stepper);
});
