fetch('shopify:admin/api/graphql.json', {
  method: 'POST',
  body: JSON.stringify(simpleProductQuery),
});
