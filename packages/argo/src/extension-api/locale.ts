export interface LocaleApi {
  locale: string;
}

export function isLocaleApi(api: any): api is LocaleApi {
  return 'locale' in api && typeof api['locale'] === 'string';
}
