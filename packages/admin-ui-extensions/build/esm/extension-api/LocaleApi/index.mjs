/**
 * Access the merchant’s current locale (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)) to internationalize your extension content.
 */
export function isLocaleApi(api) {
  return 'locale' in api;
}