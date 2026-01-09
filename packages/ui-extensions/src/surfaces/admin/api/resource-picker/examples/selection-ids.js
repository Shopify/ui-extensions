const selectedProducts = await resourcePicker({
  type: 'product',
  selectionIds: [
    {id: 'gid://shopify/Product/1'},
    {id: 'gid://shopify/Product/2'},
  ],
});

