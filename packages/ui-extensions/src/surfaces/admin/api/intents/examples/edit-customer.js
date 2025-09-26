const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Customer', {
  value: 'gid://shopify/Customer/456789123',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer updated:', response.data);
}
