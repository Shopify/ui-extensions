import React, {useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const UnlimitedPicker = () => {
  const {resourcePicker} = useApi<'admin.product-details.block.render'>();
  const [selected, setSelected] = useState(null);

  const handlePick = async () => {
    const result = await resourcePicker({
      type: 'product',
      multiple: true,
    });
    setSelected(result);
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <UnlimitedPicker />);
