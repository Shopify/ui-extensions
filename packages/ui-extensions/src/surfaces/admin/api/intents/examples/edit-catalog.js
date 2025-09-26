const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Catalog', {
  value: 'gid://shopify/Catalog/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog updated:', response.data);
}
