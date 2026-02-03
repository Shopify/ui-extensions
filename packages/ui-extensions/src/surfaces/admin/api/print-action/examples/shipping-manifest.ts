import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.order-details.print-action.render',
  async (root, api) => {
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
            }
          }
        }
      }`,
      {variables: {ids: orderIds}},
    );

    const response = await fetch('/api/generate-manifest', {
      method: 'POST',
      body: JSON.stringify({orders: ordersData.nodes}),
    });

    const result = await response.json();
    return result.manifestUrl;
  },
);
