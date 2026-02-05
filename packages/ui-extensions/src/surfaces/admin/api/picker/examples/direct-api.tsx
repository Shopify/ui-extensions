import React from 'react';
import {reactExtension, useApi, Button} from '@shopify/ui-extensions-react/admin';

const DirectApiPicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();

  const handlePick = async () => {
    const response = await fetch('shopify:admin/api/graphql.json', {
      method: 'POST',
      body: JSON.stringify({
        query: `query GetOrders($first: Int!) {
          orders(first: $first) {
            edges {
              node {
                id
                name
              }
            }
          }
        }`,
        variables: {first: 10},
      }),
    });

    const {data} = await response.json();

    await picker({
      heading: 'Select orders',
      items: data.orders.edges.map((edge) => ({
        id: edge.node.id,
        heading: edge.node.name,
      })),
    });
  };

  return <Button title="Open Order Picker" onPress={handlePick} />;
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <DirectApiPicker />,
);
