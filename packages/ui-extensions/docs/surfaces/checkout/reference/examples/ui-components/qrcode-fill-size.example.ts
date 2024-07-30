import {
  extension,
  View,
  QRCode,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const view = root.createComponent(View, {
      maxInlineSize: 300,
    });

    const qrCode = root.createComponent(QRCode, {
      content: 'https://shopify.com',
      size: 'fill',
    });

    view.appendChild(qrCode);
    root.appendChild(view);
  },
);
