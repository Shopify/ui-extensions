import React from 'react';

import {
  Text,
  useApi,
  reactExtension,
  POSReceiptBlock,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.receipt-footer.block.render'>();
  return (
    <POSReceiptBlock>
      <Text>{`Order ID: ${api.order.id}`}</Text>
    </POSReceiptBlock>
  );
};

export default reactExtension('pos.receipt-footer.block.render', () => (
  <Block />
));
