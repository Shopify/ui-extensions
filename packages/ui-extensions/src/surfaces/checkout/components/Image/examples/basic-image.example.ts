import {extension, Image} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const image = root.createComponent(Image, {
    source:
      'https://shopify.dev/assets/api/checkout-extensions/checkout/components/image-example-code.png',
  });

  root.appendChild(image);
});
