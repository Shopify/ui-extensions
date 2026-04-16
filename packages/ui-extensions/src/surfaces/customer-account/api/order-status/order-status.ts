import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import type {
  CurrencyCode,
  Country,
  Timezone,
  SellingPlan,
  Attribute,
  MailingAddress,
  Language,
} from '../shared';
import type {ExtensionTarget} from '../../targets';
import {Extension} from '../shared';

/**
 * Represents a custom metadata field attached to a resource. Metafields let you store additional structured data on Shopify resources like orders and products.
 */
export interface Metafield {
  /**
   * The unique identifier for the metafield within its namespace. Must be between 3 and 30 characters in length (inclusive).
   */
  key: string;

  /**
   * A container for a group of metafields. Namespaces distinguish your app's metafields from those created by other apps. Must be between 2 and 20 characters in length (inclusive).
   */
  namespace: string;

  /**
   * The metafield's value. The data type depends on the `valueType`: integers are returned as numbers, while strings and JSON strings are returned as strings.
   */
  value: string | number;

  /**
   * The metafield’s value type, which determines how the `value` is interpreted:
   *
   * - `'integer'`: A whole number.
   * - `'string'`: A plain text string.
   * - `'json_string'`: A JSON-encoded string.
   */
  valueType: 'integer' | 'string' | 'json_string';
}

/**
 * Represents a custom metadata field attached to a resource, requested through the [`shopify.extension.toml`](/docs/apps/build/customer-accounts/metafields#create-the-metafield-definition) file.
 */
export interface AppMetafield {
  /** The unique identifier for the metafield within its namespace. */
  key: string;

  /** A container that groups related metafields. Must be between 2 and 255 characters in length. */
  namespace: string;

  /** The metafield's value. The data type depends on the `valueType`: booleans, numbers, and strings are returned in their respective types, while JSON strings are returned as strings. */
  value: string | number | boolean;

  /**
   * The metafield’s value type, which determines how the `value` is interpreted:
   *
   * - `'boolean'`: A true or false value.
   * - `'float'`: A decimal number.
   * - `'integer'`: A whole number.
   * - `'json_string'`: A JSON-encoded string.
   * - `'string'`: A plain text string.
   */
  valueType: 'boolean' | 'float' | 'integer' | 'json_string' | 'string';

  /** The metafield's content type as defined in the [metafield definition](/docs/apps/build/custom-data/metafields), such as `single_line_text_field` or `number_integer`. */
  type: string;
}

/**
 * Represents a custom metadata field attached to the cart.
 */
export interface CartMetafield {
  /** The unique identifier for the metafield within its namespace. */
  key: string;

  /** A container that groups related metafields. Must be between 2 and 255 characters in length. */
  namespace: string;

  /** The metafield's value, always returned as a string. Parse the value based on the `type` if you need structured data. */
  value: string;

  /** The [metafield type](/docs/apps/build/custom-data/metafields/definitions/types) that defines the format of the metafield's value. */
  type: string;
}

/**
 * The resource that owns the metafield.
 */
export interface AppMetafieldEntryTarget {
  /**
   * The type of resource that owns the metafield:
   *
   * - `'customer'`: A customer resource.
   * - `'product'`: A product resource.
   * - `'shop'`: The shop resource.
   * - `'variant'`: A product variant resource.
   * - `'company'`: A B2B company resource.
   * - `'companyLocation'`: A B2B company location resource.
   * - `'cart'`: The cart resource.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) when the type is `customer`, `company`, or `companyLocation`.
   */
  type:
    | 'customer'
    | 'product'
    | 'shop'
    | 'variant'
    | 'company'
    | 'companyLocation'
    | 'cart';

  /** The globally-unique identifier of the resource that owns the metafield. */
  id: string;
}

/**
 * A metafield associated with a resource on the order. Each entry contains both the metafield data and a reference to the resource that owns it.
 */
