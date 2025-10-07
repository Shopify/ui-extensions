const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Metaobject', {
  value: 'gid://shopify/Metaobject/123456789',
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject updated:', response.data);
}
