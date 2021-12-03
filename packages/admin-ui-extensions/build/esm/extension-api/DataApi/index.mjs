/**
 * Extension points may provide relevant data to the extension. The type of data varies from extension point to extension point.
 */
export function isDataApi(api) {
  return 'data' in api;
}