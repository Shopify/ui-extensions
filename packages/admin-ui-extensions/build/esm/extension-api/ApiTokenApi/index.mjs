/**
 * Get a fresh api token for communication with Shopify Admin API
 */
export function isApiTokenApi(api) {
  return 'apiToken' in api;
}