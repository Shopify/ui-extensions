const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Market', {
  value: 'gid://shopify/Market/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market updated:', response.data);
}
