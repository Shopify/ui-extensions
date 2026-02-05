import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const MinimalPicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();
  const [selected, setSelected] = useState<string[] | null>(null);

  const handlePick = async () => {
    const pickerInstance = await picker({
      heading: 'Select an item',
      headers: [{title: 'Main heading'}],
      items: [
        {id: '1', heading: 'Item 1'},
        {id: '2', heading: 'Item 2'},
      ],
    });

    const result = await pickerInstance.selected;
    setSelected(result);
  };

  return (
    <>
      <Button title="Open Picker" onPress={handlePick} />
      {selected && <Text>{selected.length} items selected</Text>}
    </>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <MinimalPicker />,
);
