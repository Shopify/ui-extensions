const { intents } = useApi(TARGET);

const activity = await intents.invoke('edit:settings/OrderProcessing');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Order processing updated:', response.data);
}
