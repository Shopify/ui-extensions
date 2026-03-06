const { intents } = useApi(TARGET);

const activity = await intents.invoke('edit:settings/StoreDefaults');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Store defaults updated:', response.data);
}
