export default async () => {
  console.log('Cash tracking session start event received');
  console.log('Session ID:', shopify.cashTrackingSessionStart.id);
  console.log('Opening time:', shopify.cashTrackingSessionStart.openingTime);
  console.log('Device info:', shopify.device);
  console.log('Session:', shopify.session);
  console.log('Connectivity:', shopify.connectivity);
};
