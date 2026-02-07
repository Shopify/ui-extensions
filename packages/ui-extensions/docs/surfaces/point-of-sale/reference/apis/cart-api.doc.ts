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
      title: 'Properties',
      description:
        'The `CartApi` object provides access to cart management functionality and real-time cart state monitoring. Access these properties through `shopify.cart` to interact with the current POS cart.',
      type: 'CartApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
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
      sectionContent: `
Cart operations may fail due to business rules, inventory constraints, oversell protection, or validation errors—always implement appropriate error handling.
`,
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
          'Add a custom item to the cart with manual pricing and details. This example demonstrates using `shopify.cart.addCustomSale()` to create custom line items for services, fees, or items not in the product catalog. This provides flexibility for unique sales scenarios.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a new address to the customer',
          'add-address',
        ),
        description:
          'Create a new address for the customer associated with the cart. This example demonstrates using `shopify.cart.addAddress()` to add shipping or billing addresses to customer profiles. This simplifies future purchases and enables multiple delivery locations.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a product to the cart',
          'add-line-item',
        ),
        description:
          'Add a product variant to the cart with specified quantity and optional properties. This example shows how to use `shopify.cart.addLineItem()` to add catalog items to the cart with custom attributes. This enables standard product sales with additional customization.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a subscription selling plan to a line item',
          'add-line-item-selling-plan',
        ),
        description:
          'Associate a subscription or selling plan with a line item for recurring purchases. This example shows how to use `shopify.cart.addLineItemSellingPlan()` to add selling plans to items. This enables subscription-based sales and recurring revenue models.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to a line item',
          'add-line-item-properties',
        ),
        description:
          'Attach custom metadata to a specific line item for additional product information. This example shows how to use `shopify.cart.addLineItemProperties()` to add key-value properties to individual items. This enables customization like engraving text, gift messages, or special instructions.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to the cart',
          'add-cart-properties',
        ),
        description:
          'Attach custom metadata to the cart for additional order information. This example shows how to use `shopify.cart.addCartProperties()` to add key-value properties that persist through checkout. This is useful for tracking order sources, preferences, or workflow data.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add properties to multiple line items at once',
          'bulk-add-line-item-properties',
        ),
        description:
          'Attach custom metadata to multiple line items efficiently in a single operation. This example demonstrates using `shopify.cart.bulkAddLineItemProperties()` to add properties to several items simultaneously. This improves performance for batch customization operations.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a cart-level discount',
          'apply-cart-discount',
        ),
        description:
          'Apply a custom discount to the entire cart using a fixed amount or percentage. This example shows how to use `shopify.cart.applyCartDiscount()` to add order-level discounts with custom reasons. This is useful for promotions, loyalty rewards, or staff discounts.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a discount code to the cart',
          'apply-cart-code-discount',
        ),
        description:
          'Apply a discount code to the cart for automatic discount validation and application. This example demonstrates using `shopify.cart.applyCodeDiscount()` to add discount codes that are validated against Shopify discount rules. This enables promotional code redemption with automatic validation.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a discount to a line item',
          'set-line-item-discount',
        ),
        description:
          'Apply a custom discount to a specific line item in the cart. This example demonstrates using `shopify.cart.setLineItemDiscount()` to add item-level discounts with custom reasons. This is useful for selective price adjustments or item-specific promotions.',
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
          'Apply discounts to multiple line items efficiently in a single operation. This example shows how to use `shopify.cart.bulkSetLineItemDiscounts()` to add discounts to several items simultaneously. This improves performance for bulk pricing adjustments or category-wide promotions.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Associate a customer with the cart',
          'set-customer',
        ),
        description:
          'Assign a customer to the current cart for personalized pricing and order history. This example demonstrates using `shopify.cart.setCustomer()` to link a customer by ID. This enables customer-specific discounts, loyalty programs, and order tracking.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Attribute a staff member to a line item',
          'set-attributed-staff-to-line-item',
        ),
        description:
          'Associate a specific line item with a staff member for item-level commission tracking. This example shows how to use `shopify.cart.setAttributedStaffToLineItem()` to assign staff members to individual items. This enables granular sales attribution and performance analysis.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Attribute a staff member to the cart',
          'set-attributed-staff',
        ),
        description:
          'Attribute the cart to a staff member for commission tracking and sales attribution. This example demonstrates using `shopify.cart.setAttributedStaff()` to assign staff members to sales. This enables performance tracking and commission calculations.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Check if the cart is editable',
          'check-cart-editable',
        ),
        description:
          'Verify whether the cart is in an editable state before attempting modifications. This example demonstrates using `shopify.cart.editable` to check if the cart can accept changes. By disabling actions when the cart is locked or in an immutable state, you can prevent errors and improve the user experience.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Clear all items from the cart',
          'clear-cart',
        ),
        description:
          'Remove all line items and reset the cart to an empty state. This example shows how to use `shopify.cart.clear()` to completely clear the cart. This is useful for starting fresh transactions or implementing cart reset functionality.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Delete a customer address',
          'delete-address',
        ),
        description:
          'Remove a specific address from the customer profile using its unique identifier. This example shows how to use `shopify.cart.deleteAddress()` to delete outdated or incorrect addresses. This helps maintain clean customer records.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a discount from a line item',
          'remove-line-item-discount',
        ),
        description:
          'Remove a previously applied discount from a specific line item. This example demonstrates using `shopify.cart.removeLineItemDiscount()` to clear item-level discounts. This is useful for discount corrections or when promotional conditions are no longer met.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove all discounts from cart and line items',
          'remove-all-discounts',
        ),
        description:
          'Clear all discounts applied to both the cart and individual line items in a single operation. This example shows how to use `shopify.cart.removeAllDiscounts()` to reset pricing to base values. This is useful for recalculating totals or canceling promotional offers.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove an item from the cart',
          'remove-line-item',
        ),
        description:
          'Remove a specific line item from the cart using its unique identifier. This example demonstrates using `shopify.cart.removeLineItem()` to delete items. This is useful for implementing remove buttons, cart cleanup, or conditional item removal logic.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from a line item',
          'remove-line-item-properties',
        ),
        description:
          'Delete specific custom properties from a line item by their keys. This example shows how to use `shopify.cart.removeLineItemProperties()` to clear item metadata. This is useful for removing temporary customization data or outdated property values.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from the cart',
          'remove-cart-properties',
        ),
        description:
          'Delete specific custom properties from the cart by their keys. This example demonstrates using `shopify.cart.removeCartProperties()` to clear metadata. This is useful for cleaning up temporary data or removing properties that are no longer needed.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a subscription plan from a line item',
          'remove-line-item-selling-plan',
        ),
        description:
          'Remove the selling plan from a line item to convert it back to a one-time purchase. This example demonstrates using `shopify.cart.removeLineItemSellingPlan()` to clear subscription plans. This is useful when customers change their mind about recurring orders.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove the customer from the cart',
          'remove-customer',
        ),
        description:
          'Disassociate the customer from the current cart for anonymous transactions. This example shows how to use `shopify.cart.removeCustomer()` to clear customer information. This reverts to guest checkout pricing and removes customer-specific data from the cart.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Subscribe to real-time cart changes',
          'subscribe',
        ),
        description:
          'Monitor cart state changes in real time using the subscribe method. This example shows how to use `shopify.cart.subscribe()` to receive updates whenever the cart changes. This enables reactive UI updates, validation logic, or analytics tracking based on cart modifications.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Update the default address for the customer',
          'update-default-address',
        ),
        description:
          'Designate a specific address as the default for the customer. This example demonstrates using `shopify.cart.updateDefaultAddress()` to set the primary shipping or billing address. This simplifies the checkout process for future transactions.',
      },
    ],
  },
};

export default data;
