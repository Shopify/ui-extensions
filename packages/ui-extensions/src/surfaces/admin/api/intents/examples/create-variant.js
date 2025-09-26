const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/ProductVariant', {
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant created:', response.data);
}
