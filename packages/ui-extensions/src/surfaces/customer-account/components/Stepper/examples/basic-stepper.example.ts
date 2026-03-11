import {extension, Stepper} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const stepper = root.createComponent(Stepper, {
    label: 'Quantity',
    value: 1,
  });

  root.appendChild(stepper);
});
