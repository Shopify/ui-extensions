import React from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const SetMinimumQuantity = () => {
  const {applyMetafieldChange} = useApi<'admin.settings.validation.render'>();

  const handleSave = async () => {
    const result = await applyMetafieldChange({
      type: 'updateMetafield',
      key: 'min_quantity',
      namespace: 'validation',
      value: '5',
      valueType: 'number_integer',
    });

    if (result.type === 'success') {
      console.log('Minimum quantity saved');
    } else {
      console.error('Error:', result.message);
    }
  };

  return null;
};

export default reactExtension(
  'admin.settings.validation.render',
  () => <SetMinimumQuantity />,
);
