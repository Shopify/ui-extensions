import type {ReadonlySignalLike} from '../../../../shared';

export interface LocaleApiContent {
  /**
   * Provides read-only access to the current [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) formatted locale and allows subscribing to locale changes. The `value` property provides the current locale, and `subscribe` allows listening to changes. Commonly used for internationalization, locale-specific formatting, and reactive updates when merchants change language settings.
   */
  current: ReadonlySignalLike<string>;
}

/**
 * The `LocaleApi` object provides access to current locale information and change notifications. Access these properties through `shopify.locale` to retrieve and monitor locale data.
 */
export interface LocaleApi {
  locale: LocaleApiContent;
}
