interface LocaleApiContent {
  /** IETF-formatted locale at time of page load */
  initialValue: string;

  /** Callback when user changes locale during runtime */
  setOnChange(onChange: (locale: string) => void): void;
}

/**
 * Access the merchant’s current locale (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)) to internationalize your extension content.
 */
export interface LocaleApi {
  locale: LocaleApiContent;
}

export function isLocaleApi(api: any): api is LocaleApi {
  return 'locale' in api;
}
