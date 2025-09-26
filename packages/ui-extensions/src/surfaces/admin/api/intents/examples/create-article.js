const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Article');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article created:', response.data);
}
