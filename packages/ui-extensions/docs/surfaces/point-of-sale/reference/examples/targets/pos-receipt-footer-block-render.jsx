import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const {transaction} = shopify;
  const qrCodeValue =
    transaction.transactionType === 'Exchange'
      ? `exampleExchange=${encodeURIComponent(transaction.exchangeId ?? '')}`
      : `exampleOrder=${encodeURIComponent(transaction.orderId ?? '')}`;

  return (
    <s-pos-receipt-block>
      <s-text>Transaction type: {transaction.transactionType}</s-text>
      <s-text>Total tax ({transaction.taxTotal.currency}): {transaction.taxTotal.amount}</s-text>
      <s-qr-code value={`https://www.shopify.com?${qrCodeValue}`} />
    </s-pos-receipt-block>
  );
};
