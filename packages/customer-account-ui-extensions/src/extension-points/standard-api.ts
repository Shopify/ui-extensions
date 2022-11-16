import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

export type Version = 'unstable';

export interface Language {
  /**
   * The BCP-47 language tag. It may contain a dash followed by an ISO 3166-1 alpha-2 region code.
   *
   * @example 'en' for English, or 'en-US' for English local to United States.
   * @see https://en.wikipedia.org/wiki/IETF_language_tag
   * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  isoCode: string;
}

export interface Localization {
  /**
   * The language the buyer sees in the customer account hub.
   */
  language: StatefulRemoteSubscribable<Language>;

  /**
   * This is the buyer's language, as supported by the extension.
   * If the buyer's actual language is not supported by the extension,
   * this is the fallback locale used for translations.
   *
   * For example, if the buyer's language is 'fr-CA' but your extension
   * only supports translations for 'fr', then the `isoCode` for this
   * language is 'fr'. If your extension does not provide french
   * translations at all, this value is the default locale for your
   * extension (that is, the one matching your .default.json file).
   */
  extensionLanguage: StatefulRemoteSubscribable<Language>;
}

/**
 * This defines the i18n.translate() signature.
 */
export interface I18nTranslate {
  /**
   * This returns a translated string matching a key in a locale file.
   *
   * @example translate("banner.title")
   */
  <ReplacementType = string>(
    key: string,
    options?: {[placeholderKey: string]: ReplacementType | string | number},
  ): ReplacementType extends string | number
    ? string
    : (string | ReplacementType)[];
}

export interface I18n {
  /**
   * Returns a localized number.
   *
   * This function behaves like the standard `Intl.NumberFormat()`
   * with a style of `decimal` applied. It uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatNumber: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * Returns a localized date value.
   *
   * This function behaves like the standard `Intl.DateTimeFormatOptions()` and uses
   * the buyer's locale by default. Formatting options can be passed in as
   * options.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat0
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatDate: (
    date: Date,
    options?: {inExtensionLocale?: boolean} & Intl.DateTimeFormatOptions,
  ) => string;

  /**
   * Returns translated content in the buyer's locale,
   * as supported by the extension.
   *
   * - `options.count` is a special numeric value used in pluralization.
   * - The other option keys and values are treated as replacements for interpolation.
   * - If the replacements are all primitives, then `translate()` returns a single string.
   * - If replacements contain UI components, then `translate()` returns an array of elements.
   */
  translate: I18nTranslate;
}

/**
 * The following APIs are provided to all extension points.
 */
export interface StandardApi {
  customerApi: {
    getEndpoint(version: 'unstable'): Promise<string>;
    getAccessToken(): Promise<string>;
  };

  /**
   * Details about the language of the buyer.
   */
  localization: Localization;

  /**
   * Utilities for translating content and formatting values according to the current `localization`
   * of the user.
   */
  i18n: I18n;

  router: {
    getExtensionFullPageUrl(relative: string): Promise<string>;
    navigate(to: string): Promise<void>;
  };

  /**
   * An authenticated redirect is a way to seamlessly integrate 3P apps
   * built outside of self-serve into the self-serve experience. The 3P app accepts this data,
   * bypasses any authentication screens on their side, and sends the user directly into
   * their app to complete the task at hand. Once the task is complete, the app routes the user back into self-serve.
   */
  authenticatedRedirect: {
    getStartUrl(): Promise<string>;
  };
}
