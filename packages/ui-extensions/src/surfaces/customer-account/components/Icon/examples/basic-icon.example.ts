import {extension, Icon} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const icon = root.createComponent(Icon, {source: 'discount'});

  root.appendChild(icon);
});
