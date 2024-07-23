import {
  extension,
  QRCode,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const qrCode = root.createComponent(QRCode, {
      content: 'https://shopify.com',
      logo: 'https://cdn.shopify.com/YOUR_IMAGE_HERE',
    });

    root.appendChild(qrCode);
  },
);
