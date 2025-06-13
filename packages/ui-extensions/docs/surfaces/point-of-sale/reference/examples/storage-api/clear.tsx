import React, {useState, useEffect} from 'react';
import {
  Tile,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const TileComponent = () => {
  const api = useApi<'pos.home.tile.render'>();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const initializeData = async () => {
      const count = 10;
      for (let i = 0; i < count; i++) {
        await api.storage.set(`key-${i}`, `value-${i}`);
      }
      setItemCount(count);
    };

    initializeData();
  }, [api.storage]);

  return (
    <Tile
      title="Storage app"
      subtitle="Clear example"
      badgeValue={itemCount}
      onPress={async () => {
        await api.storage.clear();
        api.toast.show('All data cleared');
        setItemCount(0);
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <TileComponent />);
