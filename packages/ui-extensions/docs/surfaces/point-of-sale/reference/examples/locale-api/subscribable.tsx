import React from 'react';
import {
  reactExtension,
  useLocaleSubscription,
  useApi,
  Tile,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const locale = useLocaleSubscription();

  return (
    <Tile
      title='My App'
      subtitle={locale}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <SmartGridTile />);
