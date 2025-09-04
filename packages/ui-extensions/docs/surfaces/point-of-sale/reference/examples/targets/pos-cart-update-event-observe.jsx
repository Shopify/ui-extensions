export default async () => {
  console.log('Cart update event received');
  console.log('Cart:', shopify.cart);
  console.log('Line items:', shopify.cart.lineItems);
  console.log('Customer:', shopify.cart.customer);
  console.log('Device info:', shopify.device);
  console.log('Session:', shopify.session);
  console.log('Connectivity:', shopify.connectivity);
};
