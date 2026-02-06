import React from 'react';
import {reactExtension, useApi, Button} from '@shopify/ui-extensions-react/admin';

const PreselectedPicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();

  const handlePick = async () => {
    await picker({
      heading: 'Select items',
      items: [
        {id: '1', heading: 'Item 1', selected: true},
        {id: '2', heading: 'Item 2'},
      ],
    });
  };

  return <Button title="Open Picker" onPress={handlePick} />;
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <PreselectedPicker />,
);
