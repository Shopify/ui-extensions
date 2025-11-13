import {CountryCode} from './country-code';

/**
 * Represents the shopping cart state, including line items, pricing, customer information, and applied discounts. Provides comprehensive access to all cart data and operations.
 */
export interface Cart {
  /**
   * Whether the cart is currently editable. An `undefined` value is treated as `true` for backward compatibility. When `false`, cart modification operations aren't allowed.
   */
  editable?: boolean;
  /**
   * The subtotal amount of the cart before taxes and discounts, formatted as a currency string.
   */
  subtotal: string;
  /**
   * The total tax amount for the cart, formatted as a currency string.
   */
  taxTotal: string;
  /**
   * The final total amount including all items, taxes, and discounts, formatted as a currency string.
   */
  grandTotal: string;
  /**
   * The cart note to set during bulk update. Replaces existing note or sets new note if none exists. Set to `undefined` to remove current note.
   */
  note?: string;
  /**
   * The cart-level discount to apply during bulk update. Replaces existing cart discount. Set to `undefined` to remove current discount.
   */
  cartDiscount?: Discount;
  /**
   * An array of cart-level discounts to apply during bulk update. Replaces all existing cart discounts with the provided array.
   */
  cartDiscounts: Discount[];
  /**
   * The customer to associate with the cart during bulk update. Replaces existing customer or converts guest cart to customer cart.
   */
  customer?: Customer;
  /**
   * An array of line items to set during bulk update. Completely replaces existing cart contents—removes all current items and adds the provided ones.
   */
  lineItems: LineItem[];
  /**
   * The custom key-value properties attached to this line item. Empty object if no properties are set. Commonly used for metadata, customization options, or integration data.
   */
  properties: Record<string, string>;
}

/**
 * Specifies the parameters for updating cart information. Includes options for modifying customer data, notes, references, and other cart-level metadata.
 */
export interface CartUpdateInput {
  /**
   * The cart note to set during bulk update. Replaces existing note or sets new note if none exists. Set to `undefined` to remove current note.
   */
  note?: string;
  /**
   * The cart-level discount to apply during bulk update. Replaces existing cart discount. Set to `undefined` to remove current discount.
   */
  cartDiscount?: Discount;
  /**
   * An array of cart-level discounts to apply during bulk update. Replaces all existing cart discounts with the provided array.
   */
  cartDiscounts: Discount[];
  /**
   * The customer to associate with the cart during bulk update. Replaces existing customer or converts guest cart to customer cart.
   */
  customer?: Customer;
  /**
   * An array of line items to set during bulk update. Completely replaces existing cart contents—removes all current items and adds the provided ones.
   */
  lineItems: LineItem[];
  /**
   * The custom key-value properties attached to this line item. Empty object if no properties are set. Commonly used for metadata, customization options, or integration data.
   */
  properties: Record<string, string>;
}

/**
 * Represents basic customer identification information. Contains the customer ID for linking to detailed customer data and enabling customer-specific features.
 */
export interface Customer {
  /**
   * The unique numeric identifier for the selling plan in Shopify's system. This ID is consistent across all Shopify systems and links to the selling plan configuration in the merchant's catalog. The ID can be used to fetch full selling plan details using GraphQL queries or match against available selling plans for a product. Commonly used for selling plan operations (adding/removing selling plans from line items), matching user selections to plan configurations, tracking which plan was selected, or integrating with subscription management systems.
   */
  id: number;
}

/**
 * Represents an individual item in the shopping cart. Contains product information, pricing, quantity, discounts, and customization details for a single cart entry.
 */
