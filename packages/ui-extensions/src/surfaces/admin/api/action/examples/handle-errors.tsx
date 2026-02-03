import React from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const FulfillOrder = () => {
  const {data, close} = useApi<'admin.order-details.action.render'>();

  const handleFulfill = async () => {
    try {
      const orderId = data.selected[0]?.id;

      const response = await fetch(`/api/orders/${orderId}/fulfill`, {
        method: 'POST',
      });

      const result = await response.json();

      if (result.success) {
        console.log('Order fulfilled:', result);
        close();
      } else {
        console.error('Fulfillment failed:', result.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return null;
};

export default reactExtension(
  'admin.order-details.action.render',
  () => <FulfillOrder />,
);
