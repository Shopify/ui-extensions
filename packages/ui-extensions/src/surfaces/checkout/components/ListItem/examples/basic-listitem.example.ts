import {extension, List, ListItem} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const list = root.createComponent(List, undefined, [
    root.createComponent(ListItem, undefined, '100% organic cotton'),
  ]);

  root.appendChild(list);
});
