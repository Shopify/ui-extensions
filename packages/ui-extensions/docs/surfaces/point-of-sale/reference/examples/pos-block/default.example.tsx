import React from 'react';
import {
  reactExtension,
  useApi,
  POSBlock,
} from '@shopify/ui-extensions-react/point-of-sale';

const PostPurchaseBlock = () => {
  const api =
    useApi<'pos.purchase.post.block.render'>();

  return (
    <POSBlock
      action={{
        title: 'A toast message',
        onPress: () => {
          api.Toast.show('A toast message');
        },
      }}
    />
  );
};

export default reactExtension(
  'pos.purchase.post.block.render',
  () => <PostPurchaseBlock />,
);
