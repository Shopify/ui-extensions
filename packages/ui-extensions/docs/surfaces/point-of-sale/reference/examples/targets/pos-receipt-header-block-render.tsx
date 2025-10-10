import React from 'react';

import {
  reactExtension,
  useApi,
  POSReceiptBlock,
  QRCode,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const {transaction} = useApi<'pos.receipt-header.block.render'>();
  const qrCodeValue =
    transaction.transactionType === 'Exchange'
      ? `exampleExchange=${encodeURIComponent(transaction.exchangeId ?? '')}`
      : `exampleOrder=${encodeURIComponent(transaction.orderId ?? '')}`;

  return (
    <POSReceiptBlock>
      <Text>{`Transaction type: ${transaction.transactionType}`}</Text>
      <Text>{`Total tax (${transaction.taxTotal.currency}): ${transaction.taxTotal.amount}`}</Text>
      <QRCode value={`https://www.shopify.com?${qrCodeValue}`} />
    </POSReceiptBlock>
  );
};

export default reactExtension('pos.receipt-header.block.render', () => (
  <Block />
));
