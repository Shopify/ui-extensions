import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Text,
  Button,
  Banner,
} from '@shopify/ui-extensions-react/admin';

const RemoveFromPlan = () => {
  const {data, close} = useApi<'admin.product-purchase-option.action.render'>();
  const [confirming, setConfirming] = useState(false);
  const [removed, setRemoved] = useState(false);

  const {id: productId, sellingPlanId} = data.selected[0];

  const handleRemove = async () => {
    setConfirming(false);

    await fetch('/api/selling-plans/remove-product', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productId, sellingPlanId}),
    });

    setRemoved(true);
    setTimeout(() => close(), 1500);
  };

  return (
    <>
      {!confirming ? (
        <Button title="Remove Product" onPress={() => setConfirming(true)} />
      ) : (
        <>
          <Text>Are you sure you want to remove this product?</Text>
          <Button title="Confirm Remove" onPress={handleRemove} />
          <Button title="Cancel" onPress={() => setConfirming(false)} />
        </>
      )}
      {removed && <Banner status="success">Product removed from plan</Banner>}
    </>
  );
};

export default reactExtension(
  'admin.product-purchase-option.action.render',
  () => <RemoveFromPlan />,
);
