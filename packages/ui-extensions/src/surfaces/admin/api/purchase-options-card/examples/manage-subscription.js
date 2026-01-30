const {data, close} = useApi(TARGET);

const {id: productId, sellingPlanId} = data.selected[0];

if (!sellingPlanId) {
  console.error('No selling plan selected');
  close();
  return;
}

const response = await fetch('/api/subscriptions/update', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    productId,
    sellingPlanId,
    action: 'modify',
  }),
});

if (response.ok) {
  console.log('Subscription updated');
  close();
}
