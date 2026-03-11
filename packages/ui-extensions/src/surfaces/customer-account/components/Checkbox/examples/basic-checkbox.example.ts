import {extension, Checkbox} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const checkbox = root.createComponent(
    Checkbox,
    {id: 'checkbox', name: 'checkbox'},
    'Save this information for next time',
  );

  root.appendChild(checkbox);
});
