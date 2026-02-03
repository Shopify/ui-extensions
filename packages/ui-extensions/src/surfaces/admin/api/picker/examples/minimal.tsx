import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const MinimalPicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();

  const handlePick = async () => {
    await picker({
      heading: 'Select item',
      items: [
        {id: '1', heading: 'Option 1'},
        {id: '2', heading: 'Option 2'},
      ],
    });
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <MinimalPicker />);
