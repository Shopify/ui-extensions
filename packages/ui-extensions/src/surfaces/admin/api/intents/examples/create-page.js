const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Page');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page created:', response.data);
}
