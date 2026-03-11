import {extension, TextField} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'Last name',
  });

  root.appendChild(textfield);
});
