import React from 'react';
import {extend, render, Text, useData} from '@shopify/argo-admin-react';

function App() {
  const {productId, variantId} = useData();

  return (
    <Text>
      {`
      Here is my product data:
      - product id: ${productId}
      - variant id: ${variantId}
    `}
    </Text>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);