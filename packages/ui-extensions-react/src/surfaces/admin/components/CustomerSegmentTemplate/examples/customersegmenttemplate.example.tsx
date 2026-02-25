import React from 'react';
import {reactExtension, CustomerSegmentTemplate} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <CustomerSegmentTemplate
      title="High-value repeat buyers"
      description="Customers who have placed more than 5 orders with a total spend exceeding $500. Use this segment to target loyal customers for VIP promotions and early access campaigns."
      query="number_of_orders > 5 AND amount_spent > 500"
      createdOn={new Date('2024-06-01').toISOString()}
    />
  );
}

export default reactExtension(
  'admin.customers.segmentation-templates.render',
  () => <App />,
);
