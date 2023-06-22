import {extension, SkeletonTextBlock} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const skeletonTextBlock = root.createComponent(SkeletonTextBlock);

  root.appendChild(skeletonTextBlock);
});