export interface AppMetafieldEntry {
  /**
   * The resource that owns the metafield.
   */
  target: AppMetafieldEntryTarget;

  /** The metafield data, including its key, namespace, value, and type. */
  metafield: AppMetafield;
}

/** The API version string for the extension, such as `'2025-07'`. */
export type Version = string;

export interface Currency {
  /**
   * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code, such as `USD` or `EUR`.
   */
  isoCode: CurrencyCode;
}

export interface Market {
  /**
   * A globally-unique identifier for a Shopify [market](/docs/apps/build/markets).
   */
  id: string;

  /**
   * The human-readable, shop-scoped identifier for the market. This handle is unique within the shop but isn't globally unique.
   */
  handle: string;
}

export interface OrderStatusLocalization {
  /**
   * The currency that the buyer sees for money amounts on the **Order status** page.
   */
  currency: StatefulRemoteSubscribable<Currency>;

  /**
   * The buyer’s time zone, based on their browser settings or IP address.
   */
  timezone: StatefulRemoteSubscribable<Timezone>;

  /**
   * The language the buyer sees on the **Order status** page.
   */
  language: StatefulRemoteSubscribable<Language>;

  /**
   * This is the buyer's language, as supported by the extension.
   * If the buyer's actual language is not supported by the extension,
   * this is the fallback locale used for translations.
   *
   * For example, if the buyer's language is 'fr-CA' but your extension
   * only supports translations for 'fr', then the `isoCode` for this
   * language is 'fr'. If your extension doesn’t provide French
   * translations at all, this value is the default locale for your
   * extension (that is, the one matching your .default.json file).
   */
  extensionLanguage: StatefulRemoteSubscribable<Language>;

  /**
   * The country context of the order. This value carries over from the
   * storefront context and may update if the buyer changes their shipping
   * country. The value is `undefined` if unknown.
   */
  country: StatefulRemoteSubscribable<Country | undefined>;

  /**
   * The [market](/docs/apps/build/markets) context of the order. This value
   * carries over from the storefront context and may update if the buyer changes
   * their shipping country. The value is `undefined` if unknown.
   */
  market: StatefulRemoteSubscribable<Market | undefined>;
}

/**
 * The buyer’s authentication state on the **Order status** page:
 *
 * - `'fully_authenticated'`: The buyer has logged in to their customer account.
 * - `'pre_authenticated'`: The buyer accessed the page through a tokenized link without logging in.
 */
export type AuthenticationState = 'fully_authenticated' | 'pre_authenticated';

export interface OrderStatusApi<Target extends ExtensionTarget> {
  /**
   * Gift cards that have been applied to the order. Each entry includes the amount used and the remaining balance.
   */
  appliedGiftCards: StatefulRemoteSubscribable<AppliedGiftCard[]>;

  /**
   * The metafields requested in the
   * [`shopify.extension.toml`](/docs/apps/build/customer-accounts/metafields#create-the-metafield-definition)
   * file. These metafields are updated when there’s a change in the merchandise items
   * being purchased by the customer.
   *
   * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
   */
  appMetafields: StatefulRemoteSubscribable<AppMetafieldEntry[]>;

  /**
   * Custom key-value pairs that the buyer attached to the order during cart or checkout, commonly used for special instructions or order customization.
   */
  attributes: StatefulRemoteSubscribable<Attribute[] | undefined>;

  /**
   * Information about the buyer who placed the order, including their customer account, email, phone, and B2B company details.
   */
  buyerIdentity?: OrderStatusBuyerIdentity;

  /**
   * The merchant's checkout configuration that was active when the buyer placed the order, including the order type, payment terms, and shipping address settings.
   */
  checkoutSettings: StatefulRemoteSubscribable<CheckoutSettings>;

  /**
   * The cost breakdown for the order, including subtotal, shipping, tax, and total amounts.
   */
  cost: CartCost;

