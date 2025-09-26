const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Menu', {
  value: 'gid://shopify/Menu/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu updated:', response.data);
}
