const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Location', {
  value: 'gid://shopify/Location/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Location updated:', response.data);
}
