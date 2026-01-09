const selectedProducts = await resourcePicker({
  type: 'product',
  filter: {
    query: 'title:shirt tag:summer',
  },
});

