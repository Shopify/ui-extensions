import React from 'react';
import {
  reactExtension,
  Tile,
  useApi,
  useCartEditable,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const editable = useCartEditable();

  return <Tile title="My App" enabled={editable} />;
};

export default reactExtension('pos.home.tile.render', () => <SmartGridTile />);
