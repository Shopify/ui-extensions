import '@shopify/ui-extensions';

//@ts-ignore
declare module './src/SelectionAction.jsx' {
  const shopify: import('@shopify/ui-extensions/admin.product-index.selection-action.render').Api;
  const globalThis: { shopify: typeof shopify };
}
