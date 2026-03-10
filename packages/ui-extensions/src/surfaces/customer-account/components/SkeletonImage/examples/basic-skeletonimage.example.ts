import {extension, SkeletonImage} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const skeletonImage = root.createComponent(SkeletonImage, {
    inlineSize: 300,
    blockSize: 300,
  });

  root.appendChild(skeletonImage);
});
