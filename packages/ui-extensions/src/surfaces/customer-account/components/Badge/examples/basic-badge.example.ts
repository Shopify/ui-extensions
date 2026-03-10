import {extension, Badge} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const badge = root.createComponent(Badge, undefined, 'Available');

  root.appendChild(badge);
});
