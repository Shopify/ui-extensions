import {extension, ConsentCheckbox} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const consentCheckbox = root.createComponent(
    ConsentCheckbox,
    {policy: 'sms-marketing'},
    'Text me with news and promotions',
  );

  root.appendChild(consentCheckbox);
});
