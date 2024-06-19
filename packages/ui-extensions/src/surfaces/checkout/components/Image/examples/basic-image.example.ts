import {extension, Image} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const image = root.createComponent(Image, {
    source: 'https://cdn.shopify.com/YOUR_IMAGE_HERE',
  });

  root.appendChild(image);
});
