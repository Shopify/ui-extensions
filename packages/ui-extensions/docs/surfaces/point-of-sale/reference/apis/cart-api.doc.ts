import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForCartApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'cart-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart API',
  description:
    'The Cart API provides comprehensive access to POS cart management functionality, enabling extensions to read cart state, modify line items, apply discounts, manage customer information, and handle cart properties. The API supports both individual and bulk operations for efficient cart manipulation, with [selling plan functionality](/docs/apps/build/purchase-options/subscriptions/selling-plans) and error handling.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartApi',
      description:
        'The `CartApi` object provides access to cart management functionality and real-time cart state monitoring. Access these properties through `shopify.cart` to interact with the current POS cart.',
      type: 'CartApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle cart state reactively:** Use the signal-based interface to automatically update your extension UI when cart changes occur.\n' +
        '- **Validate operations before execution:** Check cart editability and validate input data before performing cart operations to prevent errors.\n' +
        '- **Use bulk operations for efficiency:** When performing multiple related operations, use bulk methods like `bulkCartUpdate`, `bulkSetLineItemDiscounts`, and `bulkAddLineItemProperties` for better performance and reduced API calls.\n' +
        '- **Handle errors gracefully:** Implement proper error handling for all cart operations, as they may fail due to inventory constraints, validation errors, oversell protection, or business rule violations.\n' +
        '- **Manage selling plans appropriately:** When working with subscription products, validate selling plan compatibility and handle selling plan requirements.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Cart operations may fail due to business rules, inventory constraints, oversell protection, or validation errors—always implement appropriate error handling.\n' +
        '- Some operations require specific preconditions. For example, customer must be present for address operations and selling plans must be compatible with line items.\n' +
        '- Selling plan operations are only available for products that support selling plans and may have additional validation requirements.',
    },
  ],
  examples: {
    description:
      'Learn how to manage cart contents, apply discounts, handle customer information, and track cart changes in real time.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a custom sale item to the cart',
          'add-custom-sale',
        ),
        description:
          "Create and add a custom sale item that isn't tied to an existing product in your catalog. This example demonstrates using `addCustomSale()` to add a line item with a custom title, quantity, price, and tax settings—useful for services, custom orders, or special charges.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a new address to the customer',
          'add-address',
        ),
        description:
          "Create and add a new address to the customer associated with the cart. This example shows how to use `addAddress()` to add a complete address with street, city, province, name, and country information to the customer's profile for shipping or billing purposes.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a product to the cart',
          'add-line-item',
        ),
        description:
          "Add a product to the cart by specifying its variant ID and quantity. This example uses `addLineItem()` to add a product variant with the specified quantity, returning the new line item's UUID for future reference or manipulation.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a subscription selling plan to a line item',
          'add-line-item-selling-plan',
        ),
        description:
          'Attach a selling plan to a line item to enable subscription or recurring payment options. This example demonstrates using `addLineItemSellingPlan()` to add a subscription plan to a specific product, allowing customers to purchase items on a recurring basis.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to a line item',
          'add-line-item-properties',
        ),
        description:
          "Attach custom key-value metadata to a specific line item using its UUID. This example uses `addLineItemProperties()` to add an 'Engraving' property to a particular line item, useful for storing item-specific customizations, notes, or tracking data.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to multiple line items',
          'bulk-add-line-item-properties',
        ),
        description:
          'Attach different custom properties to multiple line items simultaneously in a single operation. This example shows how to use `bulkAddLineItemProperties()` to efficiently add unique engraving text to multiple items at once, reducing API calls and improving performance.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to the cart',
          'add-cart-properties',
        ),
        description:
          "Attach custom key-value metadata to the cart for tracking, integrations, or additional context. This example uses `addCartProperties()` to add an 'Engraving' property to the cart, which merges with existing properties and overwrites duplicate keys.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a discount code to the cart',
          'apply-cart-code-discount',
        ),
        description:
          "Add a discount to the cart using a discount code. This example shows how to apply the discount code 'SUMMER_2024' using the `addCartCodeDiscount()` method, which validates and applies the code server-side if it's valid and applicable to the current cart.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a discount to a line item',
          'set-line-item-discount',
        ),
        description:
          "Add a discount to an individual line item in the cart using its UUID. This example applies a 10% discount titled 'Summer discount' to a specific line item using the `setLineItemDiscount()` method, allowing you to target discounts at particular products.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a percentage discount to the cart',
          'apply-cart-discount',
        ),
        description:
          "Add a cart-level discount that applies to the total cart value. This example demonstrates applying a 10% discount titled 'Summer discount' to the cart using the `applyCartDiscount()` method with the `Percentage` discount type.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply different discounts to multiple line items',
          'bulk-set-line-item-discounts',
        ),
        description:
          'Add discounts to multiple line items simultaneously using a single operation. This example shows how to use `bulkSetLineItemDiscounts()` to apply different discount types and amounts to multiple items efficiently—one gets a 10% percentage discount while another receives a $15 fixed amount discount.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Associate a customer with the cart',
          'set-customer',
        ),
        description:
          'Associate a customer with the cart using their ID to enable customer-specific features. This example shows how to use `setCustomer()` to associate a customer, which enables personalized pricing, applicable discounts, loyalty benefits, and streamlines the checkout process.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Attribute a staff member to a line item',
          'set-attributed-staff-to-line-item',
        ),
        description:
          'Assign a staff member to an individual line item for detailed sales tracking. This example demonstrates using `setAttributedStaffToLineItem()` to track which staff member was responsible for selling a specific item, enabling item-level commission tracking and performance analysis.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Attribute a staff member to the cart',
          'set-attributed-staff',
        ),
        description:
          'Assign a staff member to the cart for sales tracking and commission purposes. This example uses `setAttributedStaff()` with a staff member ID to track who facilitated or managed the sale, useful for performance metrics and incentive calculations.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Check if the cart is editable',
          'check-cart-editable',
        ),
        description:
          'Check whether the cart can be modified before attempting cart operations. This example demonstrates using `cart.editable` to verify editability, preventing errors from operations attempted on locked or finalized carts during payment processing or order completion.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Clear all items from the cart',
          'clear-cart',
        ),
        description:
          'Empty the cart completely, removing all line items, discounts, and properties. This example uses `clearCart()` to reset the cart to its initial empty state while preserving the customer association if present, useful for starting a new transaction or canceling a sale.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Delete a customer address',
          'delete-address',
        ),
        description:
          "Remove an address from the customer's profile using its address ID. This example demonstrates using `deleteAddress()` to permanently delete an address, which is useful for maintaining accurate customer records and removing outdated or incorrect addresses.",
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Monitor cart changes in real time',
          'subscribe',
        ),
        description:
          'Subscribe to cart state changes to build reactive UI components that automatically update when the cart is modified. This example shows how to use the `cart.subscribe()` method to receive real-time notifications whenever line items, discounts, customer information, or other cart properties change.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a discount from a line item',
          'remove-line-item-discount',
        ),
        description:
          'Remove a discount from a specific line item using its UUID. This example demonstrates using `removeLineItemDiscount()` to clear the discount from a particular item, restoring it to its standard price while leaving other cart discounts intact.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a product from the cart',
          'remove-line-item',
        ),
        description:
          'Remove a specific line item from the cart using its UUID. This example demonstrates using `removeLineItem()` to delete an item from the cart, including any associated discounts or properties on that item.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a subscription selling plan from a line item',
          'remove-line-item-selling-plan',
        ),
        description:
          'Remove the selling plan from a line item to convert it back to a one-time purchase. This example shows how to use `removeLineItemSellingPlan()` to clear subscription settings from a specific item while keeping the item in the cart.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove all discounts from the cart and line items',
          'remove-all-discounts',
        ),
        description:
          'Clear all discounts from the cart and its line items in a single operation. This example uses `removeAllDiscounts()` to remove cart-level discounts, line item discounts, and any applied discount codes, resetting pricing to standard amounts.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from a line item',
          'remove-line-item-properties',
        ),
        description:
          'Remove specific custom properties from a line item by providing its UUID and an array of property keys to delete. This example demonstrates using `removeLineItemProperties()` to clear particular metadata fields from an item while keeping other properties intact.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from the cart',
          'remove-cart-properties',
        ),
        description:
          'Remove specific custom properties from the cart by providing an array of property keys. This example shows how to use `removeCartProperties()` to delete particular metadata fields while preserving other cart properties and data.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove the customer from the cart',
          'remove-customer',
        ),
        description:
          'Disassociate the current customer from the cart while preserving cart contents. This example uses `removeCustomer()` to clear customer information, which removes customer-specific pricing and discounts but keeps all line items and other cart data intact.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Update the default address for the customer',
          'update-default-address',
        ),
        description:
          "Set a specific address as the customer's default address using its address ID. This example shows how to use `updateDefaultAddress()` to designate which address should be used by default for shipping or billing in future transactions.",
      },
    ],
  },
};

export default data;
