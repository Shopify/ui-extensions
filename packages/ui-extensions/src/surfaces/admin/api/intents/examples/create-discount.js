const {intents} = useApi(TARGET);

const activity = await intents.invoke('create:shopify/Discount', {
  data: {type: 'amount-off-product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount created:', response.data);
}
