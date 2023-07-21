import {extension, Tag} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const tag = root.createComponent(Tag, {icon: 'discount'}, 'SPRING');

  root.appendChild(tag);
});
