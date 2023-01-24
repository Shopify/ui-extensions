import {extension, Tag} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const tag = root.createComponent(Tag, {icon: 'discount'}, 'SPRING');

  root.appendChild(tag);
});
