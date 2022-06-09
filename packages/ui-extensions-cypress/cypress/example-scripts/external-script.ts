(self as any).shopify.extend('Playground', (api) => {
  api.toast.show('Hello from external script');
});
