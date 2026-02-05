import React from 'react';
import {
  reactExtension,
  useApi,
  Button,
} from '@shopify/ui-extensions-react/admin';

const DisabledPicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();

  const handlePick = async () => {
    await picker({
      heading: 'Select items',
      items: [
        {id: '1', heading: 'Available item'},
        {id: '2', heading: 'Disabled item', disabled: true},
      ],
    });
  };

  return <Button title="Open Picker" onPress={handlePick} />;
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <DisabledPicker />,
);
