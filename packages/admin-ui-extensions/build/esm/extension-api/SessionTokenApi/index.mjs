/**
 * Get a fresh session token for communication with your app's backend service.
 * Calls to Shopify APIs must be made by your app’s backend service.
 */
export function isSessionTokenApi(api) {
  return 'sessionToken' in api;
}