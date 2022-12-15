import {extend, Image} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const image = root.createComponent(Image, {
    source:
      'https://shopify.dev/assets/api/checkout-extensions/checkout/components/image-example-code.png',
  });

  root.appendChild(image);
});
