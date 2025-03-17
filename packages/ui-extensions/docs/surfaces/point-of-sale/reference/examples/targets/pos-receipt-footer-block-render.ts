import {
  extension,
  POSReceiptBlock,
  QRCode,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.receipt-footer.block.render', (root, api) => {
  const block = root.createComponent(POSReceiptBlock);
  const textTransactionType = root.createComponent(
    Text,
    {},
    `Transaction type: ${api.transaction.transactionType}`,
  );
  const textTaxTotal = root.createComponent(
    Text,
    {},
    `Total tax: ${api.transaction.taxTotal}`,
  );
  const qrCodeValue =
    api.transaction.transactionType === 'Exchange'
      ? `exampleExchange=${encodeURIComponent(
          api.transaction.exchangeId ?? '',
        )}`
      : `exampleOrder=${encodeURIComponent(api.transaction.orderId ?? '')}`;

  const qrCode = root.createComponent(QRCode, {
    value: `https://www.shopify.com?${qrCodeValue}`,
  });

  block.append(textTransactionType);
  block.append(textTaxTotal);
  block.append(qrCode);
  root.append(block);
});
