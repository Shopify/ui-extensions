export default async () => {
  console.log('Transaction complete event received');
  console.log('Transaction:', shopify.transaction);
  console.log('Transaction type:', shopify.transaction.transactionType);
  console.log('Order ID:', shopify.transaction.orderId);
  console.log('Device info:', shopify.device);
  console.log('Session:', shopify.session);
  console.log('Connectivity:', shopify.connectivity);
};
