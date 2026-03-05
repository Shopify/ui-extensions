const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:settings/LocationDefault');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Default location updated:', response.data);
}
