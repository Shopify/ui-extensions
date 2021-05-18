import {extend, Icon} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const icon = root.createComponent(Icon, {source: 'discount'});

  root.appendChild(icon);
});
