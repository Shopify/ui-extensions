import React, {useEffect, useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const DirectApiPicker = () => {
  const {picker, query} = useApi<'admin.product-details.block.render'>();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    query(
      `query GetOrders($first: Int!) {
        orders(first: $first) {
          edges {
            node {
              id
              name
            }
          }
        }
      }`,
      {variables: {first: 10}},
    ).then(({data}) => {
      setOrders(data.orders.edges);
    });
  }, [query]);

  const handlePick = async () => {
    if (orders.length > 0) {
      await picker({
        heading: 'Select orders',
        items: orders.map((edge) => ({
          id: edge.node.id,
          heading: edge.node.name,
        })),
      });
    }
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <DirectApiPicker />);
