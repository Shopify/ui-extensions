import {extend, List, ListItem} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const list = root.createComponent(List, undefined, [
    root.createComponent(ListItem, undefined, '100% organic cotton'),
  ]);

  root.appendChild(list);
});
