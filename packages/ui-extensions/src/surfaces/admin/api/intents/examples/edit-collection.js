const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Collection', {
  value: 'gid://shopify/Collection/987654321',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection updated:', response.data);
}
