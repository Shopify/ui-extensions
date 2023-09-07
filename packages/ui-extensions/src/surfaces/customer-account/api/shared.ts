import type {ExtensionTarget} from '../targets';
import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';
// import {ApiVersion} from '../../../shared';

/**
 * A key-value storage object for extension targets.
 *
 * Stored data is only available to this specific app
 * but can be shared across multiple extension targets.
 *
 * The storage backend is implemented with `localStorage` and
 * should persist for ... days
 * However, data persistence isn't guaranteed.
 */
export interface Storage {
  /**
   * Read and return a stored value by key.
   *
   * The stored data is deserialized from JSON and returned as
   * its original primitive.
   *
   * Returns `null` if no stored data exists.
   */
  read<T = unknown>(key: string): Promise<T | null>;

  /**
   * Write stored data for this key.
   *
   * The data must be serializable to JSON.
   */
  write(key: string, data: any): Promise<void>;

  /**
   * Delete stored data by key.
   */
  delete(key: string): Promise<void>;
}

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
   * Returns a localized currency value.
   *
   * This function behaves like the standard `Intl.NumberFormat()`
   * with a style of `currency` applied. It uses the buyer's locale by default.
   *
   * @param options.inExtensionLocale - if true, use the extension's locale
   */
  formatCurrency: (
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
 * The capabilities an extension has access to.
 *
 * * [`api_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#api-access): the extension can access the Storefront API.
 *
 * * [`network_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access): the extension can make external network calls.
 *
 * * [`block_progress`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress): the extension can block a buyer's progress and the merchant has allowed this blocking behavior.
 */
export type Capability = 'api_access' | 'network_access' | 'block_progress';

/**
 * Meta information about an extension target.
 */
export interface Extension<Target extends ExtensionTarget = ExtensionTarget> {
  /**
   * The API version that was set in the extension config file.
   *
   * @example '2023-04', '2023-07'
   */
  // apiVersion: ApiVersion;

  /**
   * The allowed capabilities of the extension, defined
   * in your [shopify.ui.extension.toml](https://shopify.dev/docs/api/checkout-ui-extensions/configuration) file.
   *
   * * [`api_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#api-access): the extension can access the Storefront API.
   *
   * * [`network_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access): the extension can make external network calls.
   *
   * * [`block_progress`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress): the extension can block a buyer's progress and the merchant has allowed this blocking behavior.
   */
  capabilities: StatefulRemoteSubscribable<Capability[]>;

  /**
   * Information about the editor where the extension is being rendered.
   *
   * The value is undefined if the extension is not rendering in an editor.
   */
  editor?: Editor;

  /**
   * Whether your extension is currently rendered to the screen.
   *
   * Shopify might render your extension before it's visible in the UI,
   * typically to pre-render extensions that will appear on a later step of the
   * checkout.
   *
   * Your extension might also continue to run after the buyer has navigated away
   * from where it was rendered. The extension continues running so that
   * your extension is immediately available to render if the buyer navigates back.
   */
  rendered: StatefulRemoteSubscribable<boolean>;

  /**
   * The URL to the script that started the extension target.
   */
  scriptUrl: string;

  /**
   * The identifier that specifies where in Shopify’s UI your code is being
   * injected. This will be one of the targets you have included in your
   * extension’s configuration file.
   *
   * @example 'customer-account.order-status.block.render'
   * @see https://shopify.dev/docs/api/checkout-ui-extensions/unstable/extension-targets-overview
   * @see https://shopify.dev/docs/apps/app-extensions/configuration#targets
   */
  target: Target;

  /**
   * The published version of the running extension target.
   *
   * For unpublished extensions, the value is `undefined`.
   *
   * @example 3.0.10
   */
  version?: string;
}

export interface Editor {
  /**
   * Indicates whether the extension is rendering in the checkout editor.
   */
  type: 'checkout';
}

export type {ApiVersion} from '../../../shared';

export type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;

export type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'UYI'
  | 'UYU'
  | 'UYW'
  | 'UZS'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XSU'
  | 'XTS'
  | 'XUA'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';

// To update these type values, see https://github.com/Shopify/checkout-web/pull/8984
export type Timezone =
  | 'Africa/Abidjan'
  | 'Africa/Algiers'
  | 'Africa/Bissau'
  | 'Africa/Cairo'
  | 'Africa/Casablanca'
  | 'Africa/Ceuta'
  | 'Africa/El_Aaiun'
  | 'Africa/Johannesburg'
  | 'Africa/Juba'
  | 'Africa/Khartoum'
  | 'Africa/Lagos'
  | 'Africa/Maputo'
  | 'Africa/Monrovia'
  | 'Africa/Nairobi'
  | 'Africa/Ndjamena'
  | 'Africa/Sao_Tome'
  | 'Africa/Tripoli'
  | 'Africa/Tunis'
  | 'Africa/Windhoek'
  | 'America/Adak'
  | 'America/Anchorage'
  | 'America/Araguaina'
  | 'America/Argentina/Buenos_Aires'
  | 'America/Argentina/Catamarca'
  | 'America/Argentina/Cordoba'
  | 'America/Argentina/Jujuy'
  | 'America/Argentina/La_Rioja'
  | 'America/Argentina/Mendoza'
  | 'America/Argentina/Rio_Gallegos'
  | 'America/Argentina/Salta'
  | 'America/Argentina/San_Juan'
  | 'America/Argentina/San_Luis'
  | 'America/Argentina/Tucuman'
  | 'America/Argentina/Ushuaia'
  | 'America/Asuncion'
  | 'America/Bahia'
  | 'America/Bahia_Banderas'
  | 'America/Barbados'
  | 'America/Belem'
  | 'America/Belize'
  | 'America/Boa_Vista'
  | 'America/Bogota'
  | 'America/Boise'
  | 'America/Cambridge_Bay'
  | 'America/Campo_Grande'
  | 'America/Cancun'
  | 'America/Caracas'
  | 'America/Cayenne'
  | 'America/Chicago'
  | 'America/Chihuahua'
  | 'America/Costa_Rica'
  | 'America/Cuiaba'
  | 'America/Danmarkshavn'
  | 'America/Dawson'
  | 'America/Dawson_Creek'
  | 'America/Denver'
  | 'America/Detroit'
  | 'America/Edmonton'
  | 'America/Eirunepe'
  | 'America/El_Salvador'
  | 'America/Fort_Nelson'
  | 'America/Fortaleza'
  | 'America/Glace_Bay'
  | 'America/Goose_Bay'
  | 'America/Grand_Turk'
  | 'America/Guatemala'
  | 'America/Guayaquil'
  | 'America/Guyana'
  | 'America/Halifax'
  | 'America/Havana'
  | 'America/Hermosillo'
  | 'America/Indiana/Indianapolis'
  | 'America/Indiana/Knox'
  | 'America/Indiana/Marengo'
  | 'America/Indiana/Petersburg'
  | 'America/Indiana/Tell_City'
  | 'America/Indiana/Vevay'
  | 'America/Indiana/Vincennes'
  | 'America/Indiana/Winamac'
  | 'America/Inuvik'
  | 'America/Iqaluit'
  | 'America/Jamaica'
  | 'America/Juneau'
  | 'America/Kentucky/Louisville'
  | 'America/Kentucky/Monticello'
  | 'America/La_Paz'
  | 'America/Lima'
  | 'America/Los_Angeles'
  | 'America/Maceio'
  | 'America/Managua'
  | 'America/Manaus'
  | 'America/Martinique'
  | 'America/Matamoros'
  | 'America/Mazatlan'
  | 'America/Menominee'
  | 'America/Merida'
  | 'America/Metlakatla'
  | 'America/Mexico_City'
  | 'America/Miquelon'
  | 'America/Moncton'
  | 'America/Monterrey'
  | 'America/Montevideo'
  | 'America/New_York'
  | 'America/Nipigon'
  | 'America/Nome'
  | 'America/Noronha'
  | 'America/North_Dakota/Beulah'
  | 'America/North_Dakota/Center'
  | 'America/North_Dakota/New_Salem'
  | 'America/Nuuk'
  | 'America/Ojinaga'
  | 'America/Panama'
  | 'America/Pangnirtung'
  | 'America/Paramaribo'
  | 'America/Phoenix'
  | 'America/Port-au-Prince'
  | 'America/Porto_Velho'
  | 'America/Puerto_Rico'
  | 'America/Punta_Arenas'
  | 'America/Rainy_River'
  | 'America/Rankin_Inlet'
  | 'America/Recife'
  | 'America/Regina'
  | 'America/Resolute'
  | 'America/Rio_Branco'
  | 'America/Santarem'
  | 'America/Santiago'
  | 'America/Santo_Domingo'
  | 'America/Sao_Paulo'
  | 'America/Scoresbysund'
  | 'America/Sitka'
  | 'America/St_Johns'
  | 'America/Swift_Current'
  | 'America/Tegucigalpa'
  | 'America/Thule'
  | 'America/Thunder_Bay'
  | 'America/Tijuana'
  | 'America/Toronto'
  | 'America/Vancouver'
  | 'America/Whitehorse'
  | 'America/Winnipeg'
  | 'America/Yakutat'
  | 'America/Yellowknife'
  | 'Antarctica/Casey'
  | 'Antarctica/Davis'
  | 'Antarctica/Macquarie'
  | 'Antarctica/Mawson'
  | 'Antarctica/Palmer'
  | 'Antarctica/Rothera'
  | 'Antarctica/Troll'
  | 'Antarctica/Vostok'
  | 'Asia/Almaty'
  | 'Asia/Amman'
  | 'Asia/Anadyr'
  | 'Asia/Aqtau'
  | 'Asia/Aqtobe'
  | 'Asia/Ashgabat'
  | 'Asia/Atyrau'
  | 'Asia/Baghdad'
  | 'Asia/Baku'
  | 'Asia/Bangkok'
  | 'Asia/Barnaul'
  | 'Asia/Beirut'
  | 'Asia/Bishkek'
  | 'Asia/Brunei'
  | 'Asia/Chita'
  | 'Asia/Choibalsan'
  | 'Asia/Colombo'
  | 'Asia/Damascus'
  | 'Asia/Dhaka'
  | 'Asia/Dili'
  | 'Asia/Dubai'
  | 'Asia/Dushanbe'
  | 'Asia/Famagusta'
  | 'Asia/Gaza'
  | 'Asia/Hebron'
  | 'Asia/Ho_Chi_Minh'
  | 'Asia/Hong_Kong'
  | 'Asia/Hovd'
  | 'Asia/Irkutsk'
  | 'Asia/Jakarta'
  | 'Asia/Jayapura'
  | 'Asia/Jerusalem'
  | 'Asia/Kabul'
  | 'Asia/Kamchatka'
  | 'Asia/Karachi'
  | 'Asia/Kathmandu'
  | 'Asia/Khandyga'
  | 'Asia/Kolkata'
  | 'Asia/Krasnoyarsk'
  | 'Asia/Kuala_Lumpur'
  | 'Asia/Kuching'
  | 'Asia/Macau'
  | 'Asia/Magadan'
  | 'Asia/Makassar'
  | 'Asia/Manila'
  | 'Asia/Nicosia'
  | 'Asia/Novokuznetsk'
  | 'Asia/Novosibirsk'
  | 'Asia/Omsk'
  | 'Asia/Oral'
  | 'Asia/Pontianak'
  | 'Asia/Pyongyang'
  | 'Asia/Qatar'
  | 'Asia/Qostanay'
  | 'Asia/Qyzylorda'
  | 'Asia/Riyadh'
  | 'Asia/Sakhalin'
  | 'Asia/Samarkand'
  | 'Asia/Seoul'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Srednekolymsk'
  | 'Asia/Taipei'
  | 'Asia/Tashkent'
  | 'Asia/Tbilisi'
  | 'Asia/Tehran'
  | 'Asia/Thimphu'
  | 'Asia/Tokyo'
  | 'Asia/Tomsk'
  | 'Asia/Ulaanbaatar'
  | 'Asia/Urumqi'
  | 'Asia/Ust-Nera'
  | 'Asia/Vladivostok'
  | 'Asia/Yakutsk'
  | 'Asia/Yangon'
  | 'Asia/Yekaterinburg'
  | 'Asia/Yerevan'
  | 'Atlantic/Azores'
  | 'Atlantic/Bermuda'
  | 'Atlantic/Canary'
  | 'Atlantic/Cape_Verde'
  | 'Atlantic/Faroe'
  | 'Atlantic/Madeira'
  | 'Atlantic/Reykjavik'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Stanley'
  | 'Australia/Adelaide'
  | 'Australia/Brisbane'
  | 'Australia/Broken_Hill'
  | 'Australia/Darwin'
  | 'Australia/Eucla'
  | 'Australia/Hobart'
  | 'Australia/Lindeman'
  | 'Australia/Lord_Howe'
  | 'Australia/Melbourne'
  | 'Australia/Perth'
  | 'Australia/Sydney'
  | 'CET'
  | 'CST6CDT'
  | 'EET'
  | 'EST'
  | 'EST5EDT'
  | 'Etc/GMT'
  | 'Etc/GMT-1'
  | 'Etc/GMT-10'
  | 'Etc/GMT-11'
  | 'Etc/GMT-12'
  | 'Etc/GMT-13'
  | 'Etc/GMT-14'
  | 'Etc/GMT-2'
  | 'Etc/GMT-3'
  | 'Etc/GMT-4'
  | 'Etc/GMT-5'
  | 'Etc/GMT-6'
  | 'Etc/GMT-7'
  | 'Etc/GMT-8'
  | 'Etc/GMT-9'
  | 'Etc/GMT+1'
  | 'Etc/GMT+10'
  | 'Etc/GMT+11'
  | 'Etc/GMT+12'
  | 'Etc/GMT+2'
  | 'Etc/GMT+3'
  | 'Etc/GMT+4'
  | 'Etc/GMT+5'
  | 'Etc/GMT+6'
  | 'Etc/GMT+7'
  | 'Etc/GMT+8'
  | 'Etc/GMT+9'
  | 'Etc/UTC'
  | 'Europe/Amsterdam'
  | 'Europe/Andorra'
  | 'Europe/Astrakhan'
  | 'Europe/Athens'
  | 'Europe/Belgrade'
  | 'Europe/Berlin'
  | 'Europe/Brussels'
  | 'Europe/Bucharest'
  | 'Europe/Budapest'
  | 'Europe/Chisinau'
  | 'Europe/Copenhagen'
  | 'Europe/Dublin'
  | 'Europe/Gibraltar'
  | 'Europe/Helsinki'
  | 'Europe/Istanbul'
  | 'Europe/Kaliningrad'
  | 'Europe/Kiev'
  | 'Europe/Kirov'
  | 'Europe/Lisbon'
  | 'Europe/London'
  | 'Europe/Luxembourg'
  | 'Europe/Madrid'
  | 'Europe/Malta'
  | 'Europe/Minsk'
  | 'Europe/Monaco'
  | 'Europe/Moscow'
  | 'Europe/Oslo'
  | 'Europe/Paris'
  | 'Europe/Prague'
  | 'Europe/Riga'
  | 'Europe/Rome'
  | 'Europe/Samara'
  | 'Europe/Saratov'
  | 'Europe/Simferopol'
  | 'Europe/Sofia'
  | 'Europe/Stockholm'
  | 'Europe/Tallinn'
  | 'Europe/Tirane'
  | 'Europe/Ulyanovsk'
  | 'Europe/Uzhgorod'
  | 'Europe/Vienna'
  | 'Europe/Vilnius'
  | 'Europe/Volgograd'
  | 'Europe/Warsaw'
  | 'Europe/Zaporozhye'
  | 'Europe/Zurich'
  | 'HST'
  | 'Indian/Chagos'
  | 'Indian/Christmas'
  | 'Indian/Cocos'
  | 'Indian/Kerguelen'
  | 'Indian/Mahe'
  | 'Indian/Maldives'
  | 'Indian/Mauritius'
  | 'Indian/Reunion'
  | 'MET'
  | 'MST'
  | 'MST7MDT'
  | 'Pacific/Apia'
  | 'Pacific/Auckland'
  | 'Pacific/Bougainville'
  | 'Pacific/Chatham'
  | 'Pacific/Chuuk'
  | 'Pacific/Easter'
  | 'Pacific/Efate'
  | 'Pacific/Fakaofo'
  | 'Pacific/Fiji'
  | 'Pacific/Funafuti'
  | 'Pacific/Galapagos'
  | 'Pacific/Gambier'
  | 'Pacific/Guadalcanal'
  | 'Pacific/Guam'
  | 'Pacific/Honolulu'
  | 'Pacific/Kanton'
  | 'Pacific/Kiritimati'
  | 'Pacific/Kosrae'
  | 'Pacific/Kwajalein'
  | 'Pacific/Majuro'
  | 'Pacific/Marquesas'
  | 'Pacific/Nauru'
  | 'Pacific/Niue'
  | 'Pacific/Norfolk'
  | 'Pacific/Noumea'
  | 'Pacific/Pago_Pago'
  | 'Pacific/Palau'
  | 'Pacific/Pitcairn'
  | 'Pacific/Pohnpei'
  | 'Pacific/Port_Moresby'
  | 'Pacific/Rarotonga'
  | 'Pacific/Tahiti'
  | 'Pacific/Tarawa'
  | 'Pacific/Tongatapu'
  | 'Pacific/Wake'
  | 'Pacific/Wallis'
  | 'PST8PDT'
  | 'WET';

export type CountryCode =
  | 'AC'
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AN'
  | 'AO'
  | 'AR'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PS'
  | 'PT'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TA'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
  | 'ZZ';

/**
 * Union of supported storefront API versions
 */
export type StorefrontApiVersion =
  | '2022-04'
  | '2022-07'
  | '2022-10'
  | '2023-01'
  | '2023-04'
  | '2023-07'
  | 'unstable';

/**
 * GraphQL error returned by the Shopify Storefront APIs.
 */
export interface GraphQLError {
  message: string;
  extensions: {
    requestId: string;
    code: string;
  };
}

export interface SellingPlan {
  /**
   * A globally-unique identifier.
   * @example 'gid://shopify/SellingPlan/1'
   */
  id: string;
}

export interface Attribute {
  /**
   * The key for the attribute.
   */
  key: string;

  /**
   * The value for the attribute.
   */
  value: string;
}

export interface MailingAddress {
  /**
   * The buyer's full name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'John Doe'
   */
  name?: string;

  /**
   * The buyer's first name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'John'
   */
  firstName?: string;

  /**
   * The buyer's last name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Doe'
   */
  lastName?: string;

  /**
   * The buyer's company name.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Shopify'
   */
  company?: string;

  /**
   * The first line of the buyer's address, including street name and number.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example '151 O'Connor Street'
   */
  address1?: string;

  /**
   * The second line of the buyer's address, like apartment number, suite, etc.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Ground floor'
   */
  address2?: string;

  /**
   * The buyer's city.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'Ottawa'
   */
  city?: string;

  /**
   * The buyer's postal or ZIP code.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'K2P 2L8'
   */
  zip?: string;

  /**
   * The ISO 3166 Alpha-2 format for the buyer's country. Refer to https://www.iso.org/iso-3166-country-codes.html.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'CA' for Canada.
   */
  countryCode?: CountryCode;

  /**
   * The buyer's province code, such as state, province, prefecture, or region.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example 'ON' for Ontario.
   */
  provinceCode?: string;

  /**
   * The buyer's phone number.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * @example '+1 613 111 2222'.
   */
  phone?: string;
}
