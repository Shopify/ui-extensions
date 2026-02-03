import React from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const AbandonedCartRecovery = () => {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  return {
    templates: [
      {
        title: 'Cart abandoners',
        description: 'Customers who abandoned carts in the last 7 days',
        query: `{
  abandoned_checkouts_count: {
    min: 1
  }
  last_abandoned_order_date: {
    min: "${sevenDaysAgo}"
  }
}`,
        createdOn: '2025-01-15T00:00:00Z',
      },
    ],
  };
};

export default reactExtension(
  'admin.customers.segmentation-templates.render',
  () => <AbandonedCartRecovery />,
);
