import {CountryCode} from './country-code';
import {TaxLine} from './tax-line';
import {DiscountAllocation} from './discount-allocation';

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
   * The unique identifier of the selling plan. Commonly used for selling plan operations and management.
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
   * The unit price of a single unit of this line item as a numeric value in the store's currency. This is the price per item before any line item discounts are applied (though cart-level discounts affecting the subtotal are already factored in). For example, if selling a product for $19.99 each, this value is `19.99`. Returns `undefined` for custom sales where no price is set or when price information isn't available. The total line item cost before discounts is calculated as `price × quantity`. Commonly used for displaying item prices, calculating line totals, showing price comparisons, or implementing pricing-based business logic.
   */
  price?: number;
  /**
   * The number of units of this item in the cart. This is always a positive integer (minimum 1) representing how many of this specific item/variant the customer is purchasing. When quantity changes (increased or decreased), the same line item UUID is updated rather than creating a new line item. Quantities of 0 aren't allowed—removing the last unit removes the entire line item from the cart. Commonly used for quantity displays in cart UI, calculating line totals (`price × quantity`), inventory availability checks, or quantity-based business logic (bulk pricing, quantity limits).
   */
  quantity: number;
  /**
   * The customer-facing display name for this line item. For product-based line items, this is typically the product or variant title (for example, "Blue Cotton T-Shirt - Large"). For custom sales, this is the custom title entered by the merchant. Returns `undefined` for line items without titles, though most line items have titles for display purposes. This is the primary text shown to customers in cart views, receipts, and order confirmations. Commonly used for cart displays, receipt generation, order summaries, or search/filter functionality within the cart.
   */
  title?: string;
  /**
   * The unique numeric identifier for the product variant this line item represents. This ID links to a specific variant in the Shopify catalog with particular options (size, color, material). Returns `undefined` for custom sale line items that aren't linked to catalog products, or for gift cards and other non-product line items. When present, this ID can be used to fetch complete variant details (inventory, price, SKU, barcode, images) using the Product Search API. Commonly used for variant-specific operations (inventory checks, variant detail lookups), determining if the line item is a catalog product, or linking to variant records in external systems.
   */
  variantId?: number;
  /**
   * The unique numeric identifier for the product this line item represents. This ID links to the parent product in the Shopify catalog. Returns `undefined` for custom sale line items that aren't linked to catalog products, or for gift cards and other non-product line items. When present, this ID can be used to fetch complete product information (all variants, images, description, tags) using the Product Search API. A line item has both `productId` and `variantId` when it's a catalog product—the product ID identifies the product family while the variant ID identifies the specific configuration. Commonly used for product-specific operations (loading product details, checking product-level settings), grouping line items by product, or linking to product records in external systems.
   */
  productId?: number;
  /**
   * An array of all discounts applied specifically to this line item (not cart-level discounts). Each discount object contains the amount, type, and description. The array is empty when no line item-specific discounts are applied. Multiple discounts can apply to a single line item when discount stacking is enabled. The sum of discount amounts reduces the line item's contribution to the cart total. Commonly used for displaying line item savings ("You save $5.00"), showing discount breakdowns in itemized views, calculating effective prices after discounts, or implementing discount-aware business logic.
   */
  discounts: Discount[];
  /**
   * An array of discount allocation objects providing detailed breakdown of how each discount amount is calculated and distributed across this line item. This includes information about discount priority, combination rules, and exact allocated amounts. Returns `undefined` when allocation tracking isn't available or when no discounts are applied. Discount allocations provide enhanced visibility into complex discount scenarios where multiple discounts interact, combine, or have caps. Commonly used for advanced discount reporting, audit trails showing how final discounts were calculated, compliance reporting, or implementing discount allocation displays.
   */
  discountAllocations?: DiscountAllocation[];
  /**
   * Whether this line item is subject to tax calculations. When `true`, taxes are calculated and applied to this line item based on the product's tax settings, location tax rules, and customer tax exemptions. When `false`, this line item is tax-exempt and contributes no tax to the cart total (though it still counts toward the subtotal). Tax exemption can occur for tax-free products (food in some regions), non-profit sales, or products with explicit tax exemption settings. Commonly used for tax calculations, determining if tax lines should be shown for this item, compliance reporting, or implementing tax-aware pricing displays.
   */
  taxable: boolean;
  /**
   * An array of individual tax lines applied to this line item, showing the detailed tax breakdown by jurisdiction and tax type. Each tax line represents a specific tax (for example, state tax, county tax, city tax, VAT) with its own rate and calculated amount. Multiple tax lines exist when the item is subject to multiple tax jurisdictions or tax types. The sum of all tax line amounts equals the total tax for this line item. Empty array when the line item is tax-exempt (`taxable: false`) or when detailed tax breakdown isn't available. Commonly used for displaying itemized tax information, tax reporting and compliance, receipt generation with tax details, or implementing tax-aware business logic.
   */
  taxLines: TaxLine[];
  /**
   * The Stock Keeping Unit (SKU) identifier for this line item as configured in the product catalog. SKUs are merchant-defined alphanumeric codes used for inventory tracking, fulfillment, and product identification (for example, "TSHIRT-BLU-LG", "12345-A"). Returns `undefined` when no SKU is configured for the product variant, which is common for products without inventory tracking or custom sales. The SKU is unique within the merchant's catalog and is often used with barcode scanners or inventory management systems. Commonly used for inventory tracking, displaying product codes on receipts, integrating with warehouse management systems, or matching products with external SKU-based systems.
   */
  sku?: string;
  /**
   * The vendor or brand name for this line item as configured in the product catalog (for example, "Nike", "Acme Corp", "House Brand"). This indicates who manufactures or supplies the product. Returns `undefined` when no vendor is set for the product, which is common for products where vendor tracking isn't used. Vendors are merchant-defined and not standardized. Commonly used for vendor-specific displays in cart or receipts, filtering or grouping products by vendor, implementing vendor-based business logic (special handling for certain suppliers), or reporting sales by vendor.
   */
  vendor?: string;
  /**
   * The custom key-value properties attached to this line item. Properties are merchant-defined metadata used to store additional information about the line item beyond standard fields. Keys and values are both strings. The object is empty `{}` when no properties are set. Properties persist through checkout and appear on orders. Common uses include customization details (engraving text, color preferences), configuration options (gift wrapping, special instructions), integration data (external IDs, tracking codes), or workflow metadata (fulfillment notes, custom fields). Properties are set using the Cart API's `addLineItemProperties` method and can be displayed in cart UI, included on receipts, or used for fulfillment instructions.
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
   * Whether this line item's product requires a selling plan (subscription/recurring purchase plan) to be purchased. When `true`, the product can't be purchased as a one-time item—a selling plan must be selected before checkout can complete. When `false` or `undefined`, the product can be purchased without a subscription. This is set at the product level in the Shopify catalog. Returns `undefined` when selling plan information isn't available or the product doesn't have selling plan configuration. Commonly used for enforcing selling plan selection in UI, showing/hiding selling plan selectors, validating cart before checkout, or implementing subscription-only product workflows.
   */
  requiresSellingPlan?: boolean;
  /**
   * Whether this line item's product has selling plan groups (subscription options) available for customer selection. When `true`, the product offers subscription/recurring purchase options that customers can choose from, though selection may be optional unless `requiresSellingPlan` is also `true`. When `false` or `undefined`, the product doesn't offer subscription options. Returns `undefined` when selling plan information isn't available. Commonly used for determining whether to show subscription option UI, enabling subscription toggles, or implementing subscription-eligible product workflows.
   */
  hasSellingPlanGroups?: boolean;
  /**
   * The currently selected selling plan (subscription/recurring purchase plan) applied to this line item. Contains the selling plan details including unique identifier (`id`), display name (`name`), and delivery schedule information (frequency, interval). Returns `undefined` when no selling plan is selected, which occurs for one-time purchases or when the product doesn't support subscriptions. Selling plans enable recurring deliveries at specified intervals (for example, every 2 weeks, monthly). Commonly used for displaying subscription details in cart ("Delivers every 30 days"), showing subscription pricing, managing recurring purchase configuration, calculating subscription discounts, or implementing subscription modification workflows.
   */
  sellingPlan?: SellingPlan;
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
   * The customer-facing display name for this bundle component product (for example, "Wireless Mouse", "USB-C Cable"). This is the product or variant title from the Shopify catalog. Returns `undefined` for components without titles. Commonly used for displaying the bundle contents list, showing what's included in the bundle on receipts, or itemizing bundle components in the cart UI.
   */
  title?: string;
  /**
   * The number of units of this component product included in the bundle. This is the quantity per bundle unit, not the total quantity in cart. For example, if a bundle includes 2 pens and the customer buys 3 bundles, this value is `2` (pens per bundle) while the actual quantity leaving inventory would be 6 (2 pens × 3 bundles). Always a positive integer. Commonly used for displaying component quantities ("2× Wireless Mouse"), calculating total component quantities when considering the parent line item quantity, or managing component inventory deductions.
   */
  quantity: number;
  /**
   * The unit price of a single unit of this component product as configured in the bundle. This is the price per component unit, which may differ from the component's regular standalone price. Returns `undefined` when price information isn't specified for the component. Component prices are typically used for bundle pricing breakdowns or tax calculations. Commonly used for showing itemized bundle pricing, calculating component-level costs, or displaying price breakdowns for transparent bundle pricing.
   */
  price?: number;
  /**
   * Whether this component product is subject to tax calculations. When `true`, taxes are calculated for this component based on its price, quantity, and applicable tax rules. When `false`, this component is tax-exempt. Tax treatment can vary by component within a bundle—for example, a bundle containing taxable apparel and tax-exempt food items would have different taxability for each component. Commonly used for calculating accurate bundle taxes, compliance reporting, or implementing component-specific tax logic.
   */
  taxable: boolean;
  /**
   * An array of tax lines applied specifically to this bundle component, showing the tax breakdown by jurisdiction and type. Each tax line has its own rate and calculated amount. The tax is calculated based on this component's price, quantity, and taxability. Empty array when the component is tax-exempt. Bundle component tax lines contribute to the overall line item tax total. Commonly used for detailed bundle tax reporting, showing per-component tax in itemized displays, or compliance documentation.
   */
  taxLines: TaxLine[];
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
 * Represents a selling plan (subscription/recurring purchase plan) associated with a line item. Contains delivery schedule, plan identification, and billing cycle information for subscription products.
 */