  /**
   * The discount codes that the buyer applied to the order at checkout.
   */
  discountCodes: StatefulRemoteSubscribable<CartDiscountCode[]>;

  /**
   * The order-level discount allocations, including code-based, automatic, and custom discounts. Each allocation includes the discounted amount and the discount source.
   */
  discountAllocations: StatefulRemoteSubscribable<CartDiscountAllocation[]>;

  /**
   * Information about the running extension, including its editor context, extension point, script URL, and localization settings.
   */
  extension: Extension<Target>;

  /**
   * The identifier that specifies where in Shopify’s UI your code is being
   * injected. This will be one of the targets you have included in your
   * extension’s configuration file.
   *
   * @example 'customer-account.order-status.block.render'
   * @see https://shopify.dev/docs/api/checkout-ui-extensions/unstable/extension-targets-overview
   * @see https://shopify.dev/docs/apps/app-extensions/configuration#targets
   *
   * @deprecated Deprecated as of version `2023-07`, use `extension.target` instead.
   */
  extensionPoint: Target;

  /**
   * The line items in the order, including product details, quantities, costs, and any applied discounts.
   */
  lines: StatefulRemoteSubscribable<CartLine[]>;

  /**
   * Details about the buyer's location, language, and currency on the **Order status** page. For utilities to format and translate content based on these details, use the `i18n` object from the [Localization API](/docs/api/customer-account-ui-extensions/{API_VERSION}/target-apis/platform-apis/localization-api) instead.
   */
  localization: OrderStatusLocalization;

  /**
   * The metafields that apply to the current order. These metafields are shared
   * by all extensions running on the **Order status** page and persist for the
   * duration of the buyer's session.
   *
   * Once the order is created, you can query these metafields using the
   * [GraphQL Admin API](/docs/api/admin-graphql).
   */
  metafields: StatefulRemoteSubscribable<Metafield[]>;

  /**
   * A free-form text note that the buyer left for the merchant during cart or checkout, commonly used for special delivery instructions or order requests.
   */
  note: StatefulRemoteSubscribable<string | undefined>;

  /**
   * Information about the placed order, including its ID, display name, confirmation number, and timestamps.
   */
  order: StatefulRemoteSubscribable<Order | undefined>;

  /**
   * The token that represents the checkout session used to create this order.
   *
   * Matches the `token` field in the [WebPixel checkout payload](/docs/api/pixels/customer-events#checkout).
   */
  checkoutToken: StatefulRemoteSubscribable<CheckoutToken | undefined>;

  /**
   * The shipping address that the buyer provided for the order.
   */
  shippingAddress?: StatefulRemoteSubscribable<MailingAddress | undefined>;

  /**
   * The billing address associated with the buyer's payment method.
   */
  billingAddress?: StatefulRemoteSubscribable<MailingAddress | undefined>;

  /** The shop where the order was placed, including its name, ID, storefront URL, and `myshopify.com` domain. */
  shop: Shop;

  /**
   * The API version being used for the extension.
   *
   * @example '2025-07'
   */
  version: Version;

  /**
   * Triggers a login prompt if the buyer is viewing a pre-authenticated **Order status** page. Returns a promise that resolves when the login prompt is dismissed or completed.
   */
  requireLogin: () => Promise<void>;

  /**
   * The buyer's current authentication state on the **Order status** page. The value is either `'fully_authenticated'` (the buyer is logged in) or `'pre_authenticated'` (the buyer is viewing through a tokenized link).
   */
  authenticationState: StatefulRemoteSubscribable<AuthenticationState>;
}

/**
 * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). The `customer` and `purchasingCompany` properties require level 1 access. The `email` and `phone` properties require level 2 access.
 */
export interface OrderStatusBuyerIdentity {
  /**
   * The buyer's customer account. The value is undefined if the buyer isn’t a
   * known customer for this shop or if they haven't logged in yet.
   *
   */
  customer: StatefulRemoteSubscribable<OrderStatusCustomer | undefined>;

