const {data, query} = useApi(TARGET);

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
