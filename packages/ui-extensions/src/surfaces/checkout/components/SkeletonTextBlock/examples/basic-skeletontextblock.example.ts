import {extend, SkeletonTextBlock} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const skeletonTextBlock = root.createComponent(SkeletonTextBlock);

  root.appendChild(skeletonTextBlock);
});
