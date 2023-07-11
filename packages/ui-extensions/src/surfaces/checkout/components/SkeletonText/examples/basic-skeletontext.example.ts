import {extension, SkeletonText} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const skeletonText = root.createComponent(SkeletonText);

  root.appendChild(skeletonText);
});
