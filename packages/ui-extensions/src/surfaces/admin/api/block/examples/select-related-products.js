const {data, resourcePicker} = useApi(TARGET);

const currentProductId = data.selected[0]?.id;

const selectedProducts = await resourcePicker({
  type: 'product',
  multiple: true,
  filter: {
    hidden: false,
    draft: false,
  },
});

if (selectedProducts) {
  await fetch('/api/product-recommendations', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      productId: currentProductId,
      relatedProducts: selectedProducts.map((p) => p.id),
    }),
  });
}
