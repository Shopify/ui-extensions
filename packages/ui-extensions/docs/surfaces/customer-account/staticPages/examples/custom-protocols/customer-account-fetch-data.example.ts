fetch(
  'shopify:customer-account/api/unstable/graphql.json',
  {
    method: 'POST',
    body: JSON.stringify(simpleOrderQuery),
  },
);
