const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/MetaobjectDefinition', {
  value: 'gid://shopify/MetaobjectDefinition/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}
