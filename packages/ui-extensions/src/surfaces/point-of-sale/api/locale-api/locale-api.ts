import type {ReadonlySignalLike} from '../../../../shared';

export interface LocaleApiContent {
  /**
   * Provides read-only access to the current IETF-formatted locale and allows subscribing to locale changes.
   * The `value` property provides the current locale, and `subscribe` allows listening to changes.
   */
  current: ReadonlySignalLike<string>;
}

/**
 * Access the merchant’s current locale (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)) to internationalize your extension content.
 */
export interface LocaleApi {
  locale: LocaleApiContent;
}
