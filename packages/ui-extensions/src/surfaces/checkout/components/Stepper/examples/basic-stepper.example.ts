import {extension, Stepper} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const stepper = root.createComponent(Stepper, {
    label: 'Quantity',
    value: 1,
  });

  root.appendChild(stepper);
});
