import {extend, Text} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const text = root.createComponent(Text, undefined, 'Text');

  root.appendChild(text);
});
