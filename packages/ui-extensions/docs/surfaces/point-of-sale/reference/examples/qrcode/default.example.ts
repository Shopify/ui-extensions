import {
  POSReceiptBlock,
  QRCode,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.receipt-footer.block.render',
  (root, api) => {
    const block = root.createComponent(
      POSReceiptBlock,
    );
    const qrCode = root.createComponent(QRCode, {
      value: `https://example.com?id=${encodeURIComponent(
        api.transaction.orderId ?? '',
      )}`,
    });

    block.append(qrCode);
    root.append(block);
  },
);
