const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/MetafieldDefinition', {
  value: 'gid://shopify/MetafieldDefinition/123456789',
  data: {ownerType: 'product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition updated:', response.data);
}
