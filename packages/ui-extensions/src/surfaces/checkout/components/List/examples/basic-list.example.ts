import {extension, List, ListItem} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const list = root.createComponent(List, undefined, [
    root.createComponent(ListItem, undefined, '100% organic cotton'),
    root.createComponent(ListItem, undefined, 'Made in Canada'),
    root.createComponent(ListItem, undefined, 'Machine washable'),
  ]);

  root.appendChild(list);
});