  /**
   * The buyer's email address associated with the order. The value is `undefined` if the app doesn't have access to customer data.
   *
   */
  email: StatefulRemoteSubscribable<string | undefined>;

  /**
   * The buyer's phone number associated with the order. The value is `undefined` if the app doesn't have access to customer data.
   *
   */
  phone: StatefulRemoteSubscribable<string | undefined>;

  /**
   * The company and company location that the B2B customer is purchasing on behalf of. The value is `undefined` if the buyer isn't a B2B customer.
   *
   */
  purchasingCompany: StatefulRemoteSubscribable<
    OrderStatusPurchasingCompany | undefined
  >;
}

/**
 * The B2B company and location that the business customer is purchasing on behalf of.
 *
 * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
 */
export interface OrderStatusPurchasingCompany {
  /**
   * The company that the B2B customer belongs to.
   */
  company: OrderStatusCompany;
  /**
   * The company location that the B2B customer is purchasing for.
   */
  location: OrderStatusCompanyLocation;
}

/**
 * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
 */
export interface OrderStatusCompany {
  /**
   * A globally-unique identifier for the company.
   */
  id: string;
  /**
   * The display name of the company.
   */
  name: string;
  /**
   * A custom external identifier for the company, set by the merchant. Useful for syncing with external systems.
   */
  externalId?: string;
}

/**
 * {% include /apps/checkout/privacy-icon.md %} Requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).
 */
export interface OrderStatusCompanyLocation {
  /**
   * A globally-unique identifier for the company location.
   */
  id: string;
  /**
   * The display name of the company location.
   */
  name: string;
  /**
   * A custom external identifier for the company location, set by the merchant. Useful for syncing with external systems.
   */
  externalId?: string;
}

export interface AppliedGiftCard {
  /**
   * The last four characters of the gift card code, used to identify the card without exposing the full code.
   */
  lastCharacters: string;

  /**
   * The amount of the gift card that was applied to this order.
   */
  amountUsed: Money;

  /**
   * The remaining balance on the gift card after the applied amount is deducted.
   */
  balance: Money;
}

export interface Shop {
  /**
   * A globally-unique identifier for the shop.
   * @example 'gid://shopify/Shop/123'
   */
  id: string;
  /**
   * The merchant's store name as configured in the Shopify admin.
   */
  name: string;

  /**
   * The primary storefront URL for the shop. This reflects the merchant's custom domain if one is configured.
   */
  storefrontUrl?: string;
  /**
   * The shop's `myshopify.com` domain. This is a stable identifier that doesn't change when the merchant updates their custom domain.
   */
  myshopifyDomain: string;
}

export interface CartCost {
  /**
   * The subtotal cost of all line items in the order before shipping, taxes, and discounts.
   */
  subtotalAmount: StatefulRemoteSubscribable<Money>;

  /**
   * The total shipping cost for the order, including any shipping discounts. Returns `undefined` if shipping hasn't been calculated.
   */
  totalShippingAmount: StatefulRemoteSubscribable<Money | undefined>;

  /**
   * The total tax amount for the order, including taxes on products and shipping. Returns `undefined` if taxes haven't been calculated.
   */
  totalTaxAmount: StatefulRemoteSubscribable<Money | undefined>;

  /**
   * The total amount the buyer paid for the order, including all line items, shipping, taxes, and discounts.
   */
  totalAmount: StatefulRemoteSubscribable<Money>;
}

export interface CartLine {
  /**
   * A unique identifier for the cart line. This ID isn't guaranteed to be stable across operations.
   * @example 'gid://shopify/CartLine/123'
   */
  id: string;

  /**
   * The product variant being purchased in this line item.
   */
  merchandise: Merchandise;

  /**
   * The quantity of the merchandise being purchased.
   */
  quantity: number;

