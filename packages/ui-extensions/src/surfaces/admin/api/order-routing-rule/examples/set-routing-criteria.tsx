import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const SetRoutingCriteria = () => {
  const {applyMetafieldsChange} = useApi<'admin.settings.order-routing-rule.render'>();

  const handleSave = async () => {
    await applyMetafieldsChange([
      {
        type: 'updateMetafield',
        key: 'max_distance',
        namespace: 'routing',
        value: '50',
        valueType: 'number_integer',
      },
      {
        type: 'updateMetafield',
        key: 'check_inventory',
        namespace: 'routing',
        value: 'true',
        valueType: 'boolean',
      },
      {
        type: 'updateMetafield',
        key: 'excluded_zips',
        namespace: 'routing',
        value: JSON.stringify(['90210', '10001']),
        valueType: 'json',
      },
    ]);
  };

  return null;
};

export default reactExtension('admin.settings.order-routing-rule.render', () => <SetRoutingCriteria />);
