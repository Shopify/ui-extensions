import React from 'react';

import {
  Tile,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const HomeTile = () => {
  const api = useApi();
  return (
    <Tile
      title="Print Tutorial"
      onPress={() => {
        api.action.presentModal('print-tutorial');
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => {
  return <HomeTile />;
});