export interface SellingPlan {
  /**
   * The unique numeric identifier for the selling plan in Shopify's system. This ID is consistent across all Shopify systems and links to the selling plan configuration in the merchant's catalog. The ID can be used to fetch full selling plan details using GraphQL queries or match against available selling plans for a product. Commonly used for selling plan operations (adding/removing selling plans from line items), matching user selections to plan configurations, tracking which plan was selected, or integrating with subscription management systems.
   */
  id: number;
  /**
   * The customer-facing display name for the selling plan (for example, "Deliver every 30 days", "Subscribe and save 10%", "Monthly subscription"). This name is shown to customers in the cart, checkout, and subscription management interfaces to describe the recurring purchase option. The name is configured by the merchant in the Shopify admin. Commonly used for displaying subscription plan options to customers, showing the selected plan in cart summaries, including plan details on receipts, or describing the subscription in customer communications.
   */
  name: string;
  /**
   * A unique fingerprint string identifying this specific selling plan selection within the current cart session. This fingerprint is generated and provided by POS when a selling plan is applied to a line item. The fingerprint is session-specific and not persistent across different carts or transactions. Returns `undefined` during refund/exchange operations (where no new subscription is being created) or when fingerprint generation isn't applicable. Not available in all contexts. Commonly used internally by POS for selling plan tracking, validation, and ensuring plan consistency during the checkout process.
   */
  digest?: string;
  /**
   * The billing and delivery interval unit for the selling plan's recurring schedule. Indicates how often the subscription recurs and deliveries are made (for example, `'DAY'` for daily, `'WEEK'` for weekly, `'MONTH'` for monthly, `'YEAR'` for yearly). This works together with `deliveryIntervalCount` to define the complete schedule—for example, `deliveryInterval: 'MONTH'` with `deliveryIntervalCount: 2` means "every 2 months". Returns `undefined` when interval information isn't available or not applicable. Commonly used for displaying delivery frequency to customers, calculating next delivery dates, or showing subscription schedules in readable format.
   */
  deliveryInterval?: string;
  /**
   * The numeric multiplier for the billing and delivery interval, defining how many interval units pass between each delivery. Works together with `deliveryInterval` to create the complete schedule. For example, `deliveryIntervalCount: 2` with `deliveryInterval: 'WEEK'` means "every 2 weeks", while `deliveryIntervalCount: 3` with `deliveryInterval: 'MONTH'` means "every 3 months". A value of `1` means every single interval (every day, every week, every month). Always a positive integer when present. Returns `undefined` when count information isn't available or not applicable. Commonly used for displaying complete delivery frequency to customers (combining with interval to show "Every 2 weeks"), calculating next delivery dates, or formatting subscription schedules for human readability.
   */
  deliveryIntervalCount?: number;
}

