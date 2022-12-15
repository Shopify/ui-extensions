import {extend, SkeletonTextBlock} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const skeletonTextBlock = root.createComponent(SkeletonTextBlock);

  root.appendChild(skeletonTextBlock);
});
