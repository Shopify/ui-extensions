import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const ConfigureDiscountThreshold = () => {
  const {applyMetafieldChange} = useApi<'admin.discount-details.function-settings.render'>();

  const handleSave = async () => {
    const result = await applyMetafieldChange({
      type: 'updateMetafield',
      key: 'min_purchase_amount',
      namespace: 'discount_function',
      value: '50.00',
      valueType: 'number_decimal',
    });

    if (result.type === 'success') {
      console.log('Threshold saved');
    }
  };

  return null;
};

export default reactExtension('admin.discount-details.function-settings.render', () => <ConfigureDiscountThreshold />);
