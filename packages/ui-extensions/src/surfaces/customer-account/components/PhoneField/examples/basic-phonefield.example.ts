import {extension, PhoneField} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const phoneField = root.createComponent(PhoneField, {
    label: 'Phone',
    value: '1 (555) 555-5555',
  });

  root.appendChild(phoneField);
});
