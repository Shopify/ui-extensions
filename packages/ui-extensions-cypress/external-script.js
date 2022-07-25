/* eslint-disable */
self.shopify.extend('Playground', (api) => {
  console.log('Hello from external script');
  console.log('External script APIs', Object.keys(api));
  api.toast.show('Hello from external script');
});

