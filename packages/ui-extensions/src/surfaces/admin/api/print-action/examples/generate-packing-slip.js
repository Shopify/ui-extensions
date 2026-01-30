const {data} = useApi(TARGET);

const orderIds = data.selected.map((item) => item.id);

const response = await fetch('/api/generate-packing-slip', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({orderIds}),
});

const {printUrl} = await response.json();

return printUrl;
