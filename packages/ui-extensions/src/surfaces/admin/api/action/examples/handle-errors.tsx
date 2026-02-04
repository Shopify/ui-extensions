import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Banner,
} from '@shopify/ui-extensions-react/admin';

const FulfillOrder = () => {
  const {data, close} = useApi<'admin.order-details.action.render'>();
  const [error, setError] = useState<string | null>(null);

  const handleFulfill = async () => {
    setError(null);

    try {
      const orderId = data.selected[0]?.id;

      const response = await fetch(`/api/orders/${orderId}/fulfill`, {
        method: 'POST',
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Fulfillment failed');
      }

      console.log('Order fulfilled:', result);
      close();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {error && <Banner status="critical">{error}</Banner>}
      <Button title="Fulfill Order" onPress={handleFulfill} />
    </>
  );
};

export default reactExtension(
  'admin.order-details.action.render',
  () => <FulfillOrder />,
);