  /**
   * The cost breakdown for this line item, including the total amount after discounts.
   */
  cost: CartLineCost;

  /**
   * Custom key-value pairs attached to this line item, such as engraving text or gift messages.
   */
  attributes: Attribute[];

  /**
   * The discounts allocated to this line item, including code-based, automatic, and custom discounts.
   */
  discountAllocations: CartDiscountAllocation[];

  /**
   * The individual components of a [bundle](/docs/apps/build/product-merchandising/bundles) line item. Returns an empty array if the line item isn't a bundle.
   */
  lineComponents: CartLineComponentType[];
}

type CartLineComponentType = CartBundleLineComponent;

export interface CartBundleLineComponent {
  /** Always `'bundle'` for bundle line components. */
  type: 'bundle';

  /**
   * A unique identifier for the bundle line component.
   *
   * This ID isn't stable and may change if line items are modified.
   *
   * @example 'gid://shopify/CartLineComponent/123'
   */
  id: string;

  /**
   * The product variant included in this bundle component.
   */
  merchandise: Merchandise;

  /**
   * The quantity of this product variant within the bundle.
   */
  quantity: number;

  /**
   * The cost breakdown for this bundle component.
   */
  cost: CartLineCost;

  /**
   * Custom key-value pairs attached to this bundle component.
   *
   * @example [{key: 'engraving', value: 'hello world'}]
   */
  attributes: Attribute[];
}

export interface CartLineCost {
  /**
   * The total amount for the line item after all discounts have been applied.
   */
  totalAmount: Money;
}

export interface Money {
  /**
   * The decimal money amount, such as `29.99`.
   */
  amount: number;
  /**
   * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code.
   * @example 'CAD' for Canadian dollar
   */
  currencyCode: CurrencyCode;
}

export type Merchandise = ProductVariant;

export interface BaseMerchandise {
  /**
   * A globally-unique identifier for the merchandise item.
   */
  id: string;
}

export interface ProductVariant extends BaseMerchandise {
  /** Always `'variant'` for product variant merchandise. */
  type: 'variant';

  /**
   * A globally-unique identifier for the product variant.
   * @example 'gid://shopify/ProductVariant/123'
   */
  id: string;

  /**
   * The product variant’s title.
   */
  title: string;

  /**
   * The product variant's stock keeping unit (SKU), used for inventory tracking.
   */
  sku?: string;

  /**
   * A secondary title for the product variant, typically showing selected option values.
   */
  subtitle?: string;

  /**
   * The image associated with this product variant. Falls back to the product's featured image if no variant-specific image is available.
   */
  image?: ImageDetails;

  /**
   * The product options selected for this variant, such as size and color.
   */
  selectedOptions: SelectedOption[];

  /**
   * The parent product that this variant belongs to.
   */
  product: Product;

  /**
   * Whether this product variant requires physical shipping.
   */
  requiresShipping: boolean;

  /**
   * The selling plan associated with this line item, such as a subscription or pre-order plan.
   */
  sellingPlan?: SellingPlan;
}

export interface Product {
  /**
   * A globally-unique identifier for the product.
   */
  id: string;

  /**
   * The product’s vendor name.
   */
  vendor: string;

  /**
   * A product classification used for filtering and organization, set by the merchant in the Shopify admin.
   */
  productType: string;
}

export interface ImageDetails {
  /**
   * The fully-qualified URL of the image.
   */
  url: string;

  /**
   * The alternative text for the image, used for accessibility and displayed when the image can't be loaded.
   */
  altText?: string;
}

export interface SelectedOption {
  /**
   * The name of the product option, such as "Size" or "Color".
   */
  name: string;

  /**
   * The selected value for the option, such as "Large" or "Blue".
   */
  value: string;
}

/**
 * A payment option presented to the buyer.
 */
