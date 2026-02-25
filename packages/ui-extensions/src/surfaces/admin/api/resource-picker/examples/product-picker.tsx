import React, {useState} from 'react';
import {reactExtension, useApi, Button, Text} from '@shopify/ui-extensions-react/admin';

const ProductPicker = () => {
  const {resourcePicker} = useApi<'admin.product-details.block.render'>();
  const [selected, setSelected] = useState<any[] | null>(null);

  const handlePick = async () => {
    const result = await resourcePicker({type: 'product'});
    setSelected(result);
  };

  return (
    <>
      <Button title="Select Products" onPress={handlePick} />
      {selected && <Text>{selected.length} products selected</Text>}
    </>
  );
};

export default reactExtension('admin.product-details.block.render', () => <ProductPicker />);
