import React from 'react';
import {reactExtension, useApi, Button} from '@shopify/ui-extensions-react/admin';

const MultipleTruePicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();

  const handlePick = async () => {
    await picker({
      heading: 'Select items',
      multiple: true,
      items: [
        {id: '1', heading: 'Item 1'},
        {id: '2', heading: 'Item 2'},
        {id: '3', heading: 'Item 3'},
      ],
    });
  };

  return <Button title="Open Picker" onPress={handlePick} />;
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <MultipleTruePicker />,
);
