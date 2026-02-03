import React from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const HighValueCustomers = () => {
  const {i18n} = useApi<'admin.customers.segmentation-templates.render'>();

  return {
    templates: [
      {
        title: i18n.translate('templates.highValue.title'),
        description: i18n.translate('templates.highValue.description'),
        query: `{
  total_spent: {
    min: 500
  }
  orders_count: {
    min: 5
  }
}`,
        createdOn: '2025-01-15T00:00:00Z',
      },
    ],
  };
};

export default reactExtension(
  'admin.customers.segmentation-templates.render',
  () => <HighValueCustomers />,
);