/**
 * Represents a discount applied to a cart or transaction, including amount and description.
 */
export interface Discount {
  /**
   * The monetary amount of the discount as a numeric value. For percentage discounts, this represents the percentage value (for example, `10` for 10% off). For fixed amount discounts, this represents the absolute currency amount to deduct (for example, `5.00` for $5 off). The interpretation depends on the discount `type`.
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
   * The discount type identifier indicating the discount category or calculation method (for example, `"Percentage"`, `"FixedAmount"`, `"Code"`). This determines how the discount `amount` is interpreted and applied. Returns `undefined` when type information isn't specified.
   */
  type?: string;
}

/**
 * Specifies the parameters for adding custom properties to line items. Properties are key-value pairs used for storing metadata, tracking information, or integration data.
 */
export interface SetLineItemPropertiesInput {
  /**
   * The target line item `UUID` for selling plan assignment. Must match an existing line item in the cart.
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
   * The target line item `UUID` for selling plan assignment. Must match an existing line item in the cart.
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
   * The display title of the line item. Returns `undefined` for items without titles. Commonly used for customer-facing displays and cart item identification.
   */
  title: string;
  /**
   * The [discount type](https://help.shopify.com/en/manual/discounts/discount-types) applied to this line item. Can be either `'Percentage'` for percentage-based discounts or `'FixedAmount'` for fixed monetary amount discounts. This determines how the discount amount is calculated and displayed.
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

/**
 * Specifies the parameters for assigning a selling plan (subscription/recurring purchase plan) to a cart line item. This input is used with the Cart API's `addLineItemSellingPlan` method to configure subscription options for a product.
 */
export interface SetLineItemSellingPlanInput {
  /**
   * The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) of the target line item to which the selling plan should be applied. This must match the `uuid` of an existing line item in the current cart. If the UUID doesn't exist in the cart, the operation will fail. The line item's product must support selling plans—attempting to add a selling plan to a line item whose product doesn't have selling plan groups will result in an error. Commonly used to identify which cart item is being configured with a subscription plan.
   */
  lineItemUuid: string;
  /**
   * The unique numeric identifier for the selling plan to apply to the line item. This must be a valid selling plan ID that's available for the line item's product—arbitrary selling plan IDs. The selling plan must be configured in the merchant's Shopify admin and associated with the product. Invalid selling plan IDs or IDs not associated with the product will cause the operation to fail. Commonly used to specify which subscription option the customer selected (for example, monthly delivery, bi-weekly delivery).
   */
  sellingPlanId: number;
  /**
   * The optional display name for the selling plan (for example, "Deliver every 30 days", "Monthly subscription"). When provided, this name is used immediately for UI display without waiting for server synchronization. When omitted, POS will fetch the selling plan name from the server after cart synchronization completes, which may cause a brief delay before the name appears in the UI. Providing the name improves perceived performance and user experience by showing the plan name immediately. The name should match the actual selling plan name configured in Shopify. Returns `undefined` when not provided. Commonly used to optimize UI performance by avoiding server round-trips for plan name retrieval.
   */
  sellingPlanName?: string;
}
