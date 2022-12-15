import {extend, PhoneField} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const phoneField = root.createComponent(PhoneField, {
    label: 'Phone',
    value: '1 (555) 555-5555',
  });

  root.appendChild(phoneField);
});
