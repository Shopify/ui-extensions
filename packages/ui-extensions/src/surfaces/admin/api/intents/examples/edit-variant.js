const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/ProductVariant', {
  value: 'gid://shopify/ProductVariant/123456789',
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant updated:', response.data);
}
