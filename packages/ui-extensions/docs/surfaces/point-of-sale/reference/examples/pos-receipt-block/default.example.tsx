import React from 'react';
import {
  POSReceiptBlock,
  QRCode,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ReceiptFooterBlock = () => {
  const api = useApi(
    'pos.receipt-footer.block.render',
  );

  return (
    <POSReceiptBlock>
      <Text>Custom receipt text</Text>
      <QRCode
        value={`https://www.shopify.com/?example=${encodeURIComponent(
          api.transaction.orderId ?? '',
        )}`}
      />
    </POSReceiptBlock>
  );
};

export default reactExtension(
  'pos.receipt-footer.block.render',
  () => <ReceiptFooterBlock />,
);
