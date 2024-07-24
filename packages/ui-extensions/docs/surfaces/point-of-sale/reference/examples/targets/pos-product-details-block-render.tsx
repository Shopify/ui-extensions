import React from 'react';

import {
  Text,
  useApi,
  reactExtension,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.product-details.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>{'This is a block extension'}</Text>
        <Text>{`Product ID for this product: ${api.product.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.product-details.block.render', () => (
  <Block />
));
