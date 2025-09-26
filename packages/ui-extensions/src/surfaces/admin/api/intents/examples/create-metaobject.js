const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Metaobject', {
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject created:', response.data);
}
