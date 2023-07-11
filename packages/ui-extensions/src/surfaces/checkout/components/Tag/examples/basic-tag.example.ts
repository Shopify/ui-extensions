import {extension, Tag} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const tag = root.createComponent(Tag, {icon: 'discount'}, 'SPRING');

  root.appendChild(tag);
});
