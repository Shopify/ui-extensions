export default async () => {
  console.log('Cash tracking session complete event received');
  console.log('Session ID:', shopify.cashTrackingSessionComplete.id);
  console.log('Opening time:', shopify.cashTrackingSessionComplete.openingTime);
  console.log('Closing time:', shopify.cashTrackingSessionComplete.closingTime);
  console.log('Device info:', shopify.device);
  console.log('Session:', shopify.session);
  console.log('Connectivity:', shopify.connectivity);
};
