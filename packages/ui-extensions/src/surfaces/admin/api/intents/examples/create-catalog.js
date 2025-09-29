const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Catalog');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog created:', response.data);
}
