import {extension, Divider} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const divider = root.createComponent(Divider);

  root.appendChild(divider);
});