export interface LineItem {
  /**
   * The unique [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) string identifier for this specific line item within the cart. This identifier is generated when the line item is added to the cart and remains constant for that line item throughout its lifecycle. The UUID distinguishes this line item from other line items in the cart, even if they represent the same product or variant. This is the primary key for line item operations—all Cart API methods that target specific line items require this UUID. Commonly used for updating line item properties, applying line item discounts, removing items from cart, setting selling plans, or tracking individual line items through the checkout process.
   */
  uuid: string;
  /**
   * The unit price for a single unit of this custom sale item as a string value. This represents the price per item in the store's currency (for example, `"25.00"` for $25.00, `"99.99"` for $99.99). String format ensures precision for financial calculations. The total line item cost is calculated as this price multiplied by the quantity. Commonly used for pricing the custom sale, calculating line totals, displaying the charge to customers, or generating receipts with itemized pricing.
   */
  price?: number;
  /**
   * The number of units of this custom sale item to add to the cart. Must be a positive integer (minimum 1) representing how many of this custom item the customer is purchasing. Since custom sales don't have inventory tracking, any quantity can be entered without stock validation. Commonly used for specifying how many of the custom item to charge for, calculating line totals (price × quantity), or displaying quantity on receipts and invoices.
   */
  quantity: number;
  /**
   * The customer-facing display name for this custom sale item. This is the text that will appear on receipts, in the cart, and on order confirmations to describe what was sold. Should be descriptive and clear (for example, "Repair Service", "Custom Engraving", "Consultation Fee", "Special Order Item"). This is required to create a custom sale. Commonly used for cart and receipt displays, order identification, or describing the custom item in customer communications.
   */
  title?: string;
  /**
   * The unique numeric identifier for the product variant this bundle component represents. Links to a specific variant in the Shopify catalog. Returns `undefined` for custom components or non-catalog items within the bundle. When present, this ID can be used to fetch full variant details or verify component inventory. Commonly used for component inventory management, linking bundle components to catalog records, or loading component variant details.
   */
  variantId?: number;
  /**
   * The unique numeric identifier for the product this bundle component represents. Links to the parent product in the Shopify catalog. Returns `undefined` for custom components or non-catalog items within the bundle. When present, this ID can be used to fetch full product information about the component. Commonly used for component product lookups, grouping bundle components, or linking to product records.
   */
  productId?: number;
  /**
   * An array of all discounts applied specifically to this line item (not cart-level discounts). Each discount object contains the amount, type, and description. The array is empty when no line item-specific discounts are applied. Multiple discounts can apply to a single line item when discount stacking is enabled. The sum of discount amounts reduces the line item's contribution to the cart total. Commonly used for displaying line item savings ("You save $5.00"), showing discount breakdowns in itemized views, calculating effective prices after discounts, or implementing discount-aware business logic.
   */
  discounts: Discount[];
  /**
   * An array of discount allocation objects providing detailed breakdown of how each discount amount is calculated and distributed across this line item. This includes information about discount priority, combination rules, and exact allocated amounts. Returns `undefined` when allocation tracking isn't available or when no discounts are applied. Discount allocations provide enhanced visibility into complex discount scenarios where multiple discounts interact, combine, or have caps. Commonly used for advanced discount reporting, audit trails showing how final discounts were calculated, compliance reporting, or implementing discount allocation displays.
   */
  discountAllocations?: Discount[];
  /**
   * Whether this custom sale item is subject to tax calculations. When `true`, taxes are calculated and applied to this item based on location tax rules and settings. When `false`, this item is tax-exempt and no tax is charged. Tax exemption might apply for services, specific product categories, or non-taxable items depending on jurisdiction. Commonly used for determining whether to calculate taxes on this custom sale, compliance with tax regulations, displaying tax-inclusive vs tax-exclusive pricing, or generating accurate tax reports.
   */
  taxable: boolean;
  /**
   * An array of tax lines applied specifically to this bundle component, showing the tax breakdown by jurisdiction and type. Each tax line has its own rate and calculated amount. The tax is calculated based on this component's price, quantity, and taxability. Empty array when the component is tax-exempt. Bundle component tax lines contribute to the overall line item tax total. Commonly used for detailed bundle tax reporting, showing per-component tax in itemized displays, or compliance documentation.
   */
  taxLines: any[];
  /**
   * The Stock Keeping Unit (SKU) identifier for this line item as configured in the product catalog. SKUs are merchant-defined alphanumeric codes used for inventory tracking, fulfillment, and product identification (for example, "TSHIRT-BLU-LG", "12345-A"). Returns `undefined` when no SKU is configured for the product variant, which is common for products without inventory tracking or custom sales. The SKU is unique within the merchant's catalog and is often used with barcode scanners or inventory management systems. Commonly used for inventory tracking, displaying product codes on receipts, integrating with warehouse management systems, or matching products with external SKU-based systems.
   */
  sku?: string;
  /**
   * The vendor or brand name for this line item as configured in the product catalog (for example, "Nike", "Acme Corp", "House Brand"). This indicates who manufactures or supplies the product. Returns `undefined` when no vendor is set for the product, which is common for products where vendor tracking isn't used. Vendors are merchant-defined and not standardized. Commonly used for vendor-specific displays in cart or receipts, filtering or grouping products by vendor, implementing vendor-based business logic (special handling for certain suppliers), or reporting sales by vendor.
   */
  vendor?: string;
  /**
   * The custom key-value properties attached to this line item. Empty object if no properties are set. Commonly used for metadata, customization options, or integration data.
   */
  properties: {[key: string]: string};
  /**
   * Whether this line item is a gift card product. When `true`, indicates this is a Shopify gift card (digital or physical) which has special handling—gift cards don't affect inventory, have different tax treatment in some jurisdictions, and generate gift card codes upon purchase. When `false`, this is a regular product, custom sale, or other non-gift-card item. Gift card line items may have restrictions on discounts or combinations with other line items. Commonly used for implementing gift card-specific UI, applying gift card business rules, excluding gift cards from certain promotions, or separating gift card sales in reporting.
   */
  isGiftCard: boolean;
  /**
   * The unique numeric identifier for the staff member attributed to this specific line item for sales tracking and commission purposes. This represents which staff member should receive credit for selling this item, which may differ from the staff member who completed the overall transaction. Returns `undefined` when no staff attribution is set, which can occur for online orders or when staff attribution isn't used. Staff attribution is set using the Cart API's `setAttributedStaffToLineItem` method. Commonly used for commission calculations, sales performance tracking by staff member, reporting individual staff contributions to sales, or implementing staff-specific business logic (quotas, incentives).
   */
  attributedUserId?: number;
  /**
   * An array of individual component items that make up a [product bundle](/docs/apps/build/product-merchandising/bundles) when this line item represents a bundled product. Each component is a separate product included in the bundle with its own quantity, pricing, and tax calculation. For example, a "Home Office Bundle" line item might have components for a desk, chair, and lamp. The bundle itself is the line item, and the components array details what's included in that bundle. Returns `undefined` for non-bundle line items (regular products, custom sales, gift cards). Bundle components affect inventory separately—each component's inventory is decremented according to its quantity multiplied by the parent line item's quantity. Commonly used for displaying bundle contents to customers ("This bundle includes:"), calculating bundle-specific taxes (each component may have different tax treatment), showing itemized bundle pricing, or implementing bundle fulfillment logic where components ship separately.
   */
  components?: LineItemComponent[];
}

