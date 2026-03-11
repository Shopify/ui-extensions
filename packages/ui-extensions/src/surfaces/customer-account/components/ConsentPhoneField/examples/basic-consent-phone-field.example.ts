import {extension, ConsentPhoneField} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const consentPhoneField = root.createComponent(ConsentPhoneField, {
    label: 'Phone',
    policy: 'sms-marketing',
  });

  root.appendChild(consentPhoneField);
});
