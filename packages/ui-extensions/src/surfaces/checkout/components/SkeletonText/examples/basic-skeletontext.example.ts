import {extend, SkeletonText} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const skeletonText = root.createComponent(SkeletonText);

  root.appendChild(skeletonText);
});
