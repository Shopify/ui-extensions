const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Menu');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu created:', response.data);
}
