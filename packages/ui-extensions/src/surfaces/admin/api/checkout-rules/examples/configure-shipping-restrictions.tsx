import React from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const ConfigureShippingRestrictions = () => {
  const {applyMetafieldChange} = useApi<'admin.settings.validation.render'>();

  const handleSave = async () => {
    const blockedCountries = ['US', 'CA', 'MX'];

    const result = await applyMetafieldChange({
      type: 'updateMetafield',
      key: 'blocked_countries',
      namespace: 'validation',
      value: JSON.stringify(blockedCountries),
      valueType: 'json',
    });

    if (result.type === 'success') {
      console.log('Shipping restrictions saved');
    }
  };

  return null;
};

export default reactExtension(
  'admin.settings.validation.render',
  () => <ConfigureShippingRestrictions />,
);
