import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const MultipleLimitPicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();

  const handlePick = async () => {
    await picker({
      heading: 'Select items (up to 2)',
      multiple: 2,
      items: [
        {id: '1', heading: 'Item 1'},
        {id: '2', heading: 'Item 2'},
        {id: '3', heading: 'Item 3'},
      ],
    });
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <MultipleLimitPicker />);
