const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Location');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Location created:', response.data);
}
