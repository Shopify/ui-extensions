const {data, close, resourcePicker} = useApi(TARGET);

const {id: productId, sellingPlanId} = data.selected[0];

const confirmed = confirm('Remove this product from the selling plan?');

if (!confirmed) {
  close();
  return;
}

await fetch('/api/selling-plans/remove-product', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({productId, sellingPlanId}),
});

console.log('Product removed from selling plan');
close();
