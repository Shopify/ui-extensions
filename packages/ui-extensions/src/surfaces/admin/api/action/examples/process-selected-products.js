const {data, close} = useApi(TARGET);

const productIds = data.selected.map((item) => item.id);

const response = await fetch('/api/bulk-process', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({productIds}),
});

if (response.ok) {
  console.log('Products processed successfully');
  close();
} else {
  console.error('Failed to process products');
}
