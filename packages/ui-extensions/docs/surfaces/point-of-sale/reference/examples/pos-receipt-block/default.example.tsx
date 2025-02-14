import React from 'react';
import {
  POSReceiptBlock,
  Image,
  Text,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const ReceiptFooterBlock = () => (
  <POSReceiptBlock>
    <Text>
      Submission ID:
      acde070d-8c2c-b0b0-9d8a-162843c10333
    </Text>
    <Image src="example.png" size="s" />
  </POSReceiptBlock>
);

export default reactExtension(
  'pos.receipt-footer.block.render',
  () => <ReceiptFooterBlock />,
);
