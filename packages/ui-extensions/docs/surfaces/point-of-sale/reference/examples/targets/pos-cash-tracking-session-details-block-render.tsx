import React from 'react';

import {
  POSBlock,
  Text,
  POSBlockRow,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.cash-tracking-session-details.block.render'>();

  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>This is a block extension</Text>
        <Text>On the register details screen</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension(
  'pos.cash-tracking-session-details.block.render',
  () => <Block />,
);
