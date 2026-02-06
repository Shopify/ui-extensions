import React, {useState} from 'react';
import {reactExtension, useApi, Button, Text} from '@shopify/ui-extensions-react/admin';

const CollectionPicker = () => {
  const {resourcePicker} = useApi<'admin.product-details.block.render'>();
  const [selected, setSelected] = useState<any[] | null>(null);

  const handlePick = async () => {
    const result = await resourcePicker({type: 'collection'});
    setSelected(result);
  };

  return (
    <>
      <Button title="Select Collections" onPress={handlePick} />
      {selected && <Text>{selected.length} collections selected</Text>}
    </>
  );
};

export default reactExtension('admin.product-details.block.render', () => <CollectionPicker />);
