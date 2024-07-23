import React from 'react';

import {
  Text,
  useApi,
  reactExtension,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.purchase.post.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>{'This is a block extension'}</Text>
        <Text>{`Order ID for complete checkout: ${api.order.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.purchase.post.block.render', () => (
  <Block />
));
