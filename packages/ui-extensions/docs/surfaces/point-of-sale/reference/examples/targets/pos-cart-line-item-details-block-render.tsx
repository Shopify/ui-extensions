import React from 'react';

import {
  Text,
  useApi,
  reactExtension,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.cart.line-item-details.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>{'This is a block extension'}</Text>
        <Text>{`Title for this line item: ${api.cartLineItem.title}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.cart.line-item-details.block.render', () => (
  <Block />
));
