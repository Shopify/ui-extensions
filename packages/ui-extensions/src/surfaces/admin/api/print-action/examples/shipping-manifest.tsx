import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Text,
} from '@shopify/ui-extensions-react/admin';

const ShippingManifest = () => {
  const {data, query} = useApi<'admin.order-details.print-action.render'>();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orderIds = data.selected.map((item) => item.id);

      const {data: ordersData} = await query(
        `query GetOrders($ids: [ID!]!) {
          nodes(ids: $ids) {
            ... on Order {
              id
              name
              shippingAddress {
                address1
                city
                country
              }
            }
          }
        }`,
        {variables: {ids: orderIds}},
      );

      setOrders(ordersData.nodes);
    };

    fetchOrders();
  }, [data, query]);

  return (
    <>
      <Text>Shipping manifest for {orders.length} orders</Text>
      {orders.map((order) => (
        <Text key={order.id}>{order.name}</Text>
      ))}
    </>
  );
};

export default reactExtension(
  'admin.order-details.print-action.render',
  async (api) => {
    const {data, query} = api;

    const orderIds = data.selected.map((item) => item.id);

    const {data: ordersData} = await query(
      `query GetOrders($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Order {
            id
            name
            shippingAddress {
              address1
              city
              country
            }
          }
        }
      }`,
      {variables: {ids: orderIds}},
    );

    const response = await fetch('/api/generate-shipping-manifest', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({orders: ordersData.nodes}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  },
);
