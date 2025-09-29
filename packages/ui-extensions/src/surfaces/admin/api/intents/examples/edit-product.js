const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Product', {
  value: 'gid://shopify/Product/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product updated:', response.data);
}
