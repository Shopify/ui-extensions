const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}
