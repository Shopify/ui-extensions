import {
  POSReceiptBlock,
  QRCode,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.receipt-footer.block.render',
  (root, api) => {
    const block = root.createComponent(
      POSReceiptBlock,
    );
    const text = root.createComponent(
      Text,
      {},
      'Custom receipt text',
    );
    const qrCode = root.createComponent(QRCode, {
      value: `https://www.shopify.com/?example=${encodeURIComponent(
        api.transaction.orderId ?? '',
      )}`,
    });

    block.append(text);
    block.append(qrCode);
    root.append(block);
  },
);
