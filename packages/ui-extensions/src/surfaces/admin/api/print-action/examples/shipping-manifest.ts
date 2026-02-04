import {extension, Text} from '@shopify/ui-extensions/admin';

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
              country
            }
          }
        }
      }`,
      {variables: {ids: orderIds}},
    );

    const orders = ordersData.nodes;

    const summaryText = root.createComponent(
      Text,
      {},
      `Shipping manifest for ${orders.length} orders`,
    );
    root.appendChild(summaryText);

    orders.forEach((order) => {
      const orderText = root.createComponent(Text, {}, order.name);
      root.appendChild(orderText);
    });

    const response = await fetch('/api/generate-shipping-manifest', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({orders}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  },
);
