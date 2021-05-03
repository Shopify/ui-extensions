import {extend, List, ListItem} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const list = root.createComponent(List, undefined, [
    root.createComponent(ListItem, undefined, 'ListItem'),
    root.createComponent(ListItem, undefined, 'ListItem'),
    root.createComponent(ListItem, undefined, 'ListItem'),
  ]);

  root.appendChild(list);
});