/**
 * Represents an individual component item within a [product bundle](/docs/apps/build/product-merchandising/bundles) line item. Each component is a separate product that is included as part of the bundle, with its own quantity and pricing that contributes to the overall bundle line item.
 */
export interface LineItemComponent {
  /**
   * The customer-facing display name for this custom sale item. This is the text that will appear on receipts, in the cart, and on order confirmations to describe what was sold. Should be descriptive and clear (for example, "Repair Service", "Custom Engraving", "Consultation Fee", "Special Order Item"). This is required to create a custom sale. Commonly used for cart and receipt displays, order identification, or describing the custom item in customer communications.
   */
  title?: string;
  /**
   * The number of units of this custom sale item to add to the cart. Must be a positive integer (minimum 1) representing how many of this custom item the customer is purchasing. Since custom sales don't have inventory tracking, any quantity can be entered without stock validation. Commonly used for specifying how many of the custom item to charge for, calculating line totals (price × quantity), or displaying quantity on receipts and invoices.
   */
  quantity: number;
  /**
   * The unit price for a single unit of this custom sale item as a string value. This represents the price per item in the store's currency (for example, `"25.00"` for $25.00, `"99.99"` for $99.99). String format ensures precision for financial calculations. The total line item cost is calculated as this price multiplied by the quantity. Commonly used for pricing the custom sale, calculating line totals, displaying the charge to customers, or generating receipts with itemized pricing.
   */
  price?: number;
  /**
   * Whether this custom sale item is subject to tax calculations. When `true`, taxes are calculated and applied to this item based on location tax rules and settings. When `false`, this item is tax-exempt and no tax is charged. Tax exemption might apply for services, specific product categories, or non-taxable items depending on jurisdiction. Commonly used for determining whether to calculate taxes on this custom sale, compliance with tax regulations, displaying tax-inclusive vs tax-exclusive pricing, or generating accurate tax reports.
   */
  taxable: boolean;
  /**
   * An array of tax lines applied specifically to this bundle component, showing the tax breakdown by jurisdiction and type. Each tax line has its own rate and calculated amount. The tax is calculated based on this component's price, quantity, and taxability. Empty array when the component is tax-exempt. Bundle component tax lines contribute to the overall line item tax total. Commonly used for detailed bundle tax reporting, showing per-component tax in itemized displays, or compliance documentation.
   */
  taxLines: any[];
  /**
   * The unique numeric identifier for the product variant this bundle component represents. Links to a specific variant in the Shopify catalog. Returns `undefined` for custom components or non-catalog items within the bundle. When present, this ID can be used to fetch full variant details or verify component inventory. Commonly used for component inventory management, linking bundle components to catalog records, or loading component variant details.
   */
  variantId?: number;
  /**
   * The unique numeric identifier for the product this bundle component represents. Links to the parent product in the Shopify catalog. Returns `undefined` for custom components or non-catalog items within the bundle. When present, this ID can be used to fetch full product information about the component. Commonly used for component product lookups, grouping bundle components, or linking to product records.
   */
  productId?: number;
}

