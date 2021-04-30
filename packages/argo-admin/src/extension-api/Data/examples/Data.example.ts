import {extend, Text} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {productId, variantId} = api.data;

  const productDataText = root.createComponent(Text);
  productDataText.appendChild(`
      Here is my product data:
      - product id: ${productId}
      - variant id: ${variantId}
    `);

  root.appendChild(productDataText);
  root.mount();
});