import {extend, Tag} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const tag = root.createComponent(Tag, {}, 'BOGO');

  root.appendChild(tag);
});