export interface PaymentOption {
  /**
   * The type of the payment option.
   *
   * Shops can be configured to support many different payment options. Some options are only available to buyers in specific regions.
   *
   * | Type  | Description  |
   * |---|---|
   * | `creditCard`  |  A vaulted or manually entered credit card.  |
   * | `deferred`  |  A [deferred payment](https://help.shopify.com/en/manual/orders/deferred-payments), such as invoicing the buyer and collecting payment at a later time.  |
   * | `local`  |  A [local payment option](https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods) specific to the current region or market  |
   * | `manualPayment`  |  A manual payment option such as an in-person retail transaction.  |
   * | `offsite`  |  A payment processed outside of Shopify's checkout, excluding integrated wallets.  |
   * | `other`  |  Another type of payment not defined here.  |
   * | `paymentOnDelivery`  |  A payment that will be collected on delivery.  |
   * | `redeemable`  |  A redeemable payment option such as a gift card or store credit.  |
   * | `wallet`  |  An integrated wallet such as PayPal, Google Pay, Apple Pay, etc.  |
   * | `customOnsite` | A custom payment option that is processed through a checkout extension with a payments app. |
   */
  type:
    | 'creditCard'
    | 'deferred'
    | 'local'
    | 'manualPayment'
    | 'offsite'
    | 'other'
    | 'paymentOnDelivery'
    | 'redeemable'
    | 'wallet'
    | 'customOnsite';

  /**
   * The unique handle for the payment option.
   *
   * This isn’t a globally unique identifier. It may be an identifier specific to the given checkout session or the current shop.
   */
  handle: string;
}

/**
 * A payment option selected by the buyer.
 */
export interface SelectedPaymentOption {
  /**
   * The unique handle referencing `PaymentOption.handle`.
   *
   * See [availablePaymentOptions](/docs/api/customer-account-ui-extensions/{API_VERSION}/target-apis/order-apis/payments-api).
   */
  handle: string;
}

export interface CartDiscountCode {
  /**
   * The discount code string entered by the buyer at checkout.
   */
  code: string;
}
/**
 * A discount allocation applied to the order or a line item. There are three types:
 *
 * - `CartCodeDiscountAllocation`: A discount applied via a code entered by the buyer.
 * - `CartAutomaticDiscountAllocation`: An automatic discount applied by Shopify based on merchant-configured rules.
 * - `CartCustomDiscountAllocation`: A custom discount applied by a Shopify Script or discount function.
 */
export type CartDiscountAllocation =
  | CartCodeDiscountAllocation
  | CartAutomaticDiscountAllocation
  | CartCustomDiscountAllocation;

export interface CartDiscountAllocationBase {
  /**
   * The monetary amount deducted from the order by this discount allocation.
   */
  discountedAmount: Money;
}

export interface CartCodeDiscountAllocation extends CartDiscountAllocationBase {
  /**
   * The discount code that the buyer entered at checkout.
   */
  code: string;

  /**
   * The type of discount allocation. Always `'code'` for code-based discounts.
   */
  type: 'code';
}

export interface CartAutomaticDiscountAllocation
  extends CartDiscountAllocationBase {
  /**
   * The merchant-defined title of the automatic discount, such as "Buy 2 Get 1 Free".
   */
  title: string;

  /**
   * The type of discount allocation. Always `'automatic'` for automatic discounts.
   */
  type: 'automatic';
}

export interface CartCustomDiscountAllocation
  extends CartDiscountAllocationBase {
  /**
   * The title of the custom discount applied by a Shopify Script or discount function.
   */
  title: string;

  /**
   * The type of discount allocation. Always `'custom'` for custom discounts.
   */
  type: 'custom';
}

/**
 * The customer associated with the order.
 *
 * {% include /apps/checkout/privacy-icon.md %} Requires access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). The `id`, `image`, `acceptsMarketing`, and `storeCreditAccounts` properties require level 1 access. The `email`, `phone`, `fullName`, `firstName`, and `lastName` properties require level 2 access.
 */
