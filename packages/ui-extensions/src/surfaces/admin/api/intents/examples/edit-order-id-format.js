const { intents } = useApi(TARGET);

const activity = await intents.invoke('edit:settings/OrderIdFormat');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Settings updated:', response.data);
}
