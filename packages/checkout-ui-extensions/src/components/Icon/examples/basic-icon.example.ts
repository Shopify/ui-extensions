import {extend, Icon} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const icon = root.createComponent(Icon, {source: 'discount'});

  root.appendChild(icon);
});
