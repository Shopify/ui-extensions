import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const ConfigureEligibilityRules = () => {
  const {applyMetafieldChange} = useApi<'admin.discount-details.function-settings.render'>();

  const handleSave = async () => {
    const tags = ['vip', 'wholesale'];

    await applyMetafieldChange({
      type: 'updateMetafield',
      key: 'customer_tags',
      namespace: 'discount_function',
      value: JSON.stringify(tags),
      valueType: 'json',
    });

    await applyMetafieldChange({
      type: 'updateMetafield',
      key: 'usage_limit',
      namespace: 'discount_function',
      value: '100',
      valueType: 'number_integer',
    });
  };

  return null;
};

export default reactExtension('admin.discount-details.function-settings.render', () => <ConfigureEligibilityRules />);
