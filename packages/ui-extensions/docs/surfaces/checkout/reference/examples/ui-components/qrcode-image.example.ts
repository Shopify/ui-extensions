import {
  extension,
  QRCode,
  TextBlock,
  Link,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const qrCode = root.createComponent(QRCode, {
      content: 'https://shopify.com',
      logo: 'https://cdn.shopify.com/YOUR_IMAGE_HERE',
    });

    const textBlock = root.createComponent(
      TextBlock,
      null,
      [
        'Scan to visit ',
        root.createComponent(
          Link,
          {to: 'https://shopify.com'},
          'Shopify.com',
        ),
      ],
    );

    root.appendChild(qrCode);
    root.appendChild(textBlock);
  },
);
