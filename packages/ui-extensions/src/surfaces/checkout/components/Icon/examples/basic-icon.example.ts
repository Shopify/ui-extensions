import {extend, Icon} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const icon = root.createComponent(Icon, {source: 'discount'});

  root.appendChild(icon);
});