/**
 * Represents a discount applied to a cart or transaction, including amount and description.
 */
export interface Discount {
  /**
   * The discount value to apply. For `'Percentage'` type, this represents the percentage value (For example, "10" for 10% off). For `'FixedAmount'` type, this represents the fixed monetary amount to deduct from the line item price. Commonly used for discount calculations and displaying the discount value to merchants.
   */
  amount: number;
  /**
   * The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the discount amount (for example, `"USD"`, `"EUR"`, `"GBP"`). This indicates which currency the `amount` is expressed in. Returns `undefined` when currency information isn't available or the discount is percentage-based.
   */
  currency?: string;
  /**
   * A human-readable description of the discount shown to merchants and customers. This typically includes the discount name, promotion details, or discount code (for example, "SUMMER2024", "10% off entire order", "Buy 2 Get 1 Free"). Returns `undefined` when no description is provided.
   */
  discountDescription?: string;
  /**
   * The [discount type](https://help.api.com/en/manual/discounts/discount-types) applied to this line item. Can be either `'Percentage'` for percentage-based discounts or `'FixedAmount'` for fixed monetary amount discounts. This determines how the discount amount is calculated and displayed.
   */
  type?: string;
}

/**
 * Specifies the parameters for adding custom properties to line items. Properties are key-value pairs used for storing metadata, tracking information, or integration data.
 */
export interface SetLineItemPropertiesInput {
  /**
   * The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) of the target line item to which the selling plan should be applied. This must match the `uuid` of an existing line item in the current cart. If the UUID doesn't exist in the cart, the operation will fail. The line item's product must support selling plans—attempting to add a selling plan to a line item whose product doesn't have selling plan groups will result in an error. Commonly used to identify which cart item is being configured with a subscription plan.
   */
  lineItemUuid: string;
  /**
   * The custom key-value properties attached to this line item. Empty object if no properties are set. Commonly used for metadata, customization options, or integration data.
   */
  properties: Record<string, string>;
}

/**
 * Specifies the parameters for applying discounts to individual line items. Includes the discount type, value, and reason for audit and reporting purposes.
 */
export interface SetLineItemDiscountInput {
  /**
   * The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) of the target line item to which the selling plan should be applied. This must match the `uuid` of an existing line item in the current cart. If the UUID doesn't exist in the cart, the operation will fail. The line item's product must support selling plans—attempting to add a selling plan to a line item whose product doesn't have selling plan groups will result in an error. Commonly used to identify which cart item is being configured with a subscription plan.
   */
  lineItemUuid: string;
  /**
   * The discount details to apply to the line item. Contains title, type (`'Percentage'` or `'FixedAmount'`), and amount value.
   */
  lineItemDiscount: LineItemDiscount;
}

