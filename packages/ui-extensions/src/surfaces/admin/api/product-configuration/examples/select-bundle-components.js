const {data, resourcePicker} = useApi(TARGET);

const parentProductId = data.selected[0]?.id;

const componentProducts = await resourcePicker({
  type: 'product',
  multiple: 5,
  action: 'select',
  filter: {
    draft: false,
    archived: false,
  },
});

if (componentProducts) {
  await fetch('/api/bundles/configure', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      bundleProductId: parentProductId,
      components: componentProducts.map((p) => ({
        productId: p.id,
        quantity: 1,
      })),
    }),
  });
}
