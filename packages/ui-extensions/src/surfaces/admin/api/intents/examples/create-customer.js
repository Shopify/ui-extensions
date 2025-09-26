const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Customer');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer created:', response.data);
}
