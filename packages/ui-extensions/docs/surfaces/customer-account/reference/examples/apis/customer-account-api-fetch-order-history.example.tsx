import React, {useEffect, useState} from 'react';
import {reactExtension} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text} from '@shopify/ui-extensions/customer-account';

const API_VERSION = '2025-07';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const [orderCount, setOrderCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`shopify://customer-account/api/${API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `query { customer { orders(first: 100) { nodes { id } } } }`,
      }),
    })
      .then((res) => res.json())
      .then(({data}) => {
        if (!data.customer) return;
        setOrderCount(data.customer.orders.nodes.length);
      })
      .catch(console.error);
  }, []);

  if (orderCount === null) return null;
  return (
    <BlockStack>
      <Text>You have placed {orderCount} order{orderCount !== 1 ? 's' : ''} with us.</Text>
    </BlockStack>
  );
}
