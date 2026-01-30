const {data, resourcePicker, close} = useApi(TARGET);

const currentProductId = data.selected[0]?.id;

const selectedProducts = await resourcePicker({
  type: 'product',
  multiple: 5,
  action: 'select',
});

if (selectedProducts) {
  await fetch('/api/create-bundle', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      mainProduct: currentProductId,
      components: selectedProducts.map((p) => p.id),
    }),
  });
  
  close();
}
