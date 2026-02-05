import React, {useState} from 'react';
import {reactExtension, useApi, Button, Text} from '@shopify/ui-extensions-react/admin';

const FiltersPicker = () => {
  const {resourcePicker} = useApi<'admin.product-details.block.render'>();
  const [selected, setSelected] = useState<any[] | null>(null);

  const handlePick = async () => {
    const result = await resourcePicker({
      type: 'product',
      filter: {
        published_status: 'published',
      },
    });
    setSelected(result);
  };

  return (
    <>
      <Button title="Select Published Products" onPress={handlePick} />
      {selected && <Text>{selected.length} products selected</Text>}
    </>
  );
};

export default reactExtension('admin.product-details.block.render', () => <FiltersPicker />);
