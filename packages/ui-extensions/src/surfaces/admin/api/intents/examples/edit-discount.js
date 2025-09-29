const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Discount', {
  value: 'gid://shopify/Discount/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount updated:', response.data);
}
