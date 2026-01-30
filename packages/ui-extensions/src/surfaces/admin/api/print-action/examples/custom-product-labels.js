const {data, resourcePicker} = useApi(TARGET);

const productIds = data.selected.map((item) => item.id);

const additionalProducts = await resourcePicker({
  type: 'product',
  multiple: 10,
  action: 'add',
});

const allProductIds = [
  ...productIds,
  ...((additionalProducts || []).map((p) => p.id)),
];

const response = await fetch('/api/generate-labels', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({productIds: allProductIds}),
});

const {printUrl} = await response.json();

return printUrl;
