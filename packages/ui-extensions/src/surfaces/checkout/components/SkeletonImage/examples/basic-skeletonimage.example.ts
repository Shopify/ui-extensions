import {extension, SkeletonImage} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const skeletonImage = root.createComponent(SkeletonImage, {
    inlineSize: 300,
    blockSize: 300,
  });

  root.appendChild(skeletonImage);
});
