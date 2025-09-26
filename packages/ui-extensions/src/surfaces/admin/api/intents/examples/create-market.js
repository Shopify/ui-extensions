const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Market');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market created:', response.data);
}
