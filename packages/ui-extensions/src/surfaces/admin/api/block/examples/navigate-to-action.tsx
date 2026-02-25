import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
  ProgressIndicator,
} from '@shopify/ui-extensions-react/admin';

const NavigateToAction = () => {
  const {data, navigation} = useApi<'admin.product-details.block.render'>();
  const [eligible, setEligible] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkEligibility = async () => {
      const productId = data.selected[0]?.id;

      if (!productId) {
        setChecking(false);
        return;
      }

      const response = await fetch(`/api/products/${productId}/check-eligibility`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });

      const {eligible} = await response.json();
      setEligible(eligible);
      setChecking(false);
    };

    checkEligibility();
  }, [data]);

  const handleNavigate = () => {
    navigation.navigate('extension://my-product-action-extension-handle');
  };

  return (
    <>
      {checking ? (
        <ProgressIndicator />
      ) : eligible ? (
        <Button title="Launch Advanced Workflow" onPress={handleNavigate} />
      ) : (
        <Text>Product not eligible for advanced actions</Text>
      )}
    </>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <NavigateToAction />,
);
