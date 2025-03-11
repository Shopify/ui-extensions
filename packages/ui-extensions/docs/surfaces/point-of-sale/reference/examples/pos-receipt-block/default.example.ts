import {
  POSReceiptBlock,
  QRCode,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.receipt-footer.block.render',
  (root) => {
    const block = root.createComponent(
      POSReceiptBlock,
    );
    const text = root.createComponent(
      Text,
      {},
      'Submission ID: acde070d-8c2c-b0b0-9d8a-162843c10333',
    );
    const qrCode = root.createComponent(QRCode, {
      value: 'https://www.shopify.com',
    });

    block.append(text);
    block.append(qrCode);
    root.append(block);
  },
);
