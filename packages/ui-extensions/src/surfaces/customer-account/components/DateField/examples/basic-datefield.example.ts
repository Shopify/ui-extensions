import {extension, DateField} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const datefield = root.createComponent(DateField, {
    label: 'Select a date',
  });

  root.appendChild(datefield);
});
