import React from 'react';

import {
  POSBlock,
  POSBlockRow,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ExchangeBlock = () => {
  const api = useApi<'pos.exchange.post.block.render'>();
  return (
    <POSBlock
      action={{
        title: 'View exchange details',
        onPress: api.action.presentModal,
      }}
    >
      <POSBlockRow>
        <Text>{'Exchange block extension'}</Text>
        <Text>{`Order ID: ${api.order.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.exchange.post.block.render', () => (
  <ExchangeBlock />
));
