const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Page', {
  value: 'gid://shopify/Page/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page updated:', response.data);
}
