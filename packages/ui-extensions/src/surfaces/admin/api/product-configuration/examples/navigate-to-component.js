const {navigation, intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  const newProductId = response.data?.product?.id;
  console.log('Component product created:', newProductId);
}
