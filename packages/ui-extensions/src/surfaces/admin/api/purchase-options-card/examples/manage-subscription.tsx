import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Text,
  Button,
  Banner,
} from '@shopify/ui-extensions-react/admin';

const ManageSubscription = () => {
  const {data, close} = useApi<'admin.product-purchase-option.action.render'>();
  const [updated, setUpdated] = useState(false);

  const {id: productId, sellingPlanId} = data.selected[0];

  const handleUpdate = async () => {
    if (!sellingPlanId) {
      console.error('No selling plan selected');
      close();
      return;
    }

    const response = await fetch('/api/subscriptions/update', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        productId,
        sellingPlanId,
        action: 'modify',
      }),
    });

    if (response.ok) {
      setUpdated(true);
      setTimeout(() => close(), 1500);
    }
  };

  return (
    <>
      <Text>Product: {productId}</Text>
      <Text>Selling Plan: {sellingPlanId}</Text>
      <Button title="Update Subscription" onPress={handleUpdate} />
      {updated && <Banner status="success">Subscription updated!</Banner>}
    </>
  );
};

export default reactExtension(
  'admin.product-purchase-option.action.render',
  () => <ManageSubscription />,
);
