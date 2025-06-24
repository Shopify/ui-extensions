import React from 'react';

import {
  Text,
  useApi,
  reactExtension,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions-react/point-of-sale';

const Block = () => {
  const api = useApi<'pos.drawer-details.block.render'>();
  return (
    <POSBlock action={{title: 'Open action', onPress: api.action.presentModal}}>
      <POSBlockRow>
        <Text>This is a drawer details block extension</Text>
      </POSBlockRow>
      <POSBlockRow>
        <Text>{`Drawer ID: ${api.drawer.id}`}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.drawer-details.block.render', () => (
  <Block />
));
