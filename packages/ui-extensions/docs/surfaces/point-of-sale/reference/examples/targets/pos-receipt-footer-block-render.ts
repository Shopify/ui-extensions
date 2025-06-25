import {
  extension,
  POSReceiptBlock,
  QRCode,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.receipt-footer.block.render', (root, api) => {
  const block = root.createComponent(POSReceiptBlock);
  const transaction = api.transaction;
  const textTransactionType = root.createComponent(
    Text,
    {},
    `Transaction type: ${transaction.transactionType}`,
  );
  const textTaxTotal = root.createComponent(
    Text,
    {},
    `Total tax (${transaction.taxTotal.currency}): ${transaction.taxTotal.amount}`,
  );
  const qrCodeValue =
    transaction.transactionType === 'Exchange'
      ? `exampleExchange=${encodeURIComponent(transaction.exchangeId ?? '')}`
      : `exampleOrder=${encodeURIComponent(transaction.orderId ?? '')}`;

  const qrCode = root.createComponent(QRCode, {
    value: `https://www.shopify.com?${qrCodeValue}`,
  });

  block.append(textTransactionType);
  block.append(textTaxTotal);
  block.append(qrCode);
  root.append(block);
});
