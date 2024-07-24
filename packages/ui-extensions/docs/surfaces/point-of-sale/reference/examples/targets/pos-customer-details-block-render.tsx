import React from 'react';

import {
  Text,
  useApi,
  reactExtension,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.customer-details.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>{'This is a block extension'}</Text>
        <Text>{`Customer ID for this customer: ${api.customer.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.customer-details.block.render', () => (
  <Block />
));
