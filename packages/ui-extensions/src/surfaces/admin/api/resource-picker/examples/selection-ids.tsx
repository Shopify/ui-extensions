import React, {useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const PreselectedPicker = () => {
  const {resourcePicker} = useApi<'admin.product-details.block.render'>();
  const [selected, setSelected] = useState(null);

  const handlePick = async () => {
    const result = await resourcePicker({
      type: 'product',
      selectionIds: [
        'gid://shopify/Product/123',
        'gid://shopify/Product/456',
      ],
    });
    setSelected(result);
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <PreselectedPicker />);
