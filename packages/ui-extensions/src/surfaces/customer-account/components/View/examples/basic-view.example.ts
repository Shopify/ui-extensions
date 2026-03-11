import {extension, View} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const view = root.createComponent(
    View,
    {border: 'base', padding: 'base'},
    'View',
  );

  root.appendChild(view);
});
