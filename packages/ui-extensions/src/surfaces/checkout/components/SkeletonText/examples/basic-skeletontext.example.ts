import {extend, SkeletonText} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const skeletonText = root.createComponent(SkeletonText);

  root.appendChild(skeletonText);
});
