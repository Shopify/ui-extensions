const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/MetaobjectDefinition', {
  data: {type: 'my_metaobject_definition_type'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}
