import {extend, List, ListItem} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const list = root.createComponent(List, undefined, [
    root.createComponent(ListItem, undefined, 'ListItem'),
    root.createComponent(ListItem, undefined, 'ListItem'),
    root.createComponent(ListItem, undefined, 'ListItem'),
  ]);

  root.appendChild(list);
});
