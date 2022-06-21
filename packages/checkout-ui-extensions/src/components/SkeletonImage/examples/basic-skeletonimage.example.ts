import {extend, SkeletonImage} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const skeletonImage = root.createComponent(SkeletonImage, {
    dimensions: {inline: 300, block: 300},
  });

  root.appendChild(skeletonImage);
});
