import type {
  Analytics,
  AppMetafieldEntry,
  Capability,
  CheckoutToken,
  Country,
  Currency,
  Editor,
  ExtensionSettings,
  I18n,
  Language,
  Market,
  Metafield,
  SessionToken,
  Shop,
  Storage,
  Version,
} from '../standard/standard';
import type {Attribute, MailingAddress} from '../shared';
import type {
  ApiVersion,
  GraphQLError,
  StorefrontApiVersion,
  Timezone,
} from '../../../../shared';

export interface AddressAutocompleteStandardApi<
  Target extends
    | 'purchase.address-autocomplete.suggest'
    | 'purchase.address-autocomplete.format-suggestion',
> {
  /**
   * The metafields requested in the
   * [`shopify.extension.toml`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration)
   * file. These metafields are updated when there's a change in the merchandise items
   * being purchased by the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   *
   * > Tip:
   * > Cart metafields are only available on carts created via the Storefront API version `2023-04` or later.*
   */
  appMetafields: AppMetafieldEntry[];

  /**
   * Methods for interacting with [Web Pixels](https://shopify.dev/docs/apps/marketing), such as emitting an event.
   */
  analytics: Analytics;

  /**
   * Custom attributes left by the customer to the merchant, either in their cart or during checkout.
   */
  attributes: Attribute[] | undefined;

  /**
   * The proposed buyer billing address. The address updates when the field is
   * committed (on change) rather than every keystroke.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  billingAddress?: MailingAddress | undefined;

  /**
   * A stable id that represents the current checkout.
   *
   * Matches the `token` field in the [WebPixel checkout payload](https://shopify.dev/docs/api/pixels/customer-events#checkout)
   * and the `checkout_token` field in the [Admin REST API Order resource](https://shopify.dev/docs/api/admin-rest/unstable/resources/order#resource-object).
   */
  checkoutToken: CheckoutToken | undefined;

  /**
   * Meta information about the extension.
   */
  extension: Extension<Target>;

  /**
   * Utilities for translating content and formatting values according to the current
   * [`localization`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/localization)
   * of the checkout.
   *
   * See [localization examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/localization#examples)
   * for more information.
   */
  i18n: I18n;

  /**
   * Details about the location, language, and currency of the buyer. For utilities to easily
   * format and translate content based on these details, you can use the
   * [`i18n`](https://shopify.dev/docs/api/checkout-ui-extensions/apis/localization#standardapi-propertydetail-i18n)
   * object instead.
   */
  localization: Localization;

  /**
   * The metafields that apply to the current checkout.
   *
   * Metafields are stored locally on the client and are applied to the order object after the checkout completes.
   *
   * These metafields are shared by all extensions running on checkout, and
   * persist for as long as the customer is working on this checkout.
   *
   * Once the order is created, you can query these metafields using the
   * [GraphQL Admin API](https://shopify.dev/docs/admin-api/graphql/reference/orders/order#metafield-2021-01)
   */
  metafields: Metafield[];

  /**
   * Used to query the Storefront GraphQL API with a prefetched token.
   *
   * See [storefront api access examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/storefront-api) for more information.
   */
  query: <Data = unknown, Variables = Record<string, unknown>>(
    query: string,
    options?: {variables?: Variables; version?: StorefrontApiVersion},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;

  /**
   * Provides access to session tokens, which can be used to verify token claims on your app's server.
   *
   * See [session token examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/session-token) for more information.
   */
  sessionToken: SessionToken;

  /**
   * The settings matching the settings definition written in the
   * [`shopify.extension.toml`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration) file.
   *
   *  See [settings examples](https://shopify.dev/docs/api/checkout-ui-extensions/apis/settings) for more information.
   *
   * > Note: When an extension is being installed in the editor, the settings will be empty
   */
  settings: ExtensionSettings;

  /**
   * The proposed buyer shipping address. During the information step,
   * the address updates when the field is committed (on change) rather than every keystroke.
   * An address value is only present if delivery is required. Otherwise, the subscribable value is undefined.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  shippingAddress?: MailingAddress | undefined;

  /** Shop where the checkout is taking place. */
  shop: Shop;

  /**
   * Key-value storage for the extension.
   * Uses `localStorage` and should persist across the buyer's current checkout session.
   * However, data persistence isn't guaranteed and storage is reset when the buyer starts a new checkout.
   *
   * Data is shared across all activated extension targets of this extension. In versions `<=2023-07`,
   * each activated extension target had its own storage.
   */
  storage: Storage;

  /**
   * The runner version being used for the extension.
   *
   * @example 'unstable'
   */
  version: Version;
}

interface Extension<
  Target extends
    | 'purchase.address-autocomplete.suggest'
    | 'purchase.address-autocomplete.format-suggestion',
> {
  /**
   * The API version that was set in the extension config file.
   *
   * @example '2023-07', '2023-10', '2024-01', '2024-04', 'unstable'
   */
  apiVersion: ApiVersion;

  /**
   * The allowed capabilities of the extension, defined
   * in your [shopify.extension.toml](https://shopify.dev/docs/api/checkout-ui-extensions/configuration) file.
   *
   * * [`api_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#api-access): the extension can access the Storefront API.
   *
   * * [`network_access`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access): the extension can make external network calls.
   *
   * * [`block_progress`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress): the extension can block a buyer's progress and the merchant has allowed this blocking behavior.
   *
   * * [`collect_buyer_consent.sms_marketing`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#collect-buyer-consent): the extension can collect buyer consent for SMS marketing.
   *
   * * [`collect_buyer_consent.customer_privacy`](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#collect-buyer-consent): the extension can register buyer consent decisions that will be honored on Shopify-managed services.
   */
  capabilities: Capability[];

  /**
   * Information about the editor where the extension is being rendered.
   *
   * The value is undefined if the extension is not running in an editor.
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
   *
   * If the extension is not capable of rendering UI components, this value will always be false.
   */
  rendered: boolean;

  /**
   * The URL to the script that started the extension target.
   */
  scriptUrl: string;
  /**
   * The identifier that specifies where in Shopify’s UI your code is being
   * injected. This will be one of the targets you have included in your
   * extension’s configuration file.
   *
   * @example 'purchase.checkout.block.render'
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

interface Localization {
  /**
   * The currency that the buyer sees for money amounts in the checkout.
   */
  currency: Currency;

  /**
   * The buyer’s time zone.
   */
  timezone: Timezone;

  /**
   * The language the buyer sees in the checkout.
   */
  language: Language;

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
  extensionLanguage: Language;

  /**
   * The country context of the checkout. This value carries over from the
   * context of the cart, where it was used to contextualize the storefront
   * experience. The value is undefined if unknown.
   */
  country: Country | undefined;

  /**
   * The [market](https://shopify.dev/docs/apps/markets) context of the
   * checkout. This value carries over from the context of the cart, where it
   * was used to contextualize the storefront experience. The value is undefined
   * if unknown.
   */
  market: Market | undefined;
}