export interface OrderStatusCustomer {
  /**
   * A globally-unique identifier for the customer.
   *
   * @example 'gid://shopify/Customer/123'
   */
  id: string;
  /**
   * The customer's email address.
   */
  email?: string;
  /**
   * The customer's phone number.
   */
  phone?: string;
  /**
   * The customer's full name, combining first and last name.
   */
  fullName?: string;
  /**
   * The customer's first name.
   */
  firstName?: string;
  /**
   * The customer's last name.
   */
  lastName?: string;
  /**
   * The customer's profile image, such as a Gravatar.
   */
  image: ImageDetails;
  /**
   * Whether the customer has opted in to receive marketing communications from the merchant.
   */
  acceptsMarketing: boolean;
  /**
   * The store credit accounts owned by the customer that can be applied during checkout.
   *
   * @private
   */
  storeCreditAccounts: StoreCreditAccount[];
}

/** A string token that uniquely identifies the checkout session used to create this order. */
export type CheckoutToken = string;

/**
 * The merchant's checkout configuration that was active when the buyer placed the order.
 */
export interface CheckoutSettings {
  /**
   * The type of order created when the buyer completes checkout:
   *
   * - `'DRAFT_ORDER'`: A draft order that requires merchant approval before processing.
   * - `'ORDER'`: A standard order that’s processed immediately.
   */
  orderSubmission: 'DRAFT_ORDER' | 'ORDER';
  /**
   * The merchant-configured payment terms for the order, such as net 30 or net 60 terms. Only present for B2B orders with deferred payment.
   */
  paymentTermsTemplate?: PaymentTermsTemplate;
  /**
   * Configuration for the shipping address behavior, including whether the buyer can edit it.
   */
  shippingAddress: ShippingAddressSettings;
}

/**
 * Configuration for the shipping address on the checkout.
 */
export interface ShippingAddressSettings {
  /**
   * Whether the buyer was allowed to edit the shipping address during checkout.
   */
  isEditable: boolean;
}

/**
 * A payment terms template that defines when payment is due for the order, commonly used in B2B transactions.
 */
export interface PaymentTermsTemplate {
  /**
   * A globally-unique identifier for the payment terms template.
   * @example 'gid://shopify/PaymentTermsTemplate/1'
   */
  id: string;
  /**
   * The name of the payment terms translated to the buyer's current language.
   */
  name: string;
  /**
   * The due date for net payment terms as an ISO 8601 formatted string (`YYYY-MM-DDTHH:mm:ss.sssZ`).
   */
  dueDate?: string;
  /**
   * The number of days between the order date and the payment due date for net payment terms.
   */
  dueInDays?: number;
}

/**
 * A store credit account that the customer can use to pay for orders.
 */
export interface StoreCreditAccount {
  /**
   * A globally-unique identifier for the store credit account.
   * @example 'gid://shopify/StoreCreditAccount/1'
   */
  id: string;
  /**
   * The current balance available in the store credit account.
   */
  balance: Money;
}

/**
 * Represents the delivery information and options available for one or
 * more cart lines.
 */
export interface DeliveryGroup {
  /**
   * The cart line references associated to the delivery group.
   */
  targetedCartLines: CartLineReference[];

  /**
   * The delivery options available for the delivery group.
   */
  deliveryOptions: DeliveryOption[];

  /**
   * The selected delivery option for the delivery group.
   */
  selectedDeliveryOption?: DeliveryOptionReference;

  /**
   * The type of the delivery group.
   */
  groupType: DeliveryGroupType;

  /**
   * Whether delivery is required for the delivery group.
   */
  isDeliveryRequired: boolean;
}

/**
 * The possible types of a delivery group:
 *
 * - `'oneTimePurchase'`: A one-time purchase delivery.
 * - `'subscription'`: A recurring subscription delivery.
 */
export type DeliveryGroupType = 'oneTimePurchase' | 'subscription';

