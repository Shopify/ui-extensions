const {data, navigation} = useApi(TARGET);

const productId = data.selected[0]?.id;

if (!productId) {
  console.error('No product selected');
  return;
}

const response = await fetch(`/api/products/${productId}/check-eligibility`, {
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
});

const {eligible} = await response.json();

if (eligible) {
  navigation.navigate('extension://my-product-action-extension-handle');
} else {
  console.log('Product not eligible for this action');
}
