const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product created:', response.data);
}
