import {extend, Image} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const image = root.createComponent(Image, {
    source: 'https://cdn.shopify.com/YOUR_IMAGE_HERE',
  });

  root.appendChild(image);
});
