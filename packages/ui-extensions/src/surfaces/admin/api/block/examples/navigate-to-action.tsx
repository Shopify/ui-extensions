import React, {useEffect, useState} from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const NavigateToAction = () => {
  const {data, navigation} = useApi<'admin.product-details.block.render'>();
  const [eligible, setEligible] = useState(false);

  useEffect(() => {
    const productId = data.selected[0]?.id;

    fetch(`/api/products/${productId}/check-eligibility`)
      .then((response) => response.json())
      .then((result) => {
        setEligible(result.eligible);
        if (result.eligible) {
          navigation.navigate('extension://my-admin-action-extension-handle');
        }
      });
  }, [data, navigation]);

  return null;
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <NavigateToAction />,
);
