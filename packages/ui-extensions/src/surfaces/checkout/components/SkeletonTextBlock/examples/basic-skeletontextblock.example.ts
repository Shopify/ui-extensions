import {extension, SkeletonTextBlock} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const skeletonTextBlock = root.createComponent(SkeletonTextBlock);

  root.appendChild(skeletonTextBlock);
});
