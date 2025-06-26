import React from 'react';

import {
  POSBlock,
  POSBlockRow,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ReturnBlock = () => {
  const api = useApi<'pos.return.post.block.render'>();
  return (
    <POSBlock
      action={{title: 'View return details', onPress: api.action.presentModal}}
    >
      <POSBlockRow>
        <Text>{'Return block extension'}</Text>
        <Text>{`Return ID: ${api.return.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.return.post.block.render', () => (
  <ReturnBlock />
));
