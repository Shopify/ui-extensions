import {extension, List, ListItem} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const list = root.createComponent(List, undefined, [
    root.createComponent(ListItem, undefined, '100% organic cotton'),
  ]);

  root.appendChild(list);
});