/**
 * Represents a discount applied to an individual line item in the cart.
 */
export interface LineItemDiscount {
  /**
   * The customer-facing display name for this custom sale item. This is the text that will appear on receipts, in the cart, and on order confirmations to describe what was sold. Should be descriptive and clear (for example, "Repair Service", "Custom Engraving", "Consultation Fee", "Special Order Item"). This is required to create a custom sale. Commonly used for cart and receipt displays, order identification, or describing the custom item in customer communications.
   */
  title: string;
  /**
   * The [discount type](https://help.api.com/en/manual/discounts/discount-types) applied to this line item. Can be either `'Percentage'` for percentage-based discounts or `'FixedAmount'` for fixed monetary amount discounts. This determines how the discount amount is calculated and displayed.
   */
  type: 'Percentage' | 'FixedAmount';
  /**
   * The discount value to apply. For `'Percentage'` type, this represents the percentage value (For example, "10" for 10% off). For `'FixedAmount'` type, this represents the fixed monetary amount to deduct from the line item price. Commonly used for discount calculations and displaying the discount value to merchants.
   */
  amount: string;
}

/**
 * Represents a custom sale item that isn't linked to a product in the merchant's catalog. Custom sales allow merchants to add arbitrary items to the cart with manually entered details—useful for services, custom orders, one-off items, or products not in the catalog.
 */
export interface CustomSale {
  /**
   * The number of units of this custom sale item to add to the cart. Must be a positive integer (minimum 1) representing how many of this custom item the customer is purchasing. Since custom sales don't have inventory tracking, any quantity can be entered without stock validation. Commonly used for specifying how many of the custom item to charge for, calculating line totals (price × quantity), or displaying quantity on receipts and invoices.
   */
  quantity: number;
  /**
   * The customer-facing display name for this custom sale item. This is the text that will appear on receipts, in the cart, and on order confirmations to describe what was sold. Should be descriptive and clear (for example, "Repair Service", "Custom Engraving", "Consultation Fee", "Special Order Item"). This is required to create a custom sale. Commonly used for cart and receipt displays, order identification, or describing the custom item in customer communications.
   */
  title: string;
  /**
   * The unit price for a single unit of this custom sale item as a string value. This represents the price per item in the store's currency (for example, `"25.00"` for $25.00, `"99.99"` for $99.99). String format ensures precision for financial calculations. The total line item cost is calculated as this price multiplied by the quantity. Commonly used for pricing the custom sale, calculating line totals, displaying the charge to customers, or generating receipts with itemized pricing.
   */
  price: string;
  /**
   * Whether this custom sale item is subject to tax calculations. When `true`, taxes are calculated and applied to this item based on location tax rules and settings. When `false`, this item is tax-exempt and no tax is charged. Tax exemption might apply for services, specific product categories, or non-taxable items depending on jurisdiction. Commonly used for determining whether to calculate taxes on this custom sale, compliance with tax regulations, displaying tax-inclusive vs tax-exclusive pricing, or generating accurate tax reports.
   */
  taxable: boolean;
}

/**
 * Represents physical address information for customer shipping and billing. Contains standard address fields including street, city, region, postal code, and country data.
 */
