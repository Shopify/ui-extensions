import React from 'react';
import {
  POSReceiptBlock,
  QRCode,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ReceiptFooterWithQRCodeBlock = () => {
  const api = useApi(
    'pos.receipt-footer.block.render',
  );

  return (
    <POSReceiptBlock>
      <QRCode
        value={`https://example.com?id=${encodeURIComponent(
          api.transaction.orderId ?? '',
        )}`}
      />
    </POSReceiptBlock>
  );
};

export default reactExtension(
  'pos.receipt-footer.block.render',
  () => <ReceiptFooterWithQRCodeBlock />,
);
