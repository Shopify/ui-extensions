import React, {useEffect, useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const ShippingManifest = () => {
  const {data, query} = useApi<'admin.order-details.print-action.render'>();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orderIds = data.selected.map((item) => item.id);

    query(
      `query GetOrders($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Order {
            id
            name
            shippingAddress {
              address1
              city
            }
          }
        }
      }`,
      {variables: {ids: orderIds}},
    ).then(({data: ordersData}) => {
      setOrders(ordersData.nodes);
    });
  }, [data, query]);

  const generate = async () => {
    const response = await fetch('/api/generate-manifest', {
      method: 'POST',
      body: JSON.stringify({orders}),
    });

    const result = await response.json();
    return result.manifestUrl;
  };

  return null;
};

export default reactExtension('admin.order-details.print-action.render', () => <ShippingManifest />);
