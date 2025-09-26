const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/MetaobjectDefinition');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition created:', response.data);
}
