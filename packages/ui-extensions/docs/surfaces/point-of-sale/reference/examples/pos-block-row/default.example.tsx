import React from 'react';
import {
  reactExtension,
  useApi,
  POSBlock,
  POSBlockRow,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const PostPurchaseBlock = () => {
  const api =
    useApi<'pos.purchase.post.block.render'>();

  return (
    <POSBlock>
      <POSBlockRow>
        <Text>Hello, world!</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension(
  'pos.purchase.post.block.render',
  () => <PostPurchaseBlock />,
);
