/**
 * The translation function signature for internationalization. Use this to translate string keys defined in your locale files into localized content for the current user's language.
 */
export interface I18nTranslate {
  /**
   * Returns a translated string matching a key in a locale file. Use this to display localized text in your extension based on the merchant's language preferences. Supports interpolation with replacement values and pluralization with the `count` option. Returns a string when replacements are primitives, or an array when replacements include UI components.
   *
   * In POS extensions, translation lookup doesn't expose a separate success or error result. A missing key, a missing required plural form, or a missing pluralization count can produce diagnostic text as the return value, along with a console warning. A missing interpolation value leaves the unresolved placeholder in the returned text and emits a warning. Check the development console and test each locale, plural category, and interpolation key before displaying translated content. Don't rely on diagnostic message wording as a stable API contract.
   *
   * In POS extensions, pass the `count` option as a number for a pluralized translation key. Zero is a valid count. A numeric string doesn't select a plural form, and omitting the count or passing `undefined` produces a missing-count diagnostic for a pluralized key.
   *
   * @param key - The translation key from your locale file (for example, "banner.title")
   * @param options - Optional replacement values for interpolation or the special `count` property for pluralization
   *
   * @example translate("banner.title")
   * @example translate("items.count", { count: 5 })
   */
  <ReplacementType = string>(
    key: string,
    options?: Record<string, ReplacementType | string | number>,
  ): ReplacementType extends string | number
    ? string
    : (string | ReplacementType)[];
}

/**
 * Internationalization utilities for formatting and translating content according to the user's locale. Use these methods to display numbers, currency, dates, and translated strings that match the merchant's language and regional preferences.
 */
export interface I18n {
  /**
   * Returns a localized number formatted according to the user's locale. Use this to display numbers like quantities, percentages, or measurements in the appropriate format for the merchant's region. This function behaves like the standard `Intl.NumberFormat()` with a style of `decimal` applied. Uses the current user's locale by default.
   *
   * @param number - The number to format
   * @param options.inExtensionLocale - If true, use the extension's default locale instead of the user's locale
   * @param options - Additional Intl.NumberFormatOptions for customizing the number format
   */
  formatNumber: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * Returns a localized currency value formatted according to the user's locale and currency conventions. Use this to display prices, totals, or financial amounts in the appropriate format for the merchant's region. This function behaves like the standard `Intl.NumberFormat()` with a style of `currency` applied. Uses the current user's locale by default.
   *
   * In POS extensions, pass an amount in major currency units and provide `options.currency` as an [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. For example, `formatCurrency(10, {currency: 'CAD'})` formats ten Canadian dollars. The function doesn't convert currencies or divide an integer minor-unit amount. Omitting the currency while using the currency style throws synchronously. Formatting errors from invalid Intl options are synchronous exceptions, not rejected promises.
   *
   * @param number - The currency amount to format, in major currency units
   * @param options.inExtensionLocale - If true, use the extension's default locale instead of the user's locale
   * @param options - Additional Intl.NumberFormatOptions for customizing the currency format, such as the currency code
   */
  formatCurrency: (
    number: number | bigint,
    options?: {inExtensionLocale?: boolean} & Intl.NumberFormatOptions,
  ) => string;

  /**
   * Returns a localized date value formatted according to the user's locale and date conventions. Use this to display dates and times in the appropriate format for the merchant's region, such as order dates, timestamps, or schedule information. This function behaves like the standard `Intl.DateTimeFormat()` and uses the current user's locale by default. Formatting options can be passed to customize the date display style.
   *
   * @param date - The Date object to format
   * @param options.inExtensionLocale - If true, use the extension's default locale instead of the user's locale
   * @param options - Additional Intl.DateTimeFormatOptions for customizing the date format
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
   */
  formatDate: (
    date: Date,
    options?: {inExtensionLocale?: boolean} & Intl.DateTimeFormatOptions,
  ) => string;

  /**
   * Returns translated content in the user's locale, as supported by the extension. Use this to display localized strings from your extension's locale files. The special `options.count` property enables pluralization. Other option keys and values are treated as replacements for interpolation in your translation strings. Returns a single string when replacements are primitives, or an array when replacements contain UI components.
   */
  translate: I18nTranslate;
}
