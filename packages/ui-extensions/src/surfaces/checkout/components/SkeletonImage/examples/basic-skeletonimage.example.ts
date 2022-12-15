import {extend, SkeletonImage} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const skeletonImage = root.createComponent(SkeletonImage, {
    inlineSize: 300,
    blockSize: 300,
  });

  root.appendChild(skeletonImage);
});
