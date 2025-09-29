const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/MetafieldDefinition', {
  data: {ownerType: 'product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition created:', response.data);
}
