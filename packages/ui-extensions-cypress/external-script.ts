/* eslint-disable */
(self as any).shopify.extend('Playground', (api) => {
  console.log('Hello from external script');
  api.toast.show('Hello from external script');
});

