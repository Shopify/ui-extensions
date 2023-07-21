import {extension, Icon} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const icon = root.createComponent(Icon, {source: 'discount'});

  root.appendChild(icon);
});
