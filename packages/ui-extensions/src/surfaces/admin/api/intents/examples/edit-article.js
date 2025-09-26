const {intents} = useApi(TARGET);

const activity = await intents.invoke('edit:shopify/Article', {
  value: 'gid://shopify/Article/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article updated:', response.data);
}
