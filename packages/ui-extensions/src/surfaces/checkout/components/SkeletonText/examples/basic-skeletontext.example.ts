import {extension, SkeletonText} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const skeletonText = root.createComponent(SkeletonText);

  root.appendChild(skeletonText);
});