/**
 * Represents a reference to a cart line.
 */
export interface CartLineReference {
  /**
   * The unique identifier of the referenced cart line.
   */
  id: string;
}

/**
 * Represents a reference to a delivery option.
 */
export interface DeliveryOptionReference {
  /**
   * The unique identifier of the referenced delivery option.
   */
  handle: string;
}

/**
 * Represents a base interface for a single delivery option.
 */
export interface DeliveryOption {
  /**
   * The unique identifier of the delivery option.
   */
  handle: string;

  /**
   * The title of the delivery option.
   */
  title?: string;

  /**
   * The description of the delivery option.
   */
  description?: string;
}

/**
 * Represents a delivery option that is a shipping option.
 */
export interface ShippingOption extends DeliveryOption {
  /**
   * The type of this delivery option.
   */
  type: 'shipping' | 'local';

  /**
   * Information about the carrier.
   */
  carrier: ShippingOptionCarrier;

  /**
   * The cost of the delivery.
   */
  cost: Money;

  /**
   * The cost of the delivery including discounts.
   */
  costAfterDiscounts: Money;

  /**
   * Information about the estimated delivery time.
   */
  deliveryEstimate: DeliveryEstimate;
}

export interface DeliveryEstimate {
  /**
   * The estimated time in transit for the delivery in seconds.
   */
  timeInTransit?: NumberRange;
}

export interface ShippingOptionCarrier {
  /**
   * The name of the carrier.
   */
  name?: string;
}

export interface PickupPointOption extends DeliveryOption {
  /**
   * The type of this delivery option.
   */
  type: 'pickupPoint';

  /**
   * Information about the carrier that ships to the pickup point.
   */
  carrier: PickupPointCarrier;

  /**
   * The cost to ship to this pickup point.
   */
  cost: Money;

  /**
   * The cost to ship to this pickup point including discounts.
   */
  costAfterDiscounts: Money;

  /**
   * The location details of the pickup point.
   */
  location: PickupPointLocation;
}

export interface PickupLocationOption extends DeliveryOption {
  /**
   * The type of this delivery option.
   */
  type: 'pickup';

  /**
   * The location details of the pickup location.
   */
  location: PickupLocation;
}

interface PickupLocation {
  /**
   * The name of the pickup location.
   */
  name?: string;

  /**
   * The address of the pickup location.
   */
  address: MailingAddress;
}

interface PickupPointLocation {
  /**
   * The name of the pickup point.
   */
  name?: string;

  /**
   * The unique identifier of the pickup point.
   */
  handle: string;

  /**
   * The address of the pickup point.
   */
  address: MailingAddress;
}

interface PickupPointCarrier {
  /**
   * The code identifying the carrier.
   */
  code?: string;

  /**
   * The name of the carrier.
   */
  name?: string;
}

export interface NumberRange {
  /**
   * The lower bound of the number range.
   */
  lower?: number;

  /**
   * The upper bound of the number range.
   */
  upper?: number;
}

/**
 * Details about the placed order, including its identifier, display name, and processing timestamps.
 */
export interface Order {
  /**
   * A globally-unique identifier for the order.
   * @example 'gid://shopify/Order/1'
   */
  id: string;
  /**
   * The merchant-facing order number that appears in the Shopify admin and on the order confirmation page.
   * @example '#1000'
   */
  name: string;
  /**
   * The date and time when the order was cancelled, in ISO 8601 format. Returns `undefined` if the order hasn't been cancelled.
   */
  cancelledAt?: string;
  /**
   * The date and time when the order was processed, in ISO 8601 format. Processing happens after checkout completes and indicates the order is available in the Shopify admin.
   */
  processedAt?: string;
  /**
   * A randomly generated alpha-numeric confirmation code for the order. Always present for orders created in 2024 and later; may be absent for older orders.
   */
  confirmationNumber?: string;
}
