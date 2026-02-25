import React from 'react';
import {reactExtension, CustomerSegmentTemplate} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <CustomerSegmentTemplate
      title="Loyalty tier members"
      description="Customers assigned to a specific loyalty tier through your app. This template uses a custom metafield to filter customers by their current membership level."
      query='customer.metafields.loyalty.tier = "gold"'
      dependencies={{
        customMetafields: ['loyalty.tier'],
      }}
      createdOn={new Date('2024-10-01').toISOString()}
    />
  );
}

export default reactExtension(
  'admin.customers.segmentation-templates.render',
  () => <App />,
);
