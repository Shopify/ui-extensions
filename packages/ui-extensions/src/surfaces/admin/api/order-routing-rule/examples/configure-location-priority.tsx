import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const ConfigureLocationPriority = () => {
  const {applyMetafieldsChange} = useApi<'admin.settings.order-routing-rule.render'>();

  const handleSave = async () => {
    await applyMetafieldsChange([
      {
        type: 'updateMetafield',
        key: 'preferred_location',
        namespace: 'routing',
        value: 'New York Warehouse',
      },
      {
        type: 'updateMetafield',
        key: 'fallback_location',
        namespace: 'routing',
        value: 'Los Angeles Warehouse',
      },
    ]);
  };

  return null;
};

export default reactExtension('admin.settings.order-routing-rule.render', () => <ConfigureLocationPriority />);
