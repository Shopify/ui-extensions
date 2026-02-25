const { intents } = useApi(TARGET);

const activity = await intents.invoke('edit:settings/StoreDetails');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Store details updated:', response.data);
}
