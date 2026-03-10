import {extension, Tag} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const tag = root.createComponent(Tag, {icon: 'discount'}, 'SPRING');

  root.appendChild(tag);
});