export interface Address {
  /**
   * The primary street address line containing the street number and name (for example, "123 Main Street", "456 Oak Avenue"). This is the first line of the mailing address and is typically required for shipping and billing operations. Returns `undefined` when not provided or not applicable. Commonly used for displaying addresses, calculating shipping rates based on location, validating address completeness, or sending to shipping carriers for label generation.
   */
  address1?: string;
  /**
   * The secondary address line for additional location details like apartment number, suite, unit, floor, or building information (for example, "Apt 4B", "Suite 200", "Floor 3"). This field is optional and supplements the primary address line. Returns `undefined` when not provided. Commonly used for complete address display, ensuring deliveries reach the correct destination in multi-unit buildings, or providing detailed shipping instructions.
   */
  address2?: string;
  /**
   * The city or locality name for the address (for example, "New York", "Toronto", "London"). Required for most shipping and billing operations as it's needed for calculating shipping zones, determining tax jurisdictions, and routing deliveries. Returns `undefined` when not provided. Commonly used for address display, shipping rate calculations based on destination city, tax determination, or filtering addresses by location.
   */
  city?: string;
  /**
   * The company or business name associated with the address (for example, "Acme Corporation", "Smith & Co."). This field is optional and typically used for B2B transactions, business deliveries, or when the shipping/billing address is a commercial location rather than residential. Returns `undefined` for individual/residential addresses. Commonly used for business customer identification, commercial shipping labels, B2B order processing, or company-based address organization.
   */
  company?: string;
  /**
   * The first name (given name) of the person associated with this address (for example, "John", "Maria"). Commonly used for personalizing shipping labels, customer communications, and ensuring deliveries reach the correct recipient. Returns `undefined` when not provided. Typically combined with `lastName` for full name display.
   */
  firstName?: string;
  /**
   * The last name (family name/surname) of the person associated with this address (for example, "Smith", "Garcia"). Commonly used for complete customer identification, shipping labels, and formal address displays. Returns `undefined` when not provided. Typically combined with `firstName` for full name display (for example, "John Smith").
   */
  lastName?: string;
  /**
   * The contact phone number for this address (for example, "+1-555-123-4567", "(555) 123-4567"). Phone numbers enable carriers to contact recipients for delivery coordination, provide delivery notifications using SMS, or reach customers for address clarification. Format varies by region and may include country codes, area codes, and extensions. Returns `undefined` when not provided. Commonly used for delivery notifications, customer contact during shipping issues, or SMS updates about order status.
   */
  phone?: string;
  /**
   * The province, state, or region name for the address (for example, "California", "Ontario", "New South Wales"). Required for calculating regional shipping rates, determining state/provincial taxes, and routing deliveries correctly. The format is the full name rather than abbreviated code. Returns `undefined` when not provided or not applicable (some countries don't have province/state divisions). Commonly used for shipping rate calculations, tax jurisdiction determination, or displaying complete addresses.
   */
  province?: string;
  /**
   * The country name for the address in English (for example, "United States", "Canada", "United Kingdom"). Required for international shipping, determining country-specific tax rules, and customs documentation. The full country name is used rather than an abbreviated code. Returns `undefined` when not provided. Commonly used for shipping calculations, tax compliance, customs forms, or country-based address validation.
   */
  country?: string;
  /**
   * The postal code or ZIP code for the address (for example, "90210", "M5V 3A8", "SW1A 1AA"). Format varies by country—US uses 5 or 9-digit ZIP codes, Canada uses alphanumeric postal codes, UK uses alphanumeric postcodes. Required for accurate shipping rate calculations, address verification, and location-based services. Returns `undefined` when not provided. Commonly used for shipping rate lookup, address validation, geographic sorting, or carrier integration.
   */
  zip?: string;
  /**
   * A customer-defined label or nickname for this address to make it easily identifiable (for example, "Home", "Work", "Main Office", "Warehouse"). This friendly name helps distinguish between multiple saved addresses for the same customer. Returns `undefined` when no custom name is assigned. Commonly used for displaying address selection lists ("Ship to: Home"), organizing customer addresses, or showing address nicknames in dropdowns.
   */
  name?: string;
  /**
   * The standardized province or state code (for example, "CA" for California, "ON" for Ontario, "NSW" for New South Wales). This is typically a 2-3 character abbreviation that complements the full `province` name. Codes follow regional standards and enable programmatic province/state matching. Returns `undefined` when not applicable or not provided. Commonly used for precise regional identification in shipping APIs, automated tax calculations, address validation services, or integrating with carriers that require standardized codes.
   */
  provinceCode?: string;
  /**
   * The standardized [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code (for example, `"US"` for United States, `"CA"` for Canada, `"GB"` for United Kingdom). This is a two-letter code that precisely identifies the country in a machine-readable format. Complements the full `country` name and is required by many shipping carriers and tax services. Returns `undefined` when not provided. Commonly used for precise country identification in shipping operations, international tax calculations, address validation, customs documentation, or carrier API integration.
   */
  countryCode?: CountryCode;
}
